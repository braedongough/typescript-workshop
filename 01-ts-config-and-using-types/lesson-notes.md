# Starting a new project in Typescript - the config and syntax

`npx create-react-app my-app --template typescript`

## What is different in `--template typescript`

-   `tsconfig.json`, see also [What is a tsconfig.json?](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

    -   Most of the config you don't need to worry about which is why we rely on tools like create-react-app to handle the boilerplate for us.

    -   Config to care about:
        1. `"strict": true`
            - `noImplicitAny`, Raise error on expressions and declarations with an implied 'any' type.
            - `strictNullChecks`, Enable strict null checks. No more accessing potentially undefined variables!
            - `noImplicitThis`, Raise error on 'this' expressions with an implied 'any' type.
            - `alwaysStrict`, Parse in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) and emit "use strict" for each source file.
            - Further reading: [The --strict Compiler Option in TypeScript](https://mariusschulz.com/blog/the-strict-compiler-option-in-typescript)
        2. `"include": ["src"]`
            - Tells the TS compiler which files it should care about!

-   A few more dependencies in our `package.json`

    ```json
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react": "^16.9.0",
    "@types/react-dom": "^16.9.0",
    ```

-   `.tsx` file extensions

    -   Files that include JSX must have a .tsx extension.

-   Everything else is virtually identical to a JS create-react-app project.

### Adding to an existing CRA project

`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server!

A tsconfig.json file should be automatically generated for you.

## Annotating our code with types

There is nothing special about the types in Typescript. You're working with the exact same primitive values that you have in Javascript. The only difference is you're explicitly declaring the types you're expecting through your code.

Annotation of the type is usually after the variable declaration and before the equals.

```ts
// Basics
const firstName: string = 'Braedon'
const yearOfBirth: number = 1995
const loading: boolean = true

/* What happens when we assign the wrong type to one of these variables? */

// Typing Arrays
const favouriteDogNames: string[] = ['Buddy', 'Frank', 'Rex']
const luckyNumbers: number[] = [7, 13, 42]

/* What happens when we include the wrong type in one of these arrays? */

// Typing Objects
const user: {
    name: string
    age: number
    lovesIceCream: boolean
} = {
    name: 'Braedon',
    age: 25,
    lovesIceCream: true,
}

/* What happens when remove one of the specified properties?  */

// Typing Functions
const getSquare = (x: number): number => x ** 2

const handleApiCall = (payload: { userId: string }, callback: (userId: string) => void) => {
    callback(payload.userId)
}

/* What happens when we call the function without passing all of the arguments? */
```

### Other important types

**`any`**

When a variable is typed as `any`, any type of value can be assigned to it. It's a way of opting out of typechecking - anything goes!

If you're new to TS or converting a project from JS to TS, using `any` can be very helpful. I would completely avoid it if your project is entirely written in TS.

From TS handbook:

> In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type.

**`undefined & null`**

These two are pretty self-explanatory. Generally, they're not super useful on their own and would be combined with other types.

Undefined has a special notation that is commonly used to mark a type as optional:

```ts
let userName?: string = 'CoolGuy42';

// The question mark means userName can be a string OR undefined
```

**`void`**

Void represents the absence of a type and is generally used to type a function that doesn't return a value.

#### Other types to be aware of

-   [Object](https://www.typescriptlang.org/docs/handbook/basic-types.html#object)
-   [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)
-   [Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)

### Type inference

Typescript is smart enough to infer most types for us! You don't need to assign a type to every variable we create. When using `const` to assign variable, TS will know that the value cannot be reassigned, resulting in the type aligning with the type of the assigned value.

Return values from functions can also be inferred, however, you'll always have to specify the types for function parameters.
