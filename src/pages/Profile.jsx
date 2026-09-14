import { useState } from 'react';
import {
  User,
  Star,
  Trophy,
  BookOpen,
  Briefcase,
  GraduationCap,
  Bookmark,
  History as HistoryIcon,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { bursaries, fundingOptions, courses } from '../data/listings';

function ProgressRow({ icon: Icon, label, value, goal, color }) {
  const pct = Math.min(100, (value / goal) * 100);
  const remaining = Math.max(0, goal - value);
  return (
    <div className="py-3">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium text-gray-800">
          <Icon size={15} className={color} />
          {label}
        </span>
        <span className="text-gray-500">
          {value} / {goal}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-gray-400">
        {remaining === 0 ? 'Goal reached!' : `${remaining} more to reach your goal`}
      </p>
    </div>
  );
}

export default function Profile() {
  const { user, saved, viewedCount, savedCountByType, totalSaved } = useApp();
  const [tab, setTab] = useState('saved');

  const allItems = [
    ...bursaries.map((b) => ({ ...b, type: 'bursary' })),
    ...fundingOptions.map((f) => ({ ...f, type: 'funding' })),
    ...courses.map((c) => ({ ...c, type: 'course' })),
  ];
  const savedItems = allItems.filter((item) =>
    saved.some((s) => s.id === item.id && s.type === item.type)
  );

  return (
    <div className="space-y-5">
      {/* Header card */}
      <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 p-6 text-white sm:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <User size={26} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold">{user.name}</h1>
            <p className="text-sm text-white/85">{user.email}</p>
            <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-amber-200">
              <Star size={12} fill="currentColor" /> {user.role}
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/15 py-4 text-center">
            <p className="text-2xl font-extrabold">{totalSaved}</p>
            <p className="text-sm text-white/85">Saved Items</p>
          </div>
          <div className="rounded-xl bg-white/15 py-4 text-center">
            <p className="text-2xl font-extrabold">{viewedCount}</p>
            <p className="text-sm text-white/85">Items Viewed</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white">
            <Trophy size={14} />
          </div>
          <h2 className="text-base font-bold text-gray-900">My Progress</h2>
        </div>
        <div className="divide-y divide-gray-100">
          <ProgressRow
            icon={BookOpen}
            label="Courses Explored"
            value={savedCountByType('course')}
            goal={5}
            color="text-blue-500"
          />
          <ProgressRow
            icon={Briefcase}
            label="Funding Applications Saved"
            value={savedCountByType('funding')}
            goal={3}
            color="text-amber-500"
          />
          <ProgressRow
            icon={GraduationCap}
            label="Bursaries Saved"
            value={savedCountByType('bursary')}
            goal={3}
            color="text-emerald-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="grid grid-cols-2">
          <button
            onClick={() => setTab('saved')}
            className={`flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${
              tab === 'saved' ? 'bg-gray-50 text-gray-900' : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <Bookmark size={15} /> Saved ({totalSaved})
          </button>
          <button
            onClick={() => setTab('history')}
            className={`flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${
              tab === 'history' ? 'bg-gray-50 text-gray-900' : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <HistoryIcon size={15} /> History ({viewedCount})
          </button>
        </div>

        <div className="border-t border-gray-100 p-5">
          {tab === 'saved' ? (
            savedItems.length === 0 ? (
              <p className="py-8 text-center text-sm text-gray-500">
                Nothing saved yet. Bookmark a bursary, funding option, or course to see it here.
              </p>
            ) : (
              <ul className="space-y-2">
                {savedItems.map((item) => (
                  <li
                    key={`${item.type}-${item.id}`}
                    className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-gray-800">{item.name}</span>
                    <span className="text-xs capitalize text-gray-400">{item.type}</span>
                  </li>
                ))}
              </ul>
            )
          ) : viewedCount === 0 ? (
            <p className="py-8 text-center text-sm text-gray-500">
              Hover over or open a listing to add it to your history.
            </p>
          ) : (
            <p className="py-8 text-center text-sm text-gray-500">
              You&rsquo;ve viewed {viewedCount} item{viewedCount === 1 ? '' : 's'} so far.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
