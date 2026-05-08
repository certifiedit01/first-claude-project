export default function StatCard({ label, value, delta, positive }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        <span
          className={
            'text-xs font-medium px-2 py-0.5 rounded-full ' +
            (positive
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-rose-50 text-rose-700')
          }
        >
          {delta}
        </span>
      </div>
    </div>
  )
}
