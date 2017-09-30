var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 多页面应用
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name]-[hash].js',
		publicPath: 'http://cdn.com/'
	},
	plugins: [
	    new htmlWebpackPlugin({
	    	template: 'index.html',
	    	filename: 'a.html',
	    	title: 'this is a.html',
	    	inject: false,
	    	minify: {
	    		removeComments: true
	    	},
	    	// chunks: ['main', 'a'] //利用htmlWebpackPlugin的chunks参数可以按照需求为不同页面加载不同的js文件
	    	excludeChunks: ['b', 'c'] //利用htmlWebpackPlugin的excludeChunks参数可以将不需要加载的js文件排除掉，然后插件会自动加载所需要的js文件
	    }),
	    new htmlWebpackPlugin({
	    	template: 'index.html',
	    	filename: 'b.html',
	    	title: 'this is b.html',
	    	inject: false,
	    	minify: {
	    		removeComments: true
	    	},
	    	// chunks: ['main', 'b'] //利用htmlWebpackPlugin的chunks参数可以按照需求为不同页面加载不同的js文件
	    	excludeChunks: ['a', 'c'] //利用htmlWebpackPlugin的excludeChunks参数可以将不需要加载的js文件排除掉，然后插件会自动加载所需要的js文件
	    }),
	    new htmlWebpackPlugin({
	    	template: 'index.html',
	    	filename: 'c.html',
	    	title: 'this is c.html',
	    	inject: false,
	    	minify: {
	    		removeComments: true
	    	},
	    	// chunks: ['main', 'c'] //利用htmlWebpackPlugin的chunks参数可以按照需求为不同页面加载不同的js文件
	    	excludeChunks: ['a', 'b'] //利用htmlWebpackPlugin的excludeChunks参数可以将不需要加载的js文件排除掉，然后插件会自动加载所需要的js文件
	    })
	]
}