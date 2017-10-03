var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/bundle.js'
	},
	module: {
		//使用loader的方法是：先安装在配置；多个loader在一起的时候，loader处理的方式是先右后左
    	// 使用rules以及use是babel-loader、postcss-loader等loader的官方文档的推荐用法
		rules: [
		    //利用html-loader将html模板导出为字符串
		    {
		    	test: /\.html$/,
		    	use: {
		    		loader: 'html-loader'
		    	}
		    },
		    {
		    	test: /\.ejs$/,
		    	use: {
		    		loader: 'ejs-loader'
		    	}
		    },
		    {
		    	test: /\.js$/,
		    	use: {
		    		loader: 'babel-loader',
			    	options: {
			    		presets: ['env']
			    	}
		    	}
		    },
		    // 配置处理css的loader，需要用到的loader有：css-loader、style-loader、postcss-loader（后处理css的loader），利用postcss-loader的autoprefixer插件可以为存在浏览器兼容问题的属性自动添加前缀。这些处理css文件的loader的安装命令：npm install --save-dev css-loader style-loader postcss-loader；其中autoprefixer插件的安装命令：npm install --save-dev autoprefixer。
		    {
		    	test: /\.css$/,
		    	use: [
		    	    'style-loader', // style-loader：将解析完的css文件添加style标签，然后插入到head标签中
		    	    'css-loader', //css-loader：解析css文件
		    	    {
		    	    	loader: 'postcss-loader', //postcss-loader：css后处理加载。
		    	    	options: {
		    	    		plugins: [
		    	    		    //插件的执行顺序与loader的执行顺序是一样的，都是从后往前（从右往左）。对于postcss-import插件和autoprefixer插件，postcss-import先执行会影响autoprefixer插件的执行，例如：postcss-import插件在前，autoprefixer插件在后，执行结果是import进来的css文件与当前css文件在同一个style标签中，且为存在浏览器兼容的属性添加前缀；autoprefixer插件在前，postcss-import插件在后，执行结果是import进来的css文件与当前css文件在同一个style标签中，但是没有为存在浏览器兼容的属性添加前缀。所以在实际项目中，应该将autoprefixer插件放在后面使用。
		    	    		    //postcss-import插件：有时我们会在css文件中导入（import）其他路径的css文件，此时如果使用webpack直接打包，打包后会生成多个style标签插入到head标签中。为了让import进来的css文件与当前的css文件在打包后统一在一个style标签中，就需要用到postcss-import插件。
		    	    		    require('postcss-import'),
		    	    		    //autoprefixer插件：对存在浏览器兼容问题的属性添加浏览器前缀。使用方法：通过require引入autoprefixer插件，并给autoprefixer传入参数。
		    	    		    require('autoprefixer')({browsers: ['last 5 versions']})// 传入的参数是兼容浏览器的最近5版
		    	    		]
		    	    	}
		    	    }
		    	]
		    },
		    {
		    	// 使用sass-loader来处理sass文件（sass文件以scss结尾），安装sass-loader命令：npm install --save-dev sass-loader。sass-loader依赖于node-sass，如果没有安装node-sass，则需要安装node-sass，安装命令：npm install --save-dev node-sass。
		    	test: /\.scss$/,
		    	use: [{
		    		loader: 'style-loader' //利用js字符串创建一个style标签（结点node）
		    	}, {
		    		loader: 'css-loader' //将css转换为commonJS
		    	}, {
		    		loader: 'postcss-loader', //postcss-loader应该位于css-loader和sass-loader中间
		    		options: {
		    			plugins: [
		    			    require('postcss-import'),
		    			    require('autoprefixer')
		    			]
		    		}
		    	}, {
		    		loader: 'sass-loader' //将sass文件编译（compile）成css文件
		    	}]
		    },
		    /*file-loader*/
		    // {
		    // 	//项目中图片可以分为三类：一类是css中引用的图片（如：layer.scss文件中通过背景引入的图片）；一类是项目根目录下html文件中引用的图片（如：index.html文件中通过image标签引入图片）；第三类就是模板文件中引用的图片（如：layer.html或者layer.ejs模板中利用image标签引用图片）。
		    // 	//使用file-loader可以很好的打包css文件中的图片、根目录下html文件中的图片，对于模板中引入的图片需要添加一个require，详情见模板文件。
		    // 	test: /\.(png|jpg|jpeg|gif)$/i,
		    // 	use: {
		    // 		loader: 'file-loader', //file-loader指示webpack将所需的对象以文件的形式输出，并返回到其公共的url。		
		    // 	    //改变打包后图片的名称和路径
		    // 	    options: {
		    // 	    	name: 'assets/[name]-[hash:5].[ext]' //将打包后的图片放在dist→assets目录，图片名由图片名称+5位哈希值以及图片后缀组成
		    // 	    }
		    // 	}
		    // }
		    /*url-loader*/
		    // {
		    // 	//url-loader与file-loader功能相似，都可以对图片进行打包，不同之处在于url-loader可以通过传入一个参数limit来控制图片文件打包方式，当图片文件大于limit值时，它就会按照file-loader方式打包图片文件；当图片文件小于limit值时，它会将图片文件转换为base64编码，不再是url链接。
		    // 	test: /\.(png|jpg|jpeg|gif)$/i,
		    // 	use: {
		    // 		loader: 'url-loader',
		    // 		options: {
		    // 			limit: 50000, //参数limit，当图片文件小于limit时，会将图片文件转换为base64位编码，不再是url链接
		    // 			name: 'assets/[name]-[hash:5].[ext]'
		    // 		}
		    // 	}
		    // }
		    /*image-webpack-loader*/
		    /*配合url-loadr使用*/
		    // {
		    // 	test: /\.(png|jpg|jpeg|gif)$/i,
		    // 	use: [
		    // 	    {
		    // 	    	loader: 'url-loader',
		    // 	    	options: {
		    // 	    		limit: 50000,
		    //                 name: 'assets/[name]-[hash:5].[ext]'
		    // 	    	}
		    // 	    },{
		    // 	    	loader: 'image-webpack-loader' //image-webpack-loader用来压缩图片文件，最理想的使用方式是配合file-loader或url-loader一起使用
		    // 	    }
		    // 	]
		    // }
		    /*配合file-loader使用*/
		    {
		    	test: /\.(png|jpg|jpeg|gif)$/i,
		    	use: [
		    	    {
		    	    	loader: 'file-loader',
		    	    	options: {
		                    name: 'assets/[name]-[hash:5].[ext]'
		    	    	}
		    	    },{
		    	    	loader: 'image-webpack-loader' //image-webpack-loader用来压缩图片文件，最理想的使用方式是配合file-loader或url-loader一起使用
		    	    }
		    	]
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