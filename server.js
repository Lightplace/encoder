const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200);
	res.send("Hello World!");
})

app.listen(8080, () => {
	console.log('App is running!');
});