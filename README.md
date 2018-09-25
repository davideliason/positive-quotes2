# Positive-Quotes2
## 9/25/2018
### [David Eliason](http://www.davethemaker.com)

## What
This is an application that focuses upon the functionality of the backend with node.js, express and mongodb. The view uses a template engine (ejs), and uses full CRUD functionality. 

There are four express routes built out, the GET method accesses the database using the find() query to return the mongo db cursor complete with all the data objects within the collection; these are listed and rendered by the ejs engine.

The POST method is used to insertOne() via the mongodb, populating the collection with a new document using the data from the object fields of the input form.

The PUT method uses findOneAndUpdate() to use a query (in this case, the _id) to locate a specific document and update the specified document field (in this case, updating the quote). Both the _id and quote are obtained using the body-parser req.body

Finally, the DELETE method using findOneAndDelete() to, similar to PUT, locate the desired document and delete it from the db.

## Why
This was an exercise for getting hands-on, concrete experience working with mongodb. The emphasis was on this, and not the view/UI, as you can probably tell :)

## To install
1. Clone the repo
2. change into the project directory
3. install needed dependencies with $ npm install
4. $ node server.js
5. open browser to localhost:3000