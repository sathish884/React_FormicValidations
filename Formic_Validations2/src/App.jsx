import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ListBook from "./Book_Components/ListBook"
import ListAuthor from "./Author_Component/ListAuthor"
import Header from "./Header_Component/Header"
import Dashboard from "./Header_Component/Dashboard";
import BookData from './data.json';
import { createContext, useState } from "react";

export const BookContext = createContext();

function App() {
  // State to manage the list of books
  // BookData.books is assumed to be an array of book objects
  const [bookList, setBookList] = useState(BookData.books);
  // bookList: Holds the current list of books
  // setBookList: Function to update the list of books

  // State to manage the list of authors
  // BookData.authorData is assumed to be an array of author objects
  const [authorList, setAuthorList] = useState(BookData.authorData);
  // authorList: Holds the current list of authors
  // setAuthorList: Function to update the list of authors

  return (
    <>
      <BookContext.Provider value={{ bookList, setBookList, authorList, setAuthorList }}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/list-books' element={<ListBook />} />
            <Route path='/list-author' element={<ListAuthor />} />
          </Routes>

        </Router>
      </BookContext.Provider >
    </>
  )
}

export default App
