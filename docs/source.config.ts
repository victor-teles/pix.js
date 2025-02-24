import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkInstall } from 'fumadocs-docgen';
import { rehypeCode } from 'fumadocs-core/mdx-plugins';
 

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall],
    rehypePlugins: [rehypeCode],
  },
});
