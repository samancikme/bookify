import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import BookifyYourHome from './pages/BookifyYourHome';
import AccountSetting from './pages/AccountSetting';
import Destinations from './pages/Destinations';
import MainLayout from './layout/MainLayout'
import Messages from './pages/Messages';
import NotFound from './pages/NotFound'
import Wishlist from './pages/Wishlist';
import GiftCard from './pages/GiftCard';
import Help from './pages/Help';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/message' element={<Messages />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/account-setting' element={<AccountSetting />} />
          <Route path='/bookify-your-home' element={<BookifyYourHome />} />
          <Route path='/gift-card' element={<GiftCard />} />
          <Route path='/help' element={<Help />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/tours/:slug' element={<TourDetail />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App