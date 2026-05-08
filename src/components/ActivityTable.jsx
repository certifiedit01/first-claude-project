import { activity } from '../data/mock.js'

const statusStyles = {
  New: 'bg-indigo-50 text-indigo-700',
  Paid: 'bg-emerald-50 text-emerald-700',
  Churn: 'bg-rose-50 text-rose-700',
  Refund: 'bg-amber-50 text-amber-700',
}

export default function ActivityTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900 mb-4">Recent activity</h3>
      <ul className="divide-y divide-slate-100">
        {activity.map((a) => (
          <li key={a.id} className="py-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-slate-900">{a.user}</p>
              <p className="text-xs text-slate-500">{a.action}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span
                className={
                  'text-[10px] font-semibold px-2 py-0.5 rounded-full ' +
                  (statusStyles[a.status] || 'bg-slate-100 text-slate-700')
                }
              >
                {a.status}
              </span>
              <span className="text-[11px] text-slate-400">{a.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
