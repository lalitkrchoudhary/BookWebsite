import React, { useState, useEffect } from 'react';

const url = 'https://dummyjson.com/products';

const UseEffectFetchData = () => {
  const [users,setUsers] =useState([])

  const getUsers=( async ()=>{
    const data=await fetch(url)
    const json_data=await data.json()
    setUsers(json_data.products)
    console.log(json_data)

  })

  useEffect(()=>{
    getUsers()
  },[])
 
  return (
    <div className="product-page">
      <h1 className="product-title">Product Gallery</h1>
      <div className="product-scroll-container">
        <div className="product-grid">
          {Array.isArray(users) && users.map((user) => {
            const { thumbnail, id, price, rating, category, title } = user;
            return (
              <div className="product-card" key={id}>
                <div className="product-thumb-wrapper">
                  <img className="product-thumb" src={thumbnail} alt={title} />
                </div>
                <div className="product-details">
                  <div className="product-name">{title}</div>
                  <div className="product-info">Price: ${price}</div>
                  <div className="product-info">Rating: {rating}</div>
                  <div className="product-info">Category: {category}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseEffectFetchData;
