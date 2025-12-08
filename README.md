# 💕 Relationship Styles Real-Time Connection Tool

## ✨ Quick Overview

A beautiful, interactive web app for couples to understand each other's attachment styles and communicate emotional needs in real-time. Built for anxious-avoidant relationship dynamics, it helps partners signal how they're feeling without the pressure of finding the right words in difficult moments.

**Now featuring AI-powered assistance** to help you communicate more effectively and understand patterns in your relationship.

---

## 💡 Table of Contents

- [Project Features](#features)
- [Getting Started](#getting-started)
- [Usage Examples](#usage-examples)
- [Firebase Setup](#firebase-setup)
- [Hosting Options](#hosting-options)
- [Customization](#customization)
- [License](#license)

---

## 🌟 Project Features <a id="features"></a>

### Core Features
* **Real-Time Mood Signals**: Tap how you're feeling and your partner sees it instantly on their device
* **Attachment Style Profiles**: Visual Venn diagram showing each person's style, love languages, and growth areas
* **Research-Backed Insights**: When either person updates their mood, both see tailored guidance on what helps
* **Room-Based Sync**: Unique shareable link keeps your data private to just the two of you
* **"What Helps Us" Section**: Practical strategies for both partners based on attachment research
* **Mood History Calendar**: Track patterns over time with an emoji-based calendar showing both partners' moods
* **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
* **No Account Required**: Just share a link and start using it

### 🤖 AI-Powered Features
* **Message Helper**: AI suggests better ways to phrase difficult messages to your partner based on their attachment style
* **Pattern Insights**: AI analyzes your mood history to identify patterns and provide encouraging feedback
* **Weekly Reflections**: Get AI-generated summaries of your week together, highlighting progress and growth
* **Understanding Assistant**: When your partner shares how they're feeling, AI helps you understand what they need and how to respond

### Mood Options

**For Her (Connection-Seeking):**
- Need space, but okay
- Feeling anxious
- Feeling disconnected
- Ready to reconnect
- All good ♡

**For Him (Autonomy-Valuing):**
- Need space, but okay
- Feeling overwhelmed
- Feeling disconnected
- Ready to reconnect
- All good ♡

---

## 🛠️ Getting Started <a id="getting-started"></a>

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A free Firebase account (for real-time sync between devices)
- A free hosting account (Netlify, GitHub Pages, or similar)
- (Optional) Anthropic API key for AI features

### Project Structure

```
attachment_workbook.io/
├── index.html         # Main HTML structure and JavaScript logic
├── styles.css         # All styling separated into external stylesheet
├── config.js          # API keys (DO NOT commit to GitHub!)
├── config.example.js  # Template for config.js
├── .gitignore         # Keeps config.js private
└── README.md          # This file
```

### Quick Start (Demo Mode)

1. Download all files from the repository
2. (Optional) Set up AI features:
   - Copy `config.example.js` to `config.js`
   - Add your Anthropic API key to `config.js`
3. Open `index.html` in your browser
4. It works locally in demo mode (moods save to your browser only)

### Full Setup (Real-Time Sync)

1. Set up Firebase (see [Firebase Setup](#firebase-setup))
2. Add your Firebase config to the HTML file
3. (Optional) Set up AI features (see [AI Setup](#ai-setup))
4. Host your files (see [Hosting Options](#hosting-options))
   - **Important:** Only upload `index.html`, `styles.css`, and `config.js` (if using AI)
   - Never upload `.env` or other sensitive files
5. Share the URL with your partner
6. Each person selects their identity ("I'm Me" or "I'm You")
7. Start communicating! 💕

---

## 📖 Usage Examples <a id="usage-examples"></a>

### Scenario 1: He needs space after a difficult conversation

1. **Him**: Opens the app, taps "Feeling overwhelmed"
2. **Her**: Sees his status update with the message: *"Feeling a bit overwhelmed right now. I need to step back and recalibrate. It's not about us."*
3. **Her**: Reads the insight: *"His withdrawal isn't punishment — it's protection. Give him room. Don't chase. Trust his return."*
4. **Result**: She understands without taking it personally. He feels safe to take space.

### Scenario 2: She's feeling anxious about silence

1. **Her**: Opens the app, taps "Feeling anxious"
2. **Him**: Sees her status update with the message: *"I'm feeling a bit anxious right now. I don't need you to fix it — just knowing you're there helps."*
3. **Him**: Reads the insight: *"She's being vulnerable by naming this. A heart emoji or 'I'm here' goes far. You don't need to solve anything."*
4. **Result**: He sends a quick ♡. She feels seen without overwhelming him.

### Scenario 3: Both ready to reconnect

1. **Both**: Tap "Ready to reconnect"
2. **Both**: See that the other is open
3. **Result**: Low-pressure invitation to come together when both are ready.

---

## 🤖 AI Setup (Optional)

The app includes AI-powered features that use Claude (Anthropic's AI). These features are optional but enhance the experience.

### Getting an Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up for an account (get $5 in free credits!)
3. Navigate to **API Keys** in the dashboard
4. Click **"Create Key"** and copy it
5. **Add your API key securely:**

   a. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```

   b. Open `config.js` and replace `YOUR_ANTHROPIC_API_KEY_HERE` with your actual API key:
   ```javascript
   const CONFIG = {
       ANTHROPIC_API_KEY: "sk-ant-api03-your-key-here"
   };
   ```

   c. **Important:** The `.gitignore` file ensures `config.js` stays private and won't be committed to GitHub!

### Security Best Practices

✅ **DO:**
- Keep `config.js` on your local machine only
- Use `config.example.js` as a template for others
- Add `config.js` to `.gitignore` (already done!)

❌ **DON'T:**
- Commit `config.js` to GitHub
- Share your API key publicly
- Deploy `config.js` to public hosting without environment variables

### AI Features Without API Key

If you don't add an API key, the app still works perfectly! You just won't have:
- Message rephrasing suggestions
- Pattern insights
- Weekly reflections
- Understanding assistance

All other features (real-time mood sharing, insights, history) work normally.

---

## 🔥 Firebase Setup <a id="firebase-setup"></a>

Firebase enables real-time sync between your devices. It's free for personal use.

### Step-by-Step

1. Go to [console.firebase.google.com](https://console.firebase.google.com)

2. Click **"Create a project"**
   - Name it anything (e.g., "relationship-app")
   - Skip Google Analytics when asked

3. In the left sidebar, click **"Realtime Database"**

4. Click **"Create Database"**
   - Choose your region
   - Select **"Start in test mode"** (this allows read/write for 30 days)

5. Click the **gear icon ⚙️** → **"Project settings"**

6. Scroll down to **"Your apps"** → Click the **web icon (`</>`)**

7. Name it anything (e.g., "relationship-web"), click **"Register app"**

8. Copy the `firebaseConfig` object. It looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyB...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

9. Open `index.html` and replace the placeholder config near the top of the `<script>` section

10. Save the file — you're done!

### Security Note

After 30 days, Firebase test mode expires. To keep it working, go to Realtime Database → Rules and set:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

This allows anyone with your room link to read/write, but only to their specific room.

---

## 🌐 Hosting Options <a id="hosting-options"></a>

The app consists of two files (`index.html` and `styles.css`) — host them anywhere together!

### Option 1: Netlify Drop (Easiest — 30 seconds)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Create a folder with `index.html`, `styles.css`, and `config.js` (if using AI)
3. Drag the entire folder onto the page
4. Done! You get a live URL instantly
5. (Optional) Click "Site settings" to customize the URL

**Note:** For production deployments, consider using environment variables instead of `config.js`

### Option 2: GitHub Pages (Free & Permanent)

1. Create a [GitHub](https://github.com) account
2. Create a new repository
3. Upload `index.html`, `styles.css`, and `config.js` to the repository
   - **Warning:** Your API key will be public if you upload `config.js`!
   - For public repos, consider using a backend proxy for API keys
4. Go to **Settings → Pages**
5. Under "Source", select your branch and click Save
6. Your site will be live at `yourusername.github.io/reponame`

**Security Note:** If hosting publicly, anyone can view your source code and API keys. Consider:
- Making the repository private, OR
- Using a backend service to proxy API calls, OR
- Accepting that your API key is public and monitoring usage

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up and drag your folder (containing both files) to deploy
3. Get a live URL

### Option 4: Tiiny.host (Quick & Easy)

1. Go to [tiiny.host](https://tiiny.host)
2. Zip both files together and upload the zip
3. Get a shareable link (free tier has time limits)

---

## 🎨 Customization <a id="customization"></a>

### Changing Names

Find and replace in `index.html`:
- `"Her"` → Your name
- `"Him"` → Partner's name

### Changing Colors

The color scheme is defined in `styles.css`. Find these color codes:

```css
/* Her colors (rose/pink) */
#c4949e, #a07080, #9a6070

/* His colors (purple) */
#8a6a9a, #5a3c6a, #4a2d5f
```

You can do a find-and-replace across the CSS file to change the color scheme.

### Adding/Changing Mood Options

Find the `moodData` object in the `<script>` section of `index.html`. Each mood has:
- `label`: Button text
- `message`: What your partner sees
- `insightTitle`: Header for the insight panel
- `insightMe`: Guidance for her
- `insightYou`: Guidance for him

### Changing Love Languages

In `index.html`, search for "Feels loved through" and update the text.

### Updating the Venn Diagram Content

In `index.html`, search for `class="traits"` to find the bullet point lists for each person.

### Modifying AI Behavior

In `index.html`, find the `AI_CONTEXT` constant to customize how the AI responds. You can adjust:
- The tone and style of AI responses
- The relationship dynamic description
- Response length preferences

---

## 📚 Research Behind This

This tool is informed by:

- **Attachment Theory** (Bowlby, Ainsworth) — Understanding anxious vs. avoidant attachment patterns
- **Gottman Research** — The pursuer-distancer dynamic and repair strategies
- **"Attached" by Levine & Heller** — Practical attachment style guidance
- **Emotion-Focused Therapy** — Partner buffering and co-regulation

Key insights applied:
- Partners can "buffer" each other's attachment fears through tailored responses
- Naming your state ("I need space but I'll be back") reduces partner anxiety
- Small, consistent gestures matter more than grand ones
- Weekly check-ins reduce "ambush" conflicts

---

## 📄 License

This project is free to use for personal purposes. Feel free to customize it for your own relationship!

---

## 💬 Notes

- **Privacy**: Your moods are only stored in your Firebase database under your unique room ID. No one else can see them unless you share the link.
- **No accounts**: There's no login system — the room link IS your access. Bookmark it!
- **Works offline**: The Venn diagram and "What Helps Us" sections work without Firebase. Only real-time mood syncing requires it.
- **AI Privacy**: If using AI features, messages are sent to Anthropic's API for processing. Review [Anthropic's privacy policy](https://www.anthropic.com/privacy) for details.
- **Performance**: Separating CSS into its own file improves load times and allows browsers to cache styles separately.

---

## 🔄 Recent Updates

### Version 2.0
- ✨ **AI Integration**: Added Claude-powered message rephrasing, pattern insights, and weekly reflections
- 📊 **Mood History**: New calendar view showing emoji-based mood tracking over time
- 🎨 **CSS Separation**: Moved all styles to external `styles.css` for better organization
- 💬 **Understanding Helper**: AI-powered assistance to understand your partner's needs
- 🔔 **Combo Alerts**: Automatic detection when both partners are in challenging moods

---

Made with 💕 for better understanding between partners.
