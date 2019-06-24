module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"] // Array funciona como um stack, o ultimo primeiro.
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs"
					}
				}
			}
		]
	}
}