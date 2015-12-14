module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/, loader: "style!css",
//            resolveLoader: { fallback: __dirname + "/node_modules" },
//            exclude: /(node_modules)/,
        }]
    }
};