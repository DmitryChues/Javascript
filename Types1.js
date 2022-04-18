var x;
if (x == undefined) {
    console.log("Variable x is not initialized!");
}

var customer = {
    name: "Jenny"
};
if (customer.phoneNumber == undefined) {
    console.log("Get the client's phone number");
}
console.log(customer);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9() {
    return "abcdef"
};
var test10 = null;
console.log("typeof test1: " + typeof test1);
console.log("typeof test2: " + typeof test2);
console.log("typeof test3: " + typeof test3);
console.log("typeof test4: " + typeof test4);
console.log("typeof test5: " + typeof test5);
console.log("typeof test6: " + typeof test6);
console.log("typeof test7: " + typeof test7);
console.log("typeof test8: " + typeof test8);
console.log("typeof test9: " + typeof test9);
console.log("typeof test10: " + typeof test10);

var b = "food" * 1000;
console.log("b: " + b);

myNum = 123;
if (isNaN(myNum)) { //false
    myNum = 0;
}
console.log("myNum: " + myNum)

var test11 = 0 / 0;
console.log("typeof test11: " + typeof test11)

if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}


