import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { PROJECT_NAME, PROJECT_LOGO_LETTER } from 'shared/constants'

const FEATURE_ICONS = ['🐦', '💼', '📧', '📸', '🔍', '🎯']

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations()
  const featureCards = t.raw('featureCards') as { title: string; desc: string }[]
  const plans = t.raw('plans') as {
    name: string
    desc: string
    features: string[]
    cta: string
    price: number
  }[]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">{PROJECT_LOGO_LETTER}</span>
            </div>
            <span className="font-bold text-xl">{PROJECT_NAME}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.features')}
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.pricing')}
            </Link>
            <Link
              href="#demo"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.demo')}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale as 'zh-CN' | 'en'} />
            <Link
              href={`/${locale}/signin`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.signIn')}
            </Link>
            <Link
              href={`/${locale}/signup`}
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border bg-muted px-4 py-1.5 text-sm">
              <span className="text-primary font-semibold">NEW</span>
              <span className="ml-2 text-muted-foreground">{t('hero.badge')}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              {t('hero.title')}{' '}
              <span className="text-primary">{t('hero.titleAccent')}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto md:text-xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/signup`}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-base font-medium transition-colors hover:bg-muted"
              >
                {t('hero.secondaryCta')}
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {t('hero.creditNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Demo / Try It */}
      <section id="demo" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border bg-card p-8">
              <h3 className="text-lg font-semibold mb-4">{t('demo.title')}</h3>
              <div className="space-y-4">
                <textarea
                  className="w-full min-h-[120px] rounded-lg border border-input bg-background p-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder={t('demo.placeholder')}
                />
                <div className="flex flex-wrap gap-3">
                  {(['twitter', 'linkedin', 'newsletter', 'instagram'] as const).map(
                    (platform) => (
                      <label
                        key={platform}
                        className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2 cursor-pointer hover:bg-muted transition-colors"
                      >
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">{t(`platforms.${platform}`)}</span>
                      </label>
                    )
                  )}
                </div>
                <button
                  disabled
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground opacity-50 cursor-not-allowed"
                >
                  {t('demo.disabled')}
                </button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{t('demo.hint')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('features.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, i) => (
              <div
                key={i}
                className="group rounded-xl border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {FEATURE_ICONS[i] || '📌'}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('pricing.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {plans.map((plan, i) => {
              const isPopular = i === 1
              return (
                <div
                  key={i}
                  className={`rounded-xl border bg-card p-8 ${
                    isPopular ? 'ring-2 ring-primary shadow-lg relative' : ''
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                        {t('pricing.mostPopular')}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm">
                        <svg
                          className="h-4 w-4 text-primary shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}${i === 0 ? '/signup' : i === 1 ? '/signup?plan=pro' : '/contact'}`}
                    className={`mt-8 inline-flex w-full h-11 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      isPopular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow'
                        : 'border border-input bg-background hover:bg-muted'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">{PROJECT_LOGO_LETTER}</span>
              </div>
              <span className="font-semibold">{PROJECT_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}