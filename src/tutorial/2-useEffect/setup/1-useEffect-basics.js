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



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '40px',
      margin: '40px auto',
      maxWidth: '400px',
    }}>
      <h2 style={{
        color: '#3730a3',
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '18px',
        letterSpacing: '1px',
      }}>{value}</h2>
      <button
        onClick={clickHandler}
        style={{
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 28px',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = '#4338ca'}
        onMouseOut={e => e.currentTarget.style.background = '#6366f1'}
      >
        click me
      </button>
      <p style={{
        color: '#4b5563',
        fontSize: '1rem',
        marginTop: '24px',
        textAlign: 'center',
      }}>
        This component demonstrates the basics of the <code>useEffect</code> hook in React.
      </p>
    </div>
  );
};

export default UseEffectBasics;
