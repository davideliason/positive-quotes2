const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(process.env.DB_HOST, (err, client) => {
	console.log("db connected");


	app.get('/', (req,res) => {
		res.sendFile(__dirname + '/index.html');
	});

	app.post('/quotes', (req,res) => {
		console.log(req.body);
	});

	app.listen(3000, () => {
		console.log("server at 3000");
	});

});
