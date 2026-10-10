# Milestone 3 Report — Core Components

**Status:** ✅ Complete  
**Date:** 2026-10-10

---

## What Was Done

| File | Description |
|---|---|
| `src/components/FilterBar.tsx` | All/Active/Completed tab bar with per-tab counts and active highlight |
| `src/components/TaskInput.tsx` | Controlled add-task input with trim/block-empty and Enter-key support |
| `src/components/TaskItem.tsx` | Task row with checkbox, pencil-icon edit mode, trash delete, hover-reveal buttons |
| `src/components/TaskList.tsx` | Filtered list renderer with contextual empty-state messages |

## Verification

- `npm run build` → **0 TypeScript errors**, 16 modules transformed

---

## Commit Message

```git
feat(components): add FilterBar, TaskInput, TaskItem, and TaskList components

WHAT:
- Added FilterBar with All/Active/Completed tabs and per-filter task counts
- Added TaskInput with controlled input, Enter-key submit, trim + block-empty logic
- Added TaskItem with checkbox toggle, hover-reveal pencil/trash icons, inline edit mode
- Added TaskList with filter logic and contextual empty-state messages

HOW:
- All components are fully typed with TypeScript interfaces for their props
- TaskItem uses local useState for edit mode; reverts to original title on empty/Escape
- Inline SVG icons used to avoid external icon library dependency
- Tailwind CSS utility classes for all styling, transitions, and focus-visible states

WHY:
- Components are single-responsibility, making them independently testable
- Hover-reveal actions keep the UI clean while remaining accessible via keyboard
- Contextual empty messages improve UX by giving filter-specific feedback
```
