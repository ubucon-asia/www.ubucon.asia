export const locales = ["en", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    localeName: "EN",
    ctaPrimary: "Get updates",
    ctaSecondary: "Call for proposals",
    navHome: "Home",
    navEvents: "Events",
    navSponsorship: "Sponsorship",
    navTravel: "Travel",
    navUpdates: "Updates",
    navProgram: "Program",
    navMenu: "Menu",
    navClose: "Close",
    sectionHighlights: "Highlights",
    heroDescriptionPrimary:
      "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. This annual event connects enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
    languageLabel: "Language",
    visitWebsite: "Visit Website",
    allEditions: "See all editions of UbuCon Asia",
  },
  "zh-tw": {
    localeName: "中文",
    ctaPrimary: "接收更新",
    ctaSecondary: "徵稿",
    navHome: "首頁",
    navEvents: "Events",
    navSponsorship: "贊助",
    navTravel: "旅遊資訊",
    navUpdates: "最新消息",
    navProgram: "議程",
    navMenu: "選單",
    navClose: "關閉",
    sectionHighlights: "重點內容",
    heroDescriptionPrimary:
      "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. This annual event connects enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
    languageLabel: "語言",
    visitWebsite: "Visit Website",
    allEditions: "See all editions of UbuCon Asia",
  },
} as const;

export type UiKey =
  | "ctaPrimary"
  | "ctaSecondary"
  | "localeName"
  | "navHome"
  | "navCfp"
  | "navSponsorship"
  | "navTravel"
  | "navUpdates"
  | "navProgram"
  | "navMenu"
  | "navClose"
  | "sectionHighlights"
  | "highlightCommunity"
  | "highlightPractical"
  | "highlightRegional"
  | "heroDescriptionPrimary"
  | "heroDescriptionSecondary"
  | "languageLabel"
  | "ctaPrimaryNotice"
  | "ctaSecondaryNotice"
  | "sponsorshipNotice"
  | "navEvents";

export const getLocaleFromUrl = (url: URL): Locale => {
  const pathLocale = url.pathname.split("/")[1];
  if (locales.includes(pathLocale as Locale)) {
    return pathLocale as Locale;
  }

  return defaultLocale;
};

export const useTranslations = (locale: Locale) => {
  return (key: UiKey) => ui[locale][key];
};

export const getLocalizedPath = (path: string, locale: Locale) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }

  return `/${locale}${normalized}`;
};
