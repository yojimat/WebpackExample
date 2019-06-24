const path = require("path")
	,common = require("./webpack.common")
	,merge = require("webpack-merge")
	,{ CleanWebpackPlugin } = require("clean-webpack-plugin")
	,MiniCssExtractPlugin = require("mini-css-extract-plugin")
	,OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
	,TerserPlugin = require("terser-webpack-plugin")
	,HtmlWebpackPlugin = require("html-webpack-plugin");;

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "webpackBuild")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin()
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: "[name].[contentHash].css"})
		,new CleanWebpackPlugin()
		,new HtmlWebpackPlugin({
			template: "./src/template.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			}	
		]
	}
});