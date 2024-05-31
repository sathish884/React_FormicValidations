import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Header from "./Components/Header"
import CreateBook from "./Components/CreateBook"
import ListBook from "./Components/ListBook"
import ViewBook from "./Components/ViewBook"
import EditBook from "./Components/EditBook"


function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/create-books' element={<CreateBook />} />
          <Route path='/list-books' element={<ListBook />} />
          <Route path='/view-book' element={<ViewBook />} />
          <Route path='/edit-book' element={<EditBook />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
