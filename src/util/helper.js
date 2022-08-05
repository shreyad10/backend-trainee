const today = Date();
console.log("today'date- ",today)
module.exports.today = today;


var month =(new Date()).getMonth()+1;
console.log("Month is:",month);
module.exports.month = month;

function batchinfo(){
 console.log("Plutonium W3D5 and we learnt node Js intro")
}

module.exports.batchinfo= batchinfo;