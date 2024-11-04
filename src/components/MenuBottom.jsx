import { btnsMenu } from '../constants/BtnsMenu'
import Container from './Container';
import { Link, useLocation } from 'react-router-dom';

const MenuBottom = () => {
  const { pathname } = useLocation()
  return (
    <div className='py-1 border-t bg-white z-40'>
      <Container className={`w-[95%]`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          {btnsMenu.map(btn => {
            const Icon = btn.icon()
            return (
              <Link
                to={btn.path}
                key={btn.id}
                className="flex flex-col flex-1 gap-0 items-center justify-center">
                <div className={`text-[26px] max-[450px]:text-[24px] font-bold ${pathname === btn.path ? `text-blue-500 ` : "text-gray-700"}`}>
                  {Icon}
                </div>
                <div className={`max-[450px]:text-[14px] text-[16px] font-medium font-quicksand ${pathname === btn.path ? "text-blue-500" : "text-gray-700"}`}>
                  {btn.title}
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default MenuBottom
