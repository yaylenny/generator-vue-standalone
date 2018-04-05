var path=require("path");

module.exports={
  entry: "./src",
  output:{
    path: __dirname + '/dist',
    filename: 'demo.js'
  },
  resolve:{
    alias:{
      Components: path.resolve( __dirname, 'src/components/'),
      Core: path.resolve( __dirname, 'src/core/'),
      Mixins: path.resolve( __dirname, 'src/mixins/'),
      Style: path.resolve( __dirname, 'src/style/'),
      Views: path.resolve( __dirname, 'src/views/'),
      Lib: path.resolve( __dirname, 'lib/')
    }
  },
  module:{
    loaders:[
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.scss$/, loaders: [ "style-loader", "css-loader", "sass-loader"]},
      { test: /\.vue$/, loader: 'vue-loader', options:{ scss: 'style!css!sass' }},
      { test: /\.css$/, loaders: [ "style-loader", "css-loader"]}
    ]
  }
}
