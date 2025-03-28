import { baseOptions } from '@/app/layout.config'
import { I18nProvider } from 'fumadocs-ui/i18n'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider locale={'en'}>
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </I18nProvider>
  )
}
