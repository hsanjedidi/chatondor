import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Images, ZoomIn } from "lucide-react";

import { useLanguage } from "@/i18n/language-context";
import { PageHero } from "@/components/PageHero";

// ======================================================
// GALLERY IMAGES - PUBLIC FOLDER
// ======================================================

const galleryImages = [
  "/images/galerie/gal1.jpg",
  "/images/galerie/gal2.jpg",
  "/images/galerie/gal3.jpg",
  "/images/galerie/gal4.jpg",
  "/images/galerie/gal5.jpg",
  "/images/galerie/gal6.jpg",
  "/images/galerie/gal7.jpg",
  "/images/galerie/gal8.jpg",
  "/images/galerie/gal9.jpg",
  "/images/galerie/gal10.jpg",
  "/images/galerie/gal11.jpg",
  "/images/galerie/gal12.jpg",
];

// ======================================================
// GALLERY PAGE
// ======================================================

export function GalleryPage() {
  const { t } = useLanguage();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const total = galleryImages.length;

  const activeSrc = openIndex !== null ? galleryImages[openIndex] : null;

  // ====================================================
  // KEYBOARD NAVIGATION
  // ====================================================

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }

      if (event.key === "ArrowRight") {
        setOpenIndex((current) =>
          current === null ? null : (current + 1) % total,
        );
      }

      if (event.key === "ArrowLeft") {
        setOpenIndex((current) =>
          current === null ? null : (current - 1 + total) % total,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, total]);

  // ====================================================
  // NAVIGATION FUNCTIONS
  // ====================================================

  const nextImage = (event?: React.MouseEvent) => {
    event?.stopPropagation();

    setOpenIndex((current) =>
      current === null ? null : (current + 1) % total,
    );
  };

  const previousImage = (event?: React.MouseEvent) => {
    event?.stopPropagation();

    setOpenIndex((current) =>
      current === null ? null : (current - 1 + total) % total,
    );
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.title")}
        text={t("gallery.text")}
      />

      {/* GALLERY SECTION */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-50/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-brand-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* SECTION HEADER */}
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-800">
              <Images size={26} />
            </div>

            <span className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
              {t("gallery.eyebrow")}
            </span>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-brand-950 md:text-4xl">
              {t("gallery.title")}
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-brand-600" />

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
              {t("gallery.text")}
            </p>

            <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {total} Photos
            </div>
          </div>

          {/* MASONRY GALLERY */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`${t("gallery.open")} ${index + 1}`}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className="h-auto min-h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand-950/0 transition-all duration-500 group-hover:bg-brand-950/40">
                  <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/90 text-brand-900 opacity-0 shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <ZoomIn size={22} />
                  </div>
                </div>

                {/* Image number */}
                <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-brand-950/50 px-3 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          LIGHTBOX
      ================================================= */}

      {activeSrc !== null && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("gallery.open")}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur-md animate-fade-up [animation-duration:0.3s]"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label={t("gallery.close")}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {/* COUNTER */}
          <div className="absolute left-1/2 top-7 -translate-x-1/2 text-sm font-medium tracking-widest text-white/70">
            {String(openIndex + 1).padStart(2, "0")}
            <span className="mx-2 text-white/30">/</span>
            {String(total).padStart(2, "0")}
          </div>

          {/* PREVIOUS BUTTON */}
          {total > 1 && (
            <button
              type="button"
              aria-label={t("gallery.prev")}
              onClick={previousImage}
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* ACTIVE IMAGE */}
          <img
            key={activeSrc}
            src={activeSrc}
            alt={`Gallery image ${openIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[82vh] max-w-[85vw] rounded-xl object-contain shadow-2xl animate-fade-up"
          />

          {/* NEXT BUTTON */}
          {total > 1 && (
            <button
              type="button"
              aria-label={t("gallery.next")}
              onClick={nextImage}
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* BOTTOM LABEL */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            {t("gallery.title")}
          </div>
        </div>
      )}
    </>
  );
}
