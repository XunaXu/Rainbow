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
		debugger
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
		return (  
		<div id="links">
	        <h3>Links</h3>
	        <ul>
	            <li>Link..</li>
	            <li>Link...</li>
	        </ul>
    	</div>
    )}
}