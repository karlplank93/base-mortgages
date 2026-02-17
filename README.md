# Base Mortgages Website

A modern, professional mortgage adviser website built with Next.js, featuring a built-in CMS and optimized for conversions.

## 🚀 Features

- **Fast & SEO-Optimized:** Built with Next.js 14 for lightning-fast performance
- **Built-in CMS:** Edit content easily with Sanity.io - no coding required
- **Calendly Integration:** Seamless booking for discovery calls
- **Contact Forms:** Working contact form with email notifications
- **Mobile-First:** Fully responsive design that looks great on all devices
- **Conversion-Focused:** Clear CTAs and user journey optimization
- **FREE Hosting:** Deploy on Vercel at no cost

## 📁 Project Structure

```
base-mortgages/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Navigation.tsx     # Header & nav
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services grid
│   └── ...               # Other sections
├── lib/                   # Utility functions
├── public/               # Static assets
└── DEPLOYMENT_GUIDE.md   # Full setup instructions
```

## 🎯 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Vercel account (free)
- A domain name (basemortgages.co.nz)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

**Full deployment instructions are in `DEPLOYMENT_GUIDE.md`**

Quick version:
1. Push code to GitHub
2. Import to Vercel
3. Connect your domain
4. Configure environment variables
5. You're live!

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Email Service (Resend)
RESEND_API_KEY=your-resend-key
EMAIL_TO=hello@basemortgages.co.nz

# Site Config
NEXT_PUBLIC_SITE_URL=https://basemortgages.co.nz
```

## 📝 Content Management

### Editing Content

All content can be edited through the Sanity CMS:

1. Go to `https://basemortgages.sanity.studio`
2. Log in
3. Edit content visually
4. Publish changes

### Code-Based Edits

Key files to update:
- `components/Hero.tsx` - Homepage hero section
- `components/Services.tsx` - Services you offer
- `components/Reviews.tsx` - Client testimonials
- `components/Footer.tsx` - Contact information

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  navy: '#1b2a6b',
  blue: '#2979ff',
}
```

### Fonts

Currently using:
- **Display:** Playfair Display
- **Body:** DM Sans

Change in `app/layout.tsx`

## 📱 Adding Pages

Create new pages in the `app/` directory:

```
app/
  about/
    page.tsx        → basemortgages.co.nz/about
  services/
    refinancing/
      page.tsx      → basemortgages.co.nz/services/refinancing
```

## 🔗 Integrations

### Calendly
Update the Calendly link in:
- `components/Navigation.tsx`
- `components/Hero.tsx`
- `components/CTABanner.tsx`
- `app/contact/page.tsx`

### Contact Form
Configured in `app/api/contact/route.ts`

Supports:
- Resend (recommended)
- SendGrid
- Web3Forms
- Custom SMTP

## 📊 Performance

Expected metrics:
- **PageSpeed Score:** 95+
- **First Contentful Paint:** <0.8s
- **Time to Interactive:** <1.5s
- **SEO Score:** 100/100

## 🆘 Support

- See `DEPLOYMENT_GUIDE.md` for detailed setup
- Check common issues in the guide
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

## 📄 License

Proprietary - Built for Base Mortgages

---

**Built with ❤️ for Karl at Base Mortgages**
