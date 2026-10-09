const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
} as const;

export default function CategoryChips() {
  return (
    <nav aria-label="Категории игр" className="px-3 md:px-6">
      <ul className="w8k3-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
        <li>
          <a href="#vidy-bezdep-bonusov" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <circle cx="9" cy="14" r="4" />
              <circle cx="16" cy="16" r="4" />
              <path d="M9 10C9 6 12 4 15 3M16 12c0-3 2-5 4-6" />
            </svg>
            Слоты
          </a>
        </li>
        <li>
          <a href="#bezdepy-za-registraciyu-lajv" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
            </svg>
            Live-казино
          </a>
        </li>
        <li>
          <a href="#bezdepy-za-registraciyu-lajv" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
            </svg>
            Быстрые игры
          </a>
        </li>
        <li>
          <a href="#bezdepozitnye-bonusy" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M12 8v13M3 12h18M12 8c-2 0-4-1-4-3s3-2 4 0c1-2 4-2 4 0s-2 3-4 3Z" />
            </svg>
            Бонусы
          </a>
        </li>
        <li>
          <a href="#bezdepy-kazino-vs-pakety" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <path d="m3 7 4 4 5-6 5 6 4-4v10H3V7Z" />
            </svg>
            ВИП-программа
          </a>
        </li>
        <li>
          <a href="#bonusy-v-kazino-mobile" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4Z" />
              <path d="M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5" />
            </svg>
            Турниры
          </a>
        </li>
        <li>
          <a href="#bezdep-bonus-bezopasnost" className="flex shrink-0 items-center gap-2 rounded-full border border-snow/10 bg-coal px-4 py-2 text-sm font-semibold text-snow hover:border-flare/60">
            <svg {...iconProps} className="text-flare">
              <rect x="3" y="3" width="8" height="8" rx="1.5" />
              <rect x="13" y="3" width="8" height="8" rx="1.5" />
              <rect x="3" y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
            Провайдеры
          </a>
        </li>
      </ul>
    </nav>
  );
}
