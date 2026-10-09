function LogoMark() {
  return (
    <a href="/" className="w8k3-logo-mark flex shrink-0 flex-col leading-none" aria-label="БЕЗДЕП Казино — на главную">
      <span className="font-heading text-lg font-bold tracking-wide text-flare">БЕЗДЕП</span>
      <span className="text-xs font-semibold tracking-widest text-snow">КАЗИНО</span>
    </a>
  );
}

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-snow/5 bg-coal/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 md:gap-4 md:px-6">
        <button type="button" aria-label="Открыть меню" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-snow hover:text-flare">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M2 5h16M2 10h16M2 15h16" />
          </svg>
        </button>
        <LogoMark />
        <nav aria-label="Разделы казино" className="ml-4 hidden items-center gap-6 lg:flex">
          <a href="#bezdepozitnye-bonusy" className="flex items-center gap-1.5 text-sm font-medium text-snow hover:text-flare">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M12 8c-2 0-4-1-4-3s3-2 4 0c1-2 4-2 4 0s-2 3-4 3Z" />
            </svg>
            Бонусы
          </a>
          <a href="#vidy-bezdep-bonusov" className="flex items-center gap-1.5 text-sm font-medium text-snow hover:text-flare">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="15.5" cy="15.5" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            Казино
          </a>
          <a href="#bezdepy-za-registraciyu-lajv" className="flex items-center gap-1.5 text-sm font-medium text-snow hover:text-flare">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
            </svg>
            Live Казино
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button type="button" aria-label="Поиск по сайту" className="hidden h-9 w-9 items-center justify-center rounded-md text-snow hover:text-flare sm:flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <a href="#bezdepozitnye-bonusy" className="rounded-lg border border-snow/15 bg-snow/5 px-3 py-1.5 text-sm font-semibold text-snow hover:border-snow/30">
            Вход
          </a>
          <a href="#bezdepozitnyj-bonus-za-registraciyu" className="relative rounded-full bg-flare px-4 py-1.5 text-sm font-bold text-snow hover:brightness-110">
            Регистрация
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-snow text-flare" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="8" width="18" height="13" rx="2" />
                <path d="M12 8v13M3 12h18" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
