# Deployment Guide - Attachment Workbook

## Deploying to Netlify (Recommended)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account

### Step 2: Connect Repository
1. Click "Add new site" → "Import an existing project"
2. Choose "Deploy with GitHub"
3. Select your `attachment_workbook.io` repository
4. Netlify will auto-detect the `netlify.toml` configuration

### Step 3: Configure Environment Variables
1. In your Netlify site dashboard, go to "Site configuration" → "Environment variables"
2. Click "Add a variable"
3. Add:
   - **Key**: `ANTHROPIC_API_KEY`
   - **Value**: Your Anthropic API key (starts with `sk-ant-`)
4. Click "Create variable"

### Step 4: Deploy
1. Click "Deploy site"
2. Wait for deployment to complete (~2 minutes)
3. Your site will be live at `https://your-site-name.netlify.app`

### Step 5: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain management"
2. Click "Add custom domain"
3. Follow instructions to connect your domain

## How It Works

### Security Architecture
- **Local Development**: Uses API key from `config.js` (gitignored)
- **Production**: Uses serverless function at `/.netlify/functions/ai-proxy`
- **API Key**: Stored securely in Netlify environment variables (never exposed to browser)

### File Structure
```
attachment_workbook.io/
├── index.html                  # Main app
├── styles.css                  # Styling
├── config.js                   # LOCAL ONLY - gitignored
├── config.example.js           # Template for local setup
├── netlify.toml                # Netlify configuration
└── netlify/
    └── functions/
        └── ai-proxy.js         # Serverless function (keeps API key secure)
```

### AI Feature Flow
1. Frontend makes request to `/.netlify/functions/ai-proxy`
2. Serverless function adds API key from environment variable
3. Function proxies request to Anthropic API
4. Response sent back to frontend
5. API key never exposed to browser!

## Testing Locally

To test with Netlify Dev (optional):

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your site
netlify link

# Pull environment variables
netlify env:pull

# Run local dev server with functions
netlify dev
```

## Troubleshooting

### AI Features Not Working
- Check that `ANTHROPIC_API_KEY` is set in Netlify environment variables
- Redeploy the site after adding environment variables
- Check browser console for errors

### Functions Not Found
- Ensure `netlify.toml` is in the root directory
- Check that `netlify/functions/` directory exists
- Redeploy the site

## Cost
- **Netlify**: Free tier includes 100GB bandwidth, 300 build minutes/month
- **Anthropic API**: Pay-as-you-go based on usage
  - Claude Sonnet: ~$3 per million input tokens
  - Typical conversation: <1000 tokens (~$0.003)

## Security Notes
- ✅ API key stored in environment variables (not in code)
- ✅ `config.js` is gitignored (never committed)
- ✅ Serverless function validates requests
- ⚠️ Consider adding rate limiting for public deployments
- ⚠️ Monitor API usage in Anthropic dashboard
