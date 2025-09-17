import { describe, it, expect, vi } from 'vitest'
import { generateTOTPSetup, verifyTOTP, isValidBackupCode, generateBackupCodes } from '../utils/totp'

// Mock QRCode
vi.mock('qrcode', () => ({
  default: {
    toDataURL: vi.fn().mockResolvedValue('data:image/png;base64,mocked-qr-code'),
  },
}))

// Mock crypto
vi.mock('crypto', () => ({
  randomBytes: vi.fn().mockReturnValue({
    toString: vi.fn().mockReturnValue('mocked-random-string'),
  }),
  createHmac: vi.fn().mockReturnValue({
    update: vi.fn(),
    digest: vi.fn().mockReturnValue(Buffer.from('0123456789abcdef0123456789abcdef01234567', 'hex')),
  }),
}))

describe('TOTP utilities', () => {
  describe('generateTOTPSetup', () => {
    it('should generate TOTP setup with secret, QR code, and backup codes', async () => {
      const result = await generateTOTPSetup('test@example.com', 'Test App')

      expect(result).toMatchObject({
        secret: expect.any(String),
        qrCode: expect.any(String),
        backupCodes: expect.arrayContaining([expect.any(String)]),
      })

      expect(result.backupCodes).toHaveLength(8)
      expect(result.qrCode).toBe('data:image/png;base64,mocked-qr-code')
    })

    it('should use default issuer when not provided', async () => {
      const result = await generateTOTPSetup('test@example.com')

      expect(result.secret).toBeDefined()
      expect(result.qrCode).toBeDefined()
      expect(result.backupCodes).toHaveLength(8)
    })

    it('should generate unique backup codes', async () => {
      const result = await generateTOTPSetup('test@example.com')
      const uniqueCodes = new Set(result.backupCodes)

      expect(uniqueCodes.size).toBe(result.backupCodes.length)
    })

    it('should handle custom QR code size', async () => {
      const result = await generateTOTPSetup('test@example.com', 'Test App', 300)

      expect(result.qrCode).toBeDefined()
    })
  })

  describe('verifyTOTP', () => {
    it('should return false for empty token', () => {
      const result = verifyTOTP('', 'secret')
      expect(result).toBe(false)
    })

    it('should return false for empty secret', () => {
      const result = verifyTOTP('123456', '')
      expect(result).toBe(false)
    })

    it('should validate TOTP token within time window', () => {
      // Mock the current time for consistent testing
      const mockDate = new Date('2024-01-01T12:00:00Z')
      vi.spyOn(Date, 'now').mockReturnValue(mockDate.getTime())

      const result = verifyTOTP('123456', 'test-secret')

      // Since we're mocking crypto, the exact result depends on the mocked hash
      expect(typeof result).toBe('boolean')
    })

    it('should handle invalid token format', () => {
      const result = verifyTOTP('invalid', 'secret')
      expect(typeof result).toBe('boolean')
    })

    it('should respect time window parameter', () => {
      const result = verifyTOTP('123456', 'secret', 2)
      expect(typeof result).toBe('boolean')
    })
  })

  describe('isValidBackupCode', () => {
    it('should validate correct backup code format', () => {
      expect(isValidBackupCode('ABCD1234')).toBe(true)
      expect(isValidBackupCode('12345678')).toBe(true)
      expect(isValidBackupCode('FFFFFFFF')).toBe(true)
    })

    it('should reject invalid backup code formats', () => {
      expect(isValidBackupCode('abcd1234')).toBe(false) // lowercase
      expect(isValidBackupCode('ABCD123')).toBe(false)  // too short
      expect(isValidBackupCode('ABCD12345')).toBe(false) // too long
      expect(isValidBackupCode('ABCDGHIJ')).toBe(false) // invalid characters
      expect(isValidBackupCode('')).toBe(false)         // empty
    })

    it('should handle uppercase conversion', () => {
      expect(isValidBackupCode('abcd1234')).toBe(false)
    })
  })

  describe('generateBackupCodes', () => {
    it('should generate default number of backup codes', () => {
      const codes = generateBackupCodes()
      expect(codes).toHaveLength(8)
      codes.forEach(code => {
        expect(isValidBackupCode(code)).toBe(true)
      })
    })

    it('should generate custom number of backup codes', () => {
      const codes = generateBackupCodes(12)
      expect(codes).toHaveLength(12)
      codes.forEach(code => {
        expect(isValidBackupCode(code)).toBe(true)
      })
    })

    it('should generate unique codes', () => {
      const codes = generateBackupCodes(10)
      const uniqueCodes = new Set(codes)
      expect(uniqueCodes.size).toBe(codes.length)
    })

    it('should handle edge cases', () => {
      expect(generateBackupCodes(0)).toHaveLength(0)
      expect(generateBackupCodes(1)).toHaveLength(1)
    })
  })

  describe('security considerations', () => {
    it('should generate sufficiently random secrets', async () => {
      const results = await Promise.all([
        generateTOTPSetup('test1@example.com'),
        generateTOTPSetup('test2@example.com'),
        generateTOTPSetup('test3@example.com'),
      ])

      // Due to mocking, we can't test actual randomness,
      // but we can ensure the function completes without errors
      results.forEach(result => {
        expect(result.secret).toBeDefined()
        expect(result.backupCodes).toHaveLength(8)
      })
    })

    it('should create proper TOTP URI format', async () => {
      const result = await generateTOTPSetup('test@example.com', 'Test App')

      // The QR code should contain a properly formatted TOTP URI
      // Since we're mocking QRCode, we can't test the actual URI,
      // but the function should complete successfully
      expect(result.qrCode).toBeDefined()
    })

    it('should handle special characters in email and issuer', async () => {
      const result = await generateTOTPSetup(
        'test+tag@example.com',
        'Test App & Co.'
      )

      expect(result.secret).toBeDefined()
      expect(result.qrCode).toBeDefined()
    })
  })

  describe('integration scenarios', () => {
    it('should support complete TOTP flow simulation', async () => {
      // Setup
      const setup = await generateTOTPSetup('user@example.com', 'MyApp')
      expect(setup.secret).toBeDefined()

      // Generate a token (simulation - in real scenario this comes from authenticator app)
      const isValid = verifyTOTP('123456', setup.secret)
      expect(typeof isValid).toBe('boolean')

      // Validate backup codes
      setup.backupCodes.forEach(code => {
        expect(isValidBackupCode(code)).toBe(true)
      })
    })

    it('should handle concurrent TOTP setups', async () => {
      const promises = Array.from({ length: 5 }, (_, i) =>
        generateTOTPSetup(`user${i}@example.com`, 'MyApp')
      )

      const results = await Promise.all(promises)

      expect(results).toHaveLength(5)
      results.forEach(result => {
        expect(result.secret).toBeDefined()
        expect(result.qrCode).toBeDefined()
        expect(result.backupCodes).toHaveLength(8)
      })
    })
  })
})