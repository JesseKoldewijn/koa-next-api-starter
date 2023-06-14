import withPreact from "next-plugin-preact";

/** @type {import('next').NextConfig} */
const NextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				"react/jsx-runtime.js": "preact/compat/jsx-runtime",
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			});
		}
		return config;
	},
};
export default withPreact(NextConfig);
