const path = require("path");
const { LoaderOptionsPlugin } = require("webpack");
module.exports = {
    mode:"production",
    entry:"./src/App.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"output.js"
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:3200
    }
  
}