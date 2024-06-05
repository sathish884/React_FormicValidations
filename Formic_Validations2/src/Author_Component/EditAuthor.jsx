import React from 'react';
import './EditAuthor.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function EditAuthor({ editAuthor, authorToEdit }) {
    const initialValues = {
        authorName: authorToEdit?.authorName,
        birthDate: authorToEdit?.birthDate,
        bioGraphy: authorToEdit?.bioGraphy
    };

    const validationSchema = Yup.object({
        authorName: Yup.string()
            .required('Author Name is required')
            .min(2, 'Author Name must be at least 2 characters'),
        birthDate: Yup.date()
            .required('Publication Date is required')
            .typeError('Invalid date format (YYYY-MM-DD)'),
        bioGraphy: Yup.string()
            .required('Biography is required')
    });

    const onSubmit = (values, { resetForm }) => {
        editAuthor({ ...authorToEdit, ...values });
        resetForm();
        document.getElementById("editCloseModalButton").click(); // Close the modal programmatically
    };

    return (
        <div className="modal fade" id="editmodel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Author Details</h1>
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
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAuthor