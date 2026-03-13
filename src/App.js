// import logo from './logo.svg';
import './App.css';
  import Booklist from "./components/Booklist"

import { books_data } from './data/books';

function App() {
  return (
    <div className="books-container">
    
      {books_data.map((book) => {
        return (
          <Booklist
            key={book.id}
            {...book}
          />
        )
      })}

 
    </div>
  );


}
 

export default App;
