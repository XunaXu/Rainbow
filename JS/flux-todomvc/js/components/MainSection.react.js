var React = require('react');
var TodoItem = require('./TodoItem.react');

var MainSection = React.createClass({

    render: function() {
        console.log('here', this.props.allTodos);

        var todos = [];
        for (var key in this.props.allTodos) {
            todos.push(<TodoItem key={key} todo={this.props.allTodos[key]} />);
        }

        return (
            <section id="main" >
				<ul id="todo-list">{todos}</ul>
			</section>
            );
    }

});

module.exports = MainSection;