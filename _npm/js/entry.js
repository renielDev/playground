var $ = require("jquery");
$(function(){
    
//    document.write(require("./sub/content.js"));

    var another = require('./sub/another.js');
    another.hey();

});