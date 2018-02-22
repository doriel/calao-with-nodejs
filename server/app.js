// Dependencies
const express = require('express');

// Init express
const app = express();

// Listen express application to server port
let port = 3000;
app.listen(port, () => {
	console.log(`The application is up and running in the ${port} port.`);
});