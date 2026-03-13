import React from 'react'


const Booklist = (props) => {
  const {id, image, title, author, removeHandler } = props

 

 

  return (
    <>
    <article className="book-card" onMouseOver={()=> {console.log(title)}}>
      <img className="book-image" src={image} alt={title} />
      <div className="book-info">
        <p className="book-title">{title}</p>
        <h4 className="book-author">{author}</h4>
        <button onClick={()=>removeHandler(id)}>Delete ❌</button>
      </div>
       
    </article>
    
    </>
  )
}

export default Booklist