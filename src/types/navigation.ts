// Define route types for the application
export type AppRoute = string & object;

export type NavigationItem = {
  title: string;
  href: AppRoute;
  isSection?: boolean;
  external?: boolean;
};

export type NavigationSection = {
  title?: string;
  items: NavigationItem[];
};

export type FooterNavigation = {
  company: NavigationSection;
  support: NavigationSection;
  social: NavigationSection;
  legal: NavigationSection;
};