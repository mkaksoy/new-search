import eng from "./lang/eng.json";
import tur from "./lang/tur.json";

export type Language = "eng" | "tur";

export const translations: Record<
  Language,
  {
    toggleTheme: string;
    searchPlaceholder: string;
    explore: string;
    calendar: string;
    library: string;
    music: string;
    videos: string;
    settings: string;
    privacyPolicy: string;
    termsOfService: string;
    about: string;
    contact: string;
    setLanguage: string;
    availableLanguages: string;
    openSettings: string;
    closeSettings: string;
  }
> = {
  eng,
  tur,
};
