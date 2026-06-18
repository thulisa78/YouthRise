import { Bookmark } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ListingCard({ item, type, accentColor, metaItems }) {
  const { isSaved, toggleSaved, markViewed } = useApp();
  const saved = isSaved(item.id, type);

  return (
    <div
      onMouseEnter={() => markViewed(item.id)}
      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-bold text-gray-900">{item.name}</h3>
          <p className="mt-0.5 text-sm text-gray-500">{item.provider}</p>
        </div>
        <button
          aria-label={saved ? 'Remove from saved' : 'Save'}
          onClick={() => toggleSaved(item.id, type)}
          className={`shrink-0 rounded-full p-2 transition-colors ${
            saved
              ? 'bg-amber-50 text-amber-500'
              : 'text-gray-300 hover:bg-gray-100 hover:text-gray-400'
          }`}
        >
          <Bookmark size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {metaItems.map((m, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${accentColor.badge}`}
          >
            {m.icon}
            {m.label}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full rounded-xl py-2.5 text-sm font-semibold text-white text-center transition-opacity hover:opacity-90 ${accentColor.button}`}
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
