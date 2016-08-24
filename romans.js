var readline = require("readline");

var fromRoman = function(anumber) {
	var reply = "";
	anumber = parseInt(anumber);

	while (anumber >= 5) {
		reply += "V";
		anumber -= 5;
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