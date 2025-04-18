import { source } from '@/lib/source'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { mdxComponents } from '../mdx-components'

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>
}) {
  const { slug, lang } = await props.params
  const page = source.getPage(slug, lang)
  if (!page) notFound()

  // biome-ignore lint/style/useNamingConvention: <explanation>
  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={mdxComponents} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>
}) {
  const { slug, lang } = await props.params
  const page = source.getPage(slug, lang)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
