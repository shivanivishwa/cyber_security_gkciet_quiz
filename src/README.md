# Cybersecurity Awareness Quiz

A modern, interactive quiz application to test cybersecurity knowledge with 25 comprehensive questions.

## Features

- 📝 25 cybersecurity questions covering various topics
- 🎨 Modern UI with animated backgrounds and smooth transitions
- 📊 Instant scoring with personalized feedback
- 📄 Downloadable PDF certificate
- 📱 Fully responsive design
- 🔒 Cybersecurity-themed dark gradient interface

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Recommended Platforms:

1. **Vercel** (Recommended)
   - Runtime: Node.js
   - Zero configuration needed
   - Deploy: `vercel deploy`

2. **Netlify**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Railway/Render**
   - Runtime: Node.js 18+
   - Build command: `npm install && npm run build`

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Motion (Framer Motion)** - Animations
- **Radix UI** - Accessible components
- **jsPDF** - Certificate generation
- **Lucide React** - Icons

## Project Structure

```
├── App.tsx                 # Main app component
├── components/
│   ├── WelcomeScreen.tsx   # User registration
│   ├── QuizScreen.tsx      # Quiz interface
│   ├── ResultsScreen.tsx   # Results and certificate
│   ├── CertificateGenerator.tsx  # PDF generation
│   └── ui/                 # Shadcn UI components
├── data/
│   └── questions.ts        # Quiz questions
├── types/
│   └── quiz.ts            # TypeScript types
└── styles/
    └── globals.css        # Global styles

```

## Scoring System

- **0-9**: Needs Awareness (Red)
- **10-15**: Average Awareness (Yellow)
- **16-20**: Good Awareness (Green)
- **21-25**: Excellent Awareness (Blue)

## License

Designed by Shibashis

## Support

For questions or issues, please contact the development team.
