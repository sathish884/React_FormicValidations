import React from 'react';
import './EditAuthor.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Custom validation function to check if the date is in the past
const isPastDate = (date) => {
    const today = new Date();
    return new Date(date) < today;
};

function EditAuthor({ editAuthor, authorToEdit }) {

    // Initial values for the form fields, populated with the current author's data if available
    const initialValues = {
        authorName: authorToEdit?.authorName || '', // If authorToEdit exists, use its authorName, otherwise use an empty string
        bioGraphy: authorToEdit?.bioGraphy || '',
        birthDate: authorToEdit?.birthDate || '',
    };

    // Validation schema using Yup for form validation
    const validationSchema = Yup.object({
        authorName: Yup.string()
            .required('Author Name is required')
            .min(2, 'Author Name must be at least 2 characters'),
        bioGraphy: Yup.string()
            .required('Biography is required'),
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
    });

    // Function to handle form submission
    const onSubmit = (values, { resetForm }) => {
        // Call the function to edit the author with updated values
        editAuthor({ ...authorToEdit, ...values });
        // Reset the form fields
        resetForm();
        // Close the modal programmatically by clicking the close button
        document.getElementById("editCloseModalButton").click().resetForm();
    };

    return (
        <>
            <div className="modal fade" id="authoreditmodel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Author Details</h1>
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
                                            <label className='form-label' htmlFor="bioGraphy">Author Biography</label>
                                            <Field className='form-control' type="text" id="bioGraphy" name="bioGraphy" />
                                            <ErrorMessage className='errorMsg' name="bioGraphy" component="div" />
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

export default EditAuthor