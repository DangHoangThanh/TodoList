# User Prompts & Grill-Me Responses

### Prompt 1
```text
You are the Builder. We are building this project together iteratively. Wait for my instructions per milestone. Do not implement ahead of what I ask. see @[AGENTS.md] for your rules
```

### Prompt 2
```text
/grill-me /plan I need to build a single-page To-Do List app.
    Minimum features:
    1. Add, edit, delete tasks
    2. Mark tasks as complete
    3. Basic persistence (e.g., localStorage)

    Please interview me to lock down the tech stack, styling framework, and edge cases (like empty tasks) before generating an implementation plan. Do not write any code until we agree on the plan.
```

### Grill-Me Response 1 (Framework selection)
```text
1. React. Please use Vite for the build tool, and let's use Tailwind CSS for styling so we can make it look clean without writing custom CSS.
```

### Grill-Me Response 2 (Language selection)
```text
1. TypeScript. I want the app to have strong type safety, especially for the Task data model.
```

### Grill-Me Response 3 (Task data model)
```text
(Recommended) Just a title (text string) — keep it minimal
```

### Grill-Me Response 4 (Empty task handling)
```text
Trim + prevent — silently trim whitespace and block if result is empty
```

### Grill-Me Response 5 (Task filtering)
```text
(Recommended) Yes — provide All / Active / Completed filter tabs
```

### Grill-Me Response 6 (Delete behavior)
```text
2. No. Let's delete immediately on click to keep the UX frictionless. A confirmation modal is too heavy for a simple task list.
```

### Grill-Me Response 7 (Edit interaction)
```text
Dedicated edit button — show a pencil icon that swaps the title to an input field
```

### Prompt 3
```text
Please save the implementation plan as a markdown file in the project folder at docs/implementation-plan.md so I can review it.
```

### Prompt 4
```text
Please save the artifact into artifacts/ so I can review it.
```

### Prompt 5
```text
This plan looks perfect. Approved. Please proceed with executing the milestones one by one, verifying after each step as planned.
```

### Prompt 6
```text
Looks good. Please save milestone 1 report in your response to /artifacts and proceed with Milestone 2, and then continue through the remaining milestones. Pause and show me the commit message after each one as you are doing now.
```

### Prompt 7
```text
i think you missed milestone 2 report in artifacts/
```

### Prompt 8
```text
We fast forwarded through milestones 2,3 and 4 without comitting. Please analyze the changes, unstage everything, and create three distinct, sequential commits for Milestones 2, 3, and 4 using our commit messages in the milestone report files we made
```

### Prompt 9
```text
When I add a task with a very long continuous string (no spaces), it pushes the edit and delete buttons off the screen and breaks the horizontal layout. Please fix TaskItem.tsx so that long text wraps properly inside the container without breaking the flex layout.
```

### Prompt 10
```text
yes please
```

### Prompt 11
```text
The checkbox for an item should stay on the top left of the card when its text span multiple lines, also change color when its ticked to a faint blue to be more inline with the app theme, and checked item should appear below unchecked items on the all tasks tab
```

### Prompt 12
```text
yes please, i also made some minor UI changes, just include everything with this commit
```

### Prompt 13
```text
1. Please export all exact prompts i have made into docs/prompt.md including my responses during grill-me, paste them as-is, no clean up.
2. Write a script for user to be able to run the app from root in one command
3. Write a straightforward README.md describing the app, and instruction on how to run it
```
