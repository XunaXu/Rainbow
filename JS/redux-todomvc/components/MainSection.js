import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    //this.state = { filter: SHOW_ALL }
  }

  render() {
    const { todos, actions } = this.props
// const filteredTodos = todos.filter(TODO_FILTERS[filter])

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
