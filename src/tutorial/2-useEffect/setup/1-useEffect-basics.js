import React, { useState, useEffect } from 'react';
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



  return (<>
  <h2>{value}</h2>
  <button onClick={clickHandler}>click me</button>
  </>);
};

export default UseEffectBasics;
