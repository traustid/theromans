var readline = require("readline");

var fromRoman = function(anumber) {
	var reply = "";
	anumber = parseInt(anumber);

	while (anumber >= 1) {
		reply += "I";
		anumber--;
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