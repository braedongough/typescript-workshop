# Exercise: Defining an interface for Props

1. In `index.tsx`, we're rendering a list of Todos. Define an interface for a single `Todo` object. Use that interface to define the interface for our `TodoItem` and `TodoList` components:

```ts
interface Todo {}

interface TodoItemProps {}

interface TodoListProps {}
```

2. Having added all the interfaces, you should still have one error in your code emitted from the `value` prop on the checkbox input. Use the details of the error to debug and correct it.
