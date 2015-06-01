var HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {

	plugins: [
		new HtmlWebpackPlugin({
			template: 'node_modules/html-webpack-template/index.html', 
			appMountId: 'app'
		})
	]

	entry: './index.js',

	output:{
		path: __dirname + '/dist', 
		filename: 'main.js'
	},

	module: {
		loaders: [
			{ test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}