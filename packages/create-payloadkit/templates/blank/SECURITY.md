# PayloadKit Security Guide

This PayloadKit blank template uses **PayloadKit Registry components** for **enterprise-grade security by default**. All security features are modular, reusable, and maintained by the PayloadKit community.

## 🛡️ Security Features Included

### ✅ **Two-Factor Authentication (2FA)**
- **ENABLED BY DEFAULT** - Required for all users
- TOTP-based using authenticator apps
- Backup codes for account recovery
- Configurable grace period for setup

### ✅ **Advanced Authentication**
- Email verification required
- Strong password requirements (12+ chars, mixed case, numbers, symbols)
- Session management with automatic refresh
- Rate limiting on authentication endpoints

### ✅ **Audit Logging**
- Complete activity tracking (login, logout, data changes)
- IP address and user agent logging
- Configurable retention policies
- Export capabilities for compliance

### ✅ **Rate Limiting**
- Brute force protection on login
- Configurable limits per endpoint
- IP-based and user-based limiting
- Automatic blocking of suspicious activity

### ✅ **Security Headers**
- HTTPS enforcement in production
- CSP (Content Security Policy)
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options, X-Content-Type-Options
- CSRF protection

---

## 🚀 Quick Start

### 1. **Basic Setup (2 minutes)**

```bash
# Create your secure PayloadCMS project
npx create-payloadkit my-app --template blank

# Configure required environment variables
cp .env.example .env

# Edit .env with your settings
PAYLOAD_SECRET=your-super-secret-key-here
DATABASE_URI=postgresql://user:pass@localhost:5432/mydb
BETTER_AUTH_URL=http://localhost:3000
```

### 2. **Start Development**

```bash
npm run dev
```

✅ **That's it!** Your app now has:
- ✅ **Better Auth UI** - Pre-built authentication pages  
- ✅ **2FA authentication** - Required by default
- ✅ **Audit logging** - Complete activity tracking
- ✅ **Rate limiting** - Brute force protection
- ✅ **Security headers** - CSP, HSTS, X-Frame-Options

## 🏗️ **Registry-Based Architecture**

All security features are **imported from PayloadKit Registry**:

```typescript
// PayloadCMS configuration uses registry plugins
import { betterAuthSecurityPlugin } from '@payloadkit/registry/plugins/better-auth-security'
import { auditLoggingPlugin } from '@payloadkit/registry/plugins/audit-logging' 
import { rateLimitingPlugin } from '@payloadkit/registry/plugins/rate-limiting'

export default buildConfig({
  plugins: [
    betterAuthSecurityPlugin(),  // 2FA + OAuth + WebAuthn
    auditLoggingPlugin(),        // Compliance logging
    rateLimitingPlugin(),        // Brute force protection
  ]
})
```

**Benefits:**
- ✅ **Easy updates** - `payloadkit update` updates all security features
- ✅ **Community maintained** - Security experts contribute improvements
- ✅ **Modular** - Pick and choose features you need
- ✅ **Consistent** - Same security patterns across all projects

---

## ⚙️ Configuration Options

### **Two-Factor Authentication**

```bash
# .env configuration
TWOFA_ISSUER="My PayloadKit App"

# Development override (⚠️ DEV ONLY)
SKIP_2FA_ENFORCEMENT=false  # Never set to true in production!
```

**Force 2FA Setup:**
- New users must set up 2FA on first login
- Cannot access the application without 2FA
- Backup codes generated automatically

### **Rate Limiting**

```bash
# Authentication endpoints
AUTH_RATE_LIMIT=5               # 5 attempts per 15 minutes
PASSWORD_RESET_RATE_LIMIT=3     # 3 resets per hour
TWOFA_RATE_LIMIT=10            # 10 2FA attempts per 15 minutes

# General API endpoints
GENERAL_RATE_LIMIT=100          # 100 requests per 15 minutes
UPLOAD_RATE_LIMIT=20           # 20 uploads per hour

# Development override
SKIP_RATE_LIMITING=false        # ⚠️ DEV ONLY
```

