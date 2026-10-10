# Milestone 2 Report — Types & Storage Utilities

**Status:** ✅ Complete  
**Date:** 2026-10-10

---

## What Was Done

| File | Description |
|---|---|
| `src/types/task.ts` | `Task` interface (`id`, `title`, `completed`) and `Filter` union type |
| `src/utils/storage.ts` | `loadTasks()` and `saveTasks()` helpers with JSON serialization and try/catch |
| `src/hooks/useLocalStorage.ts` | `useTaskStorage()` hook — initializes from localStorage, syncs on every state change |
| `src/components/` | Directory created for upcoming components |

---

## Key Implementation Details

### `src/types/task.ts`
```ts
export interface Task {
  id: string
  title: string
  completed: boolean
}

export type Filter = 'all' | 'active' | 'completed'
```

### `src/utils/storage.ts`
- Reads/writes under localStorage key `"todo-tasks"`
- Both functions wrapped in `try/catch` to gracefully handle corrupted JSON or private-mode quota limits

### `src/hooks/useLocalStorage.ts`
- Lazily initializes `useState` from `loadTasks()` (runs only once on mount)
- `useEffect` watches `tasks` and calls `saveTasks()` on every change

---

## Verification

- `npm run build` → **0 TypeScript errors**, build succeeded ✅

---

## Commit Message

```git
feat(storage): add Task types, localStorage utilities, and useTaskStorage hook

WHAT:
- Added Task interface and Filter union type in src/types/task.ts
- Added loadTasks() and saveTasks() helpers in src/utils/storage.ts
- Added useTaskStorage() custom hook in src/hooks/useLocalStorage.ts
- Created src/components/ directory for upcoming components

HOW:
- Task interface: { id: string, title: string, completed: boolean }
- Filter type: 'all' | 'active' | 'completed'
- loadTasks/saveTasks use JSON.parse/stringify under key "todo-tasks" with try/catch
- useTaskStorage initializes state lazily from localStorage and syncs via useEffect

WHY:
- Centralizing type definitions prevents type drift across components
- Defensive try/catch in storage handles corrupted data or private-mode quota limits
- Separating storage logic from components keeps them testable and decoupled
```
