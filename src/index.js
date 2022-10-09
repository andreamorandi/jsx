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
    let message = 'Bye there!';
    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }
    const date = new Date();
    const time = date.toLocaleTimeString();

    const name = 'Andrea';
    const age = '20';

    return (
        <div>
            <h1>{message}</h1>
            <h1>{time}</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>  {/* SHORTHAND */}
            <h1>
                My name is {name} and I'm {age}
            </h1>
        </div>
    );
}

// 5) Show the component on the screen
root.render(<App />);