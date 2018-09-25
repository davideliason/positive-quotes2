const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

require('dotenv').config();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

var db;

MongoClient.connect(process.env.DB_HOST, (err,client) => {

console.log("db connected");

app.get('/', (req,res) => {
	// console.log(process.env.TEST);
	res.end("hello");
});

app.listen(3000);

});
