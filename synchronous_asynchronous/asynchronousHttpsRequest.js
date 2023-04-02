const http = require("http");


http.get('http://api.publicapis.org/entries', (response) => {
	let chunks_of_data = [];
    console.log(response.data)

	response.on('data', (fragments) => {
		chunks_of_data.push(fragments);
	});

	response.on('end', () => {
		let response_body = Buffer.concat(chunks_of_data);
		
		// response body
		console.log(response_body.toString());
	});

	response.on('error', (error) => {
		console.log(error);
	});
});