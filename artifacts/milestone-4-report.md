# Milestone 4 Report — App Assembly & Wiring

**Status:** ✅ Complete  
**Date:** 2026-10-10

---

## What Was Done

| Task | Result |
|---|---|
| Wired `useTaskStorage` hook for persisted task state | ✅ |
| Wired `useState<Filter>` for filter tab state | ✅ |
| Implemented `handleAdd` — `crypto.randomUUID()` for IDs | ✅ |
| Implemented `handleToggle` — immutable completed flip | ✅ |
| Implemented `handleEdit` — immutable title replace | ✅ |
| Implemented `handleDelete` — filter by id | ✅ |
| Computed `counts` object for FilterBar badges | ✅ |
| Dynamic subtitle ("N tasks remaining" / "All done! 🎉") | ✅ |
| Centered card layout with gradient background | ✅ |

## Verification

- `npm run build` → **0 TypeScript errors**, 22 modules transformed ✅
- `npm run dev` → App running at **http://localhost:5173/** ✅

---

## Commit Message

```git
feat(app): wire all components and state into App.tsx

WHAT:
- Replaced App.tsx placeholder with full application logic
- Connected useTaskStorage hook for localStorage-backed task state
- Connected FilterBar, TaskInput, and TaskList with typed handler callbacks
- Added derived "tasks remaining" subtitle that updates reactively

HOW:
- Tasks managed via useTaskStorage (useState + localStorage sync via useEffect)
- Filter managed via local useState<Filter>
- All handlers use immutable array patterns (map/filter) for React state updates
- crypto.randomUUID() used for collision-free task IDs

WHY:
- Immutable state updates ensure React detects changes and re-renders correctly
- Lifting all state to App.tsx keeps components pure and props-driven
- crypto.randomUUID() is built-in and requires no extra dependency
```
