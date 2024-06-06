import React from 'react';
import './CreateBook.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function CreateBook({ createBook, model }) {

    // Initial values for the form fields
    const initialValues = {
        bookTitle: '',
        authorName: '',
        isbnNumber: '',
        publicationDate: '',
        rating: '',
        image: null
    };

    // Validation schema using Yup for form validation
    const validationSchema = Yup.object({
        bookTitle: Yup.string()
            .required('Name is required')
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
            .typeError('Invalid date format (YYYY-MM-DD)'),
        rating: Yup.number()
            .required('Rating is required')
            .min(1, 'Rating must be at least 1')
            .max(5, 'Rating must be at most 5'), // Add rating validation
        image: Yup.mixed().required('An image is required'),
    });

    // Function to handle form submission
    const onSubmit = (values, { resetForm }) => {
        // Call the function to create a new book with form values
        createBook(values);
        // Reset the form fields
        resetForm();
        // Close the modal programmatically by clicking the close button
        document.getElementById("createCloseModalButton").click();
    };

    return (
        <div className="modal fade" id="createmodel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Book</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="createCloseModalButton"></button>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ setFieldValue }) => (
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
                                    <div className='row mb-3'>
                                        <div className="col-6">
                                            <label className='form-label' htmlFor="rating">Rating</label>
                                            <Field className='form-control' type="number" id="rating" name="rating" />
                                            <ErrorMessage className='errorMsg' name="rating" component="div" />
                                        </div>
                                        <div className="col-6">
                                            <label className='form-label' htmlFor="image">Image</label>
                                            <input
                                                className='form-control'
                                                id="image"
                                                name="image"
                                                type="file"
                                                onChange={(event) => {
                                                    const file = event.currentTarget.files[0];
                                                    console.log(file.name);
                                                    setFieldValue("image", file.name);
                                                }}
                                            />
                                            <ErrorMessage className='errorMsg' name="image" component="div" />
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBook