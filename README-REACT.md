# Attachment Workbook - React Edition

A modern, type-safe React application for understanding and working with attachment dynamics in relationships, using systems engineering terminology.

## Tech Stack

- **React 19** - Component-based UI architecture
- **TypeScript 5** - Type-safe development with strict mode
- **Tailwind CSS 4** - Utility-first styling with custom theme
- **Vite 5** - Lightning-fast development server with HMR

## Features

### Core Features

1. **Dual Attachment Style System**
   - Primary and secondary attachment styles (anxious, avoidant, secure, fearful)
   - Color-coded badges on status cards
   - Dynamic Venn diagram that updates based on attachment pairings

2. **Live Status Cards**
   - Node A (You) and Node B (Partner) status display
   - Real-time mood indicators with 8 system status codes
   - Attachment style badges showing dual-style combinations

3. **Mood Selector**
   - 8 mood states with HTTP-style status codes
   - Visual feedback with custom colors and emojis
   - Persistent storage in localStorage

4. **System Architecture Map (Venn Diagram)**
   - Dynamic traits based on primary + secondary attachment styles
   - 10 unique pairing combinations with specific dynamics
   - Interface Layer shows relationship system dynamics

5. **Optimization Protocols**
   - Personalized recommendations for each attachment style
   - Self-optimization strategies
   - Partner support guidelines

6. **Combo Alert System**
   - Real-time pattern detection for problematic dynamics
   - Warnings for protest-withdraw loops
   - Alerts for mutual anxiety amplification
   - Positive reinforcement for healthy states
   - Context-aware intervention suggestions

7. **Firebase Real-Time Sync** (Optional)
   - Connect with your partner via room ID
   - Real-time mood synchronization
   - Shared settings and status updates
   - Works without configuration (falls back to local-only)

8. **AI-Powered Insights** (Optional)
   - Claude API integration for system analysis
   - Message optimizer to reduce defensiveness
   - Context-aware relationship advice
   - Systems engineering framing

9. **Private Notes**
   - Local-only storage (not synced to partner)
   - Quick access from main interface
   - Timestamp tracking
   - Never shared or uploaded

10. **Therapy Export**
    - Generate session-ready summaries
    - Export current configuration and status
    - Downloadable text format
    - Space for therapist notes and action items

11. **Attachment-Aware Date Night Ideas**
    - Suggestions tailored to both attachment styles
    - Considers current mood states
    - Energy level matching
    - Multiple options per session

12. **Personalization Settings**
    - Configure names and pronouns
    - Select primary and secondary attachment styles
    - Persistent storage across sessions

## Project Structure

```
src/
├── components/          # React components
│   ├── LiveStatusCards.tsx      # Node A/B status display
│   ├── MoodSelector.tsx         # Mood state picker
│   ├── VennDiagram.tsx          # System architecture map
│   ├── OptimizationProtocols.tsx # Personalized recommendations
│   ├── SettingsModal.tsx        # Configuration modal
│   ├── PrivateNotes.tsx         # Local-only notes
│   ├── RoomSetup.tsx            # Firebase partner sync
│   ├── AIInsights.tsx           # Claude API integration
│   ├── ComboAlert.tsx           # Pattern detection alerts
│   ├── TherapyExport.tsx        # Session note generator
│   └── DateNightIdeas.tsx       # Activity suggestions
├── hooks/              # Custom React hooks
│   ├── useSettings.ts           # Settings state management
│   ├── useMoodState.ts          # Mood state management
│   └── useFirebaseSync.ts       # Real-time sync hook
├── services/           # External integrations
│   ├── firebase.ts              # Firebase configuration
│   └── ai.ts                    # Claude API service
├── data/               # Data structures
│   ├── attachmentStyles.ts      # 4 attachment styles
│   ├── optimizationProtocols.ts # Self/partner protocols
│   ├── attachmentPairings.ts    # 10 pairing combinations
│   └── moods.ts                 # 8 mood states
├── types/              # TypeScript types
│   └── attachment.ts            # All type definitions
├── App.tsx             # Main application
└── main.tsx           # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20+ recommended for best performance)
- npm 9+

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Configure Firebase and Claude API:
```bash
cp .env.example .env
# Edit .env with your Firebase and Anthropic API keys
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

### Configuration (Optional)

The app works fully offline without any API keys. To enable optional features:

**Firebase Real-Time Sync:**
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Realtime Database
3. Add your config to `.env`

**AI Insights:**
1. Get API key from [console.anthropic.com](https://console.anthropic.com)
2. Add `VITE_ANTHROPIC_API_KEY` to `.env`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Adding New Features

1. Create components in `src/components/`
2. Add data structures to `src/data/`
3. Define TypeScript types in `src/types/`
4. Create custom hooks in `src/hooks/`

## Architecture Decisions

### Why React + TypeScript?

- **Type Safety**: Catch errors at compile time with TypeScript
- **Component Reusability**: Easy to maintain and extend
- **Modern Ecosystem**: Access to vast React ecosystem
- **Better Developer Experience**: IntelliSense, refactoring tools

### State Management

Currently using:
- **Local State**: React useState for component state
- **Custom Hooks**: useSettings and useMoodState for shared state
- **localStorage**: Persistent storage for settings and moods

### Styling Approach

- **Tailwind CSS**: Utility-first approach for rapid development
- **Custom Theme**: Extended with attachment style colors
- **Responsive Design**: Mobile-first with md: breakpoints

## Attachment Styles

### Four Core Styles

1. **Anxious (Connection-Optimized)**
   - Low latency tolerance
   - Needs frequent keepalive packets
   - Color: Blue (#3B82F6)

2. **Avoidant (Autonomy-Optimized)**
   - Prefers buffer time
   - Async processing mode
   - Color: Purple (#7C3AED)

3. **Secure (Balanced)**
   - Adaptive processing
   - Flexible sync/async
   - Color: Green (#10B981)

4. **Fearful (Mixed-Mode)**
   - Context-dependent behavior
   - Oscillates between connection and autonomy
   - Color: Orange (#F59E0B)

### Dual-Style System

Users can select both primary and secondary attachment styles to represent:
- Primary operating mode
- Secondary tendencies that emerge in certain contexts
- More nuanced self-understanding

## Mood System

8 HTTP-style status codes:

- **200 OK (Calm)** - System operating normally
- **408 Timeout (Anxious)** - Connection latency detected
- **503 Unavailable (Shutdown)** - Node in maintenance mode
- **409 Conflict** - Data collision detected
- **201 Created (Connected)** - New connection established
- **429 Rate Limit (Need Space)** - Request buffer time
- **102 Processing (Need Close)** - Requesting sync connection
- **206 Partial** - Data processing in progress

## What's Different From Vanilla Version

**Before (index.html):**
- Single 3000+ line HTML file
- Manual DOM manipulation
- No type safety
- jQuery-style event handlers

**After (React + TypeScript):**
- 20+ modular components
- Declarative UI with React
- Full TypeScript type safety
- Custom hooks for state management
- Firebase SDK for real-time sync
- Claude API for AI insights
- Better error handling
- Hot module replacement
- Production build optimization

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal project, but suggestions are welcome! Open an issue to discuss potential changes.

## License

ISC

## Acknowledgments

- Systems engineering metaphor inspired by attachment theory research
- UI design influenced by modern glassmorphism trends
- Built with love and understanding of relationship dynamics
