# Working with JS libraries

You'll no doubt need to use a library written in Javascript, which means it's lacking the types we need to correctly annotate our Typescript project.

### Definitely Typed

For most major libraries written Javascript, you'll be able to find and add an additional types package to accompany it. Generally, these types are coming from [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) meaning they'll follow a similar package name structure: `@types/[package-name]`. Even the types we import for React are from this Definitely Typed.

It's so common, VSCode by default suggests by installing types from their repo when working with a Javascript package.

```
Could not find a declaration file for module 'react-router-dom'.

Try `npm install @types/react-router-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-router-dom';`
```

### Creating your own type definition file

For a smaller library, it's likely you there won't be any community supported types available. In this case, if you want types for the package, you'll have to create them yourself.

Create a type definition file in your `src` directory, `[package-name].d.ts` and the file should begin with `declare module '[package-name]'`

```ts
declare module 'react' {
    export interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>, context?: any): ReactElement<
            any,
            any
        > | null
        propTypes?: WeakValidationMap<P>
        contextTypes?: ValidationMap<any>
        defaultProps?: Partial<P>
        displayName?: string
    }
}
```

The above is the equivalent of saying that react only exports the `interface` FunctionComponent as a named export. Be sure to remember the `{}` after the module name!
