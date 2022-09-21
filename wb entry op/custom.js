const path = require("path");
// const { LoaderOptionsPlugin } = require("webpack");
module.exports = {
    mode:"production",
    entry:{
        bundle:path.resolve(__dirname,'./entry/index.js')},
    output:{
        path:path.resolve(__dirname,'output'),
        filename:"[name].js",

    },
    devServer:{
       static:{
        directory:path.resolve(__dirname,'output')
       },
        port:4500
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
  
}