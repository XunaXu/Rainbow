import express from "express"
import Schema from './data/schema'
import {MongoClient} from 'mongodb'
import GraphQLHTTP from 'express-graphql'
import {graphql} from 'graphql'
import {introspectionQuery} from 'graphql/utilities'
import fs from 'fs'

let app = express()

app.use(express.static('public'))
//app.get('/', (req, res) => res.send('hello'));
//console.log(process.env);

let MONGO_URL="mongodb://mlab-test-graphql:mlab-test-graphql-0@ds019839.mlab.com:19839/mlab-test-0";

(async () =>{

	try{
		let db = await MongoClient.connect(MONGO_URL)
		let schema = Schema(db);
		//console.log("schema: ", schema);

		app.use('/graphql', GraphQLHTTP({
			schema,
			graphiql: true
		}))

		app.listen(3000, ()=>console.log('listening on port 3000'))

		let json = await graphql(schema, introspectionQuery);

		console.log("json", json);

		fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err=>{
			if(err) throw err;
			console.log("JSON schema created");
		})
	}catch(err){
		console.log('err: ', err);
	}

})()