### **Audit Logging**

```bash
# Basic configuration
ENABLE_AUDIT_LOGGING=true
AUDIT_LOG_LEVEL=info
AUDIT_LOG_RETENTION=true
AUDIT_LOG_RETENTION_DAYS=365

# External logging (optional)
AUDIT_LOG_ENDPOINT=https://your-logging-service.com/webhook
```

**What gets logged:**
- User authentication (login, logout, 2FA)
- Data modifications (create, update, delete)
- Administrative actions
- Failed security attempts
- IP addresses and user agents

---

## 🔐 Advanced Authentication Options

### **OAuth/Social Login**

Add credentials to automatically enable OAuth providers:

```bash
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth  
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Discord OAuth
DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret

# Microsoft OAuth
MICROSOFT_CLIENT_ID=your-microsoft-client-id
MICROSOFT_CLIENT_SECRET=your-microsoft-client-secret

# Apple OAuth
APPLE_CLIENT_ID=your-apple-client-id
APPLE_CLIENT_SECRET=your-apple-client-secret

# Twitter OAuth
TWITTER_CLIENT_ID=your-twitter-client-id
TWITTER_CLIENT_SECRET=your-twitter-client-secret

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

**Setup OAuth Providers:**

1. **Google:** [Google Cloud Console](https://console.developers.google.com/)
2. **GitHub:** [GitHub Developer Settings](https://github.com/settings/applications/new)
3. **Discord:** [Discord Developer Portal](https://discord.com/developers/applications)
4. **Microsoft:** [Azure Portal](https://portal.azure.com/)

### **Magic Links (Passwordless)**

```bash
# Enable magic links
ENABLE_MAGIC_LINKS=true

# Email configuration (required)
EMAIL_SMTP_HOST=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_SMTP_USER=your-email@gmail.com
EMAIL_SMTP_PASSWORD=your-app-password
EMAIL_FROM=noreply@yourdomain.com

# Or use email service
SENDGRID_API_KEY=your-sendgrid-key
# MAILGUN_API_KEY=your-mailgun-key
```

### **WebAuthn/Passkeys**

```bash
# Enable WebAuthn/Passkeys
ENABLE_WEBAUTHN=true
WEBAUTHN_RP_NAME="My PayloadKit App"
WEBAUTHN_RP_ID=yourdomain.com  # Your domain
```

**Supported authenticators:**
- Touch ID/Face ID (macOS/iOS)
- Windows Hello
- Android fingerprint/face unlock
- Hardware security keys (YubiKey, etc.)

### **Username Authentication**

```bash
# Allow username + password (in addition to email)
ENABLE_USERNAME_AUTH=true
```

---

## 🔒 Security Best Practices

### **Environment Variables**

```bash
# Production environment
NODE_ENV=production

# Strong secrets (use tools like `openssl rand -hex 32`)
PAYLOAD_SECRET=your-generated-32-char-secret

# HTTPS enforcement
BETTER_AUTH_URL=https://yourdomain.com

# Secure origins
TRUSTED_ORIGINS=https://yourdomain.com,https://admin.yourdomain.com

# Session security
SESSION_SECURE=true
SESSION_SAME_SITE=strict
```

### **Database Security**

```bash
# Use connection pooling and SSL
DATABASE_URI=postgresql://user:pass@localhost:5432/db?sslmode=require

# Enable database logging in development
DATABASE_LOGGING=false  # Set to true for debugging
```

### **Content Security Policy**

The template includes a strong CSP by default. To customize:

```typescript
// src/security/middleware.ts
contentSecurityPolicy: {
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrc: ["'self'"],  // Remove unsafe-eval for production
    imgSrc: ["'self'", "data:", "https:"],
    // Add your CDN domains as needed
  },
},
```

### **IP Access Control**

```bash
# Restrict access to specific IPs (optional)
IP_WHITELIST=192.168.1.100,10.0.0.1

