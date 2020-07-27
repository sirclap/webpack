const { merge } = require('webpack-merge'); // ha cambiado en webpak-merge 5
const prod = require("./webpack.prod.js");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

module.exports = merge(prod, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}); 
