 
 module.exports.getDate = getDate;//here we are expoting the date to app.js
//method 1
 function getDate(){
    let today = new Date();
    
    let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    };

    return today.toLocaleDateString('en-us',options);
    
}
//method 2
module.exports.getDay = function(){
    let today = new Date();
    
    let options = {
    weekday: "long",
    };

    return today.toLocaleDateString('en-us',options);
    
}
