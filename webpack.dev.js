const { merge } = require('webpack-merge'); // ha cambiado en webpak-merge 5
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    stats: "errors-only"
}); 
