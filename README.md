# To-Do List App

A clean, responsive single-page To-Do List application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## Features

- **Add Tasks**: Quickly create tasks with the input field or by pressing `Enter`. Empty or whitespace-only inputs are automatically blocked.
- **Inline Editing**: Click the pencil icon on any task to edit its title directly in place. Press `Enter` or click outside to save, or `Escape` to cancel.
- **Immediate Deletion**: Remove tasks instantly with a single click on the trash button.
- **Completion Toggle**: Mark tasks complete with a themed checkbox. Completed tasks are highlighted with a faint blue background and strikethrough text.
- **Smart Sorting**: On the **All** tasks tab, completed items automatically sort below active items while preserving chronological order within each group.
- **Status Filtering**: Filter between **All**, **Active**, and **Completed** tasks with live count badges.
- **Local Persistence**: Tasks persist across browser refreshes via `localStorage`.
- **Responsive & Resilient Layout**: Built with flexbox containment so long unbroken text strings wrap gracefully without breaking the layout or displacing action buttons.

---

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS v4

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (bundled with Node.js)

---

### Running the App (One-Command)

From the project root:

#### Windows
Double-click `run.bat` or run:
```cmd
.\run.bat
```

#### macOS / Linux / Git Bash
```bash
./run.sh
```

#### Via npm
```bash
npm start
# or
npm run dev
```

The script will automatically install dependencies if `node_modules` is not found and launch the local Vite development server at:
```
http://localhost:5173/
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` / `npm start` | Starts the development server with Hot Module Replacement (HMR) |
| `npm run build` | Type-checks with TypeScript and compiles the production bundle in `dist/` |
| `npm run preview` | Locally preview the production build |

---

## Project Structure

```
ShopBackOA/
├── docs/
│   ├── prompt.md             # Complete record of user prompts & interview answers
│   └── reflection.md         # Process reflections
├── src/
│   ├── components/
│   │   ├── FilterBar.tsx     # Status filter tabs (All / Active / Completed)
│   │   ├── TaskInput.tsx     # Controlled input for adding new tasks
│   │   ├── TaskItem.tsx      # Individual task row (toggle, inline edit, delete)
│   │   └── TaskList.tsx      # List rendering, filtering, and empty states
│   ├── hooks/
│   │   └── useLocalStorage.ts# React hook synchronizing state with localStorage
│   ├── types/
│   │   └── task.ts           # Task and Filter TypeScript interfaces
│   ├── utils/
│   │   └── storage.ts        # Defensive localStorage read/write helpers
│   ├── App.tsx               # Root component & central state management
│   ├── index.css             # Tailwind CSS directives
│   └── main.tsx              # React entry point
├── run.bat                   # One-command runner script for Windows
├── run.sh                    # One-command runner script for Unix / macOS
├── package.json
└── vite.config.ts
```
