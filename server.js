const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req,res) => {
	res.end("got quote");
});

app.listen(3000, () => {
	console.log("server at 3000");
});