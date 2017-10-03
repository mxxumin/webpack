# webpack配置

### 1、初始化

初始化生成package.json文件
`npm init`

### 2、安装

安装webpack

`npm install --save-dev webpack`

安装html相关loader和插件

`npm install --save-dev html-webpack-plugin`

安装js相关loader和插件

`npm install --save-dev babel-loader babel-core babel-preset-env`

安装css相关loader和插件

`npm install --save-dev style-loader css-loader postcss-loader postcss-import autoprefixer sass-loader node-sass`

安装模板处理相关loader和插件

`npm install --save-dev html-loader`

`npm install --save-dev ejs-loader`

安装图片或其他文件处理相关的loader

`npm install --save-dev file-loader`

`npm install --save-dev url-loader`

`npm install --save-dev image-webpack-loader`

### 3、配置

`webpack-demo1` 对应entry、output、单页面html-webpack-plugin配置

`webpack-demo2` 对应多页面应用的html-webpack-plugin配置

`webpack-demo3` 对应babel-loader、babel-preset-env配置

`webpack-demo4` 对应style-loader、css-loader、postcss-loader、postcss-import、autoprefixer配置

`webpack-demo5` 对应less-loader配置

`webpack-demo6` 对应sass-loader配置

`webpack-demo7` 对应html-loader、ejs-loader配置

`webpack-demo8` 对应file-loader、url-loader、image-webpack-loader配置

### webpack-test

> `webpack-test1`、`webpack-test2`是利用基本的webpack命令进行打包。
 
在`webpack-test1`、`webpack-test2`例子中：

* 使用命令`webpack hello.js hello.bundle.js`将`hello.js`文件打包成`hello.bundle.js`文件；

* 使用命令`webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'`为项目绑定处理css的模块，如果有css文件，那么将使用`style-loader!css-loader`来处理；

* 使用命令`webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch`来监听项目变化，然后自动更新；

* 使用命令`webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress`来显示打包过程；

* 使用命令`webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress --display-modules`在打包过程中显示打包的进度和模块；

* 使用命令`webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress --display-modules --display-reasons`在打包过程中显示打包的进度、模块以及打包模块的原因；

* 使用命令`webpack --config webpack.config.js`，通过--config来指定要执行的配置的文件，上面指定的是执行webpack.config.js中的配置
