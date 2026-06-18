import { SearchX } from 'lucide-react';

export default function EmptyState({ title, message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
        <SearchX size={22} className="text-gray-400" />
      </div>
      <p className="text-[15px] font-semibold text-gray-800">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-gray-500">{message}</p>
    </div>
  );
}
