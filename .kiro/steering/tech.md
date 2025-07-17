# Technology Stack

## Core Technologies
- **React 19**: UI library with latest features
- **TypeScript**: Static typing with strict configuration
- **Vite**: Build tool and dev server with HMR
- **SWC**: Fast TypeScript/JSX compiler via @vitejs/plugin-react-swc

## Development Tools
- **ESLint**: Code linting with TypeScript and React-specific rules
- **TypeScript ESLint**: Enhanced linting for TypeScript code

## Build Configuration
- **Target**: ES2022 with DOM libraries
- **Module System**: ESNext with bundler resolution
- **JSX**: react-jsx transform
- **Strict Mode**: Enabled with additional safety checks

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Build & Quality
```bash
npm run build        # Build for production (TypeScript check + Vite build)
npm run lint         # Run ESLint on all files
```

## Code Style Guidelines
- Use TypeScript strict mode settings
- Follow ESLint recommended rules for React and TypeScript
- Prefer function components with hooks
- Use modern ES2022+ features
- Enable all TypeScript strict checks including unused locals/parameters