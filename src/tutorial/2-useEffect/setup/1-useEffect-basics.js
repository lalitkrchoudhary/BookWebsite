import React, { useState, useEffect } from 'react';
import './useEffectBasics.css';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value,setValue]=useState(0)

  const clickHandler=(()=>{
    setValue(value+1)
  })


    useEffect(() => {
      console.log("this is god");
      if(value>=1){
        document.title = `new message ${value}`
      }
    },[value]);
    console.log("this is very good")



  return (
    <div className="useEffectBasics-container">
      <h2 className="useEffectBasics-title">{value}</h2>
      <button className="useEffectBasics-btn" onClick={clickHandler}>
        click me
      </button>
      <p className="useEffectBasics-desc">
        This component demonstrates the basics of the <code>useEffect</code> hook in React.
      </p>
    </div>
  );
};

export default UseEffectBasics;
