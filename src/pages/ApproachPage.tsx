import { Eye, Hand, PartyPopper, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/language-context';
import { siteImages } from '@/lib/site-images';
import { PageHero } from '@/components/PageHero';

const STEPS = [
  { icon: Eye, id: 1 },
  { icon: Hand, id: 2 },
  { icon: Sparkles, id: 3 },
  { icon: PartyPopper, id: 4 },
] as const;

export function ApproachPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t('approach.eyebrow')} title={t('approach.title')} text={t('approach.text')} />

      <section>
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:px-8 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map(({ icon: Icon, id }) => (
            <article
              key={id}
              className="group flex flex-col gap-5 rounded-3xl border border-gold-200/70 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-brand-800 transition duration-500 group-hover:bg-gold-500 group-hover:text-brand-900">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <span className="font-display text-3xl font-semibold text-gold-300">0{id}</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-900">{t(`approach.step.${id}.title` as const)}</h3>
              <p className="text-sm leading-relaxed text-brand-700">{t(`approach.step.${id}.text` as const)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-soft">
            <img src={siteImages.hugging} alt={t('approach.partnerTitle')} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">{t('approach.partnerTitle')}</h2>
            <p className="text-base leading-relaxed text-brand-700">{t('approach.partnerText')}</p>
          </div>
        </div>
      </section>

    </>
  );
}
