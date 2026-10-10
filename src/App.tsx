import { useState } from 'react'
import FilterBar from './components/FilterBar'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { useTaskStorage } from './hooks/useLocalStorage'
import type { Filter } from './types/task'

export default function App() {
  const [tasks, setTasks] = useTaskStorage()
  const [filter, setFilter] = useState<Filter>('all')

  // Counts for filter tabs
  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  }

  function handleAdd(title: string) {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function handleEdit(id: string, newTitle: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
    )
  }

  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">To-Do List</h1>
          <p className="text-sm text-gray-500 mt-1">
            {counts.active === 0
              ? 'All done! 🎉'
              : `${counts.active} task${counts.active !== 1 ? 's' : ''} remaining`}
          </p>
        </div>

        {/* Add task */}
        <TaskInput onAdd={handleAdd} />

        {/* Filter tabs */}
        <FilterBar current={filter} counts={counts} onChange={setFilter} />

        {/* Task list */}
        <TaskList
          tasks={tasks}
          filter={filter}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}
