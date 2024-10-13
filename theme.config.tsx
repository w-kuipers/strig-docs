import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Analytics } from "@vercel/analytics/react";

const config: DocsThemeConfig = {
	logo: <h2 style={{ fontWeight: "bolder" }}>Strig</h2>,
	project: {
		link: "https://github.com/w-kuipers/strig",
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Strig",
		};
	},
	docsRepositoryBase: "https://github.com/w-kuipers/strig-docs",
	footer: {
		text: "A simple and intuitive Python package for generating random strings and numbers.",
	},
	main: ({ children }) => {
		return (
			<>
				{children}
				<Analytics />
			</>
		);
	},
	primaryHue: 30,
	primarySaturation: 50,
};

export default config;
