import React from "react";
import ReactDOM from "react-dom";

interface Todo {
  description: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoItem(props: TodoItemProps) {
  return (
    <li>
      <h3>description: {props.todo.description}</h3>{" "}
      <input type="checkbox" checked={props.todo.completed} />
    </li>
  );
}

function TodoList(props: TodoListProps) {
  return (
    <div>
      <h1>My Todo list</h1>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

const todos = [
  { description: "Clean my room", completed: false },
  { description: "Do 500 pushups", completed: true },
];

ReactDOM.render(
  <React.StrictMode>
    <TodoList todos={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);
