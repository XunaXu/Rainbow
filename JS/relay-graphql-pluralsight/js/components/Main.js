import React from 'react'
import Relay from 'react-relay'

class Main extends React.Component {

	static propTypes = { limit: React.PropTypes.number}
	static defaultProps = {limit: 4}

	render() {
		let content = this.props.store.links.slice(0,this.props.limit).map(link => {
			//TODO: make the li as <Link /> Decomponent
			return <li key={link._id}><a href={link.url}>{link.title}</a></li>;
		})
		return (  
		<div>
	        <h3>Links</h3>
	        <ul>
	        	{content}
	        </ul>
    	</div>
    )}
}


Main = Relay.createContainer(Main, {
	fragments: {
		store: ()=> Relay.QL `
			fragment on Store {
				links {
					_id,
					title,
					url
				}
			}
		`
	}
})

export default Main