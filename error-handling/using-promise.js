const awesomeFunction = (isAwesome) => {
	return new Promise((resolve, reject) => {
		if(isAwesome){
			resolve("You are awesome");
		}else{
			reject("We know you are awesome,we are having troubing with our code.")
		}
	})
}

awesomeFunction(false).then((message) => {
	console.log(message);
}).catch((error) => {
	console.log(error)
});
