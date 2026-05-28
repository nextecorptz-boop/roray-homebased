# Deployment Instructions - Roray Homebased

This project is a production-grade Next.js application optimized for high performance and SEO.

## Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login and Link:**
   ```bash
   vercel login
   ```

3. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## Option 2: Vercel Dashboard

1. **Push to GitHub:**
   - Initialize git: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial production build"`
   - Create a repo on GitHub and follow the instructions to push.

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new).
   - Import your repository.
   - The settings will be auto-detected (Next.js).
   - Click **Deploy**.

## Custom Domain Setup

1. In Vercel, go to **Settings > Domains**.
2. Add `rorayhomebased.co.tz`.
3. Update your DNS at the domain registrar with the records provided by Vercel:
   - **A Record:** Points to Vercel IP.
   - **CNAME Record:** Points to `cname.vercel-dns.com`.

## Post-Deploy Checklist

- [ ] Verify SSL certificate is active.
- [ ] Test the booking form at `/book`.
- [ ] Check `/sitemap.xml` and `/robots.txt`.
- [ ] Confirm all images load (no 404s).
- [ ] Test on mobile devices for responsiveness.
