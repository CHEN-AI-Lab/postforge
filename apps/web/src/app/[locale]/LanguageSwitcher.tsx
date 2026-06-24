'use client'

import { useRouter, usePathname } from 'next/navigation'
import type { Locale } from 'shared'

const locales: { id: Locale; label: string }[] = [
  { id: 'zh-CN', label: '中文' },
  { id: 'en', label: 'English' },
]

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <select
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
      className="rounded-lg border border-input bg-background px-2 py-1.5 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
    >
      {locales.map((l) => (
        <option key={l.id} value={l.id}>
          {l.label}
        </option>
      ))}
    </select>
  )
}
