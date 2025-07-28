# 🎵 Accordion progress

A lightweight and accessible React component that displays progress within an accordion-style layout.  
Useful for forms, onboarding flows or any UI that guides users step by step.

**[Live demo](https://marcllobet.github.io/accordion-progress/)**

<img width="840" height="584" alt="Captura de pantalla 2025-07-28 a les 13 38 10" src="https://github.com/user-attachments/assets/670100cc-b340-4a80-a248-1b334074a1fa" />

---

## 🚀 Getting Started

To run the project locally, follow these steps:

- 📦 Install dependencies: `pnpm install`
- 🧪 Start the dev server: `pnpm dev`
- ✅ Run unit tests with Vitest: `pnpm test`

> [!WARNING]  
> If you need pnpm, just run `npm i -g pnpm`

### 📁 Project Structure

Below is an overview of the folder structure and their responsibilities:

```
accordion-progress/
├── src/
│   ├── components/        # 🧱 Reusable React components
│   ├── hooks/             # 💾 Custom hooks
│   ├── services/          # 🔌 API or logic side-effects
│   ├── state/             # 🌐 App state
│   ├── accordionProgress  # 📦 This component
│   └── main.tsx           # 🚀 Entry point
├── tests/                 # 🧪 E2E tests
└── ...
```

> [!NOTE]  
> Example of use in file `index.example.tsx`.

### ✨ Features

- ✅ Validates HTML with html-validate
- ♿ Accessible DOM structure by default (WAI-ARIA compliant)
- 💡 100% unit test coverage with Vitest
- 🧪 End-to-end testing with Playwright
- 🌘 Supports dark mode
- 🧰 Developer-friendly: `pnpm precommit` runs formatters and linters
- 🔄 Integrated CI with GitHub Actions
