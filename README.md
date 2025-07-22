[![docus](https://docus-puce.vercel.app/__og-image__/static/og.png)](https://docus.dev)

> CLI tool to create beautiful docs with Markdown

[![npm version](https://img.shields.io/npm/v/create-docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npmjs.com/package/create-docus)
[![npm downloads](https://img.shields.io/npm/dm/create-docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npm.chart.dev/create-docus)
[![License](https://img.shields.io/npm/l/create-docus.svg?style=flat&colorA=020420&colorB=EEEEEE)](https://npmjs.com/package/create-docus)

The fastest way to create a new [Docus](https://docus.dev) documentation project. This CLI tool scaffolds a complete documentation website using the [`docus`](https://www.npmjs.com/package/docus) Nuxt layer.

## 🚀 Quick Start

Create a new documentation project in seconds:

```bash
# Create a new project
npx create docus my-docs

# Navigate to your project
cd my-docs

# Start development server
npm run dev
```

That's it! Your documentation site will be running at `http://localhost:3000`

## 🎯 What it creates

The CLI scaffolds a complete documentation project with:

- ✨ **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design  
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Nuxt 4
- 🔧 **TypeScript** - Full TypeScript support

## 📁 Project Structure

### Generated project

```
my-docs/
├── content/              # Your markdown content
│   ├── index.md         # Homepage
│   └── docs/            # Documentation pages
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

### Optional files and folders

Docus uses a layer system, you can go further and use any feature or file of a classical Nuxt project:

```
my-docs/
├── app.config.ts        # App configuration
├── nuxt.config.ts       # Nuxt configuration (add extra modules, components, etc.)
├── app/                 # App directory
│   ├── components/      # Components (add your own components)
│   ├── layouts/         # Layouts (add your own layouts)
│   └── pages/           # Pages (add your own pages)
└── server/              # Server-side code (add your own server-side code)
```

## ⚡ Built with

Your project comes pre-configured with the best of the Nuxt ecosystem:

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt UI Pro](https://ui.nuxt.com/pro) - Premium UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Docus Layer](https://www.npmjs.com/package/docus) - Documentation theme

## 🔗 Related Packages

- [`docus`](https://github.com/nuxtlabs/docus/tree/main/layer) - The Nuxt layer that powers your documentation

## 📖 Documentation

For detailed documentation on customizing your Docus project, visit the [Docus Documentation](https://docus.dev)

## 🛠️ Development

This repository contains the CLI tool source code.

### Local Development

To contribute to the CLI tool:

```bash
# Clone this repository
git clone https://github.com/nuxtlabs/docus

# Install dependencies
pnpm install

# Build the CLI
pnpm run build

# Run the dev server to run the docus docs
pnpm run dev
```

### Package Structure

This is a monorepo containing:

- **`/`** - CLI tool (`create-docus`)
- **`/layer`** - Docus Nuxt layer (`docus`)
- **`/docs`** - Documentation and examples
- **`/.starter` ** - Starter project

## 📄 License

Published under the [MIT](LICENSE) license.

---

Docus has been entirely rewritten from scratch and is inspired from [undocs](https://github.com/unjs/undocs) made by [@pi0](https://github.com/pi0) 💚
