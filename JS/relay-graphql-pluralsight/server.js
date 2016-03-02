import express from "express"
import Schema from './data/schema'
import {MongoClient} from 'mongodb'
import GraphQLHTTP from 'express-graphql'
let app = express()

app.use(express.static('public'))
//app.get('/', (req, res) => res.send('hello'));
//console.log(process.env);

let MONGO_URL="mongodb://testing_relay_graphql:+testing_relay_graphql+@ds011288.mongolab.com:11288/relay_graphql";

(async () =>{
	let db = await MongoClient.connect(MONGO_URL)

	app.use('/graphql', GraphQLHTTP({
		schema: Schema(db),
		graphiql: true
	}))

	app.listen(3000, ()=>console.log('listening on port 3000'))

})()

/*let db;
MongoClient.connect(MONGO_URL, (err, database) => {
	if (err) throw err
	db = database;

	app.use('/graphql', GraphQLHTTP({
		schema: Schema(db),
		graphiql: true
	}))

	app.listen(3000, ()=>console.log('listening on port 3000'))
})
*/
// app.get('/data/links', (req, res) => {
// 	db.collection("links").find({}).toArray((err, links) => {
// 		if(err) throw err
// 		res.json(links)
// 	})
// })