import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../store/reducers/pageSlice';

const ModalAlert = ({ children }) => {
  const { isModalAct } = useSelector(state => state.page);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalAct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalAct]);

  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  return (
    <div
      onClick={() => handleCloseModal()}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-40 backdrop-blur flex justify-center items-center overflow-y-auto transition-all duration-300 ${isModalAct ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg p-4 max-h-[80vh] overflow-y-auto transition-transform duration-300 ${isModalAct ? 'scale-100' : 'scale-95'}`}>
        {children}
      </div>
    </div>
  );
};

export default ModalAlert;
