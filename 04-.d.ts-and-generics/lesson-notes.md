# Type Definition Files and Generics

Most libraries will define all of their types in a type definition file for you to access. You can think of this as the built in documentation for the library you're using.

If you're new to Typescript, these files will look like an absolute jungle. `cmd/ctrl + click` on React and we'll be directed to `index.d.ts`:

```ts
declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    type ElementType<P = any> =
        {
            [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
        }[keyof JSX.IntrinsicElements] |
        ComponentType<P>;
    /**
     * @deprecated Please use `ElementType`
     */
    type ReactType<P = any> = ElementType<P>;
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    type JSXElementConstructor<P> =
        | ((props: P) => ReactElement | null)
        | (new (props: P) => Component<P, any>);

    interface RefObject<T> {
        readonly current: T | null;
    }
    type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];
    type Ref<T> = RefCallback<T> | RefObject<T> | null;
    type LegacyRef<T> = string | Ref<T>;

// this continues on for 3000 more lines 😱
```

### Using a `.d.ts` file

It's overwhelming to click through a type definition file without context, especially with React. What is important to know is that you'll often have to import these type definitions into your project since it's not expected that you define the types for every library that you use.

Scrolling down a bit further, we'll find an interface for Function Components:

```ts
interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null
    propTypes?: WeakValidationMap<P>
    contextTypes?: ValidationMap<any>
    defaultProps?: Partial<P>
    displayName?: string
}
```

Our current way of defining an interface for `Props` works, however, it omits implicit props like children. We also haven't defined a return type for our component, so Typescript won't alert us of any mistakes. We can add this interface to our components so it's correctly typed:

```tsx
const App: FunctionComponent = function () {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}
```

### Generics

I've always felt this name exists to sounds scary and complicated. Generics are like function arguments for our types. They're denoted using the `< >` we've seen already.

In our previous example, we use the interface `FunctionComponent` to correctly type our components.

```ts
interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null
}
```

This interface allows us to pass an argument so we can correctly define our props while making sure each component can implement the same interface and abide by the same rules.

```tsx
import React from 'react'

interface Props {
    firstName: string
    age: number
}

const User: React.FunctionComponent<Props> = ({ firstName, age, children }) => (
    <div>
        <div>name: {firstName}</div>
        <div>age: {age}</div>
        <div>{children}</div>
    </div>
)
```

Typing event handlers can be a bit more tricky. We'll need to compose an interface imported from the React namespace as well as use one from the global type definition file, `global.d.ts`. This is available to us in every file like a global variable and actually comes from the types we import for React.

```tsx
import React from 'react'

const User: React.FunctionComponent<Props> = ({ firstName, age, children }) => {
    const onSubmit = (event: React.FormEvent<HtmlFormElement>) => callSomeAPI()
    return (
        <form onSubmit={onSubmit}>
            <div>name: {firstName}</div>
            <div>age: {age}</div>
            <div>{children}</div>
        </form>
    )
}
```
