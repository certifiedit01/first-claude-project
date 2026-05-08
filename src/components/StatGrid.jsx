import StatCard from './StatCard.jsx'
import { stats } from '../data/mock.js'

export default function StatGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  )
}
