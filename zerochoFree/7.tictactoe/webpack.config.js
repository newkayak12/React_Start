const path = require('path')
const webpack =require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name:'tictactoe-setting',
    mode:'development',
  mode:'development',
  devtool: 'eval',
  resolve:{
    extensions: ['.js','.jsx'],
    alias:{
      '@':path.resolve(__dirname)
    }
  },

  entry:{
    app:['./client']
  },//입력

  module: {
    rules:[
      {
        test:/\.jsx?/,
        loader:'babel-loader',
        options:{
          presets:[
            ['@babel/preset-env', {
              targets:{
                browsers:[ 'last 2 chrome versions'],
              },
              debug:true
            }]
            , '@babel/preset-react'],
          plugins:['@babel/plugin-proposal-class-properties','react-refresh/babel']
        },
        exclude: path.join(__dirname, 'node_modules'),
      }
    ]
  }, //loader,

  plugins: [
    new webpack.LoaderOptionsPlugin({debug:true}),
    new RefreshWebpackPlugin()
  ],

  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath:'/dist'
  },//출력,
  devServer:{
    devMiddleware:{publicPath: '/dist'},
    static: {directory:path.resolve(__dirname)},
    hot:true,
    port:1247
  },
};
