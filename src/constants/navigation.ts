import type { AppRoute, NavigationItem, FooterNavigation } from '@/types/navigation';

// Core navigation items that represent main sections
const MAIN_NAVIGATION = [
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
  { title: 'Features', id: 'features' },
  { title: 'Plans', id: 'plans' },
] as const;

// Generate routes with proper typing
export const ROUTES = {
  home: '/' as AppRoute,
  ...Object.fromEntries(
    MAIN_NAVIGATION.map(item => [
      item.id,
      `/${item.id}` as AppRoute
    ])
  ),
  auth: {
    signIn: process.env.NEXT_PUBLIC_APP_SIGN_IN_URL as AppRoute,
    signUp: process.env.NEXT_PUBLIC_APP_SIGN_UP_URL as AppRoute,
  },
  contact: '/contact' as AppRoute,
  helpCenter: '/help-center' as AppRoute,
  termsService: '/terms-of-service' as AppRoute,
  privacyPolicy: '/privacy-policy' as AppRoute,
} as const;

// Navigation items with section indicators
export const NAVIGATION_ITEMS: NavigationItem[] = [
  ...MAIN_NAVIGATION.map(item => ({
    title: item.title,
    href: ROUTES[item.id as keyof typeof ROUTES] as AppRoute,
    isSection: true
  })),
  { title: 'Contact', href: ROUTES.contact }
];

// Footer navigation reusing main navigation items
export const FOOTER_NAVIGATION: FooterNavigation = {
  company: {
    title: 'Company',
    items: MAIN_NAVIGATION.slice(1).map(item => ({
      title: item.title,
      href: `/${item.id}` as AppRoute,
      isSection: true
    }))
  },
  
  support: {
    title: 'Support',
    items: [
      { title: 'Contact', href: ROUTES.contact },
      { title: 'Help Center', href: ROUTES.helpCenter }
    ]
  },
  
  social: {
    title: 'Social',
    items: [
      { title: 'X', href: 'https://x.com/acornledger' as AppRoute, external: true },
      { title: 'GitHub', href: 'https://github.com/acornledger' as AppRoute, external: true },
      { title: 'Discord', href: 'https://discord.gg/acornledger' as AppRoute, external: true },
      { title: 'Email', href: 'mailto:hello@acornledger.io' as AppRoute, external: true }
    ]
  },
  
  legal: {
    title: 'Legal',
    items: [
      { title: 'Privacy Policy', href: ROUTES.privacyPolicy },
      { title: 'Terms of Service', href: ROUTES.termsService }
    ]
  }
} satisfies FooterNavigation;
