import type { Filter } from '../types/task'

interface FilterBarProps {
  current: Filter
  counts: { all: number; active: number; completed: number }
  onChange: (filter: Filter) => void
}

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

export default function FilterBar({ current, counts, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-1 border-b border-gray-200 mb-4">
      {FILTERS.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-t-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
            current === value
              ? 'bg-white border border-b-white border-gray-200 text-blue-600 -mb-px'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          {label}
          <span className="ml-1.5 text-xs bg-gray-100 text-gray-600 rounded-full px-1.5 py-0.5">
            {counts[value]}
          </span>
        </button>
      ))}
    </div>
  )
}
