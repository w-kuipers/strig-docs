import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h2 style={{ fontWeight: "bolder" }}>Simpleuid</h2>,
  docsRepositoryBase: 'https://github.com/w-kuipers/simpleuid-docs',
  footer: {
    text: 'Random ID generation in Python',
  },
}

export default config
