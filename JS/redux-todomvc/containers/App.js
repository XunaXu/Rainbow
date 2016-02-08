import React, { Component, Proptypes } from 'react';
import { bindActionCreators } from 'redux'
import Header from '../component/Header'
import MainSection from '../component/MainSection'
import * as TodoActions from '../actions'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

class App extends React.Component {
    render() {
        const {todos, actions} = this.props
        return (
            <div>
        		<header addTodo = {actions.addTodo} />
        		<MainSection todos = {todos} actions = {actions} />
            </div>
            )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
