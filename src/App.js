// import logo from './logo.svg';
import './App.css';
  import Booklist from "./components/Booklist"

import { books_data } from './data/books';

function App() {
  return (
    <div className="books-container" style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
    
      {books_data.map((book)=>{
        const {id,image,title,author}=book;
        console.log(book)
        return(
          // <div>
          // <img src={image} alt=""/>
          // </div>
          <Booklist
           key={book.id}
            // book={book} or
            {...book}
            
            />
         
        )
      })}

 
    </div>
  );


}
 

export default App;
