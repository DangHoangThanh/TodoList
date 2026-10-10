import { useEffect, useState } from 'react'
import { loadTasks, saveTasks } from '../utils/storage'
import type { Task } from '../types/task'

/**
 * Custom hook that manages Task[] state backed by localStorage.
 * Reads persisted tasks on mount and writes back on every change.
 */
export function useTaskStorage(): [Task[], React.Dispatch<React.SetStateAction<Task[]>>] {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  return [tasks, setTasks]
}
