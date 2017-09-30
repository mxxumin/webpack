// 引入html-webpack-plugin插件 使用commonJS的模块引入写法
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 使用commonJS的模块化的输出

    // entry是文件打包的入口，有三种写法，第一种：单个字符串写法，
	/*entry: './src/script/main.js',
	output: {
		path: __dirname + '/dist/js',
		filename: 'bundle.js'
	}*/

	//第二种：数组写法
	/*entry: ['./src/script/main.js', './src/script/a.js'],
	output: {
		path: __dirname + '/dist/js',
		filename: 'bundle.js'
	}*/

	//第三种：对象写法（针对多页面项目），利用对象写法时，要注意它的输出（output），为了让不同的入口文件分别打包生成对应的输出文件，需要使用占位符（[name]、[hash]、[chunkhash]）
	/*entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
	output: {
		path: __dirname + '/dist/js',
		filename: '[name]-[hash].js'
	},*/

    entry: {
    	main: './src/script/main.js',
    	a: './src/script/a.js'
    },
    output: {
    	path: __dirname + '/dist',
    	//为打包之后的js添加相对路径，打包之后的js文件将出现在dist→js文件中，这样做的好处就是避免所有打包的文件都生成在dist目录中。
    	filename: 'js/[name]+[hash].js',
    	// 在项目打包完需要上线的时候，线上的地址与本地的路径是不一样的。这个时候就需要设置publicPath。publicPath类似于占位符，设置publicPath之后，打包后的文件在线上的绝对地址就是相对于publicPath值的
    	// publicPath:'http://cdn.com/'
    },

	// 插件的使用
	plugins: [
	    new htmlWebpackPlugin({
	    	//为了让插件生成的html文件与根目录下的文件建立联系，需要对htmlWebpackPlugin进行传参，将根目录下的index.html作为模板传入进去，打包之后生成的index.html默认路径与output中设置的路径一致
	    	template: 'index.html',
	    	//htmlWebpackPlugin的其他参数
	    	filename: 'index-[hash].html', //可以指定生成文件的名称，亦可以配合hash值来命名，如：index-[hash].html
	    	inject: false, //指定script标签嵌入到head标签还是body标签，嵌入到body标签时取false

	    	//在插件中设置参数，将设置的参数与模板结合生成所需的文件
	    	title: '我是在htmlWebpackPlugin中设置的',
	    	//自己设置的任意参数也可以被模板读取
	    	date: new Date(),
	    	//上线时需要对html文件进行压缩，此时就需要minify
	    	// minify: {
	    	// 	removeComments: true, //删除注释
	    	// 	collapseWhitespace: true //删除html中的空格
	    	// } 
	    })
	]
}