import {
  ArrowRight,
  Clock,
  Languages,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { routeHref } from "@/lib/router";
import { siteImages } from "@/lib/site-images";

const PILLARS = [
  {
    icon: ShieldCheck,
    titleKey: "pillar.1.title",
    textKey: "pillar.1.text",
    tone: "bg-sky-100 text-sky-600 group-hover:bg-sky-500",
  },
  {
    icon: Languages,
    titleKey: "pillar.2.title",
    textKey: "pillar.2.text",
    tone: "bg-coral-100 text-coral-500 group-hover:bg-coral-400",
  },
  {
    icon: Sparkles,
    titleKey: "pillar.3.title",
    textKey: "pillar.3.text",
    tone: "bg-mint-100 text-mint-600 group-hover:bg-mint-400",
  },
] as const;

export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 end-[-8rem] h-96 w-96 rounded-full bg-gold-200/50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col gap-7">
            <span className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">
              {t("home.eyebrow")}
            </span>
            <h1 className="animate-fade-up text-5xl font-semibold text-brand-900 sm:text-6xl lg:text-7xl [animation-delay:80ms]">
              {t("home.heroTitle")}
            </h1>
            <p className="animate-fade-up max-w-xl text-base text-brand-700 sm:text-lg [animation-delay:160ms]">
              {t("home.heroText")}
            </p>
            <div className="animate-fade-up flex flex-wrap items-center gap-4 [animation-delay:240ms]">
              <a
                href={routeHref("/contact")}
                className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                {t("home.enroll")}
                <ArrowRight className="h-4 w-4 [[dir=rtl]_&]:rotate-180" />
              </a>
              <a
                href={routeHref("/about")}
                className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-7 py-3.5 text-sm font-semibold text-brand-900 transition duration-300 hover:border-gold-500 hover:text-gold-700"
              >
                {t("home.discover")}
              </a>
            </div>
            <ul className="animate-fade-up mt-2 grid grid-cols-1 gap-4 border-t border-gold-200 pt-7 sm:grid-cols-3 [animation-delay:320ms]">
              <li className="flex items-center gap-3 text-sm font-medium text-brand-800">
                <Sparkles className="h-4 w-4 text-gold-600" />
                {t("home.badgeAges")}
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-800">
                <Languages className="h-4 w-4 text-gold-600" />
                {t("home.badgeLangs")}
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-800">
                <Clock className="h-4 w-4 text-gold-600" />
                {t("home.badgeHours")}
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-t-[220px] rounded-b-[40px] border border-gold-300/70" />
            <div className="relative overflow-hidden rounded-t-[200px] rounded-b-[32px] shadow-soft">
              <img
                src={siteImages.classroom}
                alt={t("brand")}
                className="aspect-[4/5] w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>
            <div className="animate-fade-up absolute -bottom-6 start-6 rounded-2xl bg-white px-5 py-4 shadow-soft [animation-delay:400ms]">
              <p className="font-display text-2xl font-semibold text-brand-900">
                {t("brand")}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-700">
                {t("brandSub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">
              {t("home.pillarsTitle")}
            </h2>
            <p className="mt-4 text-base text-brand-700">
              {t("home.pillarsText")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, titleKey, textKey, tone }) => (
              <article
                key={titleKey}
                className="group rounded-[28px] bg-white p-8 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <span
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl transition duration-500 group-hover:text-white ${tone}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="text-2xl font-semibold text-brand-900">
                  {t(titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-700">
                  {t(textKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">
                {t("home.galleryTitle")}
              </h2>
              <p className="mt-4 text-base text-brand-700">
                {t("home.galleryText")}
              </p>
            </div>
            <a
              href={routeHref("/gallery")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition hover:gap-3 hover:text-gold-600"
            >
              {t("home.galleryMore")}
              <ArrowRight className="h-4 w-4 [[dir=rtl]_&]:rotate-180" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {siteImages.gallery.slice(0, 8).map((src, index) => (
              <a
                key={src}
                href={routeHref("/gallery")}
                className={`group relative overflow-hidden rounded-2xl ${index === 0 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={t("home.galleryTitle")}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index === 0 ? "h-full min-h-[240px]" : "aspect-[4/3]"
                  }`}
                />
                <span className="absolute inset-0 bg-brand-900/0 transition duration-500 group-hover:bg-brand-900/20" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">
              {t("home.familyEyebrow")}
            </span>
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">
              {t("home.familyTitle")}
            </h2>
            <p className="text-base text-brand-700">{t("home.familyText")}</p>
            <a
              href={routeHref("/about")}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-300 px-7 py-3.5 text-sm font-semibold text-brand-900 transition duration-300 hover:border-gold-500 hover:text-gold-700"
            >
              {t("home.familyButton")}
              <ArrowRight className="h-4 w-4 [[dir=rtl]_&]:rotate-180" />
            </a>
          </div>
          <div className="order-1 overflow-hidden rounded-[32px] shadow-soft lg:order-2">
            <img
              src={siteImages.hugging}
              alt={t("about.storyTitle")}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
