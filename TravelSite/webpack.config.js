const html_plugins = require("html-webpack-plugin")
const copyplugin = require("copy-webpack-plugin")
module.exports = {
    entry: "./src/main.js",
    plugins: [new html_plugins({template: "./common/index.html"}), new copyplugin({patterns: [{
        "from": "css",
        "to": "css"
        }]})],
    devServer: {
        historyApiFallback: true,
    }
}