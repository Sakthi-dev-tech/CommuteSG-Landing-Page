# Project Structure

## Root Directory
```
my-vue-app/
├── src/                 # Source code
├── public/              # Static assets
├── dist/                # Build output (generated)
├── node_modules/        # Dependencies (generated)
└── [config files]       # Various configuration files
```

## Source Code Organization (`src/`)
- `main.tsx` - Application entry point
- `App.tsx` - Main application component
- `App.css` - Application-specific styles
- `index.css` - Global styles
- `assets/` - Static assets (images, icons, etc.)
- `vite-env.d.ts` - Vite environment type definitions

## Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript project references
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node.js TypeScript config
- `eslint.config.js` - ESLint configuration
- `index.html` - HTML template

## Conventions
- Use `.tsx` extension for React components
- Use `.ts` extension for utility/logic files
- Place reusable components in organized subdirectories within `src/`
- Keep static assets in `public/` for direct access or `src/assets/` for bundled assets
- Follow React component naming conventions (PascalCase)
- Use TypeScript interfaces/types for component props and data structures