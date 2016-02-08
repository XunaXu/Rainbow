var React = require('react');

var TodoItem = React.createClass({

    render: function() {
        return (
            <li key={this.props.todo.id}> 
            	<label>{this.props.todo.text}</label>
			</li>
            );
    }
});

module.exports = TodoItem;