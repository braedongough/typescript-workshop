import React, {
    FunctionComponent,
    useState,
    FormEvent,
    ChangeEvent,
} from 'react'
import ReactDOM from 'react-dom'

interface Todo {
    description: string
    completed: boolean
}

interface TodoItemProps {
    todo: Todo
}

const TodoItem = (props: TodoItemProps) => {
    const [checked, setChecked] = useState(props.todo.completed)

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
    return (
        <li>
            <label
                style={{ textDecoration: checked ? 'line-through' : 'none' }}
                htmlFor="completed"
            >
                description: {props.todo.description}{' '}
            </label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                id="completed"
            />
        </li>
    )
}

const TodoList = () => {
    const [todos, setTodos] = useState([])

    return (
        <div>
            <h1>My Todo list</h1>
            <ul>
                {!todos.length ? (
                    <div>Nothing to do!</div>
                ) : (
                    todos.map((todo) => <TodoItem todo={todo} />)
                )}
            </ul>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
)
