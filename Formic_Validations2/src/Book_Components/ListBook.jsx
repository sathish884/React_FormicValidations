import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Space, Popconfirm, Rate } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import CreateBook from './CreateBook'; // Adjust to your actual path
import BookData from '../data.json'; // Adjust to your actual path
import './ListBook.css'; // Adjust to your actual stylesheet path
import EditBook from './EditBook';
import { format } from 'date-fns';


const ListBook = () => {
    const [bookList, setBookList] = useState([]);
    const [bookToEdit, setBookToEdit] = useState(null);

    useEffect(() => {
        setBookList(BookData.books)
    }, [])

    // create book
    const addNewBook = (newBook) => {
        setBookList([...bookList, newBook]);
    };

    // Edit book
    const handleEditBook = (book) => {
        setBookToEdit(book);
    };

    const handleUpdateBook = (updatedBook) => {
        setBookList(bookList.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    };

    // delete book
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

                <div className="d-flex justify-content-end mb-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#createmodel"
                    >
                        + Add New Book
                    </button>
                </div>

                <div className="row">
                    {bookList.map((item, index) => (
                        <div className="col-4" key={index}>
                            <div className="card book-card">
                                <img className='card-img-top' src={item.image} height={200} alt="" />
                                <div className="card-body">
                                    <h5 className='card-title'>{`${item.bookTitle}`}</h5>
                                    <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
                                    <p><b>Publication Date: </b>{format(new Date(item.publicationDate), 'yyyy-MM-dd')}</p>
                                    <blockquote><span><b>Written By</b></span><br /><i>(''{item.authorName}'')</i></blockquote>
                                    <div className='d-flex justify-content-between'>
                                        <Rate allowHalf defaultValue={item.rating} />
                                        <div>
                                            <Space>
                                                <Link type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#editmodel" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => handleEditBook(item)}>
                                                    <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
                                                </Link>
                                                <Popconfirm
                                                    title="Delete the book"
                                                    description="Are you sure to delete this book?"
                                                    onConfirm={() => confirm(index)}
                                                    onCancel={cancel}
                                                    okText="Yes"
                                                    cancelText="No"
                                                    className="custom-popconfirm"
                                                >
                                                    <Link type="button"
                                                        className="btn btn-danger"
                                                        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                                                        <DeleteOutlined style={{ fontSize: "22px" }} />
                                                    </Link>
                                                </Popconfirm>
                                            </Space>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CreateBook createBook={addNewBook} />
            <EditBook editBook={handleUpdateBook} bookToEdit={bookToEdit} />
        </>
    );
};

export default ListBook;
