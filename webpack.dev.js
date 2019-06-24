const path = require("path")
	,common = require("./webpack.common")
	,merge = require("webpack-merge")
	,HtmlWebpackPlugin = require("html-webpack-plugin");;

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "webpackBuild")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}	
		]
	}
});