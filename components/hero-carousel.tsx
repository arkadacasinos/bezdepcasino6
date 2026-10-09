function ArrowLeft({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="Предыдущий баннер"
      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-night/70 text-snow hover:bg-flare"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <path d="m14 6-6 6 6 6" />
      </svg>
    </a>
  );
}

function ArrowRight({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="Следующий баннер"
      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-night/70 text-snow hover:bg-flare"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <path d="m10 6 6 6-6 6" />
      </svg>
    </a>
  );
}

export default function HeroCarousel() {
  return (
    <section aria-label="Акции БЕЗДЕП Казино" className="px-3 pt-3 md:px-6 md:pt-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-panel">
        <div className="w8k3-scroll flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
          <article id="w8-slide-1" className="relative h-96 w-full shrink-0 snap-start md:h-105">
            <img
              src="/img/hero-dealer.jpg"
              alt="Дилер БЕЗДЕП Казино с розовыми фишками на фоне ночного города"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-5 md:gap-3 md:p-10">
              <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-snow text-balance md:text-5xl">
                Бездеп ждёт — заходи
              </h1>
              <p className="text-base text-snow/90 md:text-xl">Бездепозитный бонус за регистрацию — без депозита</p>
              <a
                href="#bezdepozitnyj-bonus-za-registraciyu"
                className="mt-1 rounded-full bg-flare px-7 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-snow hover:brightness-110 md:text-base"
              >
                Играть
              </a>
            </div>
            <ArrowLeft href="#w8-slide-3" />
            <ArrowRight href="#w8-slide-2" />
          </article>
          <article id="w8-slide-2" className="relative h-96 w-full shrink-0 snap-start md:h-105">
            <img
              src="/img/hero-chips.jpg"
              alt="Стопка розовых фишек и золотые монеты — бездеп бонусы БЕЗДЕП Казино"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-5 md:gap-3 md:p-10">
              <p className="font-heading text-2xl font-bold uppercase leading-tight text-snow text-balance md:text-4xl">
                Фриспины без депозита
              </p>
              <p className="text-base text-snow/90 md:text-xl">Бездеп бонусы на слоты сразу после верификации</p>
              <a
                href="#vidy-bezdep-bonusov"
                className="mt-1 rounded-full bg-flare px-7 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-snow hover:brightness-110 md:text-base"
              >
                Играть
              </a>
            </div>
            <ArrowLeft href="#w8-slide-1" />
            <ArrowRight href="#w8-slide-3" />
          </article>
          <article id="w8-slide-3" className="relative h-96 w-full shrink-0 snap-start md:h-105">
            <img
              src="/img/hero-live.jpg"
              alt="Лайв-рулетка БЕЗДЕП Казино с неоновой подсветкой"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-5 md:gap-3 md:p-10">
              <p className="font-heading text-2xl font-bold uppercase leading-tight text-snow text-balance md:text-4xl">
                Дилер на связи 24/7
              </p>
              <p className="text-base text-snow/90 md:text-xl">Бездепы в казино работают и за лайв-столами</p>
              <a
                href="#bezdepy-za-registraciyu-lajv"
                className="mt-1 rounded-full bg-flare px-7 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-snow hover:brightness-110 md:text-base"
              >
                Играть
              </a>
            </div>
            <ArrowLeft href="#w8-slide-2" />
            <ArrowRight href="#w8-slide-1" />
          </article>
        </div>
      </div>
    </section>
  );
}
