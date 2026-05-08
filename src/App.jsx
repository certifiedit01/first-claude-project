import { useState } from 'react'
import Header from './components/Header.jsx'
import StatGrid from './components/StatGrid.jsx'
import ChartCard from './components/ChartCard.jsx'
import ActivityTable from './components/ActivityTable.jsx'
import Settings from './components/Settings.jsx'

export default function App() {
  const [view, setView] = useState('dashboard')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header view={view} onNavigate={setView} />
      <main className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        {view === 'dashboard' && (
          <>
            <section>
              <h2 className="text-lg font-semibold text-slate-700 mb-4">Overview</h2>
              <StatGrid />
            </section>
            <section className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ChartCard />
              </div>
              <div>
                <ActivityTable />
              </div>
            </section>
          </>
        )}
        {view === 'settings' && <Settings />}
      </main>
    </div>
  )
}
