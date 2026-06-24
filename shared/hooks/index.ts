'use client'

import { useState, useCallback, useEffect } from 'react'
import type { Locale } from '../types'

// ─── useCopyToClipboard ─────────────────────────────
export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), resetDelay)
      return true
    } catch {
      return false
    }
  }, [resetDelay])

  return { copied, copy }
}

// ─── useDebounce ────────────────────────────────────
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}

// ─── useLocalStorage ────────────────────────────────
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch {
        // Storage full or unavailable — silently ignore
      }
    },
    [key, storedValue]
  )

  return [storedValue, setValue] as const
}

// ─── useLocale (cookie-based) ─────────────────────────
export function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => {
    const match = document.cookie.match(/NEXT_LOCALE=(\S+)/)
    if (match && (match[1] === 'zh-CN' || match[1] === 'en')) {
      return match[1] as Locale
    }
    return 'zh-CN'
  })

  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${60 * 60 * 24 * 365}`
  }, [locale])

  return { locale, setLocale }
}