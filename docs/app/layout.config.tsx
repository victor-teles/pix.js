import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  i18n: true,
  nav: {
    title: (
      <>
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">Pix.js</span>
      </>
    ),
    transparentMode: 'top',
  },
  githubUrl: 'https://github.com/victor-teles/pix.js',
  links: [
    {
      text: 'Documentation',
      url: '/en/docs/getting-started',
      active: 'nested-url',
    },
    {
      text: 'QR Code Generator',
      url: '/en/docs/pix/generator',
      active: 'url',
    },
  ],
}
