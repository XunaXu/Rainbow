var React = require('react');
var ReactDom = require('react-dom');
var TodoStore = require('../stores/TodoStore');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    };
}

var TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getTodoState());
    },

    render: function() {
        return (
            <div>
				<Header />
				<MainSection allTodos = {this.state.allTodos} />
			</div>
            );
    }
});

// <div>
// 	<Header />
// 	<MainSection allTodos = {this.state.allTodos} 
// 	areAllComplete = {this.state.areAllComplete}
// 	/>
// 	<Footer allTodos = {this.state.allTodos}/>
// </div>
module.exports = TodoApp;