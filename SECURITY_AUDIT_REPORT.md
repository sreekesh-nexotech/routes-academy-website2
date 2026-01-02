# Security Audit Report - Routes Academy Website

**Date:** 2026-01-02
**Repository:** routes-academy-website2
**Auditor:** Claude Code Security Scanner

---

## Executive Summary

This security audit found **NO critical vulnerabilities or signs of compromise** in the repository. The codebase appears clean and follows standard Next.js security practices.

**Overall Risk Level:** LOW

---

## 1. Suspicious Files Analysis

### 1.1 Executables and Binary Files
| Status | Finding |
|--------|---------|
| PASS | No executable files found outside node_modules |
| PASS | No binary files (.exe, .dll, .so, .bin) detected |
| PASS | No shell scripts (.sh, .bat, .cmd, .ps1) found |

### 1.2 Hidden Files and Directories
| File | Status | Notes |
|------|--------|-------|
| `.gitignore` (root) | EXPECTED | Standard git configuration |
| `.gitignore` (frontend) | EXPECTED | Standard git configuration |
| `.env` | EXPECTED | Environment variables - properly handled |
| `.DS_Store` | LOW RISK | macOS metadata file - should be in .gitignore |

**Recommendation:** Add `.DS_Store` to `.gitignore` if not already present.

### 1.3 File Permissions
| Status | Finding |
|--------|---------|
| PASS | All files have standard permissions (644 for files, 755 for directories) |
| PASS | No world-writable files detected |

### 1.4 Recently Modified Files (Last 90 days)
| Status | Finding |
|--------|---------|
| PASS | All modified files are legitimate project files (components, configs, assets) |
| PASS | No suspicious last-minute additions detected |

### 1.5 Large Files
| File | Size | Status |
|------|------|--------|
| `public/images/*.svg` | 1-4MB | EXPECTED - Complex vector illustrations |

---

## 2. Package.json & Dependencies Audit

### 2.1 NPM Scripts Analysis
```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

| Status | Finding |
|--------|---------|
| PASS | No suspicious `preinstall` or `postinstall` scripts |
| PASS | No `prepare` or `prepack` scripts with external downloads |
| PASS | All scripts are standard Next.js commands |

### 2.2 Dependencies Review

**Production Dependencies:**
| Package | Version | Status |
|---------|---------|--------|
| next | 15.5.4 | SAFE - Official Vercel framework |
| react | 19.1.0 | SAFE - Official React library |
| react-dom | 19.1.0 | SAFE - Official React library |
| lucide-react | ^0.545.0 | SAFE - Popular icon library |
| postcss | ^8.5.6 | SAFE - Standard CSS processor |
| react-hot-toast | ^2.6.0 | SAFE - Popular notification library |
| swiper | ^12.0.3 | SAFE - Popular carousel library |

**Dev Dependencies:**
| Package | Version | Status |
|---------|---------|--------|
| @eslint/eslintrc | ^3 | SAFE - ESLint configuration |
| @tailwindcss/postcss | ^4.1.14 | SAFE - Tailwind CSS |
| @types/node, react, react-dom | ^19/^20 | SAFE - TypeScript types |
| eslint | ^9 | SAFE - JavaScript linter |
| eslint-config-next | 15.5.4 | SAFE - Next.js ESLint config |
| tailwindcss | ^4.1.14 | SAFE - CSS framework |
| typescript | ^5 | SAFE - TypeScript compiler |

| Status | Finding |
|--------|---------|
| PASS | No typosquatted packages detected |
| PASS | All packages are from well-known publishers |
| PASS | No unusual version pinning |

---

## 3. Build Scripts & External Resources

### 3.1 Next.js Configuration
**File:** `frontend/routes-academy/next.config.ts`

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'routesacademy.b-cdn.net',
      },
    ],
  },
};
```

| Status | Finding |
|--------|---------|
| PASS | Only whitelisted external domain for images |
| PASS | Domain `routesacademy.b-cdn.net` appears legitimate (BunnyCDN) |
| PASS | No suspicious webpack configurations |

