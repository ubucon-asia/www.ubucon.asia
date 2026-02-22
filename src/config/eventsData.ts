import { defaultLocale } from "../i18n/ui";
import type { Locale } from "../i18n/ui";
import UCACommitteeLogo from "../assets/committee-logo.svg";
import UCA25Logo from "../assets/ucalogo/uca25.svg";
import UCA24Logo from "../assets/ucalogo/uca24.svg";
import UCA23Logo from "../assets/ucalogo/uca23.svg";
import UCA22Logo from "../assets/ucalogo/uca22.svg";
import UCA21Logo from "../assets/ucalogo/uca21.svg";

export type EventData = {
  title: string;
  date: string;
  venue: string;
  location: string;
  logoSrc: string;
  url: string;
};
export const eventData: Record<Locale, Array<EventData>> = {
  en: [
    {
      title: "UbuCon Asia 2026 @ COSCUP",
      date: "August 8-9, 2026",
      venue: "NTUST",
      location: "Taipei, Taiwan",
      logoSrc: UCACommitteeLogo.src,
      url: "https://2026.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2025",
      date: "August 30-31, 2024",
      venue: "St. Xavier’s College",
      location: "Kathmandu, Nepal",
      logoSrc: UCA25Logo.src,
      url: "https://2025.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2024",
      date: "August 31 - September 1, 2024",
      venue: "JECRC University",
      location: "Jaipur, India",
      logoSrc: UCA24Logo.src,
      url: "https://2024.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2023",
      date: "October 7-8, 2023",
      venue: "FKIP UNS",
      location: "Surakarta, Indonesia",
      logoSrc: UCA23Logo.src,
      url: "https://2023.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2022",
      date: "November 26-27, 2022",
      venue: "Nuritkum Square",
      location: "Seoul, South Korea",
      logoSrc: UCA22Logo.src,
      url: "https://2022.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2021",
      date: "September 25-26, 2021",
      venue: "Eventyay & Gather town",
      location: "Online",
      logoSrc: UCA21Logo.src,
      url: "https://2021.ubucon.asia",
    },
  ],
  "zh-tw": [
    {
      title: "UbuCon Asia 2026 @ COSCUP",
      date: "August 8-9, 2026",
      venue: "NTUST",
      location: "Taipei, Taiwan",
      logoSrc: UCACommitteeLogo.src,
      url: "https://2026.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2025",
      date: "August 30-31, 2024",
      venue: "St. Xavier’s College",
      location: "Kathmandu, Nepal",
      logoSrc: UCA25Logo.src,
      url: "https://2025.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2024",
      date: "August 31 - September 1, 2024",
      venue: "JECRC University",
      location: "Jaipur, India",
      logoSrc: UCA24Logo.src,
      url: "https://2024.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2023",
      date: "October 7-8, 2023",
      venue: "FKIP UNS",
      location: "Surakarta, Indonesia",
      logoSrc: UCA23Logo.src,
      url: "https://2023.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2022",
      date: "November 26-27, 2022",
      venue: "Nuritkum Square",
      location: "Seoul, South Korea",
      logoSrc: UCA22Logo.src,
      url: "https://2022.ubucon.asia",
    },
    {
      title: "UbuCon Asia 2021",
      date: "September 25-26, 2021",
      venue: "Eventyay & Gather town",
      location: "Online",
      logoSrc: UCA21Logo.src,
      url: "https://2021.ubucon.asia",
    },
  ],
} as const;

export const getEventData = (locale?: Locale) =>
  eventData[locale ?? defaultLocale] ?? eventData[defaultLocale];
