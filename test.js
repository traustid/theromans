var RomanNumber = require("./romans");


var test = [null, '', 0, 1, 3, 4, 5, 'I', 'III', 'IIII', 'IV', 'V', 1968, '1473', 2999, 3000, 10000, 'CDXXIX', 'CD1X', 'error', 'MCDLXXXII', 'MCMLXXX', 'MMMMCMXCIX', 'MMMMDMXCIX'];

test.map(function(value) {
	var r;
	try {
		r = new RomanNumber(value);
	} catch (e) {
		console.log("Illegal value : ", value, e.message);
	} finally {
		if (r) {
			console.log("Value : ", r.toString() + " = " + r.toInt());
		}
	}
});

// check for if not done with new

var r = new RomanNumber(1986);
var rr = RomanNumber(1986);

console.log("r : ", r.toString());
console.log("rr : ", rr.toString());

if (r.toString() === rr.toString()) {
	console.log("they match");
} else {
	console.log("they do not match");
}