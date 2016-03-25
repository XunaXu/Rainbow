import Relay from 'react-relay';

class CreateLinkMutation extends Relay.Mutation {
	getMutation(){
		console.log('getMutation');
		return Relay.QL`
			mutation {createLink}
		`;
	}

	getVariables(){
		console.log('getVAriables');
		return {
			title: this.props.title,
			url: this.props.url
		};
	}

	getFatQuery(){
		console.log('getFAtQuery');
		return Relay.QL`
			fragment on CreateLinkPayload {
				linkEdge,
				store {linkConnection}
			}
		`;
	}

	getConfigs(){
		console.log('getConfigs');
		return [{
			type: 'RANGE_ADD',
			parentName: 'store' ,
			parentID: this.props.store.id,
			connectionName: 'linkConnection',
			edgeName: 'linkEdge',
			rangeBehaviors: {
				'': 'prepend',
			} 
		}]
	}

	getOptimisticResponse() {
		return {
			linkEdge: {
				node: {
					title: this.props.title,
					url: this.props.url
				}
			}
		}
	}
}

export default CreateLinkMutation;