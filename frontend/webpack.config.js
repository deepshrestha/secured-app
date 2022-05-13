const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
<<<<<<< HEAD
//const { AngularWebpackPlugin } = require('@ngtools/webpack');
=======
const { AngularWebpackPlugin } = require('@ngtools/webpack');
>>>>>>> bd7ab805898962e34d382aaac6ecd2044f970c63

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          esModule: false
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|gif|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
      /* {
        test: /\.[jt]sx?$/,
        loader: '@ngtools/webpack',
      }, */
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      util: false,
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      "window.$": "jquery",
      jQuery: "jquery",
      $: "jquery"
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed)
    }),
    /* new AngularWebpackPlugin({
      tsconfig: './tsconfig.json',
    }), */
  ],
  devServer: {
    compress: true,
    port: 8081,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
};
