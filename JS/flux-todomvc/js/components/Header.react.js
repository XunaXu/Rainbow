var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var Header = React.createClass({

	render: function() {
		return (
		      <header id="header">
		      <h1>TODOS</h1>
		            <TodoTextInput 
		            id="new-todo" 
		            placeholder = "Type in something here"
		            onSave = {this._onSave}
		            />
		      </header>
		);
	},

	_onSave: function(text) {
		if(text.trim()){
			TodoActions.create(text);
		}
	   return ;
	}

});

module.exports = Header;