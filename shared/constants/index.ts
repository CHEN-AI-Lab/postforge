import type { Feature, Plan } from '../types'

// ─── Project Configuration (customize this) ─────────
export const PROJECT_NAME = 'PostForge'
export const PROJECT_TAGLINE = 'Write Once, Publish Everywhere'
export const PROJECT_DESCRIPTION = 'AI-powered content repurposing. Transform blog posts into Twitter threads, LinkedIn posts, newsletters, and more — in seconds.'
export const PROJECT_LOGO_LETTER = 'P'
export const DEFAULT_LOCALE = 'zh-CN' as const
export const LOCALES = ['zh-CN', 'en'] as const

// ─── Example Features (placeholder — replace with yours) ─
export const EXAMPLE_FEATURES: Feature[] = [
  {
    title: 'Feature One',
    description: 'Describe your first core feature here. What problem does it solve?',
    icon: '🚀',
  },
  {
    title: 'Feature Two',
    description: 'Describe your second core feature. Why is it valuable?',
    icon: '⚡',
  },
  {
    title: 'Feature Three',
    description: 'Describe your third core feature. What makes it different?',
    icon: '🎯',
  },
  {
    title: 'Feature Four',
    description: 'Describe your fourth core feature. Who benefits from it?',
    icon: '🔒',
  },
  {
    title: 'Feature Five',
    description: 'Describe your fifth core feature. How does it integrate?',
    icon: '🔗',
  },
  {
    title: 'Feature Six',
    description: 'Describe your sixth core feature. What\'s the key metric?',
    icon: '📊',
  },
]

// ─── Example Plans (placeholder — replace with yours) ─
export const EXAMPLE_PLANS: Plan[] = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: ['1 project', 'Basic features', 'Community support'],
    cta: 'Get Started',
    href: '/signup',
    popular: false,
  },
  {
    name: 'Pro',
    price: 19,
    description: 'For professionals and small teams',
    features: ['Unlimited projects', 'All features', 'Priority support', 'API access', 'Team collaboration'],
    cta: 'Subscribe',
    href: '/signup?plan=pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large organizations',
    features: ['Everything in Pro', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'White-label option'],
    cta: 'Contact Us',
    href: '/contact',
    popular: false,
  },
]

// ─── Navigation ──────────────────────────────────────
export const NAV_LINKS = [
  { href: '#features', labelKey: 'nav.features' },
  { href: '#pricing', labelKey: 'nav.pricing' },
  { href: '#demo', labelKey: 'nav.demo' },
] as const

// ─── Social / Footer ─────────────────────────────────
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com',
  github: 'https://github.com',
} as const

export const FOOTER_LINKS = [
  { href: '/privacy', labelKey: 'footer.privacy' },
  { href: '/terms', labelKey: 'footer.terms' },
  { href: '/contact', labelKey: 'footer.contact' },
] as const