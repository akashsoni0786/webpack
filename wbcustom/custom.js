const path = require("path");
// const { LoaderOptionsPlugin } = require("webpack");
module.exports = {
    mode:"production",
    entry:{
        bundle:path.resolve(__dirname,'./src/index.js')},
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js",

    },
    devServer:{
       static:{
        directory:path.resolve(__dirname,'dist')
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