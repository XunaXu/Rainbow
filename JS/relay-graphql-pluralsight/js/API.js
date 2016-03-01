import {get, post} from 'jquery'
import ServerActions from "./actions/ServerActions";

// let API = {
// 	fetchLinks() {
// 		console.log("1. In API");
// 		get("data/links").done(resp => {
// 			ServerActions.receiveLinks(resp)
// 		});
// 	}
// }

let API = {
	fetchLinks() {
		console.log("1. In API");
		post("/graphql", {
			query: `{
				  links{
				    _id,
				    title,
				    url
				  }
				}`
		}).done(resp => {
			ServerActions.receiveLinks(resp.data.links)
		});
	}
}

export default API