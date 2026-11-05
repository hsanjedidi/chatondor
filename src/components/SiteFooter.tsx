import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { ROUTES, routeHref } from "@/lib/router";
import { siteImages } from "@/lib/site-images";
import { CONTACT } from "@/lib/contact-info";
import { NAV_LABELS } from "@/lib/navigation";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div className="flex flex-col gap-5">
          <a href={routeHref("/")} className="flex items-center gap-3">
            <div className="flex h-40 w-40 shrink-0 items-center justify-center">
              <img
                src="/images/kindergarten/logo.webp"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>

         
          </a>
          <p className="max-w-xs text-sm text-brand-200">
            {t("footer.tagline")}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={t("common.instagramAlt")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <img
                src={siteImages.instagram}
                alt=""
                className="h-5 w-5 object-contain"
              />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label={t("common.facebookAlt")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <img
                src={siteImages.facebook}
                alt=""
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            {t("common.usefulLinks")}
          </h3>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {ROUTES.map((item) => (
              <li key={item}>
                <a
                  href={routeHref(item)}
                  className="text-brand-100 transition hover:text-gold-300"
                >
                  {t(NAV_LABELS[item])}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            {t("contact.infoTitle")}
          </h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>{t("common.place")}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold-300" />
              <a
                href={`tel:${CONTACT.phoneHref}`}
                dir="ltr"
                className="transition hover:text-gold-300"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold-300" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition hover:text-gold-300"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-gold-300" />
              <span>{t("common.hours")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-brand-300 sm:px-8">
          © {new Date().getFullYear()} {t("brand")}. {t("common.rights")}
        </p>
      </div>
    </footer>
  );
}
