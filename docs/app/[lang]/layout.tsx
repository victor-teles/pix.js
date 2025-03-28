import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import '../global.css'

import { I18nProvider, type Translations } from 'fumadocs-ui/i18n'
import { Toaster } from 'sonner'

const cn: Partial<Translations> = {
  search: 'Translated Content',
}

const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Português',
    locale: 'pt',
  },
]

const inter = Inter({
  subsets: ['latin'],
})

export default async function Layout({ children, params }: { params: Promise<{ lang: string }>; children: ReactNode }) {
  const lang = (await params).lang

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider locale={lang} locales={locales} translations={{ cn }[lang]}>
          <RootProvider search={{ options: { type: 'static' } }}>{children}</RootProvider>
        </I18nProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
