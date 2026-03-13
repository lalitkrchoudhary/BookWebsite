import React from 'react';
import { books_data } from '../../../data/books';
import Booklist from '../../../components/Booklist';

const UseStateArray = () => {
    const [books, setBooks]=React.useState(books_data)

  const removeHandler=((id)=>{
   let newPeople = books.filter((book)=> book.id !== id)
   console.log(newPeople)
   setBooks(newPeople)
  })
    
    const deleteHandeler=(()=>{

    setBooks([])

  })

  return(
    <>
    <h1>Book data</h1>
    <div className="books-container">
      {books.map((book) => {
        return (
          <Booklist key={book.id} {...book} removeHandler={removeHandler} />
        )
      })}
    </div>
    <button onClick={deleteHandeler}>Delete All ❌</button>
    
    </>
  );
};

export default UseStateArray;