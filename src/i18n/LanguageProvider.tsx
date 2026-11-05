import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ar, en, fr, type TranslationKey } from "@/i18n/translations";
import { LanguageContext, type Language } from "@/i18n/language-context";

const STORAGE_KEY = "chatons-lang";
const dictionaries = { fr, en, ar } as const;

function readInitialLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "ar" || stored === "fr" ? stored : "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readInitialLanguage);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(() => {
    const dictionary = dictionaries[lang];
    return {
      lang,
      dir: lang === "ar" ? ("rtl" as const) : ("ltr" as const),
      setLang,
      t: (key: TranslationKey) => dictionary[key],
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
