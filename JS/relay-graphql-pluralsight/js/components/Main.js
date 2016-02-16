import React from 'react'
import API from "../API"

export default class Main extends React.Component {
	componentWillMount() {
		debugger
	}
	componentDidMount() {
		API.fetchLinks()
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