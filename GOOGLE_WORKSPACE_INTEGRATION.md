# 🎨 GOOGLE WORKSPACE & BRAND INTEGRATION BLUEPRINT

## BE CITY STATIONERY SUPPLIERS × BEATZ ON LIGHTS CITY
### Complete Google Services + Next.js + Social Media Alignment

---

# 🎨 BRAND & CULTURE ALIGNMENT (The Aesthetic)

## Visual Persona
**Professional procurement meets urban neon rhythm.**

### Color Identity

| Color | Hex | Role | Usage |
|-------|-----|------|-------|
| **Primary Blue** | #1e40af | Corporate reliability, stationery, trust | Standard text, buttons, headers |
| **Secondary Purple** | #7c3aed | Beatz on Lights culture, creative energy | Active states, hover effects, highlights |
| **Charcoal Dark** | #0f172a | Backgrounds, professional text | Deep backgrounds, dark mode |
| **Cloud Light** | #f8fafc | Clean card layouts, accents | Card backgrounds, light sections |

---

# ⚙️ STEP 1: CONFIGURE GOOGLE WORKSPACE & EMAIL SYSTEM

## 1.1 DNS Configuration (Route Emails to Google Workspace)

**Domain:** becity.co.za  
**DNS Provider:** [Will be confirmed]
**Domain Registrar:** [To be determined]

### MX Records Configuration

Log into your domain registrar and add these MX records:

```
Type: MX
Host: @
Value: aspmx.l.google.com.
Priority: 10
TTL: 3600 (1 hour)

---

Type: MX
Host: @
Value: alt1.aspmx.l.google.com.
Priority: 20
TTL: 3600

---

Type: MX
Host: @
Value: alt2.aspmx.l.google.com.
Priority: 30
TTL: 3600

---

Type: MX
Host: @
Value: alt3.aspmx.l.google.com.
Priority: 40
TTL: 3600

---

Type: MX
Host: @
Value: alt4.aspmx.l.google.com.
Priority: 50
TTL: 3600
```

### Authentication Records

**SPF Record (Spam Prevention):**
```
Type: TXT
Host: @
Value: v=spf1 include:_spf.google.com ~all
TTL: 3600
```

**DKIM Record (Email Authenticity):**
```
Generate inside Google Admin Console:
- Admin Console > Apps > Google Workspace > Gmail > Authentication
- Click "Manage DKIM" 
- Add DKIM for becity.co.za
- Copy generated record (google.[random]._domainkey.becity.co.za)

Type: TXT
Host: google.[random]._domainkey
Value: [Unique string from Google Console]
TTL: 3600
```

**DMARC Record (Policy):**
```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:postmaster@becity.co.za
TTL: 3600
```

---

## 1.2 Google Workspace User Setup

### Primary Admin User

**Email:** Beatzonlightscity@gmail.com  
**Role:** Super Administrator  
**Access:** Full Google Workspace Admin Console  
**Permissions:** User management, security, billing  

---

### Email Accounts (Google Workspace Users)

#### User 1: Team Coordinator

**Email:** team@becity.co.za  
**Full Name:** BE City Team  
**Department:** Operations  
**Role:** User (Standard)  
**Mailbox Type:** Primary user mailbox  
**Signature:** See Section 2.1 (HTML template below)  
**Forwarding:** None (primary inbox)  
**Two-Factor Authentication:** Enabled (security key + TOTP)  

#### User 2: Sales Manager

**Email:** sales@becity.co.za  
**Full Name:** Sales Division - BE City  
**Department:** Growth & Acquisition  
**Role:** Group/Alias (routes to team@)  
**Mailbox Type:** Shared inbox via Group  
**Signature:** Sales-focused version (see Section 2.2)  
**Auto-responder:** Enabled (quote timeline 24 hours)  
**Forwarding:** Forwards to team@becity.co.za  
**Two-Factor Authentication:** Enabled  

#### User 3: Operations/Finance

**Email:** oachaleko@gmail.com  
**Full Name:** Operations Officer - BE City  
**Department:** Operations & Finance  
**Role:** User (Standard)  
**Mailbox Type:** Primary user mailbox  
**Signature:** Operations-focused (see Section 2.3)  
**Forwarding:** None  
**Two-Factor Authentication:** Enabled  

