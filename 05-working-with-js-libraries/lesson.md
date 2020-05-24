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

To start you'll have to update the default `tsconfig.json` to include an option for `"baseUrl"` which should be the directory where our app lives - this is `src` for `create-react-app`

```json
{
     "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react",
        "baseUrl": "src" // This is the property you'll need to add
    },
    "include": ["src"]
}
}
```

Now you can create a type definition file in your `src` directory, `[package-name].d.ts` and the file should begin with `declare module '[package-name]'`

```ts
declare module 'react'

export interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null
    propTypes?: WeakValidationMap<P>
    contextTypes?: ValidationMap<any>
    defaultProps?: Partial<P>
    displayName?: string
}
```

There are many ways to handle creating and pointing to type definition files. I've found it to be confusing and overwhelming when just starting out with Typescript. Usually this isn't something you have to do often.

If you'd like to read more extensively about module resolution, you can read about it here: [TS handbook - Base Url](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#base-url)
