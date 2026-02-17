# Base Mortgages - Quick Start Guide

## 1️⃣ First Time Setup (5 minutes)

### Install Node.js (if you haven't)
1. Go to https://nodejs.org
2. Download LTS version
3. Install with default settings

### Get the Code Running
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to the project folder:
   ```bash
   cd path/to/base-mortgages
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to: `http://localhost:3000`

✅ You should see your website running!

## 2️⃣ Make Your First Edits

### Update Your Contact Info

1. Open `components/Footer.tsx`
2. Find these lines:
   ```tsx
   <div>📞 <span>0800 000 000</span></div>
   <div>✉️ <span>hello@basemortgages.co.nz</span></div>
   ```
3. Replace with your actual phone and email
4. Save the file
5. Website auto-refreshes with changes!

### Update Calendly Link

1. Search all files for: `https://calendly.com/your-calendly-link`
2. Replace with your actual Calendly URL
3. Files to update:
   - `components/Navigation.tsx`
   - `components/Hero.tsx`
   - `components/CTABanner.tsx`
   - `app/contact/page.tsx`

## 3️⃣ Deploy to Vercel (10 minutes)

### Prerequisites
- GitHub account (free - github.com)
- Vercel account (free - vercel.com)

### Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/base-mortgages.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! Your site is live

3. **Add Your Domain:**
   - In Vercel → Settings → Domains
   - Add `basemortgages.co.nz`
   - Follow DNS instructions

## 4️⃣ Setup Email Forms

### Option A: Resend (Recommended)

1. Create account at resend.com
2. Get API key
3. In Vercel → Settings → Environment Variables:
   ```
   RESEND_API_KEY=your_key_here
   EMAIL_TO=hello@basemortgages.co.nz
   ```
4. Redeploy

### Option B: Web3Forms (Easier)

1. Get free key from web3forms.com
2. Update `app/api/contact/route.ts` to use Web3Forms
3. Redeploy

## 🎉 You're Live!

Your site is now:
- ✅ Deployed on Vercel
- ✅ Fast and SEO-optimized
- ✅ Contact forms working
- ✅ Mobile-responsive
- ✅ Ready for customers

## 📚 Next Steps

1. **Read DEPLOYMENT_GUIDE.md** for full setup details
2. **Add Google Analytics** for traffic tracking
3. **Setup Sanity CMS** for easy content editing
4. **Test everything** on mobile and desktop
5. **Submit sitemap** to Google Search Console

## 🆘 Need Help?

**Common Commands:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

**Issues?**
- Check DEPLOYMENT_GUIDE.md
- Make sure Node.js is installed
- Delete node_modules and run `npm install` again

---

**Questions?** I'm here to help! Just ask.
