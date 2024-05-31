import React from 'react';
import { Space, Breadcrumb } from 'antd';
import { Link, Router } from 'react-router-dom';
import './EditBook.css'

function EditBook() {
    return (
        <>
            <div className="container p-5">


                <Breadcrumb className='mb-3' style={{ fontSize: "20px" }}>
                    <Breadcrumb.Item>
                        <Link to="/list-books">List of Books</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Book</Breadcrumb.Item>
                </Breadcrumb>


                <div className="card form-card">

                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="bookTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="bookTitle" />
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="author" className="form-label">Autor Name</label>
                                    <input type="text" className="form-control" id="author" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="isbnNumber" className="form-label">ISBN Number</label>
                                    <input type="text" className="form-control" id="isbnNumber" />
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="publicationDate" className="form-label">Publication Date</label>
                                    <input type="date" className="form-control" id="publicationDate" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <Space style={{ float: "right" }}>
                                        <button type="submit" className="btn btn-danger">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </Space>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default EditBook