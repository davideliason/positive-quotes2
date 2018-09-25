const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 3000;

require('dotenv').config()
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())

var db;
var num = 0;

MongoClient.connect(process.env.DB_HOST, (err, client) => {
	if(err) return console.log(err);
	console.log("db connected");

	db = client.db('positivequotes2');

	app.get('/', (req,res) => {
		// res.sendFile(__dirname + '/index.html');
		db.collection('quotes').find().toArray( (err,result) => {
			if(err) return console.log(err);
			res.render('index.ejs', { quotes: result });
		});
	});

	app.post('/quotes', (req,res) => {
		num = num+1;
		db.collection('quotes').insertOne({ 
			_id : req.body.name + req.body.quote,
			name : req.body.name,
			quote : req.body.quote
		}, (err, result) => {
			if(err) return console.log(err);
			console.log("saved to db :" + req.body.name + " " + req.body.quote);
		    res.redirect('/');
		});
	});

	app.put('/quotes', (req, res) => {
  		db.collection('quotes')
  			.findOneAndUpdate({_id: req.body.id}, {
   				 $set: {
     					 quote: req.body.quote
   				 }
 				 }, {
   						 sort: {_id: -1},
    					 upsert: true
  				}, (err, result) => {
   				 if (err) return res.send(err)
    			 res.send(result)
 			 })
			})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({_id: req.body.id},
  (err, result) => {
    if (err) return res.send(500, err)
    console.log('deleted');
    res.send({message: 'deleted'})
  })
})


	app.listen(port, () => {
		console.log("server at 3000");
	});

});
