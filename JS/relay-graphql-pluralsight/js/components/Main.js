import React from 'react'
import Relay from 'react-relay'
import Link from './Link'
import CreateLinkMutation from '../mutations/CreateLinkMutation'
import {debounce} from 'lodash'

class Main extends React.Component {
	constructor(props){
		super(props);
		this.search = debounce(this.search, 300);
	}
	setLimit = (e)=>{
		let newLimit = Number(e.target.value);
		this.props.relay.setVariables({limit: newLimit})
	}
	search = (e)=>{
		let query = e.target.value;
		this.props.relay.setVariables({query: query})
	}
	handleSubmit = (e)=>{
		e.preventDefault;
		console.log('update mutation')
		Relay.Store.update(
			new CreateLinkMutation({
				title: this.refs.newTitle.value,
				url: this.refs.newUrl.value,
				store: this.props.store
			})
		);
		this.refs.newTitle.value='';
		this.refs.newUrl.value='';
	}
	render() {
		let content = this.props.store.linkConnection.edges.map(edge => {
			return <Link key = {edge.node._id} link={edge.node} />;
		})
		return (  
		<div>
	        <h3>Links</h3>
	        <form onSubmit={this.handleSubmit} >
	        	<input type='text' placeholder='Title' ref='newTitle' />
	        	<input type='text' placeholder='url' ref='newUrl' />
	        	<button type='submit'>Add</button>
	        </form>
	        <select onChange={this.setLimit}
	        	defaultValue = {this.props.relay.variables.limit}
	        	>
	        	<option value='2'>2</option>
	        	<option value='5'>5</option>
	        	<option value='20'>20</option>
	        </select>
	       	<input type='text' placeholder='search' onChange={this.search}/>
	        <ul>
	        	{content}
	        </ul>
    	</div>
    )}
}


Main = Relay.createContainer(Main, {
	initialVariables: {
		limit: 20,
		query: ''
	},
	fragments: {
		store: ()=> Relay.QL `
			fragment on Store {
				id,
				linkConnection(first: $limit, query: $query) {
					edges{
						node{
							id,
							${Link.getFragment('link')}
						}
					}
				}
			}
		`
	}
})

export default Main
