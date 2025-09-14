# PayloadKit Blank Template

A secure-by-default PayloadCMS template with enterprise-grade authentication and security features built-in.

## 🔥 What's Included

### **🛡️ Security (Registry-Based)**
- **Better Auth UI** - Pre-built authentication pages with shadcn/ui
- **Two-Factor Authentication (2FA)** - Required for all users
- **Audit Logging** - Complete activity tracking with compliance support
- **Rate Limiting** - Brute force protection with configurable rules
- **Security Headers** - CSP, HSTS, X-Frame-Options, and more
- **Session Management** - Secure, auto-refreshing sessions

### **🔐 Authentication Options**
- **Better Auth UI Pages** - Sign-in, Sign-up, Reset password, Verify email
- **Email + Password** - Strong requirements (12+ chars, mixed case, numbers, symbols)
- **OAuth/Social Login** - Google, GitHub, Discord, Microsoft, Apple, Twitter, LinkedIn
- **Magic Links** - Passwordless authentication via email
- **WebAuthn/Passkeys** - Biometric authentication (TouchID, FaceID, Windows Hello)
- **Two-Factor Authentication** - TOTP with backup codes

### **🎨 UI/UX**
- shadcn/ui components
- Dark/Light mode support
- Responsive design
- Accessible components
- Modern authentication flows

### **⚡ Development Experience**
- TypeScript throughout
- Hot reload with Next.js 15
- Organized file structure
- Comprehensive documentation
- Environment-based configuration

---

## 🚀 Quick Start

### **1. Create Project**

```bash
npx create-payloadkit my-app --template blank
cd my-app
```

### **2. Configure Environment**

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```bash
# Required
PAYLOAD_SECRET=your-super-secret-payload-key
DATABASE_URI=postgresql://user:pass@localhost:5432/mydb
BETTER_AUTH_URL=http://localhost:3000

# Optional: Enable advanced features
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
ENABLE_MAGIC_LINKS=true
ENABLE_WEBAUTHN=true
```

### **3. Start Development**

```bash
npm run dev
```

Visit `http://localhost:3000/admin` to access PayloadCMS admin panel.

**🎉 That's it!** Your app now has:
- ✅ **Better Auth UI** pages at `/auth/sign-in`, `/auth/sign-up` 
- ✅ **2FA required** for all users (can be disabled in development)
- ✅ **Enterprise-grade security** from PayloadKit Registry

---

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── auth/[...authView]/  # Dynamic auth pages
│   │   │   └── page.tsx        # Better Auth UI integration
│   │   ├── layout.tsx          # Root layout with AuthProvider
│   │   └── page.tsx            # Home page
│   ├── collections/            # PayloadCMS collections
│   │   ├── Users/              # User collection
│   │   ├── Media/              # Media collection
│   │   └── Pages/              # Pages collection
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   └── payload.config.ts      # PayloadCMS config with registry plugins
├── middleware.ts              # Security middleware from registry
├── .env.example              # Environment template
├── SECURITY.md              # Security documentation
└── README.md               # This file
```

## 🏗️ **Registry-Based Architecture**

This template uses **PayloadKit Registry** for all security features:

```typescript
// All security comes from the registry
import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'
import { auditLoggingPlugin } from '@payloadkit/registry/plugins/audit-logging'
import { rateLimitingPlugin } from '@payloadkit/registry/plugins/rate-limiting'
import { AuthProvider } from '@payloadkit/registry/components/auth/AuthProvider'
import { AuthView } from '@payloadkit/registry/components/auth/AuthView'
```

**Benefits:**
- ✅ **Community maintained** - Security experts contribute improvements
- ✅ **Easy updates** - `payloadkit update` updates all security features  
- ✅ **Modular** - Use only what you need
- ✅ **Consistent** - Same patterns across all PayloadKit projects

---

## 🔐 Security Features

### **Two-Factor Authentication**

- **Enabled by default** for all users
- TOTP-based (Google Authenticator, Authy, etc.)
- Backup codes for account recovery
- QR code setup with manual entry fallback

```typescript
// Force 2FA setup on first login
twoFactor({
  issuer: 'PayloadKit App',
  skipSetupForNewUsers: false, // Enforced!
})
```

### **Audit Logging**

- Tracks all user actions (login, logout, data changes)
- IP address and user agent logging  
- Configurable retention policies
- Export for compliance requirements

```typescript
// All actions automatically logged
{
  user: 'john@example.com',
  action: 'LOGIN_SUCCESS',
  ip: '192.168.1.100',
  timestamp: '2025-01-14T10:30:00Z'
}
```

### **Rate Limiting**

- **Authentication**: 5 attempts / 15 minutes
- **Password Reset**: 3 attempts / hour
- **2FA**: 10 attempts / 15 minutes
- **File Uploads**: 20 uploads / hour

### **Security Headers**

- HTTPS enforcement in production
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options, X-Content-Type-Options
- CSRF protection via PayloadCMS

---

## ⚙️ Configuration

### **Enable OAuth Providers**

Simply add credentials to automatically enable OAuth:

```bash
# .env
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Automatically adds Google OAuth to login flow
```

**Supported providers:**
- Google, GitHub, Discord, Microsoft, Apple, Twitter, LinkedIn

### **Enable Magic Links**

```bash
# .env
ENABLE_MAGIC_LINKS=true

