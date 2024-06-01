import * as yup from 'yup';

export const basicShema = yup.object().shape({
    bookTitle: yup.string().required('Book Title is required'),
    authorName: yup.string().required('Author Name is required'),
    isbnNumber: yup.string().required('ISBN number is required'),
    publicationDate: yup.string().required('Publication date is required'),
})