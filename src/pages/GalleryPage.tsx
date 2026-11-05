import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/i18n/language-context';
import { siteImages } from '@/lib/site-images';
import { PageHero } from '@/components/PageHero';

export function GalleryPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const total = siteImages.gallery.length;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
      if (event.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % total));
      if (event.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, total]);

  const activeSrc = openIndex === null ? null : siteImages.gallery[openIndex];

  return (
    <>
      <PageHero eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} text={t('gallery.text')} />

      <section>
        <div className="mx-auto max-w-7xl columns-1 gap-5 px-5 py-20 sm:columns-2 sm:px-8 lg:columns-3">
          {siteImages.gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={t('gallery.open')}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-brand-900/0 transition duration-500 group-hover:bg-brand-900/25" />
            </button>
          ))}
        </div>
      </section>

      {activeSrc && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-900/95 p-4 animate-fade-up [animation-duration:0.3s]"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label={t('gallery.close')}
            className="absolute end-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={t('gallery.prev')}
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex((openIndex - 1 + total) % total);
            }}
            className="absolute start-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={activeSrc}
            alt=""
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-soft"
          />
          <button
            type="button"
            aria-label={t('gallery.next')}
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex((openIndex + 1) % total);
            }}
            className="absolute end-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

    </>
  );
}
