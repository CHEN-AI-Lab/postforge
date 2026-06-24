import type { Metadata } from 'next'
import { PROJECT_NAME, PROJECT_TAGLINE, PROJECT_DESCRIPTION } from 'shared/constants'

export const metadata: Metadata = {
  title: `${PROJECT_NAME} — ${PROJECT_TAGLINE}`,
  description: PROJECT_DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}