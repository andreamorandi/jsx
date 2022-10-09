// 1) Import the React and ReactDOM libraries

// REACT: Library that defines what a component is and how multiple components work together
import React from 'react';

// REACT DOM: Library that knows how to get a component to show up in the BROWSER, there is also REACT NATIVE for mobile applications
import ReactDOM from 'react-dom/client';


// 2) Get a reference to the div with the ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    return <h1>Hi there!</h1>;
}

// 5) Show the component on the screen
root.render(<App />);