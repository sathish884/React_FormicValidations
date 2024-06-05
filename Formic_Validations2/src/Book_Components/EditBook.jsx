import React from 'react';
import './EditBook.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function EditBook({ editBook, bookToEdit }) {

    const initialValues = {
        bookTitle: bookToEdit?.bookTitle || '',
        authorName: bookToEdit?.authorName || '',
        isbnNumber: bookToEdit?.isbnNumber || '',
        publicationDate: bookToEdit?.publicationDate || '',
    };

    const validationSchema = Yup.object({
        bookTitle: Yup.string()
            .required('Book Name is required')
            .min(2, 'Title must be at least 2 characters'),
        authorName: Yup.string()
            .required('Author Name is required')
            .min(2, 'Author Name must be at least 2 characters'),
        isbnNumber: Yup.number()
            .required('ISBN Number is required')
            .typeError('ISBN Number must be a number')
            .min(10000, 'ISBN Number must be at least 5 digits'),
        publicationDate: Yup.date()
            .required('Publication Date is required')
            .typeError('Invalid date format (DD-MM-YYYY)'),
    });

    const onSubmit = (values, { resetForm }) => {
        editBook({ ...bookToEdit, ...values });
        resetForm();
        document.getElementById("editCloseModalButton").click(); // Close the modal programmatically
    };

    return (
        <>
            <div className="modal fade" id="editmodel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Book</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="editCloseModalButton"></button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                                enableReinitialize={true} // Reinitialize form with new initialValues
                            >
                                <Form>
                                    <div className='row mb-3'>
                                        <div className="col-6">
                                            <label className='form-label' htmlFor="bookTitle">Book Title</label>
                                            <Field className='form-control' type="text" id="bookTitle" name="bookTitle" />
                                            <ErrorMessage className='errorMsg' name="bookTitle" component="div" />
                                        </div>
                                        <div className="col-6">
                                            <label className='form-label' htmlFor="authorName">Author Name</label>
                                            <Field className='form-control' type="text" id="authorName" name="authorName" />
                                            <ErrorMessage className='errorMsg' name="authorName" component="div" />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className="col-6">
                                            <label className='form-label' htmlFor="isbnNumber">ISBN Number</label>
                                            <Field className='form-control' type="text" id="isbnNumber" name="isbnNumber" />
                                            <ErrorMessage className='errorMsg' name="isbnNumber" component="div" />
                                        </div>
                                        <div className="col-6">
                                            <label className='form-label' htmlFor="publicationDate">Publication Date</label>
                                            <Field className='form-control' type="date" id="publicationDate" name="publicationDate" />
                                            <ErrorMessage className='errorMsg' name="publicationDate" component="div" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditBook