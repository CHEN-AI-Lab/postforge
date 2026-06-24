import createMiddleware from 'next-intl/middleware'

const locales = ['zh-CN', 'en']
const defaultLocale = 'zh-CN'

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}