const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 文件入口
  entry: {
    index: './src/index.js'
  },
  // 文件出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 处理器
  module: {
    rules: [
      {
        // 处理css文件
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // 处理html中图片路径
        test: /\.(htm|html)$/,
        use: [
          'html-loader'
        ]
      },
      {
        // 处理js、css中图片路径
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // 热更新html
    new htmlWebpackPlugin({
      template: './index.html'
    })
  ],
  // 编码错误追踪
  devtool: 'inline-source-map'
}
