import Header from './components/Header.jsx'
import StatGrid from './components/StatGrid.jsx'
import ChartCard from './components/ChartCard.jsx'
import ActivityTable from './components/ActivityTable.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-8 space-y-8">
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
      </main>
    </div>
  )
}
