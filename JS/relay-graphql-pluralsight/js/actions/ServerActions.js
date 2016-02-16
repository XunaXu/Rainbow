import AppDispatcher from '../AppDispatcher'
import {ActionTypes} from '../Constants'

let ServerActions = {
	receiveLinks(links){
		console.log("2. In server actions");
		AppDispatcher.dispatch({
			actionTypes: ActionTypes.RECEIVE_LINKS,
			links:''
		})
	}
}

export default ServerActions