# Monsters Rolodex
This app is from the ZTM Full React course and it implements the basics of React UI Library like class-based components, functional components, useState and useEffect hooks and filtering search box to filter out monsters cards.

![monsters-rolodex-project](https://i.ibb.co/6nVsWcD/monsters-rolodex.png)

# Demo
You can see a demo for this project here: [https://monsrolodex.netlify.app/](https://monsrolodex.netlify.app/)

# Instructions
1. `git clone https://github.com/mmaksi/monsters-rolodex.git`
2. `cd monsters-rolodex`
3. `npm install`
4. `npm run start`

## CHAPTER 1: React Key Concepts
### The Birth of React.js
In the old days, browsers were not compatible with each others so you had to code for different browsers. jQuery solved the problem of non-compatibility

Traditionally we had `index.html` for every page, and we had to make a new request for each page we visit

SPA means that JS updates the DOM locally like a desktop app without talking to the server

### What made React so popular?
#### Rule #1 - Don't touch the DOM. I'll do it.
- In React, you _declare_ what `state` is and how it's going to change based on user interaction

#### Rule #2 - Build website like lego blocks.
- Components make it possible to write reusable code in the same or in different projects
- There are libraries like Material UI, React Bootstrap, Blueprint that make several JS components 

#### Rule #3 - Unidirectional data flow.
- Date can flow only from the state to the Virtual DOM to the real DOM. So if you want to change the DOM you need to change the `state` of your components.

- Unidirectional data flow restriction makes it easier to debug the code. If there is an issue with the `login state` for instance, you just look at where this state lives and what components recieve that state

#### Rule #4 - React is a UI Library. The rest is up to you.
- React is a UI library not a framework

- React doesn't make assumptions about what technologies you use. All it gives is this idea of _blueprint_ about the UI and you use different Robots to use this blueprint. In React web apps, you use _react DOM_ library to use the blueprint. But react isn't for web apps only. You can use `React 360` or `React Native` or `electron` or `React Desktop` and all of these Robots know nothing about the web DOM. They use the React blueprint for their UI.

### How to be a great React developer?
1. Decide on components
2. Decide the state and where it lives
3. What changes when the state changes

## CHAPTER 2: React Basics
- `npx` is a tool lives within `npm`

- `npm list <package_name>` to see if there is a package with that name locally
`npm list -g <package_name>` to see if there is a package with that name globally

- If you do `npx <package_name>` the package will be downloaded then executed the deleted from the disk

- React bulds the `<App />` component inside the `root div` in `index.html`

- `npm run eject` allows you to tweak webpack and Babel configurations but it's very advanced

- React re-renders the component when the state is a complete dfferent object in memory

- Rendering only affects the UI

- Virtual DOM is the Javascript representation of the real DOM tree

### Class Components
- Class Components have Lifecycles, while functional components *do not*

- `this.setState()` shallow merges the state - it doesn't erase the other keys in the `state` object

- Always pass the same type of state when using `setState()`

- It is recommended in class components to pass an `updater function` and a `callback function` as parameters for `setState()` where the callback executes only after the state is updated:
```
const updaterFunction = (state?, props?) => return { name: newName }
const callbackFunction = () => console.log(this.state.name)

setState(updaterFunction, callbackFunction)
```

- use `array.map()` to map arrays to React Elements or React Components

- Mounting is the first time a class component is rendered on the DOM and it only happens once throughout the component's lifecycle. The only time when a component will remount is when it's completely removed from the DOM - it's a new instance of that component

- `componentDidMount() {}` runs after the component is rendered. It is used to make API calls or fetch data from a database to render the UI based on this data

- In class components, when state changes, only `render()` function is re-called

- To update the state, use non-modifying methods like `array.map()`, `array.filter()` and `array.reduce()` because they generate new arrays which are different objects in memory (how React re-renders components)

- Filtered array must not overwrite the initial state because you need to use the initial state to change things later

- Best Practice: when modifying any kind of data inside the `state`, keep your state equals to the same list because you need to come back to it later

- Destructure `this` , `this.props` and `this.state` inside *`render()`*

- Components re-render when `setState()` is called OR when the props are `changed`

Check out this [interactive diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
![class-based component lifecycle flow](https://i.ibb.co/CtdXBh3/classes-lifecycle.png)

### Functional Components
- To understand Functional Components, you *cannot* think of them in terms of Lifecycle methods because they don't have lifecycles. You must think in a different mental model

- To understand Functional Components, you must understand pure, impure functions and side effects

- Functional Components are impure. Hooks create impure functions. Understanding this helps in understanding how React renders and re-renders components

- When re-rendering, the entire function is called not just the `return()`

- Functional Components re-render when `props` change and when the state value changes. Calling `setState()` here is not enough to cause re-rendering

- Updating the state after getting an array from an API into our SPA will cause infinite re-rendering because the response data will be stored in a place that is different in memory each time. So using `fetch()` without `useEffect()` will cause infinite renders

- Side effects are behaviours generated inside functions that affect something outside the scope of the function

- `useEffect()` generates side effects like `fetch()`

- Functional Components recieve two arguments: `props` and `forwardedRef`
