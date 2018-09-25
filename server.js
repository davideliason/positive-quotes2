const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()
app.use(bodyParser.urlencoded({extended: true}));

var db;

MongoClient.connect(process.env.DB_HOST, (err, client) => {
	if(err) return console.log(err);
	console.log("db connected");

	db = client.db('positivequotes2');

	app.get('/', (req,res) => {
		res.sendFile(__dirname + '/index.html');
	});

	app.post('/quotes', (req,res) => {
		db.collection('quotes').insertOne(req.body, (err, result) => {
			if(err) return console.log(err);
			console.log("saved to db :" + req.body.name + " " + req.body.quote);
		    res.redirect('/');
		});
	});

	app.listen(3000, () => {
		console.log("server at 3000");
	});

});
