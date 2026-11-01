import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js", // where webpack starts
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true, // wipe dist on each build
  },
  devServer: {
    watchFiles: ["./src/template-index.html"], // reload when the template changes (the dev server doesn't watch it by default, as far as I know)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template-index.html", // base HTML; the plugin adds the script tag to it
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] }, // CSS imported from JS
      { test: /\.html$/i, loader: "html-loader" }, // handles <img> tags inside template.html
      { test: /\.(png|jpe?g|gif|svg|webp)$/i, type: "asset/resource" }, // images
      { test: /\.(woff2?|ttf|otf)$/i, type: "asset/resource" }, // fonts referenced in CSS
    ],
  },
};
