export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            C
          </div>
          <div>
            <h1 className="text-base font-semibold text-slate-900">Claude Dashboard</h1>
            <p className="text-xs text-slate-500">first-claude-project</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-slate-600">AJ Perez</span>
          <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold">
            AP
          </div>
        </div>
      </div>
    </header>
  )
}
