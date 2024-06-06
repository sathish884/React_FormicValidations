import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Space, Popconfirm, Rate } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import BookData from '../data.json';
import './ListAuthor.css';
import { format } from 'date-fns';
import CreateAuthor from './CreateAuthor';
import EditAuthor from './EditAuthor';
import { BookContext } from '../App';

const ListAuthor = () => {

    // Extracting authorList and setAuthorList from BookContext to manage state centrally
    const { authorList, setAuthorList } = useContext(BookContext);
    // const [authorList, setAuthorList] = useState([]);
    const [authorToEdit, setAuthorToEdit] = useState(null);

    // Function to add a new author to the list
    const addNewAuthor = (newAuthor) => {
        // Updating the author list by adding the new author
        setAuthorList([...authorList, newAuthor]);
    };

    // Function to set the selected author for editing in a popup view
    const handleEditAuthor = (author) => {
        setAuthorToEdit(author);
    };

    // Function to update the author's data
    const handleUpdateAuthor = (updatedAuthor) => {
        // Updating the author list with the updated author information
        setAuthorList(authorList.map(author => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    };

    // Function to delete an author from the list
    const confirm = (index) => {
        // Creating a new list excluding the author at the specified index
        const newAuthorList = authorList.filter((_, i) => i !== index);
        // Updating the author list
        setAuthorList(newAuthorList);
    };

    // Function to handle cancel action (if any)
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
                    <div className="table-responsive">
                        <table className="table table-hover" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
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
                                                        data-bs-target="#authoreditmodel" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => handleEditAuthor(data)}>
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