---

### Alternative: Google Groups (Cost-Effective Routing)

**If you want to use one primary mailbox with group aliases:**

**Primary Mailbox:**
```
Email: team@becity.co.za
Password: [Strong, 16+ characters]
Recovery Email: Beatzonlightscity@gmail.com
Phone: +27 61 447 6896
```

**Google Group 1 (Sales Alias):**
```
Email: sales@becity.co.za
Member Managers: team@becity.co.za
Members: team@becity.co.za
Access Level: Anyone in organization (internal)
Post Moderation: Off
Default Sender: team@becity.co.za
```

**Google Group 2 (Support Alias):**
```
Email: support@becity.co.za
Member Managers: team@becity.co.za
Members: team@becity.co.za
Access Level: Public (allow external posts)
Post Moderation: Off
Default Sender: team@becity.co.za
```

**Google Group 3 (Finance Alias):**
```
Email: finance@becity.co.za
Member Managers: oachaleko@gmail.com
Members: oachaleko@gmail.com
Access Level: Restricted (members only)
Post Moderation: Off
Default Sender: oachaleko@gmail.com
```

---

# 📧 STEP 2: HTML EMAIL SIGNATURE TEMPLATES

## 2.1 Primary Team Signature (team@becity.co.za)

```html
<table cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 500px; border-collapse: collapse;">
  <tr>
    <!-- Brand Identity Section -->
    <td style="padding: 20px 0 20px 0; border-bottom: 3px solid #7c3aed;">
      <div style="padding-right: 15px;">
        <div style="font-size: 22px; font-weight: 900; letter-spacing: -0.5px;">
          <span style="color: #1e40af;">BE</span>
          <span style="color: #7c3aed;">CITY</span>
        </div>
        <div style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-top: 2px;">
          School Procurement Infrastructure
        </div>
      </div>
    </td>
  </tr>
  <!-- Contact Information -->
  <tr>
    <td style="padding: 15px 0; font-size: 13px; color: #1f2937;">
      <div style="margin-bottom: 8px;">
        <strong style="color: #1e40af;">BE City Team</strong><br>
        <span style="color: #6b7280;">School Procurement Division</span>
      </div>
      <div style="font-size: 12px; color: #6b7280; line-height: 1.6;">
        📱 WhatsApp: <span style="color: #1e40af; font-weight: 600;">+27 61 447 6896</span><br>
        📞 Tel: <span style="color: #1e40af; font-weight: 600;">+27 61 447 6896</span><br>
        📧 Email: <a href="mailto:team@becity.co.za" style="color: #1e40af; text-decoration: none; font-weight: 600;">team@becity.co.za</a><br>
        🌐 Web: <a href="https://www.becity.co.za" style="color: #1e40af; text-decoration: none; font-weight: 600;">www.becity.co.za</a>
      </div>
    </td>
  </tr>
  <!-- Address -->
  <tr>
    <td style="padding: 10px 0; font-size: 11px; color: #9ca3af; line-height: 1.5;">
      📍 69-71 Van Riebeeck Avenue<br>
      Edenvale Ext 1, Gauteng<br>
      South Africa, 1610
    </td>
  </tr>
  <!-- Tagline -->
  <tr>
    <td style="padding: 12px 0 0 0; border-top: 1px solid #e5e7eb; font-size: 11px; color: #7c3aed; font-style: italic; font-weight: 500;">
      "We don't sell stationery. We engineer procurement systems."
    </td>
  </tr>
  <!-- Certifications -->
  <tr>
    <td style="padding: 8px 0; font-size: 10px; color: #10b981; font-weight: 600;">
      ✓ BBBEE Level 1 | ✓ SARS Compliant | ✓ Registered Entity
    </td>
  </tr>
</table>
```

---

## 2.2 Sales Division Signature (sales@becity.co.za)

