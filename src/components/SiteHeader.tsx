import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { routeHref, type Route } from "@/lib/router";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { NAV_LABELS } from "@/lib/navigation";

interface SiteHeaderProps {
  route: Route;
}

// Ordre personnalisé des liens
const NAV_ORDER: Route[] = [
  "/",
  "/about",
  "/univers",
  "/approche",
  "/programme",
  "/team",
  "/tour",
  "/gallery",
  "/contact",
];

export function SiteHeader({ route }: SiteHeaderProps) {
  const { t, dir } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors duration-300 ${
      active ? "text-brand-900" : "text-brand-500 hover:text-brand-900"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        {/* Logo */}
        <a
          href={routeHref("/")}
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center">
            <img
              src="/images/kindergarten/logo.webp"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {NAV_ORDER.map((item) => (
            <a
              key={item}
              href={routeHref(item)}
              className={linkClass(route === item)}
              aria-current={route === item ? "page" : undefined}
            >
              {t(NAV_LABELS[item])}
            </a>
          ))}
        </nav>

        {/* Language + Mobile Menu */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-800 transition hover:bg-brand-50 xl:hidden"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className="border-t border-brand-100 bg-ivory px-5 pb-6 pt-3 xl:hidden"
          aria-label="Mobile"
          dir={dir}
        >
          <ul className="flex flex-col">
            {NAV_ORDER.map((item) => (
              <li
                key={item}
                className="border-b border-brand-100 last:border-0"
              >
                <a
                  href={routeHref(item)}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-4 font-display text-xl ${
                    route === item ? "text-mint-600" : "text-brand-900"
                  }`}
                  aria-current={route === item ? "page" : undefined}
                >
                  {t(NAV_LABELS[item])}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
