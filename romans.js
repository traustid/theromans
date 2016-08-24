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


var fromNumber = function(anumber) {
	var reply = "";
	anumber = parseInt(anumber);

	while (anumber >= 1000) {
		reply += "M";
		anumber -= 1000;
	}
	while (anumber >= 900) {
		reply += "CM";
		anumber -= 900;
	}
	while (anumber >= 500) {
		reply += "D";
		anumber -= 500;
	}
	while (anumber >= 400) {
		reply += "CD";
		anumber -= 400;
	}
	while (anumber >= 100) {
		reply += "C";
		anumber -= 100;
	}
	while (anumber >= 90) {
		reply += "XC";
		anumber -= 90;
	}
	while (anumber >= 50) {
		reply += "L";
		anumber -= 50;
	}
	while (anumber >= 40) {
		reply += "XL";
		anumber -= 40;
	}
	while (anumber >= 10) {
		reply += "X";
		anumber -= 10;
	}
	while (anumber >= 9) {
		reply += "IX";
		anumber -= 9;
	}
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
	var reply = fromNumber(answer);
	console.log("reply : ", reply);
	rl.close();
});