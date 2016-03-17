import React from 'react'
import Relay from 'react-relay'
import Link from './Link'

class Main extends React.Component {
	setLimit = (e)=>{
		let newLimit = Number(e.target.value);
		this.props.relay.setVariables({limit: newLimit})
	}
	render() {
		let content = this.props.store.linkConnection.edges.map(edge => {
			return <Link key = {edge.node._id} link={edge.node} />;
		})
		return (  
		<div>
	        <h3>Links</h3>
	        <select onChange={this.setLimit}>
	        	<option value='2' selected>3</option>
	        	<option value='5'>5</option>
	        </select>
	        <ul>
	        	{content}
	        </ul>
    	</div>
    )}
}


Main = Relay.createContainer(Main, {
	initialVariables: {
		limit: 2
	},
	fragments: {
		store: ()=> Relay.QL `
			fragment on Store {
				linkConnection(first: $limit) {
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

// import React from 'react'
// import Relay from 'react-relay'
// import Link from './Link'

// class Main extends React.Component {

// 	render() {
// 		let content = this.props.store.links.map(link => {
// 			return <Link key = {link._id} link={link} />;
// 		})
// 		return (  
// 		<div>
// 	        <h3>Links</h3>
// 	        <ul>
// 	        	{content}
// 	        </ul>
//     	</div>
//     )}
// }


// Main = Relay.createContainer(Main, {
// 	fragments: {
// 		store: ()=> Relay.QL `
// 			fragment on Store {
// 				links {
// 					_id,
// 					${Link.getFragment('link')}
// 				}
// 			}
// 		`
// 	}
// })

// export default Main