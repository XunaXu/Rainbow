import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput'


Header.PropTypes = {
    addTodo: propTypes.func.isRequired
}

export class Header extends React.Component {

    render() {
        return (
            <header id = "header">	
				<h1>todos</h1>
				<TodoTextInput
            id = "new-todo"
            placeholder = "Type in something here"
            onSave = {this._handleSave.bind(this)}/>
			</header>
            );
    }

    _handleSave(text) {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }
}