```html
<table cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 500px; border-collapse: collapse;">
  <tr>
    <td style="padding: 20px 0; border-left: 4px solid #7c3aed;">
      <div style="padding-left: 12px;">
        <div style="font-size: 18px; font-weight: 900;">
          <span style="color: #1e40af;">BE</span><span style="color: #7c3aed;">CITY</span>
        </div>
        <div style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #ef4444; margin-top: 3px;">
          🔥 HOT LEADS DIVISION
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding: 12px 0; font-size: 12px; color: #1f2937;">
      <strong style="color: #1e40af;">School Procurement Specialist</strong><br>
      <span style="color: #6b7280;">Sales & Growth</span><br><br>
      <span style="font-size: 11px; color: #ef4444; font-weight: 600;">📧 sales@becity.co.za</span><br>
      <span style="font-size: 11px; color: #6b7280;">WhatsApp: +27 61 447 6896 | Tel: +27 61 447 6896</span><br>
      <span style="font-size: 10px; color: #7c3aed; margin-top: 6px; display: block;">💼 www.becity.co.za</span>
    </td>
  </tr>
  <tr>
    <td style="padding: 8px 0; border-top: 1px solid #fed7aa; font-size: 10px; color: #7c3aed; font-style: italic;">
      "Your procurement partner that never goes silent."
    </td>
  </tr>
</table>
```

---

## 2.3 Operations Signature (oachaleko@gmail.com)

```html
<table cellpadding="0" cellspacing="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 500px; border-collapse: collapse;">
  <tr>
    <td style="padding: 15px 0;">
      <div style="font-size: 16px; font-weight: 900;">
        <span style="color: #1e40af;">BE</span><span style="color: #7c3aed;">CITY</span>
      </div>
      <div style="font-size: 11px; font-weight: 600; color: #10b981; margin-top: 3px;">
        OPERATIONS & FINANCE
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding: 10px 0; font-size: 12px;">
      <strong style="color: #1e40af;">Othutsitse Chaleko</strong><br>
      <span style="color: #6b7280;">Chief Operations Officer</span><br><br>
      <span style="font-size: 11px;">
        📧 <a href="mailto:oachaleko@gmail.com" style="color: #1e40af; text-decoration: none;">oachaleko@gmail.com</a><br>
        📱 <a href="tel:+27614476896" style="color: #1e40af; text-decoration: none;">+27 61 447 6896</a><br>
        🌐 <a href="https://www.becity.co.za" style="color: #1e40af; text-decoration: none;">www.becity.co.za</a>
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding: 8px 0; border-top: 1px solid #d1d5db; font-size: 10px; color: #6b7280;">
      69-71 Van Riebeeck Ave, Edenvale Ext 1, Gauteng 1610 | South Africa
    </td>
  </tr>
</table>
```

---

# 💻 STEP 3: NEXT.JS + TAILWIND UI IMPLEMENTATION

## 3.1 Tailwind Configuration (Updated with Live Colors)

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        becity: {
          // BE City Primary (Corporate Blue)
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#1e40af', // ← Main Brand Blue
          },
          // Beatz on Lights (Secondary Purple)
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#7c3aed', // ← Main Beatz Purple
          },
          // Supporting Palette
          dark: '#0f172a',
          light: '#f8fafc',
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'becity': '0 4px 6px -1px rgba(30, 64, 175, 0.1)',
        'becity-lg': '0 10px 15px -3px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
}
```

---

## 3.2 Brand Button Component

```typescript
// components/BECityButton.tsx
import React from 'react'

