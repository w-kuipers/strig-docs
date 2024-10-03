import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <h2 style={{ fontWeight: "bolder" }}>Strig</h2>,
	docsRepositoryBase: 'https://github.com/w-kuipers/strig-docs',
	footer: {
		text: 'A simple and intuitive Python package for generating random strings and numbers.',
	},
}

export default config
