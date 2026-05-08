export default function Header({ view, onNavigate }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'settings', label: 'Settings' },
  ]
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <h1 className="text-base font-semibold text-slate-900">Claude Dashboard</h1>
              <p className="text-xs text-slate-500">first-claude-project</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-1">
            {tabs.map((t) => {
              const active = view === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onNavigate(t.id)}
                  className={
                    'px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ' +
                    (active
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100')
                  }
                >
                  {t.label}
                </button>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-slate-600">AJ Perez</span>
          <button
            type="button"
            onClick={() => onNavigate('settings')}
            className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold hover:bg-slate-300"
            aria-label="Open profile settings"
          >
            AP
          </button>
        </div>
      </div>
    </header>
  )
}
