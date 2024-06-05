import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Space, Popconfirm, Rate } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import BookData from '../data.json'; // Adjust to your actual path
import './ListAuthor.css'; // Adjust to your actual stylesheet path
import { format } from 'date-fns';
import CreateAuthor from './CreateAuthor';
import EditAuthor from './EditAuthor';


const ListAuthor = () => {
    const [authorList, setAuthorList] = useState([]);
    const [authorToEdit, setAuthorToEdit] = useState(null);

    useEffect(() => {
        setAuthorList(BookData.authorData)
    }, [])

    // create book
    const addNewAuthor = (newAuthor) => {
        setAuthorList([...authorList, newAuthor]);
    };

    // Edit book
    const handleEditAuthor = (author) => {
        setAuthorToEdit(author);
    };

    const handleUpdateAuthor = (updatedAuthor) => {
        setAuthorList(authorList.map(author => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    };

    // delete book
    const confirm = (index) => {
        const newAuthorList = authorList.filter((_, i) => i !== index);
        setAuthorList(newAuthorList);
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
                    <Breadcrumb.Item>List of Author</Breadcrumb.Item>
                </Breadcrumb>

                <div className="d-flex justify-content-end mb-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#createmodel"
                    >
                        + Add New Author
                    </button>
                </div>

                <div className="row">
                    {/* {bookList.map((item, index) => ( */}
                    {/* // <div className="col-4" key={index}>
                        //     <div className="card book-card">
                        //         <img className='card-img-top' src={item.image} height={200} alt="" />
                        //         <div className="card-body">
                        //             <h5 className='card-title'>{`${item.bookTitle}`}</h5>
                        //             <p>Lorem ipsum dolor earum at commodi doloribus magnam cupiditate?</p>
                        //             <p><b>Publication Date: </b>{format(new Date(item.publicationDate), 'yyyy-MM-dd')}</p>
                        //             <blockquote><span><b>Written By</b></span><br /><i>(''{item.authorName}'')</i></blockquote>
                        //             <div className='d-flex justify-content-between'>
                        //                 <Rate allowHalf defaultValue={item.rating} />
                        //                 <div>
                        //                     <Space>
                        //                         <Link type="button"
                        //                             className="btn btn-primary"
                        //                             data-bs-toggle="modal"
                        //                             data-bs-target="#editmodel" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => handleEditBook(item)}>
                        //                             <EditOutlined style={{ fontSize: "20px" }} />&nbsp;
                        //                         </Link>
                        //                         <Popconfirm
                        //                             title="Delete the book"
                        //                             description="Are you sure to delete this book?"
                        //                             onConfirm={() => confirm(index)}
                        //                             onCancel={cancel}
                        //                             okText="Yes"
                        //                             cancelText="No"
                        //                             className="custom-popconfirm"
                        //                         >
                        //                             <Link type="button"
                        //                                 className="btn btn-danger"
                        //                                 style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                        //                                 <DeleteOutlined style={{ fontSize: "22px" }} />
                        //                             </Link>
                        //                         </Popconfirm>
                        //                     </Space>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div> */}
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Author Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">BoiGraphy</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authorList.map((data, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.authorName}</td>
                                        <td>{data.birthDate}</td>
                                        <td>{data.bioGraphy}</td>
                                        <td>
                                            <div>
                                                <Space>
                                                    <Link type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editmodel" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => handleEditAuthor(data)}>
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >

            <CreateAuthor createAuthor={addNewAuthor} />
            <EditAuthor editAuthor={handleUpdateAuthor} authorToEdit={authorToEdit} />
        </>
    );
};

export default ListAuthor;
