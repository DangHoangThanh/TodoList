import type { Filter, Task } from '../types/task'
import TaskItem from './TaskItem'

interface TaskListProps {
  tasks: Task[]
  filter: Filter
  onToggle: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
  onDelete: (id: string) => void
}

const EMPTY_MESSAGES: Record<Filter, string> = {
  all: 'No tasks yet. Add one above!',
  active: 'No active tasks — you\'re all caught up! 🎉',
  completed: 'No completed tasks yet. Keep going!',
}

export default function TaskList({ tasks, filter, onToggle, onEdit, onDelete }: TaskListProps) {
  const filtered = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  if (filtered.length === 0) {
    return (
      <p className="text-center text-sm text-gray-400 py-8">
        {EMPTY_MESSAGES[filter]}
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {filtered.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
