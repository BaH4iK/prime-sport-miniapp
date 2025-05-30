# PrimeSport - Telegram Mini App

![PrimeSport](https://via.placeholder.com/800x400/FFC0CB/FFFFFF?text=PrimeSport)

PrimeSport is a beautiful Telegram Mini App designed to help users discover, join, and organize sports events. The app features a light pink and white color scheme, creating a modern and friendly user interface.

## Features

- **Event Discovery**: Browse and search for sports events in your area
- **Event Details**: View comprehensive information about each event
- **User Profiles**: Manage your profile and track your sports activities
- **Event Participation**: Join events and see who else is attending
- **Responsive Design**: Optimized for all mobile devices
- **Telegram Integration**: Seamless integration with Telegram features

## Technology Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Styled Components**: CSS-in-JS styling solution
- **React Router**: Navigation and routing
- **Vite**: Fast build tool and development server
- **Telegram Web App API**: Integration with Telegram

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at http://localhost:3000

### Building for Production

Build the app for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Telegram Mini App Integration

To test the app as a Telegram Mini App:

1. Create a bot using [@BotFather](https://t.me/BotFather) on Telegram
2. Set up your Mini App using the `/newapp` command
3. Deploy your built app to a hosting service
4. Configure the Web App URL in BotFather

## Design

The app features a light pink and white color scheme with:

- Primary color: `#FFC0CB` (Light pink)
- Light variant: `#FFE0E5` (Very light pink)
- Dark variant: `#FF9CAA` (Darker pink)
- Text color: `#333333`
- White background: `#FFFFFF`

## Project Structure

```
primesport/
├── public/           # Static assets
├── src/              # Source code
│   ├── pages/        # Page components
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   ├── Events.tsx
│   │   └── EventDetails.tsx
│   ├── App.tsx       # Main App component
│   ├── App.css       # App-specific styles
│   ├── index.css     # Global styles
│   └── main.tsx      # Entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## License

MIT
