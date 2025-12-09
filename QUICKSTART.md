# Quick Start Guide

## Get Running in 60 Seconds

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

That's it! The app works fully offline without any configuration.

## First Time Setup

1. Click **⚙️ Settings** button
2. Enter your name and your partner's name
3. Select your attachment styles (primary + optional secondary)
4. Click **Save Settings**

## Core Workflow

### Set Your Mood
1. Find "Your Status" section
2. Click one of the 8 mood buttons
3. Your mood is saved automatically

### View Relationship Dynamics
- **Live Status Cards**: See both partners' current states
- **Combo Alerts**: Get warnings for problematic patterns
- **Venn Diagram**: Understand your attachment pairing
- **Optimization Protocols**: Get personalized recommendations

### Optional Features

**Connect with Partner (Firebase):**
1. Click "🔗 Connect with Partner"
2. Choose "Create New Room" or "Join Existing Room"
3. Share the Room ID with your partner
4. Your moods will sync in real-time

**Get AI Insights (Claude API):**
1. Add your Anthropic API key to `.env`
2. Click "Get AI Insight" for system analysis
3. Use "Message Optimizer" to improve communication

**Export for Therapy:**
1. Click "📋 Therapy Export"
2. Click "Download Report"
3. Share the .txt file with your therapist

**Get Date Ideas:**
1. Click "💕 Date Night Ideas"
2. See suggestions based on your moods and styles
3. Click "🔄 Refresh" for new options

## Keyboard Shortcuts

- No keyboard shortcuts yet (future enhancement)

## Tips

- **Dual Styles**: Most people aren't purely one style. Use secondary attachment styles for nuance.
- **Honest Moods**: The system works best with honest status updates.
- **Private Notes**: Use these for thoughts you're not ready to share.
- **Combo Alerts**: Pay attention to these - they catch patterns before they escalate.

## Troubleshooting

**Dev server won't start:**
- Make sure you ran `npm install`
- Check Node version: `node --version` (need 18+)

**Firebase not connecting:**
- Check your `.env` file has all Firebase variables
- Make sure Realtime Database is enabled in Firebase Console

**AI insights not working:**
- Verify `VITE_ANTHROPIC_API_KEY` is in `.env`
- Check your API key has credits

**Data not persisting:**
- Check localStorage isn't disabled in your browser
- Try a different browser

## Next Steps

- Read [README-REACT.md](README-REACT.md) for full documentation
- Check [.env.example](.env.example) for API configuration
- Open an issue if you find bugs

## Support

This is a personal project, but feedback welcome:
- GitHub Issues: https://github.com/hereshecodes/attachment_workbook.io/issues

---

Built with React, TypeScript, and Tailwind CSS
