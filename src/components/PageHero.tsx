import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  text?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, text, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-ivory to-ivory">
      <span className="pointer-events-none absolute start-[8%] top-16 h-16 w-16 animate-float rounded-full bg-gold-200/70" />
      <span className="pointer-events-none absolute end-[10%] top-24 h-10 w-10 animate-float rounded-full bg-coral-200/80 [animation-delay:1.5s]" />
      <span className="pointer-events-none absolute end-[22%] bottom-20 h-14 w-14 animate-float rounded-2xl bg-mint-200/80 [animation-delay:3s]" />
      <span className="pointer-events-none absolute start-[18%] bottom-16 h-8 w-8 animate-float rounded-full bg-sky-200 [animation-delay:2s]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-8 sm:py-28">
        <span className="animate-fade-up inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-700 shadow-card">
          {eyebrow}
        </span>
        <h1 className="animate-fade-up text-4xl font-semibold text-brand-900 sm:text-6xl [animation-delay:80ms]">
          {title}
        </h1>
        {text && (
          <p className="animate-fade-up max-w-2xl text-base text-brand-700 sm:text-lg [animation-delay:160ms]">
            {text}
          </p>
        )}
        {children}
      </div>
      <svg
        className="relative block w-full text-ivory"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
