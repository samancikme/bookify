import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toggleAuthType } from '../../store/reducers/pageSlice';

const Login = () => {

  const navigate = useNavigate()
  const [pasType, setPasType] = useState(true)  //! true === password  false === text


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });
  const dispatch = useDispatch()


  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <div className='min-w-[250px] px-4 py-6 forma w-full rounded-xl h-max'>
          <div className=" text-[26px] text-center font-normal">Log in</div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (valuesLog, { resetForm }) => {
              console.log(valuesLog)
            }}>
            {({ isSubmitting, errors, touched }) => (
              <Form className='flex flex-col gap-4'>
                <div>
                  <label className='text-lg font-semibold' htmlFor="email">Email</label>
                  <Field
                    placeholder="Enter your email"
                    id='email'
                    name='email'
                    type='email'
                    className={`w-full p-2 border outline-none ${errors.email && touched.email ? 'border-red-500 focus:border-red-600 ' : '  border-gray-300'} bg-transparent rounded-md`} />
                  <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
                </div>

                <div className=" relative">
                  <Field
                    placeholder="Enter your password"
                    id='password'
                    name='password'
                    type={pasType ? "password" : "text"}
                    className={`w-full p-2 border outline-none ${errors.password && touched.password ? 'border-red-500 focus:border-red-600 ' : '  rder-gray-300'} bg-transparent rounded-md`} />
                  <div
                    onClick={() => setPasType(!pasType)}
                    className=" cursor-pointer absolute top-0 right-2 bottom-0 text-[22px] flex justify-center items-center">
                    {pasType ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>

                <div
                  onClick={() => dispatch(toggleAuthType('sign-up'))}
                  className="cursor-pointer w-max border-b dark:border-gray-400">
                  Are you unregistered?
                </div>
                {errors.server && <div className="text-red-500 text-sm">{errors.server}</div>}

                <div className='flex justify-end '>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=' px-6 bg-blue-600 text-white py-2 rounded-md'>
                    Log in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Login
