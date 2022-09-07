# Launch a modern React web dashboard app
<img width="720" alt="Dashboard app" src="https://user-images.githubusercontent.com/4950729/186533020-444a60f4-c1d8-4e48-86eb-340c01944c55.png">

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) on [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- Components built with [MUI Joy](https://mui.com/joy-ui/getting-started/overview/) and [Emotion](https://emotion.sh/docs/introduction)
- Routing with [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- All the goodies like hot reloading and auto-formatting with [Prettier](https://prettier.io/docs/en/index.html)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Run the [ESLint](https://eslint.org/docs/latest/) checker and fixes any lint issues

### `npm run format`

Run the [Prettier](https://prettier.io/docs/en/index.html) formatter

Note: You should also [set up VSCode to run formatting on save](https://scottsauber.com/2017/06/10/prettier-format-on-save-never-worry-about-formatting-javascript-again/)

## Project structure

```js
src/index.tsx       // the root React entrypoint
src/app.tsx         // The app wrapper
src/pages/index.tsx // The top level router
src/pages/*/*.      // The inner level routers and page components. The file structure matches the url structure.
```
