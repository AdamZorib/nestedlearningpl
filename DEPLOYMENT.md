# GitHub Pages Deployment Guide

This guide will help you deploy the NestedLearning.pl website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- The domain nestedlearning.pl configured to point to GitHub Pages

## Step 1: Prepare the Repository

1. Create a new repository on GitHub (e.g., `nestedlearning-pl`)
2. Initialize git in your project directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Domain for sale landing page"
   ```

3. Add the GitHub remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/nestedlearning-pl.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Configure GitHub Pages

### Option A: Using GitHub Actions (Recommended)

1. In your GitHub repository, go to **Settings** → **Pages**
2. Under "Build and deployment", select **GitHub Actions** as the source
3. The workflow file `.github/workflows/deploy.yml` is already included in this project
4. Every push to the `main` branch will automatically build and deploy the site

### Option B: Manual Deployment

If you prefer manual deployment:

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

2. The build output will be in the `dist/public` directory

3. Deploy using GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose the branch containing your built files (you may need to create a `gh-pages` branch)

## Step 3: Configure Custom Domain

1. In your GitHub repository, go to **Settings** → **Pages**
2. Under "Custom domain", enter: `nestedlearning.pl`
3. Wait for DNS check to complete (may take a few minutes)
4. Enable "Enforce HTTPS" once DNS is verified

### DNS Configuration

Configure your DNS settings at your domain registrar:

**For apex domain (nestedlearning.pl):**
Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For www subdomain (optional):**
Add a CNAME record:
```
www.nestedlearning.pl → YOUR_USERNAME.github.io
```

## Step 4: Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit https://nestedlearning.pl
3. Verify that the site loads correctly with HTTPS

## Build Commands

- **Development server**: `npm run dev`
- **Production build**: `npm run build`
- **Preview production build**: `npm run preview`

## Environment Variables

For GitHub Pages deployment, you may need to set these in your repository secrets:

- `VITE_APP_TITLE`: "NestedLearning.pl - Premium Domain for Sale"
- `VITE_APP_LOGO`: "/ai-learning-icon.png"

Go to **Settings** → **Secrets and variables** → **Actions** to add them.

## Troubleshooting

### Site not loading after deployment
- Check DNS configuration
- Verify GitHub Pages is enabled in repository settings
- Check GitHub Actions logs for build errors

### 404 errors on page refresh
- This is handled by the included 404.html redirect
- Ensure the build includes the 404 page

### Images not loading
- Verify all image paths use absolute paths (starting with `/`)
- Check that images are in the `client/public` directory

## Updating the Site

To update the website:

1. Make your changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

3. GitHub Actions will automatically rebuild and deploy (if using Option A)

## Support

For questions about the domain purchase, contact: **tzc38w@gmail.com**
