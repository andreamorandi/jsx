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
    // let message = 'Bye there!';
    // if (Math.random() > 0.5) {
    //     message = 'Hello there!';
    // }
    // const date = new Date();
    // const time = date.toLocaleTimeString();

    // const name = 'Andrea';
    // const age = '20';

    // return (
    //     <div>
    //         <h1>{message}</h1>
    //         <h1>{time}</h1>
    //         <h1>{new Date().toLocaleTimeString()}</h1>  {/* SHORTHAND */}
    //         <h1>
    //             My name is {name} and I'm {age}
    //         </h1>
    //     </div>
    // );

    // return <input type="number" min={5} max={10} />;

    // const inputType = 'number';
    // const minValue = 5;
    // const maxValue = 10;
    // return <input type={inputType} min={minValue} max={maxValue} style={{ border: '3px solid red' }} />;
    
    // return <textarea autoFocus={true} />;

    // return <input maxLength={5} />

    // return <input spellCheck />

    // return <input spellCheck={false} />

    // return <li className='item'>Ciao</li>

    // return <input style={{ border: '1px solid blue' }} />

    // return (
    //     <input placeholder="hi there" />  
    // );

    // return (
    //     <div className="wrapper">
    //       <textarea
    //         readOnly
    //         maxLength={3}
    //         spellCheck
    //         style={{backgroundColor: 'gray'}}
    //       />
    //     </div>
    //   );

}

// 5) Show the component on the screen
root.render(<App />);