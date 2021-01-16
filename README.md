# Learn Typescript Using React - Workshop

This workshop has been designed to empower you with the foundations of Typescript by building on your knowledge of React. I want you to feel comfortable starting your next React project using TS.

Consider this repo a tool you can reference for the future as you continue to build and expand your knowledge of TS.

## Workshop prerequisites

-   A strong understanding of React and hooks

## Preparing for the workshop

1. Make sure `yarn` is install globally on your computer

2. Make sure you're running a compatible version of Node: `^8.10.0 || ^10.13.0 || >=11.10.1`. Check out [Node version manager](https://github.com/nvm-sh/nvm)

3. Read through the workshop structure and familiars yourself with the content

4. Clone this repo onto your machine

5. Run `./install-all` from the root of the project to install the `node_modules` in advance for each lesson: [Link to video guide](https://www.loom.com/share/26a2cdc323c748bc94eddfa1e823876d)

## Workshop structure ⛩

Each section will include a lesson, exercise, and solution.

`lesson.md` will contain the plan and notes for each section.

`lesson/` will act as out scratch pad during the lesson.

Within `exercise/` you'll find an `exercise.md` which outlines what you'll need to do.

`solution/` contains my solution to the questions in `exercise.md`

## How it works

Process for every lesson:

1. Lesson + Q&A
    - Example code from lesson will be pushed to repo so you can reference it during the exercises
2. Exercise
    - ~20 to 30 minutes per exercise
    - I recommend reading through all of the questions in an exercise before coding
    - Go slow and read the errors. Typescript will usually guide you in the right direction.
3. Solution

## Helpful resources

-   [Adding Typescript to an existing CRA project](https://create-react-app.dev/docs/adding-typescript)

-   [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

-   [Interfaces in TypeScript: What are they and how do we use them](https://blog.logrocket.com/interfaces-in-typescript-what-are-they-and-how-do-we-use-them-befbc69b38b3/)

-   [How to Use TypeScript Generics](https://itnext.io/how-to-use-typescript-generics-6c0c09e049c3)

-   [String Literal Types in TypeScript](https://mariusschulz.com/blog/string-literal-types-in-typescript)

## Help Make This Workshop Better 🏆

After the workshop, I would love if you could take 5 minutes to answer a few questions so I can learn how to improve this workshop in the future:

[Typescript Workshop Feedback Form](https://forms.gle/kNuP8dwPfW2R5BKF6)

## TODOs for refactor

-   add branch protections
-   create protected branch for TS version of app. Main branch will have the JS version
-   Create new feedback form for every workshop

## Lesson ideas

### 02

-   start by building interfaces for response from list pokemon api
-   When we convert file to TS consider using ts-ignore for ignoring the need for a generic, although that might not work. If that doesn't use that as a case for explaining any.

### 03

-   Introduce mudkipme/pokeapi-v2-typescript lib
-   Response from get single pokemon api is huge, so use library instead
-   still make mention of definitely/typed

## 04

-   talk about generic that useEffect takes
-   Replace interfaces created into 02 with new library ones since they take generic

## 05

-   Enforce type on our children so that it can only use the ListItem component
