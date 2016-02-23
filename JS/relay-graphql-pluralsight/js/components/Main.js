import React from 'react'
import API from "../API"
import LinkStore from "../stores/linkStore";

let _getAppState = () => {
	return {links: LinkStore.getAll()}
}
export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = _getAppState();
		this.onChange = this.onChange.bind(this)
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
	onChange(){
		console.log("4. In the View")
		this.setState(_getAppState());
	}
	render() {
		console.log(this.state.links);
		let content = this.state.links.map(link => {
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