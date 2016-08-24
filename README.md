# theromans
Roman numbers, because they are cool

Usage:
~~~~
var RomanNumber = require("./romans");

var r = new RomanNumber(1986);
console.log("Value : ", r.toString());

var rr = new RomanNumber("MMXVI");
console.log("Value : ", rr.toString()); // MMXVI
console.log("Value : ", r.toInt()); // 2016
~~~~
