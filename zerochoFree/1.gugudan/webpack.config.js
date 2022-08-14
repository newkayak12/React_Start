const path = require('path')
const webpack = require('webpack')
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
            presets:[
                ['@babel/preset-env', {
                  targets:{
                    browsers:['> 5% in KR', 'last 2 chrome versions'],
                  },
                  debug:true
                }]
              , '@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties']
          }
        }
      ]
    }, //loader,

    plugins: [
        new webpack.LoaderOptionsPlugin({debug:true})
    ],

    output:{
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    }//출력
};