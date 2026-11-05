import { Blocks, Moon, Palette, TreePine } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { siteImages } from "@/lib/site-images";
import { PageHero } from "@/components/PageHero";

const SPACES = [
  { icon: Blocks, id: 1, image: siteImages.classroom },
  { icon: Palette, id: 2, image: siteImages.painting },
  { icon: Moon, id: 3, image: siteImages.hugging },
  { icon: TreePine, id: 4, image: siteImages.gallery[0] },
] as const;

const GALLERY_STRIP = siteImages.gallery.slice(0, 8);

export function UniversePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("universe.eyebrow")}
        title={t("universe.title")}
        text={t("universe.text")}
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 sm:px-8 md:grid-cols-2">
          {SPACES.map(({ icon: Icon, id, image }) => (
            <article
              key={id}
              className="group overflow-hidden rounded-3xl border border-gold-200/70 bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  alt={t(`universe.space.${id}.title` as const)}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-5 p-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-100 text-gold-700 transition duration-500 group-hover:bg-gold-500 group-hover:text-brand-900">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-brand-900">
                    {t(`universe.space.${id}.title` as const)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-700">
                    {t(`universe.space.${id}.text` as const)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">
              {t("universe.galleryTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_STRIP.map((src) => (
              <div
                key={src}
                className="aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={src}
                  alt={t("universe.galleryTitle")}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
