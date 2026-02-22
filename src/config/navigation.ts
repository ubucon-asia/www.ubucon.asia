import type { UiKey } from "../i18n/ui";

export type NavLink = {
  key: UiKey;
  path: string;
  hash?: string;
};

export type NavDropdown = {
  key: UiKey;
  items: NavLink[];
  align?: "right";
};

export type NavItem = NavLink | NavDropdown;

export type NavigationSettings = {
  primary: NavItem[];
  secondary: NavItem[];
};

export const navigation: NavigationSettings = {
  primary: [
    {
      key: "navProgram",
      items: [
        {
          key: "navCfp",
          path: "/cfp",
          hash: "#cfp",
        },
      ],
    },
  ],
  secondary: [],
} as const;