### 3.2 External URL References
| Domain | Purpose | Status |
|--------|---------|--------|
| `routesacademy.b-cdn.net` | CDN for images | LEGITIMATE |
| `crm.routesacademy.com` | CRM API endpoint | LEGITIMATE |

| Status | Finding |
|--------|---------|
| PASS | No curl/wget commands in build scripts |
| PASS | No external resource downloads during build |
| PASS | No IP address references in code |

---

## 4. Dockerfile Analysis

**File:** `frontend/routes-academy/dockerfile`

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start", "--", "--hostname", "0.0.0.0"]
```

| Check | Status | Notes |
|-------|--------|-------|
| Base Image | PASS | Official Node.js Alpine image |
| External Downloads | PASS | No curl/wget during build |
| Exposed Ports | INFO | Port 3000 (standard Next.js) |
| Volume Mounts | N/A | No volumes defined |
| Privileged Mode | PASS | No privileged flags |
| User Context | INFO | Runs as root (consider non-root user) |

**Recommendation:** Consider adding a non-root user for production:
```dockerfile
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
USER nextjs
```

---

## 5. Code Security Patterns

### 5.1 Dangerous Code Patterns
| Pattern | Status | Finding |
|---------|--------|---------|
| `eval()` | PASS | Not found |
| `new Function()` | PASS | Not found |
| `child_process` | PASS | Not found |
| `exec()`/`spawn()` | PASS | Not found |
| `dangerouslySetInnerHTML` | PASS | Not found |
| `document.write()` | PASS | Not found |

### 5.2 Cryptomining & Malware Indicators
| Pattern | Status | Finding |
|---------|--------|---------|
| "linuxsys" | PASS | Not found |
| "xmrig" | PASS | Not found |
| "minerd" | PASS | Not found |
| "cryptonight" | PASS | Not found |
| "monero" | PASS | Not found |
| "coinhive" | PASS | Not found |

### 5.3 Base64 Encoding
| Status | Finding |
|--------|---------|
| INFO | Long strings detected in SVG files (legitimate path data) |
| PASS | No suspicious base64-encoded JavaScript |
| PASS | No obfuscated code detected |

### 5.4 Network Requests
| File | Pattern | Status |
|------|---------|--------|
| `src/utils/fetchApi.ts` | `fetch()` to `/api/` endpoints | SAFE - Internal API |
| `src/app/api/create_lead_api/route.ts` | `fetch()` to CRM | SAFE - Legitimate API |

---

## 6. Environment Variables

**File:** `frontend/routes-academy/.env`

```
FRAPPE_BASE_URL=https://crm.routesacademy.com
# CRM_API_KEY=     (commented out)
# CRM_API_SECRET=  (commented out)
```

| Status | Finding |
|--------|---------|
| PASS | No hardcoded secrets in source code |
| PASS | Sensitive credentials are commented out / not committed |
| PASS | Environment variables properly accessed via `process.env` |

---

## 7. Summary of Findings

### Critical Issues: 0
### High Risk Issues: 0
### Medium Risk Issues: 0
### Low Risk / Informational: 3

| # | Category | Severity | Description | Recommendation |
|---|----------|----------|-------------|----------------|
| 1 | Files | INFO | `.DS_Store` file present | Add to `.gitignore` |
| 2 | Docker | INFO | Container runs as root | Add non-root user |
| 3 | Logging | INFO | `console.log` statements in API service | Remove in production |

---

## 8. Conclusion

The Routes Academy website repository shows **no signs of compromise** and follows security best practices:

- No malicious code or backdoors detected
- No cryptocurrency mining scripts
- No suspicious dependencies or install scripts
- No dangerous code patterns (eval, exec, etc.)
- No hardcoded credentials
- Clean Docker configuration
- Legitimate external API connections only

**The repository is safe for deployment.**

---

*Report generated by automated security scanner. Manual review recommended for production deployments.*
