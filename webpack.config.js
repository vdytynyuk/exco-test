var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
 
module.exports = {
   entry: "./src/index.js",
   output:{
       path: path.resolve(__dirname, './dist'),
       publicPath: '/dist/',
       filename: "bundle.js"
   },
   devServer: {
       contentBase: __dirname + '/dist',
       historyApiFallback: true,
   },
   module:{
       rules:[
           {
               test: /\.(js|jsx)$/,
               exclude: /(node_modules)/,
               loader: "babel-loader",
               options:{
                   presets:["@babel/preset-env", "@babel/preset-react"],
                   plugins: [
                       "@babel/plugin-syntax-dynamic-import",
                       "@babel/plugin-proposal-class-properties"
                   ]
               }
           },
           {
             test: /\.html$/,
             loader: 'html-loader'
           },
           {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                },
              },
            ],
          },
           {
            test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader'
           },
           {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
       ]
   },
   plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: "./index.html"
    })
  ]
}