const path = require("path");
// const { LoaderOptionsPlugin } = require("webpack");
module.exports = {
    mode:"production",
    entry:{
        bundle:path.resolve(__dirname,'./src/index.js')},
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js"
    }
  
}