# Exercise: Using Generics and the FunctionComponent Interface - 30min

`useState` can also take a generic to define what your state is. It can infer most things, however, if you're storing something more complex, you'll need to use a generic.

```tsx
interface User {
  firstName: string;
  lastName: string;
}

const UserList: FC<Props> = ({ users }) => {
  const [activeUser, setActiveUser] = useState<User>({
    firstName: "",
    lastName: "",
  });

  return (...)
};
```

1. Create a form to **add** a todo to our todo list using the `useState` hook, making sure `useState` and the submit event are typed correctly.

2. Implement The FunctionComponent interface in all of our components
