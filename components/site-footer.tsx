const hashtags = [
  { label: "#бездепозитныебонусы", href: "#bezdepozitnye-bonusy" },
  { label: "#бездепозитныйбонус", href: "#bezdepozitnye-bonusy" },
  { label: "#бездепозитныйбонусзарегистрацию", href: "#bezdepozitnyj-bonus-za-registraciyu" },
  { label: "#бездепозитныебонусызарегистрацию", href: "#itog" },
  { label: "#бездеп", href: "#bezdepozitnyj-bonus-za-registraciyu" },
  { label: "#бездепы", href: "#bezdepy-v-kazino" },
  { label: "#бездепбонусы", href: "#vidy-bezdep-bonusov" },
  { label: "#бездепбонус", href: "#bezdep-bonus-bezopasnost" },
  { label: "#бездепызарегистрацию", href: "#bezdepy-za-registraciyu-lajv" },
  { label: "#бездепзарегистрацию", href: "#bezdepozitnyj-bonus-za-registraciyu" },
  { label: "#бездепозитныйбонусказино", href: "#kak-otygrat-bezdep" },
  { label: "#бездепывказино", href: "#bezdepy-v-kazino" },
  { label: "#бездепыказино", href: "#bezdepy-kazino-vs-pakety" },
  { label: "#бонусказино", href: "#itog" },
  { label: "#бонусывказино", href: "#bonusy-v-kazino-mobile" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-snow/10 bg-coal">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="w8k3-logo-mark flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-wide text-flare">БЕЗДЕП</span>
            <span className="text-xs font-semibold tracking-widest text-snow">КАЗИНО</span>
          </span>
          <p className="text-xs text-fog">18+ Играйте ответственно. © 2026 БЕЗДЕП Казино</p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Ключевые темы сайта">
          {hashtags.map((tag) => (
            <li key={tag.label}>
              <a
                href={tag.href}
                className="block rounded-full border border-snow/10 px-3 py-1 text-xs text-fog transition-colors hover:border-flare hover:text-snow"
              >
                {tag.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs leading-relaxed text-fog">
          Материал носит информационный характер. Бездепозитные бонусы и бездепы выдаются на условиях конкретных акций: проверяйте
          вейджер, сроки и лимиты вывода в правилах казино до активации подарка.
        </p>
      </div>
    </footer>
  );
}
