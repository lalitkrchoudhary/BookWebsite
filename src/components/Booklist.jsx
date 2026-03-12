import React from 'react'

const Booklist = (props) => {
  const { image, title, author } = props

  const clickHandler=(e)=>{
    console.log(e.target)
    alert(`The description is: ${title}`);
  }

  return (
    <article className="book-card" onMouseOver={()=> {console.log(title)}}>
      <img className="book-image" src={image} alt={title} />
      <div className="book-info">
        <p className="book-title">{title}</p>
        <h4 className="book-author">{author}</h4>
        <button onClick={clickHandler}>click for description</button>
      </div>
    </article>
  )
}

export default Booklist