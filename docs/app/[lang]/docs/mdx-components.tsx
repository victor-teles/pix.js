import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

import { GeneratorForm } from '@/components/generator-form'
import { createTypeTable } from 'fumadocs-typescript/ui'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { MDXComponents } from 'mdx/types'

const { AutoTypeTable } = createTypeTable()
export const mdxComponents = {
  ...defaultMdxComponents,
  ...((await import('lucide-react')) as unknown as MDXComponents),
  GeneratorForm,
  Cards,
  Card,
  Tabs,
  Tab,
  Callout,
  AutoTypeTable,
}
