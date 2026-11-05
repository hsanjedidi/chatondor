import { Clock, Play } from 'lucide-react';
import { useLanguage } from '@/i18n/language-context';
import { routeHref } from '@/lib/router';
import { siteImages } from '@/lib/site-images';
import { PageHero } from '@/components/PageHero';

export function TourPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t('tour.eyebrow')} title={t('tour.title')} text={t('tour.text')} />

      <section>
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-gold-200/70 shadow-soft">
            <img src={siteImages.tour} alt={t('tour.title')} className="aspect-video w-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-brand-900/45 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-soft">
                <Play className="h-6 w-6 fill-current" />
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-900">
                <Clock className="h-3.5 w-3.5" />
                {t('tour.badge')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-8">
          <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">{t('tour.visitTitle')}</h2>
          <p className="text-base text-brand-700">{t('tour.visitText')}</p>
          <a
            href={routeHref('/contact')}
            className="inline-flex items-center gap-2 rounded-full bg-brand-800 px-8 py-4 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            {t('tour.visitButton')}
          </a>
        </div>
      </section>

    </>
  );
}
