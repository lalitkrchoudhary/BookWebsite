import React from 'react';

const ErrorExample = () => {
  const [data, setData] = React.useState('Random Title');

  const handleSubmit = () => {
    // example action: update state when button is clicked
    if(data==="Random Title"){
        setData("Hello World")
    }else{
        setData("Random Title")
    }
   
    
  };

  return (
    <>
      <h2>{data}</h2>
     
      <button onClick={handleSubmit}>click me</button>
    </>
  );
};

export default ErrorExample;