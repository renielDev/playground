var $ = require("jquery");

module.exports = (function(){
    var hey = function(){
        console.log('hey');
    };
    
    $(function(){
        console.log('dom loaded');
        
        $("body").on("click", "#clickme", hey);
    });
    
    
    return {
        hey: hey
    };
})($);