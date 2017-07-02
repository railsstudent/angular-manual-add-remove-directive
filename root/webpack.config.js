'use strict';

var webpack = require('webpack'),
  path = require('path'),
  DashboardPlugin = require('webpack-dashboard/plugin');

var APP = path.resolve(__dirname , 'client');
module.exports = {
    // config goes here
    //context: APP,
    debug: true,
    devtool: 'source-map',
    entry: {
        app: [
                'babel-polyfill'
                , 'webpack/hot/dev-server'
                  , './client/app/app.js'
              ]
    },
    plugins: [
               new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
                },
              new webpack.optimize.UglifyJsPlugin()),
              new DashboardPlugin()
     ],
    output: {
        path: APP,
        filename: './bundle.js'
    },
    module: {
      loaders: [
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']    // sass loader => css loader => style loader
        },
        {
            test: /\.js$/,
            loader: 'ng-annotate!babel?presets[]=es2015!jshint',    // jshint loader => babel loader => ng-annotate loader
            exclude: /node_modules|bower_components/
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css']    // css loader => style loader
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
          loader : 'file-loader?name=res/[name].[ext]?[hash]'
        },
        { test: /\.html$/,
          loader: 'html'
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        { test: /angular(\.min)?\.js$/, loader: "imports?$=jquery" },
        { test: /jquery(\.min)?\.js$/, loader: 'expose-loader?$!expose-loader?jQuery' }
      ]
    },
    devServer: {
     historyApiFallback: true
   }
}

// hot-reload plugin
// test in browser: http://localhost:8080/webpack-dev-server
