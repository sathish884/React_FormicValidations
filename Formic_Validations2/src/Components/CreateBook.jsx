import React from 'react';
import './CreateBook.css'
import { Space, Breadcrumb } from 'antd';
import { Link, Router } from 'react-router-dom';
import { useFormik } from 'formik';
import { basicShema } from '../Formik_Reg/schemas';



function CreateBook({ createBook }) {

    const onSubmit = (values, actions) => {
        createBook(values);
        actions.resetForm();
    }

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            bookTitle: "",
            authorName: "",
            isbnNumber: "",
            publicationDate: ""
        },
        validationSchema: basicShema,
        onSubmit,
    })

    console.log(errors);
    return (
        <>
            <div className="container p-5">
                <Breadcrumb className='mb-3' style={{ fontSize: "20px" }}>
                    <Breadcrumb.Item>
                        <Link to="/">Dashboard</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Create Books</Breadcrumb.Item>
                </Breadcrumb>

                <div className="card form-card">

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="bookTitle" className="form-label">Title</label>
                                    <input type="text" className={errors.bookTitle && touched.bookTitle ? 'form-control input-error' : 'form-control'} id="bookTitle" name='bookTitle' value={values.bookTitle} onChange={handleChange} />
                                    {errors.bookTitle && touched.bookTitle ? <p style={{ color: "white" }}>{errors.bookTitle}</p> : ""}
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="author" className="form-label">Autor Name</label>
                                    <input type="text" className={errors.authorName && touched.authorName ? 'form-control input-error' : 'form-control'} id="authorName" name='authorName' value={values.authorName} onChange={handleChange} />
                                    {errors.authorName && touched.authorName ? <p style={{ color: "white" }}>{errors.authorName}</p> : ""}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="isbnNumber" className="form-label">ISBN Number</label>
                                    <input type="text" className={errors.isbnNumber && touched.isbnNumber ? 'form-control input-error' : 'form-control'} id="isbnNumber" name='isbnNumber' value={values.isbnNumber} onChange={handleChange} />
                                    {errors.isbnNumber && touched.isbnNumber ? <p style={{ color: "white" }}>{errors.isbnNumber}</p> : ""}
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <label htmlFor="publicationDate" className="form-label">Publication Date</label>
                                    <input type="text" className={errors.publicationDate && touched.publicationDate ? 'form-control input-error' : 'form-control'} id="publicationDate" name='publicationDate' value={values.publicationDate} onChange={handleChange} />
                                    {errors.publicationDate && touched.publicationDate ? <p style={{ color: "white" }}>{errors.publicationDate}</p> : ""}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <Space style={{ float: "right" }}>
                                        <button type="button" className="btn btn-danger">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Save</button>
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

export default CreateBook