import { BsMapFill } from "react-icons/bs";
import Header from '../components/Header'
import { Link, Outlet, useLocation } from 'react-router-dom'
import MenuBottom from '../components/MenuBottom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../store/reducers/pageSlice'
import { useEffect } from "react";
import { getAllDestData, getAllOfferData } from './../api/getRequests';
import Footer from "../components/Footer";
import ModalAlert from "../components/ModalAlert";
import AuthModal from "../components/pageComponents/AuthModal";

const MainLayout = () => {
  const { isMenuAct } = useSelector(state => state.page)
  const destinations = useSelector(state => state.destinations)
  const offers = useSelector(state => state.offers)
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const baseUrl = 'https://travel-database-r4bg.onrender.com'



  // console.log(destinations)
  // console.log(offers)




  useEffect(() => {
    dispatch(getAllDestData(baseUrl))
    dispatch(getAllOfferData(baseUrl))
  }, [])




  return (
    <div
      className="min-h-[100vh] relative"
      onClick={() => { if (isMenuAct) { dispatch(toggleMenu()) } }}>
      <div className=' top-0 z-10 bg-white  '>
        <Header />
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
      <div className='fixed bottom-0 w-full md:hidden '>
        <MenuBottom />
      </div>
      <div className="static bottom-0 right-0 left-0">
        <Footer />
      </div>
      <div>
        <AuthModal />
      </div>
    </div>
  )
}

export default MainLayout