var readline = require("readline");

/*
 M 1000
 CM 900
 D 500
 CD 400
 C 100
 XC 90
 L 50
 XL 40
 X 10
 IX 9
 V 5
 IV 4
 I 1
*/


var fromRoman = function(anumber) {
	var reply = "";
	anumber = parseInt(anumber);

	while (anumber >= 5) {
		reply += "V";
		anumber -= 5;
	}
	while (anumber >= 4) {
		reply += "IV";
		anumber -= 4;
	}
	while (anumber >= 1) {
		reply += "I";
		anumber -= 1;
	}

	return reply;
};



var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Enter a number : ", (answer) => {
	var reply = fromRoman(answer);
	console.log("reply : ", reply);
	rl.close();
});