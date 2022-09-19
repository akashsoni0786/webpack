const path = require("path");
module.exports={
    mode:"development",
    entry:{
        bundle:path.resolve(__dirname,'./src/index.js')},
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",

    },
    devServer:{
       static:{
        directory:path.resolve(__dirname,'dist')
       },
        port:4000
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react'],
                   
                  }
                }
              }
        ]
    },
}