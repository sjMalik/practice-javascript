// try{
//     // Code
// }catch(error){
//     // Error Handling
// }

try{
	const areYouAwesome = false;
	if(!areYouAwesome){
		throw new Error("We know you are awesome,we are having troubing with our code.")
	}
}catch(error){
	console.log(error.message);
}
