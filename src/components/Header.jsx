import { changeLang, toggleLangMenu, toggleMenu } from "../store/reducers/pageSlice.js";
import Container from "./Container";
import { CgClose } from "react-icons/cg";
import { RiTranslate2 } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPlanet } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { languages } from './../constants/lenguages';
import { btnsSidebar } from "../constants/SidebarBtns.js";



const Header = () => {


  const { isMenuAct, lang, isLangMenuAct } = useSelector(state => state.page)
  const { accountStatus } = useSelector(state => state.acc)
  const dispatch = useDispatch()
  const menu = useRef()




  return (
    <>
      <Container>
        <div className='h-max py-3 items-center flex w-full z-10 relative'>
          <div className='flex items-center justify-between w-full gap-1'>
            <Link to={'/'} className="flex flex-1 items-center justify-start gap-1">
              <IoIosPlanet className="text-[40px] text-blue-800" />
              <span className="text-[20px] font-bold font-quicksand">Bookify</span>
            </Link>
            <div className={`flex-[6] flex-col justify-center gap-5 md:flex hidden`}>
              <div className="flex justify-center">
                <form >
                  <input type="text" />
                </form>
              </div>
            </div>
            <div className="md:flex hidden gap-[15px] pr-5">
              <Link
                to={'/'}
                className="text-[16px] font-semibold font-quicksand text-gray-600 hover:text-blue-800">
                Home
              </Link>
              <Link
                to={'/tours'}
                className="text-[16px] font-semibold font-quicksand text-gray-600 hover:text-blue-800">
                Tours
              </Link>
            </div>
            <div className="md:flex hidden flex-1 justify-between items-center gap-[30px]">
              <button
                onClick={() => {
                  dispatch(toggleLangMenu())
                }}
                className="cursor-pointer duration-300 active:scale-95 rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-slate-100">
                <RiTranslate2 className="text-[26px]" />
              </button>
              {isLangMenuAct && (
                <div
                 className="absolute right-[9%] bg-white top-[100%] border py-1 rounded-lg px-2 shadow-lg">
                  <div className="flex justify-center flex-col gap-2">
                    {languages.map((lang, index) => {
                      return (
                        <div key={index} className="cursor-pointer py-[2px] px-6 hover:bg-gray-100 last:border-b-0 border-b gap-3 flex justify-center items-center">
                          <img className="w-[25px] h-[25px]" src={lang.flag} alt="" />
                          <span className="text-[14px] font-nunito font-normal">{lang.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              <button
                ref={menu}
                onClick={() => {
                  dispatch(toggleMenu())
                  if (isMenuAct) {
                    dispatch(toggleMenu())
                  }
                }}
                className={`${isMenuAct ? ' shadow-lg' : ""} gap-3 pr-1 pl-2 py-[2px] cursor-pointer group md:flex hidden justify-between items-center w-[90px] menu border border-gray-200 rounded-full hover:shadow-lg duration-300`}>
                <div className=" duration-500">
                  {isMenuAct ?
                    <CgClose className="text-[20px]" />
                    :
                    <FiMenu className='text-[20px] ' />
                  }
                </div>
                <div className="w-[42px] h-[42px] border flex justify-center items-center rounded-full">
                  <BsFillPersonFill className="text-[32px] text-gray-400" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`top-[10%] right-[5%] md:flex  fixed hidden  rounded-2xl  z-50 w-[250px] duration-300 ${isMenuAct ? 'opacity-100 scale-100 ' : 'overflow-hidden opacity-0 w-0 -z-50'} bg-white backdrop:blur-lg border border-gray-100 shadow-md pb-3`}>
        <div className={` ${isMenuAct ? 'pt-3' : ' opacity-0 w-0 h-0 overflow-hidden'} flex w-full  flex-col gap-1 duration-300 font-quicksand `}>
          {!accountStatus ?
            <>
              <div className="flex flex-col gap-1 border-b pb-3">
                {btnsSidebar.first.map((btn) => {
                  return (
                    <Link
                      onClick={() => {
                        dispatch(toggleMenu())
                      }}
                      key={btn.id}
                      to={btn.path}
                      className="text-[14px] px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                      {btn.title}
                    </Link>
                  )
                })}
              </div>
              <div className="flex flex-col gap-1 border-b pt-2">
                {btnsSidebar.second.map((btn) => {
                  return (
                    <Link
                      onClick={() => {
                        dispatch(toggleMenu())
                      }}
                      key={btn.id}
                      to={btn.path}
                      className="text-[14px] px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                      {btn.title}
                    </Link>
                  )
                })}
              </div>
              <div className=" flex flex-col gap-1 pt-2">
                <Link onClick={() => {
                  dispatch(toggleMenu())
                }}
                  to={'/help'}
                  className="text-[14px] px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                  Help Center
                </Link>
                <Link onClick={() => {
                  dispatch(toggleMenu())
                }}
                  to={'/gift-card'}
                  className="text-[14px] px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                  Gift Card
                </Link>
                <button className="text-[14px] text-start px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                  Log out
                </button>
              </div>
            </>
            :
            <>
              <div className="flex flex-col gap-1 border-b pb-3 ">
                <button className="text-[14px] text-start px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                  Login
                </button>
                <button className="text-[14px] text-start px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                  Sign Up
                </button>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                {btnsSidebar.third.map((btn) => {
                  return (
                    <Link
                      onClick={() => {
                        dispatch(toggleMenu())
                      }}
                      key={btn.id}
                      to={btn.path}
                      className="text-[14px] px-5 py-2 font-semibold hover:bg-gray-100 w-full">
                      {btn.title}
                    </Link>
                  )
                })}
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Header