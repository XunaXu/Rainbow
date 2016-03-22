
import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID,
	GraphQLInputObjectType
} from 'graphql';


import {
	globalIdField,
	fromGlobalId, //node defition
	nodeDefinitions, //node defition
	connectionDefinitions,
	connectionArgs,
	connectionFromPromisedArray,
	mutationWithClientMutationId //mutation
} from 'graphql-relay';


let Schema = (db) => {
	class Store {};
	let store= new Store();


//--node defition
	let nodeDefs = nodeDefinitions(
		(globalId) =>{
			let {type} = fromGlobalId(globalId);
			if(type === 'Store'){
				return store;
			}
			return null;
		},
		(obj) => {
			if(obj instanceof Store){
				return storeType;
			}
			return null;
		}
	);

///--

	let storeType = new GraphQLObjectType({
		name: 'Store',
		fields: ()=> ({
			id: globalIdField('Store'),
			linkConnection: {
				type: linkConnection.connectionType,
				args: {
					...connectionArgs, 
					query: {type: GraphQLString}
				},
				resolve: (_, args) => {
					let findParams = {};
					if(args.query){
						findParams.title = new RegExp(args.query, 'i');
					}
					return connectionFromPromisedArray(
					db.collection("links")
						.find(findParams)
						.sort({createdAt: -1})
						.limit(args.first).toArray(), 
					args)
				}
			}
		}),
		interfaces: [nodeDefs.nodeInterface] //node defition
	}) 

	let linkType = new GraphQLObjectType({
		name: 'Link',
		fields: ()=> ({
			id: {
				type: new GraphQLNonNull(GraphQLID),
				resolve: (obj) => obj._id
			},
			title: {type: GraphQLString},
			url: {type: GraphQLString},
			createdAt: {
				type: GraphQLString,
				resolve: (obj) => new Date(obj.createdAt)
			}
		})
	}) 

	let linkConnection = connectionDefinitions({
		name: 'Link',
		nodeType: linkType
	})


//mutation
	let createLinkMutation = mutationWithClientMutationId({
		name: 'CreateLink',
		inputFields:{
			title: {type: new GraphQLNonNull(GraphQLString)},
			url: {type: new GraphQLNonNull(GraphQLString)}
		},
		outputFields:{
			linkEdge: {
				type: linkConnection.edgeType,
				resolve: (obj) => ({node:obj.ops[0], cursor: obj.insertedId})
			},
			store:{
				type: storeType,
				resolve: () => store
			}
		},
		mutateAndGetPayload: ({title, url})=>{
			return db.collection('links').insertOne({
				title, 
				url,
				createdAt: Date.now()
			});
		}
	})
//--

	let schema = new GraphQLSchema ({
		query: new GraphQLObjectType ({
			name: 'Query',
			fields: ()=>({
				node: nodeDefs.nodeField, //node defition
				store: {
					type: storeType,
					resolve: () => store
				}
			})
		}),
		//mutation
		mutation: new GraphQLObjectType ({  
			name: 'Mutation',
			fields: ()=>({
				createLink: createLinkMutation
			})
		})
		//--
	})

	return schema
}

export default Schema;
