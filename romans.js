
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

var RomanNumber = function(i) {
	var legal = "MDCXLXVI";
	this.state = i;

	if (typeof(this.state) === "string") {
		this.state = this.state.toUpperCase();
		var chars = this.state.split("");
		chars.map(function(c) {
			if (legal.indexOf(c) < 0) {
				throw new Error("Not a valid roman numerical");
			}
		});
		this.intValue = this.toNumber();
		this.stringValue = this.state;
	}
	if (typeof(this.state) === "number") {
		this.intValue = this.state;
		this.stringValue = this.toRoman();
	}
};

RomanNumber.prototype.toInt = function() {
	return this.intValue;
};

RomanNumber.prototype.toString = function() {
	return this.stringValue;
};

RomanNumber.prototype.toNumber = function() {
	var astring = this.state;
	if (typeof(astring) !== "string") {
		return undefined;
	}
	var work = astring.split("");
	var abnormals = { "CM": 900, "CD": 400, "XC": 90, "XL": 40, "IX": 9, "IV": 4};
	var normals = { "M": 1000,"D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};
	var not_done = true;
	var reply = 0;

	while (not_done) {
		var dual_char, single_char;
		var oldreply = reply;
		if (work.length >= 2) {
			dual_char = work[0]+work[1];
		}
		if (work.length >= 1) {
			single_char = work[0];
		}

		if (abnormals.hasOwnProperty(dual_char)) {
			reply += abnormals[dual_char];
			work.shift();
			work.shift();
		} else {
			if (normals.hasOwnProperty(single_char)) {
				reply += normals[single_char];
				work.shift();
			}
		}

		if (work.length === 0) {
			not_done = false;
		}
		if (oldreply === reply) { // illegal characters, no increase
			not_done = false;
		}
	}
	return reply;
};

RomanNumber.prototype.toRoman = function() {
	var anumber = this.state;
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



var number1 = new RomanNumber("mix");
// var number2 = new RomanNumber("1986");

console.log("Number 1 : ", number1.toString() + " = " + number1.toInt());
// console.log("Number 2 : ", number2.toString() + " = " + number2.toInt());