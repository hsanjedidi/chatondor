import type { ComponentType } from "react";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { useRoute, type Route } from "@/lib/router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProgramPage } from "@/pages/ProgramPage";
import { UniversePage } from "@/pages/UniversePage";
import { ApproachPage } from "@/pages/ApproachPage";
import { TeamPage } from "@/pages/TeamPage";
import { TourPage } from "@/pages/TourPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { ContactPage } from "@/pages/ContactPage";

const PAGES: Record<Route, ComponentType> = {
  "/": HomePage,
  "/about": AboutPage,
  "/programme": ProgramPage,
  "/univers": UniversePage,
  "/approche": ApproachPage,
  "/team": TeamPage,
  "/tour": TourPage,
  "/gallery": GalleryPage,
  "/contact": ContactPage,
};

function Site() {
  const route = useRoute();
  const Page = PAGES[route];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader route={route} />
      <main className="flex-1">
        <Page />
      </main>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

export default App;
