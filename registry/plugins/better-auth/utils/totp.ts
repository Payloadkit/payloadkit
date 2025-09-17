import QRCode from 'qrcode'
import { randomBytes } from 'crypto'

export interface TOTPSetupResult {
  secret: string
  qrCode: string
  backupCodes: string[]
}

/**
 * Generate TOTP secret and QR code for user setup
 */
export async function generateTOTPSetup(
  userEmail: string,
  issuer: string = 'PayloadKit App',
  qrSize: number = 200
): Promise<TOTPSetupResult> {
  // Generate a random secret (32 bytes = 256 bits)
  const secret = randomBytes(32).toString('base64url')

  // Create TOTP URI
  const totpUri = `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(userEmail)}?secret=${secret}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA256&digits=6&period=30`

  // Generate QR code
  const qrCode = await QRCode.toDataURL(totpUri, {
    width: qrSize,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
  })

  // Generate backup codes
  const backupCodes = Array.from({ length: 8 }, () =>
    randomBytes(4).toString('hex').toUpperCase()
  )

  return {
    secret,
    qrCode,
    backupCodes,
  }
}

/**
 * Verify TOTP code against secret
 */
export function verifyTOTP(token: string, secret: string, window: number = 1): boolean {
  if (!token || !secret) return false

  const time = Math.floor(Date.now() / 1000 / 30)

  // Check current time and surrounding windows
  for (let i = -window; i <= window; i++) {
    const timeSlice = time + i
    const expectedToken = generateTOTPToken(secret, timeSlice)

    if (token === expectedToken) {
      return true
    }
  }

  return false
}

/**
 * Generate TOTP token for a specific time slice
 */
function generateTOTPToken(secret: string, timeSlice: number): string {
  const { createHmac } = require('crypto')

  // Convert secret from base64url to buffer
  const keyBuffer = Buffer.from(secret, 'base64url')

  // Convert time slice to 8-byte buffer
  const timeBuffer = Buffer.alloc(8)
  timeBuffer.writeUInt32BE(0, 0)
  timeBuffer.writeUInt32BE(timeSlice, 4)

  // Generate HMAC
  const hmac = createHmac('sha256', keyBuffer)
  hmac.update(timeBuffer)
  const hash = hmac.digest()

  // Dynamic truncation
  const offset = hash[hash.length - 1] & 0x0f
  const code =
    ((hash[offset] & 0x7f) << 24) |
    ((hash[offset + 1] & 0xff) << 16) |
    ((hash[offset + 2] & 0xff) << 8) |
    (hash[offset + 3] & 0xff)

  // Return 6-digit code
  return String(code % 1000000).padStart(6, '0')
}

/**
 * Validate backup code format
 */
export function isValidBackupCode(code: string): boolean {
  return /^[A-F0-9]{8}$/.test(code.toUpperCase())
}

/**
 * Generate secure backup codes
 */
export function generateBackupCodes(count: number = 8): string[] {
  return Array.from({ length: count }, () =>
    randomBytes(4).toString('hex').toUpperCase()
  )
}