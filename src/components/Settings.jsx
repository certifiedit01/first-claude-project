import { useState } from 'react'

const initialProfile = {
  displayName: 'AJ Perez',
  username: 'certifiedit01',
  email: 'aj@example.com',
  bio: 'Building my first ever Claude project.',
  timezone: 'America/New_York',
  notifications: {
    productUpdates: true,
    weeklyDigest: true,
    securityAlerts: true,
    marketing: false,
  },
}

const timezones = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Berlin',
  'Asia/Tokyo',
  'Asia/Singapore',
]

export default function Settings() {
  const [profile, setProfile] = useState(initialProfile)
  const [saved, setSaved] = useState(false)

  const update = (field) => (e) => {
    setProfile({ ...profile, [field]: e.target.value })
    setSaved(false)
  }

  const toggleNotification = (key) => () => {
    setProfile({
      ...profile,
      notifications: { ...profile.notifications, [key]: !profile.notifications[key] },
    })
    setSaved(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
  }

  const handleReset = () => {
    setProfile(initialProfile)
    setSaved(false)
  }

  const initials = profile.displayName
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Profile settings</h2>
        <p className="text-sm text-slate-500">Manage how your account appears across the dashboard.</p>
      </div>

      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Profile</h3>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-semibold">
            {initials || '?'}
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">{profile.displayName || 'Unnamed'}</p>
            <p className="text-xs text-slate-500">@{profile.username}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Display name">
            <input
              type="text"
              value={profile.displayName}
              onChange={update('displayName')}
              className={inputClass}
            />
          </Field>
          <Field label="Username">
            <input
              type="text"
              value={profile.username}
              onChange={update('username')}
              className={inputClass}
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={profile.email}
              onChange={update('email')}
              className={inputClass}
            />
          </Field>
          <Field label="Timezone">
            <select value={profile.timezone} onChange={update('timezone')} className={inputClass}>
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Bio" full>
            <textarea
              rows={3}
              value={profile.bio}
              onChange={update('bio')}
              className={inputClass}
            />
          </Field>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h3>
        <div className="space-y-3">
          <Toggle
            label="Product updates"
            description="Feature releases and changelog highlights."
            checked={profile.notifications.productUpdates}
            onChange={toggleNotification('productUpdates')}
          />
          <Toggle
            label="Weekly digest"
            description="A summary of your dashboard activity each Monday."
            checked={profile.notifications.weeklyDigest}
            onChange={toggleNotification('weeklyDigest')}
          />
          <Toggle
            label="Security alerts"
            description="Sign-in attempts and account changes. Recommended."
            checked={profile.notifications.securityAlerts}
            onChange={toggleNotification('securityAlerts')}
          />
          <Toggle
            label="Marketing"
            description="Occasional emails about offers and partner content."
            checked={profile.notifications.marketing}
            onChange={toggleNotification('marketing')}
          />
        </div>
      </section>

      <div className="flex items-center justify-end gap-3">
        {saved && (
          <span className="text-sm text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
            Saved
          </span>
        )}
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Save changes
        </button>
      </div>
    </form>
  )
}

const inputClass =
  'w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'

function Field({ label, children, full }) {
  return (
    <label className={'block ' + (full ? 'sm:col-span-2' : '')}>
      <span className="block text-xs font-medium text-slate-600 mb-1">{label}</span>
      {children}
    </label>
  )
}

function Toggle({ label, description, checked, onChange }) {
  return (
    <label className="flex items-start justify-between gap-4 cursor-pointer">
      <div>
        <p className="text-sm font-medium text-slate-900">{label}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={
          'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ' +
          (checked ? 'bg-indigo-600' : 'bg-slate-300')
        }
      >
        <span
          className={
            'inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ' +
            (checked ? 'translate-x-5' : 'translate-x-0.5')
          }
        />
      </button>
    </label>
  )
}
