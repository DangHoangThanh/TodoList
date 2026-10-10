### 1. How did you break down the problem before prompting?

Instead of just telling the AI to "build an app," I used /grill-me and /plan to force a design interview. I broke the problem down into Tech Stack selection, Data Modeling, Edge Case Handling (empty strings), and UX Flows (filters, edit/delete interactions) before a single line of code was written.

### 2. What did the AI get wrong, and how did you fix it?

The AI successfully implemented the features but missed a crucial UI edge case. In TaskItem.tsx, it used basic flexbox classes but didn't account for text overflow. When I tested the app by pasting a massive, continuous string without spaces, the task text pushed the edit and delete buttons completely off the screen and broke the viewport width. I recognized that the flex child lacked text-wrapping constraints, so I directed the AI to apply Tailwind's break-words and min-w-0 classes to force proper wrapping. This restored the UI structure.

### 3. What did you deliberately not delegate to AI, and why?

I decided on a set tech stack, scope, architecture and data contracts before prompting. Delegating architecture to AI often results in over-engineered context trees or unnecessary third-party libraries for a simple scope.

### 4. What would you do differently with more time?

- Redesign UI feel and spacing for a more expressive, more well communicated visual identity
- Add drag and drop re-ordering of items
- Add date time functionality to tasks
- Add priority tasks functionality