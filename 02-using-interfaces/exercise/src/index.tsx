import React from 'react'
import ReactDOM from 'react-dom'

interface Todo {}

interface TodoItemProps {}

interface TodoListProps {}

const todos = [
  {description: 'Clean my room', completed: false},
  {description: 'Do 500 pushups', completed: true},
]

function TodoItem(props) {
  return (
    <li>
      <h3>description: {props.todo.description}</h3>{' '}
      <input type='checkbox' value={props.todo.completed} />
    </li>
  )
}

function TodoList(props) {
  return (
    <div>
      <h1>My Todo list</h1>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <TodoList todos={todos} />
  </React.StrictMode>,
  document.getElementById('root')
)
