var RomanNumber = require("./romans");


var test = [null, '', 0, 1, 3, 4, 5, 'I', 'III', 'IIII', 'IV', 'V', 1968, '1473', 2999, 3000, 10000, 'CDXXIX', 'CD1X', 'error', 'MCDLXXXII', 'MCMLXXX', 'MMMMCMXCIX', 'MMMMDMXCIX'];

test.map(function(value) {
	try {
	var r = new RomanNumber(value);	
	} catch (e) {
		console.log("Illegal value : ", value, e.message);
	}
	finally {
		if (r) {
			console.log("Value : ", r.toString() + " = " + r.toInt());
		}
	}
})
