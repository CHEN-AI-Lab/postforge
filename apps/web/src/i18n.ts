import { getRequestConfig } from 'next-intl/server'

const locales = ['zh-CN', 'en'] as const
const defaultLocale = 'zh-CN'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = locales.includes(requested as typeof locales[number])
    ? requested
    : defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})