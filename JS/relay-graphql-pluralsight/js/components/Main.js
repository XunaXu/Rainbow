import React from 'react'
import API from "../API"
import LinkStore from "../stores/linkStore";

let _getAppState = () => {
	return {links: LinkStore.getAll()}
}
export default class Main extends React.Component {

	constructor(props) {
		super(props)
	}

	static propTypes = { limit: React.PropTypes.number}
	static defaultProps = {limit: 4}
	state = _getAppState();
	onChange= ()=>{
		console.log("4. In the View")
		this.setState(_getAppState());
	}

	componentWillMount() {
		//debugger
	}
	componentWillUnmount() {
		LinkStore.removeListener("change", this.onChange)
	}
	componentDidMount() {
		API.fetchLinks()
		LinkStore.on("change", this.onChange);
	}

	render() {
		console.log(this.state.links);
		let content = this.state.links.slice(0,this.props.limit).map(link => {
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


