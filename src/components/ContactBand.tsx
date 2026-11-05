import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n/language-context';
import { routeHref } from '@/lib/router';
import { CONTACT } from '@/lib/contact-info';

export function ContactBand() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-800 text-brand-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">{t('contact.eyebrow')}</span>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">{t('common.contactTitle')}</h2>
          <p className="max-w-xl text-base text-brand-100">{t('common.contactText')}</p>
          <a
            href={routeHref('/contact')}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-brand-900 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-gold-400"
          >
            {t('common.contactButton')}
            <ArrowRight className="h-4 w-4 [[dir=rtl]_&]:rotate-180" />
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Phone className="mb-4 h-5 w-5 text-gold-300" />
            <p className="text-xs uppercase tracking-[0.18em] text-brand-200">{t('contact.phoneLabel')}</p>
            <a href={`tel:${CONTACT.phoneHref}`} dir="ltr" className="mt-1 block text-lg font-semibold text-white transition hover:text-gold-300">
              {CONTACT.phone}
            </a>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Mail className="mb-4 h-5 w-5 text-gold-300" />
            <p className="text-xs uppercase tracking-[0.18em] text-brand-200">{t('contact.emailLabel')}</p>
            <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all text-lg font-semibold text-white transition hover:text-gold-300">
              {CONTACT.email}
            </a>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
            <Clock className="mb-4 h-5 w-5 text-gold-300" />
            <p className="text-xs uppercase tracking-[0.18em] text-brand-200">{t('contact.hoursLabel')}</p>
            <p className="mt-1 text-lg font-semibold text-white">{t('common.hours')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