# Block specific IPs
IP_BLACKLIST=192.168.1.200,suspicious.ip.address
```

---

## 📊 Monitoring & Compliance

### **Audit Log Analysis**

```typescript
// Access audit logs via PayloadCMS API
const auditLogs = await payload.find({
  collection: 'audit-logs',
  where: {
    createdAt: {
      greater_than: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24h
    }
  }
})
```

### **Security Metrics**

Track these metrics for security monitoring:
- Failed login attempts per IP/user
- 2FA setup completion rate
- OAuth vs password usage
- Audit log volume and patterns
- Rate limit triggers

### **Compliance Features**

- **GDPR**: Audit logs track data access/modification
- **SOX**: Complete financial data change tracking  
- **HIPAA**: User activity and data access logging
- **ISO 27001**: Comprehensive security controls

### **External Monitoring**

```bash
# Sentry for error tracking
SENTRY_DSN=https://your-sentry-dsn

# Application monitoring
NEWRELIC_LICENSE_KEY=your-newrelic-key

# Log aggregation
AUDIT_LOG_ENDPOINT=https://your-logging-service.com/webhook
```

---

## 🚨 Security Incident Response

### **Detecting Suspicious Activity**

The template automatically detects:
- Multiple failed login attempts
- Unusual IP addresses
- Bot/scanner traffic
- Directory traversal attempts
- XSS/SQL injection patterns

### **Response Actions**

1. **Automatic**: Rate limiting kicks in
2. **Manual**: Review audit logs
3. **Escalation**: Block IPs, revoke sessions
4. **Recovery**: Password resets, 2FA regeneration

### **Audit Log Investigation**

```bash
# Search for suspicious activity
curl -X POST "http://localhost:3000/api/audit-logs" \
  -H "Content-Type: application/json" \
  -d '{
    "where": {
      "action": "login_failed",
      "ip": "suspicious.ip.address"
    }
  }'
```

---

## 🔧 Development vs Production

### **Development Mode**

```bash
NODE_ENV=development

# Optional development overrides (⚠️ NEVER in production)
SKIP_2FA_ENFORCEMENT=true
SKIP_RATE_LIMITING=true
BETTER_AUTH_DEBUG=true
```

### **Production Checklist**

- [ ] `NODE_ENV=production`
- [ ] Strong `PAYLOAD_SECRET` (32+ characters)
- [ ] HTTPS URLs (`BETTER_AUTH_URL=https://...`)
- [ ] Database SSL enabled
- [ ] Remove development overrides
- [ ] Configure proper CORS origins
- [ ] Set up monitoring (Sentry, etc.)
- [ ] Test 2FA setup flow
- [ ] Verify rate limiting works
- [ ] Check audit logs are being written

---

## 📚 Additional Resources

### **OAuth Provider Setup Guides**

- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Setup](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Discord OAuth Setup](https://discord.com/developers/docs/topics/oauth2)

### **Email Service Integration**

- [SendGrid Setup](https://docs.sendgrid.com/)
- [Mailgun Setup](https://documentation.mailgun.com/)
- [Nodemailer SMTP](https://nodemailer.com/)

### **Security Tools**

- [OWASP Security Guidelines](https://owasp.org/www-project-web-security-testing-guide/)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [PayloadCMS Security](https://payloadcms.com/docs/security)

---

## 🐛 Troubleshooting

### **2FA Issues**

```bash
# Reset 2FA for a user (development)
npm run payload -- reset-2fa --user=user@example.com

# Check 2FA status
npm run payload -- check-2fa --user=user@example.com
```

### **Rate Limiting Issues**

```bash
# Clear rate limit for IP
redis-cli DEL "rate_limit:192.168.1.100"

# Check current limits
redis-cli KEYS "rate_limit:*"
```

### **Audit Log Issues**

```bash
# Check audit log configuration
npm run payload -- check-audit-config

# Test audit logging
npm run payload -- test-audit-log
```

---

**Need help?** Open an issue on the [PayloadKit GitHub repository](https://github.com/payloadcms/payloadkit) with the `security` label.