import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { CONTACT } from "@/lib/contact-info";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        text={t("contact.text")}
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="rounded-[32px] border border-gold-200/70 bg-white p-8 shadow-soft sm:p-12 lg:col-span-3">
            <h2 className="mb-8 text-3xl font-semibold text-brand-900">
              {t("contact.formTitle")}
            </h2>

            <ContactForm />
          </div>

          {/* Contact Information */}
          <aside className="flex flex-col gap-5 rounded-[32px] bg-brand-800 p-8 text-brand-50 sm:p-10 lg:col-span-2">
            <h2 className="text-3xl font-semibold text-white">
              {t("contact.infoTitle")}
            </h2>

            <ul className="flex flex-col gap-6 text-sm">
              {/* Location */}
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                  <MapPin className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-200">
                    {t("contact.placeLabel")}
                  </p>
                  <p className="mt-1 text-base text-white">
                    {t("common.place")}
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                  <Phone className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-200">
                    {t("contact.phoneLabel")}
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    dir="ltr"
                    className="mt-1 block text-base text-white transition hover:text-gold-300"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-200">
                    {t("contact.emailLabel")}
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block break-all text-base text-white transition hover:text-gold-300"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              {/* Working Hours */}
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                  <Clock className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-200">
                    {t("contact.hoursLabel")}
                  </p>
                  <p className="mt-1 text-base text-white">
                    {t("common.hours")}
                  </p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
