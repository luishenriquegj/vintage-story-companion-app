# Vintage Story Companion App

A companion web application for the game Vintage Story, providing tools to browse recipes, items, tools, and world information.

## Features

- Recipe database with fuzzy search
- Add custom recipes
- Browse items and tools
- Game world information

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

## Deployment

### Docker

```bash
docker build -t vintage-story-companion-app .
docker run -p 3000:3000 vintage-story-companion-app
```

## Tech Stack

- React Router
- TypeScript
- Tailwind CSS
- Fuse.js (fuzzy search)
