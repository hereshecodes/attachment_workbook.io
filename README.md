# 💕 Relationship Styles — Real-Time Connection Tool

## ✨ Quick Overview

A beautiful, interactive web app for couples to understand each other's attachment styles and communicate emotional needs in real-time. Built for anxious-avoidant relationship dynamics, it helps partners signal how they're feeling without the pressure of finding the right words in difficult moments.

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

* **Real-Time Mood Signals**: Tap how you're feeling and your partner sees it instantly on their device
* **Attachment Style Profiles**: Visual Venn diagram showing each person's style, love languages, and growth areas
* **Research-Backed Insights**: When either person updates their mood, both see tailored guidance on what helps
* **Room-Based Sync**: Unique shareable link keeps your data private to just the two of you
* **"What Helps Us" Section**: Practical strategies for both partners based on attachment research
* **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
* **No Account Required**: Just share a link and start using it

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

### Quick Start (Demo Mode)

1. Download `index.html`
2. Open it in your browser
3. It works locally in demo mode (moods save to your browser only)

### Full Setup (Real-Time Sync)

1. Set up Firebase (see [Firebase Setup](#firebase-setup))
2. Add your Firebase config to the HTML file
3. Host the file (see [Hosting Options](#hosting-options))
4. Share the URL with your partner
5. Each person selects their identity ("I'm Me" or "I'm You")
6. Start communicating! 💕

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

The app is a single HTML file — host it anywhere!

### Option 1: Netlify Drop (Easiest — 30 seconds)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your HTML file onto the page
3. Done! You get a live URL instantly
4. (Optional) Click "Site settings" to customize the URL

### Option 2: GitHub Pages (Free & Permanent)

1. Create a [GitHub](https://github.com) account
2. Create a new repository
3. Upload your HTML file and name it `index.html`
4. Go to **Settings → Pages**
5. Under "Source", select your branch and click Save
6. Your site will be live at `yourusername.github.io/reponame`

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up and drag your file to deploy
3. Get a live URL

### Option 4: Tiiny.host (Quick & Easy)

1. Go to [tiiny.host](https://tiiny.host)
2. Upload your file
3. Get a shareable link (free tier has time limits)

---

## 🎨 Customization <a id="customization"></a>

### Changing Names

Find and replace in the HTML:
- `"Me (Her)"` → Your name
- `"You (Him)"` → Partner's name

### Changing Colors

The color scheme uses CSS variables. Find these sections:

```css
/* Her colors (rose/pink) */
#c4949e, #a07080, #9a6070

/* His colors (purple) */
#8a6a9a, #5a3c6a, #4a2d5f
```

### Adding/Changing Mood Options

Find the `moodData` object in the `<script>` section. Each mood has:
- `label`: Button text
- `message`: What your partner sees
- `insightTitle`: Header for the insight panel
- `insightMe`: Guidance for her
- `insightYou`: Guidance for him

### Changing Love Languages

Search for "Feels loved through" and update the text.

### Updating the Venn Diagram Content

Search for `class="traits"` to find the bullet point lists for each person.

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

---

Made with 💕 for better understanding between partners.
