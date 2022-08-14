const path = require('path')
module.exports = {
  name:'gugudan-setting',
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
            presets:['@babel/preset-env', '@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties']
          }
        }
      ]
    }, //loader

    output:{
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    }//출력
};