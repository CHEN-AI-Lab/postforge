// ─── Locale ─────────────────────────────────────────
export type Locale = 'zh-CN' | 'en'

export const LOCALE_OPTIONS: { id: Locale; labelEn: string; labelZh: string }[] = [
  { id: 'zh-CN', labelEn: 'Chinese', labelZh: '中文' },
  { id: 'en', labelEn: 'English', labelZh: 'English' },
]

// ─── User / Auth ────────────────────────────────────
export type SubscriptionStatus = 'none' | 'active' | 'past_due' | 'canceled'

export interface User {
  id: string
  email: string
  name: string | null
  avatar: string | null
  subscriptionStatus: SubscriptionStatus
  createdAt: string
}

export interface Session {
  user: User
  expiresAt: string
}

// ─── Feature / Plan (generic SaaS) ──────────────────
export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  cta: string
  href: string
  popular: boolean
}

export interface PricingPlan extends Plan {}

// ─── Generic API ────────────────────────────────────
export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  success: boolean
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  pageSize: number
}

// ─── Utility ────────────────────────────────────────
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}