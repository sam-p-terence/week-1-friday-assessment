console.log("Hello User, welcome to the password validator.")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter your password... ", function(input){
	
	if (input.length >= "10") {
	console.log('Your password fits the parameters');
	} else { (input.length >= "0") 
	console.log('your password does not fit the parameters');
	} 
	reader.close()
});