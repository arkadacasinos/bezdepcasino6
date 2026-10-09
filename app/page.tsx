import TopBar from "@/components/top-bar";
import HeroCarousel from "@/components/hero-carousel";
import PayoutsTicker from "@/components/payouts-ticker";
import CategoryChips from "@/components/category-chips";
import SeoArticle from "@/components/seo-article";
import SiteFooter from "@/components/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-night">
      <TopBar />
      <main className="flex flex-col gap-4 pb-12 md:gap-6">
        <HeroCarousel />
        <PayoutsTicker />
        <CategoryChips />
        <SeoArticle />
      </main>
      <SiteFooter />
      <a
        href="#voprosy"
        aria-label="Вопросы о бездеп бонусах"
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-flare text-snow shadow-lg shadow-flare/40"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" />
        </svg>
      </a>
    </div>
  );
}
