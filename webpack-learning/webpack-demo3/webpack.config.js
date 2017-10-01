var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path'); //path API是node原生的，不需要再安装，直接require即可

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js'
	},
	module: {
		//利用babel-loader对使用ES6语法的js文件进行转译，使其成为浏览器可以直接使用的js文件，使用前需进行一系列安装，安装命令：npm install --save-dev babel-loader babel-core babel-preset-env。
		loaders: [
		    {
		    	test: /\.js$/, //对文件进行判断，只有以.js结尾的文件才使用babel-loader进行处理
		    	loader: 'babel-loader', //需要使用的loader
		    	// 在使用loader时，需要进行传参，来告诉loader对那些特性的文件进行处理，此时就需要用到问询参数（query parameters）来传参。实现方法有四种。第一种是直接在require中loader后面添加?进行传参，如：require(babel-loader?presets=env)；第二种是在webpack.config.js进行配置，如下：使用options进行配置；第三种是在项目的根目录下建立.babelrc配置文件，文件中写入参数即可，如{"presets":["es2015"]}；最后一种方式是在package.json中进行配置，如："babel": {"presets": ["env"]}。
		    	options: {
		    		presets: ['env'] //presets是属于babel-loader的一种插件，ES6语法每年都会有更新变化，如es2015、es2016、es2017等等。通过指定presets，可以让babel-loader知道它需要对哪些特性进行转译。env表示最新的特性。
		    	},
		    	//使用include和exclude可以对打包性能进行优化，提高打包速度
		    	exclude: ['/node_modules'], //指定跳过哪些文件打包
		    	include: ['/src'] //指定哪些文件进性打包

		    	// 除了使用上面的方法定义node_modules和src的绝对路径外，还可以使用node的path API进行绝对定位
		    	// exclude: path.resolve(__dirname, 'node_modules'), //__dirname表示当前目录下，后面跟一个相对路径就可以解析出绝对路径
		    	// include: path.resolve(__dirname, 'src')
		    	// 个人感觉使用path.resolve()打包速度不如上面直接指定绝对路径
		    }
		]
	},
	plugins: [
	    new htmlWebpackPlugin({
	    	template: 'index.html',
	    	filename: 'index.html',
	    	inject: 'body'
	    })
	]
}