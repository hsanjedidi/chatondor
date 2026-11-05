import { Heart, Puzzle, Sun, Users } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { routeHref } from "@/lib/router";
import { siteImages } from "@/lib/site-images";
import { PageHero } from "@/components/PageHero";

const VALUES = [
  { icon: Heart, id: 1 },
  { icon: Puzzle, id: 2 },
  { icon: Sun, id: 3 },
  { icon: Users, id: 4 },
] as const;

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        text={t("about.intro")}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-soft">
            <img
              src={siteImages.painting}
              alt={t("about.storyTitle")}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">
              {t("about.storyEyebrow")}
            </span>
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">
              {t("about.storyTitle")}
            </h2>
            <p className="text-base leading-relaxed text-brand-700">
              {t("about.story1")}
            </p>
            <p className="text-base leading-relaxed text-brand-700">
              {t("about.story2")}
            </p>
            <a
              href={routeHref("/team")}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand-800 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              {t("nav.team")}
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-700">
              {t("about.valuesEyebrow")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-brand-900 sm:text-5xl">
              {t("about.valuesTitle")}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map(({ icon: Icon, id }) => (
              <article
                key={id}
                className="group flex gap-6 rounded-3xl border border-gold-200/70 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-100 text-gold-700 transition duration-500 group-hover:bg-gold-500 group-hover:text-brand-900">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-900">
                    {t(`value.${id}.title` as const)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-700">
                    {t(`value.${id}.text` as const)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
