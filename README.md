What is JSX, and why is it used? -> Javascript XML. let us write html inside javascript. actually those are not html. help us to add logic in different file and ui in another file. we can write logic and ui structure both in one place. JSX convert to regular javascript functions.

What is the difference between State and Props? -> props are read-only. they are objects. passed from parents to child. one way only. when props change; parent updates them. state is internal data management within a component. it can change over time. when it changes; the component re-renders. 

What is the useState hook, and how does it work? -> useState is a react hook that adds state to functional components. It returns an array with two values: the current state and a function to update the state. When we call the update function, the component re-renders with the new value.

How can you share state between components in React? -> We can use props. in the closest common parent component and pass it down as props. In more complex apps; we can use Context Api, redux, zustand etc.

How is event handling done in React? -> Event handling in React uses camelCase syntax (like onClick instead of onclick) and passes functions as event handlers. we can define handler functions directly in our component and reference them without quotes.