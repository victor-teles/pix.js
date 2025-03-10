import { Callout } from 'fumadocs-ui/components/callout'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

import { createTypeTable } from 'fumadocs-typescript/ui'

const { AutoTypeTable } = createTypeTable()
export const mdxComponents = {
  ...defaultMdxComponents,
  Tabs,
  Tab,
  Callout,
  AutoTypeTable,
}
