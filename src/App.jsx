import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AuthModal from './components/pageComponents/AuthModal';
import BookifyYourHome from './pages/BookifyYourHome';
import AccountSetting from './pages/AccountSetting';
import Destinations from './pages/Destinations';
import MainLayout from './layout/MainLayout'
import TourDetail from './pages/TourDetail';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound'
import Wishlist from './pages/Wishlist';
import GiftCard from './pages/GiftCard';
import Tours from './pages/Tours';
import Help from './pages/Help';
import Home from './pages/Home';

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
          <Route path='/register' element={<AuthModal />} />
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