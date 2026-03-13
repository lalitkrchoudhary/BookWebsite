import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Setup from "./tutorial/1-useState/setup/3-useState-array"
import UseEffects from "./tutorial/2-useEffect/setup/1-useEffect-basics"
import UseEffectsThree from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Setup/>
    <UseEffects/>
    <UseEffectsThree/>
    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