# Email configuration required
EMAIL_SMTP_HOST=smtp.gmail.com
EMAIL_SMTP_USER=your-email@gmail.com
EMAIL_SMTP_PASSWORD=your-app-password
```

### **Enable WebAuthn/Passkeys**

```bash
# .env
ENABLE_WEBAUTHN=true
WEBAUTHN_RP_NAME="My PayloadKit App"
WEBAUTHN_RP_ID=yourdomain.com
```

**Supports:**
- Touch ID/Face ID, Windows Hello, Android biometrics
- Hardware security keys (YubiKey, etc.)

---

## 🎯 Development vs Production

### **Development Mode**

```bash
NODE_ENV=development

# Optional development overrides
SKIP_2FA_ENFORCEMENT=true    # ⚠️ DEV ONLY
SKIP_RATE_LIMITING=true      # ⚠️ DEV ONLY
```

### **Production Deployment**

```bash
NODE_ENV=production

# Required for production
BETTER_AUTH_URL=https://yourdomain.com
PAYLOAD_SECRET=your-strong-32-char-secret
DATABASE_URI=postgresql://...?sslmode=require

# Security
TRUSTED_ORIGINS=https://yourdomain.com
SESSION_SECURE=true
```

---

## 📚 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# PayloadCMS
npm run generate:types     # Generate TypeScript types
npm run generate:importmap # Generate import map

# Quality
npm run lint            # Run ESLint
npm run typecheck      # Run TypeScript checks
```

---

## 🔍 Monitoring & Compliance

### **Audit Logs**

Access via PayloadCMS admin or API:

```typescript
const auditLogs = await payload.find({
  collection: 'audit-logs',
  where: {
    action: 'login_failed',
    createdAt: {
      greater_than: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
  }
})
```

### **Security Metrics**

- Failed login attempts
- 2FA adoption rate  
- OAuth vs password usage
- Rate limit triggers
- Suspicious activity patterns

---

## 🆘 Need Help?

### **Documentation**

- [SECURITY.md](./SECURITY.md) - Complete security guide
- [PayloadCMS Docs](https://payloadcms.com/docs)
- [Better Auth Docs](https://www.better-auth.com/docs)

### **Common Issues**

**2FA Not Working?**
```bash
# Check configuration
npm run payload -- check-2fa-config

# Reset user 2FA (development)
npm run payload -- reset-2fa --user=user@example.com
```

**Rate Limited?**
```bash
# Check current limits
redis-cli KEYS "rate_limit:*"

# Clear limit for IP (development)
redis-cli DEL "rate_limit:192.168.1.100"
```

### **Get Support**

- 🐛 [Bug Reports](https://github.com/payloadcms/payloadkit/issues)
- 💬 [Discord Community](https://discord.gg/payloadcms)
- 📖 [Documentation](https://payloadkit.dev/docs)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using [PayloadCMS](https://payloadcms.com) and [PayloadKit](https://payloadkit.dev)**