import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Book_Components/Header"
import ListBook from "./Book_Components/ListBook"
import Dashboard from "./Book_Components/Dashboard"
import ListAuthor from "./Author_Component/ListAuthor"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/list-books' element={<ListBook />} />
          <Route path='/list-author' element={<ListAuthor />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
