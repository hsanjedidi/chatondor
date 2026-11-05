import { useLanguage } from '@/i18n/language-context';
import { siteImages } from '@/lib/site-images';
import { PageHero } from '@/components/PageHero';

export function TeamPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t('team.eyebrow')} title={t('team.title')} text={t('team.text')} />

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {siteImages.team.map((src) => (
            <article
              key={src}
              className="group overflow-hidden rounded-3xl border border-gold-200/70 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative overflow-hidden bg-gold-50">
                <img
                  src={src}
                  alt={t('team.namePlaceholder')}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-7">
                <h2 className="text-2xl font-semibold text-brand-900">{t('team.namePlaceholder')}</h2>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">{t('team.rolePlaceholder')}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-700">{t('team.bioPlaceholder')}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}
