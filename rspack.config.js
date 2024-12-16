const path = require("node:path");
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh");
const rspack = require("@rspack/core");
/** @type {import('@rspack/cli').Configuration} */
const isDev = process.env.NODE_ENV === "development";
const config = {
	mode: isDev ? "development" : "production",
	entry: {
		main: "./src/index.tsx",
	},
	resolve: {
		extensions: ["...", ".ts", ".tsx", ".jsx"],
	},
	experiments: {
		css: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "typescript",
								tsx: true,
							},
							transform: {
								react: {
									runtime: "automatic",
									development: isDev,
									refresh: isDev,
								},
							},
						},
					},
				},
				type: "javascript/auto",
			},
		],
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./index.html",
		}),
		isDev && new ReactRefreshPlugin(),
	].filter(Boolean),
	devServer: {
		allowedHosts: "localhost",
		port: 3000,
		open: true,
	},
	output: {
		path: path.resolve(__dirname, "dist/assets"),
	},
};
module.exports = config;
