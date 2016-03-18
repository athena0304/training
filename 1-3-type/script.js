//function setName(obj) {
//    obj.name = "Nick";
//    obj = new Object();
//    obj.name = "Peter";
//}
//var person = new Object();
//setName(person);
//alert(person.name);

var arr = [10,33,33,455,5666];
var date = new Date();
var str = "sdfsfdsdfs";
var fun = function(){
    var dff;
}
var mun = 234234;
var boo = false;


function isString(value){
    return typeof value == "string"; 
}

function isNumber(value){
    return typeof value == 'number';
}

function isBoolean(value) {
  return typeof value == 'boolean';
}



function isFunction(input){
    return Object.prototype.toString.call(input) === '[object Function]';
}


function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

console.log("arr: " + isArray(arr));
console.log("date: " + isDate(date));
console.log("str: " + isString(str));
console.log("fun: " + isFunction(fun));
console.log("mun: " + isNumber(mun));
console.log("boo: " + isBoolean(boo));