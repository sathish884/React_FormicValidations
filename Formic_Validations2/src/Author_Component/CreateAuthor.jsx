import React from 'react';
import './CreateAuthor.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Custom validation function to check if the date is in the past
const isPastDate = (date) => {
    const today = new Date();
    return new Date(date) < today;
};

function CreateAuthor({ createAuthor, model }) {

    // Initial values for the form fields
    const initialValues = {
        authorName: '',
        birthDate: '',
        bioGraphy: ''
    };

    // Validation schema using Yup for form validation
    const validationSchema = Yup.object({
        authorName: Yup.string()
            .required('Author Name is required')
            .min(2, 'Author Name must be at least 2 characters'),
        birthDate: Yup.date()
            .required('Date of Birth is required')
            .test('is-past-date', 'Date of Birth must be in the past', isPastDate)
            .test(
                'is-at-least-18',
                'You must be at least 18 years old',
                (value) => {
                    const today = new Date();
                    const birthDate = new Date(value);
                    const age = today.getFullYear() - birthDate.getFullYear();
                    const m = today.getMonth() - birthDate.getMonth();
                    return m < 0 || (m === 0 && today.getDate() < birthDate.getDate())
                        ? age - 1 >= 18
                        : age >= 18;
                }
            ),
        bioGraphy: Yup.string()
            .required('Biography is required')
    });

    // Function to handle form submission
    const onSubmit = (values, { resetForm }) => {
        // Call the function to create a new author with form values
        createAuthor(values);
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Author Details</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="createCloseModalButton"></button>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <div className='row mb-3'>
                                    <div className="col-12">
                                        <label className='form-label' htmlFor="authorName">Author Name</label>
                                        <Field className='form-control' type="text" id="authorName" name="authorName" />
                                        <ErrorMessage className='errorMsg' name="authorName" component="div" />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className="col-12">
                                        <label className='form-label' htmlFor="birthDate">DOB</label>
                                        <Field className='form-control' type="date" id="birthDate" name="birthDate" />
                                        <ErrorMessage className='errorMsg' name="birthDate" component="div" />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className="col-12">
                                        <label className='form-label' htmlFor="bioGraphy">BioGraphy</label>
                                        <Field className='form-control' type="text" id="bioGraphy" name="bioGraphy" />
                                        <ErrorMessage className='errorMsg' name="bioGraphy" component="div" />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAuthor