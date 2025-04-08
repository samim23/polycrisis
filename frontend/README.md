# Polycrisis Frontend

A modern web application for understanding and preparing for global systemic risks.

## Overview

Polycrisis is an online platform that helps users understand the interconnected nature of global crises, assess risks, and develop preparation strategies. This repository contains the frontend code built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samim23/polycrisis-ai.git
   cd polycrisis-ai/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── data/        # Data files and models
│   ├── lib/         # Utility functions
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Application entry point
└── index.html       # HTML template
```

## Data-Driven Architecture

This application uses a data-driven approach:

- **Risk Data**: All risk information is centralized in `src/data/riskData.ts`. This file contains the structured data for risk factors, compound risks, key indicators, and critical timelines. Modifying this file will automatically update all risk visualizations throughout the application.

- **Preparation Data**: Preparation guides and resources will be managed in a similar data-driven approach (implementation in progress).

This architecture makes it easy to update content without changing component code, allowing for rapid iteration and content management.

## Features

- **Risk Assessment**: Detailed analysis of global systemic risks
- **Preparation Guides**: Practical frameworks for building resilience
- **Community Resources**: Connect with others working on similar issues
- **Interactive Visualizations**: Understand complex risk relationships

## License

This project is licensed under the MIT License - see the LICENSE file for details.
