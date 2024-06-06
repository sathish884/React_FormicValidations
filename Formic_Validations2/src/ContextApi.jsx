import React from 'react'
import { createContext } from 'react'
import BookData from './data.json';
import Dashboard from './Header_Component/Dashboard';
import ListBook from './Book_Components/ListBook';
import App from './App';

export const BookContext = createContext();
// export const AuthorContext = createContext();

function ContextApi() {
    const [books, setBooks] = useState(BookData.books);

    return (
        <>
            <BookContext.Provider value={{ books, setBooks }}>
                {/* <Dashboard />
                <ListBook /> */}
                <App />
            </BookContext.Provider>
        </>
    )
}

export default ContextApi