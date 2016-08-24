var readline = require("readline");

var fromRoman = function(anumber) {
	return anumber;
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