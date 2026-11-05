import { Baby, Compass, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/i18n/language-context';
import { siteImages } from '@/lib/site-images';
import { PageHero } from '@/components/PageHero';

const AGES = [
  { icon: Baby, id: 1 },
  { icon: Compass, id: 2 },
  { icon: GraduationCap, id: 3 },
] as const;

const SLOTS = [1, 2, 3, 4, 5, 6] as const;

export function ProgramPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t('programme.eyebrow')} title={t('programme.title')} text={t('programme.text')} />

      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">{t('programme.agesTitle')}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {AGES.map(({ icon: Icon, id }) => (
              <article
                key={id}
                className="group flex flex-col gap-5 rounded-3xl border border-gold-200/70 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-brand-800 transition duration-500 group-hover:bg-gold-500 group-hover:text-brand-900">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="text-xl font-semibold text-brand-900">{t(`programme.age.${id}.title` as const)}</h3>
                <p className="text-sm leading-relaxed text-brand-700">{t(`programme.age.${id}.text` as const)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-soft lg:sticky lg:top-28">
            <img src={siteImages.classroom} alt={t('programme.dayTitle')} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-brand-900 sm:text-5xl">{t('programme.dayTitle')}</h2>
            <ol className="mt-10 flex flex-col">
              {SLOTS.map((id) => (
                <li key={id} className="relative flex gap-6 pb-10 last:pb-0">
                  {id < SLOTS.length && <span aria-hidden="true" className="absolute left-[19px] top-10 h-full w-px bg-gold-200" />}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-semibold text-brand-900">
                    {id}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-lg font-semibold text-brand-900">{t(`programme.slot.${id}.title` as const)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-700">{t(`programme.slot.${id}.text` as const)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

    </>
  );
}
