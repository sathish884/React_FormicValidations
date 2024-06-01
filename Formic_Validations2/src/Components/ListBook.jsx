import { Rate, Breadcrumb, Space, message, Popconfirm } from 'antd'
import React, { useState } from 'react';
import './ListBook.css';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import BookData from '../data.json';
import CreateBook from './CreateBook';



function ListBook() {

    const [bookList, setBookList] = useState(BookData.books);

    const [hideComp, sethideComp] = useState(false);

    const addNewBook = (newBook) => {
        setBookList([...bookList, newBook]);
    };

    const confirm = (index) => {
        const newBookList = bookList.filter((_, i) => i !== index);
        setBookList(newBookList);
    };

    const cancel = () => {
        console.log("Cancelled");
    };

    return (
        <>
            <div className="container p-5">

                <Breadcrumb className='mb-3' style={{ fontSize: "20px" }}>
                    <Breadcrumb.Item>
                        <Link to="/">Dashboard</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>List of Books</Breadcrumb.Item>
                </Breadcrumb>

                <div className="row">
                    {bookList.map((items, index) => {
                        <div className="col-4" key={index}>
                            <div className="card book-card">
                                <img className='card-img-top' src="https://m.media-amazon.com/images/I/51uFGDj6SQL.jpg" height={200} alt="" />
                                <div className="card-body">
                                    <h5 className='card-titler'>`${items.bookTitle} - ${items.bookTitle}`</h5>
                                    <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
                                    <p><b>Publication Date : </b> {items.publicationDate}</p>
                                    <blockquote>({items.authorName})</blockquote>
                                    <div className='d-flex justify-content-between'>
                                        <Rate allowHalf defaultValue={4} />
                                        <div >
                                            <Space>
                                                <Link to='/edit-book' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                                    <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
                                                </Link>
                                                <Popconfirm
                                                    title="Delete the task"
                                                    description="Are you sure to delete this task?"
                                                    onConfirm={() => confirm(index)}
                                                    onCancel={cancel}
                                                    okText="Yes"
                                                    cancelText="No"
                                                    className="custom-popconfirm"
                                                >
                                                    <DeleteOutlined style={{ fontSize: "20px" }} />
                                                </Popconfirm>
                                            </Space>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <CreateBook createBook={addNewBook} />

        </>
    )
}

export default ListBook



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Breadcrumb, Rate, Space, Popconfirm, Button } from 'antd';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import BookData from './BookData';

// const ListBook = () => {
//     const [bookList, setBookList] = useState(BookData.books);

//     const addNewBook = (newBook) => {
//         setBookList([...bookList, newBook]);
//     };

//     const confirm = (index) => {
//         const newBookList = bookList.filter((_, i) => i !== index);
//         setBookList(newBookList);
//     };

//     const cancel = () => {
//         console.log("Cancelled");
//     };

//     return (
//         <>
//             <div className="container p-5">
//                 <Breadcrumb className='mb-3' style={{ fontSize: "20px" }}>
//                     <Breadcrumb.Item>
//                         <Link to="/">Dashboard</Link>
//                     </Breadcrumb.Item>
//                     <Breadcrumb.Item>List of Books</Breadcrumb.Item>
//                 </Breadcrumb>

//                 <Button type="primary" style={{ marginBottom: '20px' }}>
//                     <Link to="/create-book">Create New Book</Link>
//                 </Button>

//                 <div className="row">
//                     {bookList.map((items, index) => (
//                         <div className="col-4" key={index}>
//                             <div className="card book-card">
//                                 <img className='card-img-top' src="https://m.media-amazon.com/images/I/51uFGDj6SQL.jpg" height={200} alt="" />
//                                 <div className="card-body">
//                                     <h5 className='card-title'>{`${items.bookTitle} - ${items.bookTitle}`}</h5>
//                                     <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
//                                     <p><b>Publication Date : </b> {items.publicationDate}</p>
//                                     <blockquote>({items.authorName})</blockquote>
//                                     <div className='d-flex justify-content-between'>
//                                         <Rate allowHalf defaultValue={4} />
//                                         <div >
//                                             <Space>
//                                                 <Link to='/edit-book' style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
//                                                     <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
//                                                 </Link>
//                                                 <Popconfirm
//                                                     title="Delete the task"
//                                                     description="Are you sure to delete this task?"
//                                                     onConfirm={() => confirm(index)}
//                                                     onCancel={cancel}
//                                                     okText="Yes"
//                                                     cancelText="No"
//                                                     className="custom-popconfirm"
//                                                 >
//                                                     <DeleteOutlined style={{ fontSize: "20px" }} />
//                                                 </Popconfirm>
//                                             </Space>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ListBook;
