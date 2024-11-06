import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { book } from '../../api/postRequests';

const Booking = ({id}) => {
  const baseUrl = 'https://travel-database-r4bg.onrender.com'
  const dispatch = useDispatch();

    const {selectedTour} = useSelector(state => state.page)
    console.log(id)
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        tourId: id
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Ism majburiy"),
        email: Yup.string().email("Noto'g'ri email format").required("Email majburiy"),
        phone: Yup.string().matches(/^\d+$/, "Faqat raqamlar bo'lishi kerak").required("Telefon raqam majburiy"),
        tourId: Yup.string().required("Tour ID majburiy")
    });

    const onSubmit = (values) => {
        console.log('Form data', values);
        dispatch(book(baseUrl , values  ))
        // onSubmit={async (valuesLog, { resetForm }) => {
        //     console.log(valuesLog)

        //   }}
    };

    return (
        <div className="mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Buyurtma Formasi</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Ism
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Telefon raqam
                            </label>
                            <Field
                                type="text"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label htmlFor="tourId" className="block text-sm font-medium text-gray-700">
                                Tour ID
                            </label>
                            <Field
                                type="text"
                                id="tourId"
                                name="tourId"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <ErrorMessage name="tourId" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <button
                             initialValues={selectedTour}
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                                disabled={isSubmitting}
                            >
                                Yuborish
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Booking;
