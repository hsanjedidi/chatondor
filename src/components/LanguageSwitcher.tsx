import { useLanguage } from '@/i18n/language-context';
import type { Language } from '@/i18n/language-context';

const LANGUAGES: { code: Language; short: string; labelKey: 'lang.fr' | 'lang.en' | 'lang.ar' }[] = [
  { code: 'fr', short: 'FR', labelKey: 'lang.fr' },
  { code: 'en', short: 'EN', labelKey: 'lang.en' },
  { code: 'ar', short: 'AR', labelKey: 'lang.ar' },
];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-brand-100 bg-white p-1 text-xs font-semibold shadow-card" role="group" aria-label="Language">
      {LANGUAGES.map((item) => {
        const active = lang === item.code;
        return (
          <button
            key={item.code}
            type="button"
            title={t(item.labelKey)}
            aria-pressed={active}
            onClick={() => setLang(item.code)}
            className={`rounded-full px-3 py-1.5 transition duration-300 ${
              active ? 'bg-brand-900 text-white' : 'text-brand-500 hover:text-brand-900'
            }`}
          >
            {item.short}
          </button>
        );
      })}
    </div>
  );
}
