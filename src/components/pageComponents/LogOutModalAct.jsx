import { AiFillWarning } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { toggleisLogOutModalAct } from "../../store/reducers/pageSlice";

const LogOutModalAct = () => {
  const { isLogOutModalAct ,isRegLoad} = useSelector((state) => state.page);
  console.log(isLogOutModalAct);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogOutModalAct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLogOutModalAct]);

  const handleCloseModal = () => {
    dispatch(toggleisLogOutModalAct());
  };

  const handleLogOut = () => {
    localStorage.setItem("travel-token", "");
    handleCloseModal()
    window.location.reload();
  }
 
  return (
    <div
      onClick={handleCloseModal}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-40 backdrop-blur flex justify-center items-center overflow-y-auto transition-all duration-300 ${
        isLogOutModalAct ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg py-[28px] bg-white backdrop-blur-sm opacity-95 px-5 h-max w-[85%] 2xl:w-[20%] flex justify-center flex-col items-center gap-3 overflow-y-auto transition-transform duration-300 ${
          isLogOutModalAct ? "scale-100" : "scale-95"
        }`}
      >
        <div className="rounded-full bg-[#fff4b4] p-3 flex justify-center items-center mb-3">
          <AiFillWarning className="text-[32px] text-yellow-500" />
        </div>
        <p className="text-[1.3rem] font-bold">Log out</p>
        <p className="text-[1rem] text-center">
          Are you sure you would like to log out of your account?
        </p>
        <div className="w-full flex justify-center items-center gap-3">
          <button
            onClick={() => {handleLogOut()}}
            className="px-5 active:scale-95 rounded-lg py-2 text-1rem border border-gray-100 hover:bg-red-100 duration-300  "
          >
            Log out
          </button>
          <button
            onClick={() => {handleCloseModal()}}
            className="px-5 active:scale-95 rounded-lg py-2 text-1rem border border-gray-100 hover:bg-blue-400 duration-300 bg-blue-500 text-white font-semibold "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModalAct;