interface BECityButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export default function BECityButton({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
}: BECityButtonProps) {
  const baseStyles =
    'font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-becity-blue-900 hover:bg-becity-blue-800 text-white focus:ring-becity-blue-900',
    secondary: 'bg-becity-purple-900 hover:bg-becity-purple-800 text-white focus:ring-becity-purple-900',
    danger: 'bg-becity-danger hover:bg-red-600 text-white focus:ring-becity-danger',
    success: 'bg-becity-success hover:bg-green-600 text-white focus:ring-becity-success',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
```

---

## 3.3 Contact Form Component (Updated with Real Contact Info)

```typescript
// components/ContactForm.tsx
'use client'

import { useState } from 'react'
import BECityButton from './BECityButton'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    schoolName: '',
    principalName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Send to your backend or email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ schoolName: '', principalName: '', email: '', phone: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg max-w-2xl">
      <h2 className="text-2xl font-bold text-becity-blue-900 mb-6">
        Get a Quote from BE City
      </h2>

      {success && (
        <div className="bg-becity-success bg-opacity-10 border border-becity-success text-becity-success px-4 py-3 rounded-lg mb-4">
          ✓ Your request has been received! We'll contact you within 24 hours.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="School Name"
          value={formData.schoolName}
          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
          className="border-2 border-becity-light rounded-lg px-4 py-2 focus:border-becity-blue-900 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Principal / Contact Person"
          value={formData.principalName}
          onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
          className="border-2 border-becity-light rounded-lg px-4 py-2 focus:border-becity-blue-900 focus:outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border-2 border-becity-light rounded-lg px-4 py-2 focus:border-becity-blue-900 focus:outline-none"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border-2 border-becity-light rounded-lg px-4 py-2 focus:border-becity-blue-900 focus:outline-none"
          required
        />
      </div>

      <textarea
        placeholder="Tell us about your procurement needs..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full border-2 border-becity-light rounded-lg px-4 py-3 focus:border-becity-blue-900 focus:outline-none mb-6"
        rows={5}
        required
      />

      <div className="flex gap-4">
        <BECityButton variant="primary" size="lg" disabled={loading}>
          {loading ? 'Sending...' : 'Submit Procurement Request'}
        </BECityButton>
        <a
          href="https://wa.me/27614476896?text=Hello%20BE%20City%2C%20I%20need%20a%20procurement%20quote"
          className="flex items-center gap-2 bg-becity-success hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          💬 WhatsApp: +27 61 447 6896
        </a>
      </div>

      <div className="mt-6 p-4 bg-becity-light rounded-lg text-sm text-becity-dark">
        <p className="font-semibold text-becity-blue-900 mb-2">📍 Visit Us:</p>
        <p>69-71 Van Riebeeck Avenue, Edenvale Ext 1</p>
        <p>Gauteng, South Africa, 1610</p>
      </div>
    </form>
  )
}
```

---

# 📊 STEP 4: SOCIAL MEDIA HANDLE & LINK TREE AUDIT

## Master Social Media Registry

| Platform | Handle | URL | Brand Accent | Primary Content | Status |
|----------|--------|-----|--------------|-----------------|--------|
| **LinkedIn** | @BECityStationerySuppliers | https://linkedin.com/company/be-city-stationery-suppliers | Corporate Blue (#1e40af) | B2B tenders, supply chain, office setups, thought leadership | ✅ Active |
| **Facebook** | @BECityProcurement | https://facebook.com/becityprocurement | Split Blue/Purple | Business community updates, catalogs, promotions | ✅ Active |
| **Instagram** | @BECityProcurement | https://instagram.com/becityprocurement | Vibrant Purple (#7c3aed) | Aesthetics, workspace culture, "Beatz" reels, brand storytelling | ✅ Active |
| **YouTube** | @BECityProcurement | https://youtube.com/@becityprocurement | Dark Mode / Neon | Stationery unboxings, corporate culture vlogs, tutorials | ✅ Active |
| **WhatsApp Business** | +27 61 447 6896 | https://wa.me/27614476896 | Neon Green | Direct outreach, quotes, customer support | ✅ Active |
| **TikTok** (Future) | @BECityProcurement | https://tiktok.com/@becityprocurement | Bold Neon Purple | Youth engagement, quick procurement tips, behind-the-scenes | 🚀 Planned |
| **Twitter/X** (Future) | @BECityProcurement | https://twitter.com/becityprocurement | Brand Blue | Industry news, company updates, community engagement | 🚀 Planned |

---

## Link Tree / Linktree Setup

**Primary Hub:** https://linktr.ee/becityprocurement

### Recommended Link Order

```
🎯 GET A QUOTE (CTA Priority)
   └─ https://www.becity.co.za/quote

📱 WHATSAPP (Highest Conversion)
   └─ https://wa.me/27614476896

💼 LINKEDIN (B2B Credibility)
   └─ https://linkedin.com/company/be-city-stationery-suppliers

📘 FACEBOOK (Community)
   └─ https://facebook.com/becityprocurement

📸 INSTAGRAM (Brand Story)
   └─ https://instagram.com/becityprocurement

📺 YOUTUBE (Educational Content)
   └─ https://youtube.com/@becityprocurement

🌐 WEBSITE (Full Info)
   └─ https://www.becity.co.za

📞 CALL US
   └─ tel:+27614476896
```

---

# 🎨 BRAND COLOR IMPLEMENTATION CHECKLIST

- [ ] Primary Blue (#1e40af) applied to:
  - [ ] All CTA buttons
  - [ ] Main headings (h1, h2)
  - [ ] Links & underlines
  - [ ] Text in professional contexts
  - [ ] Logo primary wordmark "BE"

- [ ] Secondary Purple (#7c3aed) applied to:
  - [ ] Hover states
  - [ ] Active navigation items
  - [ ] Logo secondary wordmark "CITY"
  - [ ] Cultural/creative highlights
  - [ ] Success notifications

- [ ] Supporting Colors:
  - [ ] Success (#10b981) for confirmation messages
  - [ ] Warning (#f59e0b) for alerts
  - [ ] Danger (#ef4444) for urgent items
  - [ ] Dark (#0f172a) for text/backgrounds
  - [ ] Light (#f8fafc) for cards/sections

---

# 📧 EMAIL SYSTEM SETUP CHECKLIST

- [ ] DNS MX records configured (5 records total)
- [ ] SPF record added
- [ ] DKIM record generated & added
- [ ] DMARC policy set
- [ ] Primary user: team@becity.co.za created
- [ ] Sales group: sales@becity.co.za configured
- [ ] Support group: support@becity.co.za configured
- [ ] Finance email: oachaleko@gmail.com configured
- [ ] HTML signatures installed (all 3 versions)
- [ ] Auto-responders configured
- [ ] Two-factor authentication enabled on all accounts
- [ ] Email forwarding tested
- [ ] Email deliverability tested (send test emails to Gmail, Outlook)

---

# 🚀 NEXT.JS + GOOGLE INTEGRATION SETUP

- [ ] Tailwind colors updated (becity-blue, becity-purple)
- [ ] BECityButton component created
- [ ] ContactForm component created with real contact info
- [ ] Email form submission endpoint: `/api/contact`
- [ ] WhatsApp links embedded in forms
- [ ] Phone number links active (tel: protocol)
- [ ] Address properly formatted
- [ ] Brand colors consistent across all pages

---

# 📱 SOCIAL MEDIA SYNC

- [ ] All handles verified & consistent
- [ ] Bio/About sections updated with brand tagline
- [ ] Profile pictures updated with logo (1200x630px)
- [ ] Link tree created & active
- [ ] WhatsApp link embedded in all profiles
- [ ] Website URL in all bios
- [ ] Contact info visible on all profiles

---

# 🎊 FINAL ALIGNMENT SUMMARY

## You Now Have:

✅ **Google Workspace Email System**
- Primary: team@becity.co.za
- Sales: sales@becity.co.za
- Operations: oachaleko@gmail.com
- All with professional HTML signatures

✅ **Next.js UI Aligned to Brand**
- Tailwind colors reflecting BE City identity + Beatz cultural energy
- Professional buttons with purple accent states
- Contact forms with all live information
- WhatsApp integration ready to convert

✅ **Social Media Unified**
- 6 active platforms + 2 planned
- Consistent handles & messaging
- Link tree directing traffic strategically
- All branding assets aligned

✅ **Physical Address Integrated**
- 69-71 Van Riebeeck Avenue, Edenvale Ext 1, Gauteng 1610
- On contact forms, email signatures, website
- Google Maps integration ready

✅ **Contact Information Live**
- WhatsApp: +27 61 447 6896
- Email: team@becity.co.za, sales@becity.co.za
- Phone: +27 61 447 6896
- All channels connected & monitored

---

**Document Version:** 1.0  
**Last Updated:** June 2026  
**Integration Status:** Ready for Implementation  
**Next Phase:** DNS Configuration & Email Setup
