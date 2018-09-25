const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.get('/', (req,res) => {
	res.end("hello");
});

app.listen(3000);
