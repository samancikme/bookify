import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Container from '../Container';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Date of birth is required'),
  phone: Yup.string()
    .matches(/^\+?\d{1,3}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Invalid phone number')
    .required('Phone is required'),
  location: Yup.string()
    .required('Location is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const AccountEdit = () => {
  return (
    <div className='w-full'>
      <Container>
        <Formik
          initialValues={{
            name: '',
            dateOfBirth: '',
            phone: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            alert('Form submitted');
          }}>
          {({ errors, touched }) => (
            <Form className="w-full bg-white shadow-lg p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Personal Information</h2>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Name</label>
                <Field
                  name="name"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Date Of Birth</label>
                <Field
                  name="dateOfBirth"
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Phone</label>
                <Field
                  name="phone"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Location</label>
                <Field
                  name="location"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
              </div>

              <h2 className="text-2xl font-bold mt-6 mb-4">Security</h2>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="mb-4">
                <label className="block font-medium text-gray-700">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>

              <div className='flex justify-end'>
                <button
                  type="submit"
                  className="bg-teal-500 text-white font-bold py-2 px-4 rounded mt-4">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default AccountEdit;
