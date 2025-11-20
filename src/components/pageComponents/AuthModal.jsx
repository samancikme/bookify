import { toggleModal, toggleRegModal } from '../../store/reducers/pageSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import Register from './Register'
import Login from './Login'

const AuthModal = () => {
  const { isRegModalAct, authType } = useSelector(state => state.page)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isRegModalAct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isRegModalAct])

  const handleCloseModal = () => {
    dispatch(toggleRegModal())
  }

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-40 backdrop-blur flex justify-center items-center overflow-y-auto transition-all duration-300 ${isRegModalAct ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg py-[14px] bg-white backdrop-blur-sm opacity-95 px-4 h-max w-[800px] flex justify-center  items-center overflow-y-auto transition-transform duration-300 ${isRegModalAct ? 'scale-100' : 'scale-95'}`}>
        {authType === 'sign-up' ? <Register /> : <Login />}
      </div>
    </div>
  )
}

export default AuthModal