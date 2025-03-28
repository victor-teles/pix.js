import { docs, meta } from '@/.source'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import { icons } from 'lucide-react'
import { createElement } from 'react'
import { i18n } from './i18n'

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
  source: createMDXSource(docs, meta),
  i18n,
})
