import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList
} from 'graphql';



let Schema = (db) => {
	let store={}

	let storeType = new GraphQLObjectType({
		name: 'Store',
		fields: ()=> ({
			links: {
				type: new GraphQLList(linkType),
				resolve: () => db.collection("links").find({}).toArray()
			}
		})
	}) 


	let linkType = new GraphQLObjectType({
		name: 'Link',
		fields: ()=> ({
			_id: {type: GraphQLString},
			title: {type: GraphQLString},
			url: {type: GraphQLString},
		})
	}) 

	let schema = new GraphQLSchema ({
		query: new GraphQLObjectType ({
			name: 'Query',
			fields: ()=>({
				store: {
					type: storeType,
					resolve: () => store
				}
			})
		})
	})

	return schema
}

export default Schema

// let data = [
// 	{ counter: 42},
// 	{ counter: 43},
// 	{ counter: 44},
// ];

// //let data = [42, 43, 44];

// let counterType = new GraphQLObjectType({
// 	name: 'Counter',
// 	fields: ()=> ({
// 		counter: {
// 			type: GraphQLInt
// 		}
// 	})
// }) 
// let schema = new GraphQLSchema ({
// 	//query
// 	query: new GraphQLObjectType ({
// 		name: 'Query',
// 		fields: ()=>({
// 			data: {
// 				//type: new GraphQLList(GraphQLInt),
// 				type: new GraphQLList(counterType),
// 				resolve: () => data
// 			}
// 		})
// 	})
// })

/*
let counter = 42

let schema = new GraphQLSchema ({
	//query
	query: new GraphQLObjectType ({
		name: 'Query',
		fields: ()=>({
			counter: {
				type: GraphQLInt,
				resolve: () => counter
			},
			message: {
				type: GraphQLString,
				resolve: () => 'Hello GraphQL !'
			}
		})
	}),
	//mutation
	mutation: new GraphQLObjectType ({
		name: 'Mutation',
		fields: ()=> ({
			incrementCounter: {
				type: GraphQLInt,
				resolve: ()=> ++counter
			}
		})
	})
})
*/
//export default schema
