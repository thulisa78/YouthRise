export default function PageHero({ icon: Icon, title, subtitle, count, gradient }) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br ${gradient} px-6 py-7 text-white shadow-sm sm:px-8 sm:py-8`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
          <Icon size={22} strokeWidth={2.25} />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-extrabold sm:text-[28px]">{title}</h1>
          </div>
          <p className="mt-1 text-[15px] text-white/90">
            {subtitle}{' '}
            <span className="ml-1 inline-flex items-center rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-semibold align-middle">
              {count} available
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
