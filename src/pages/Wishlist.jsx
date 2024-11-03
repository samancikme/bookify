import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <div className="">
      <Container>
        <div className="w-full min-h-[calc(100vh-80px)] border font-nunito border-gray-200 rounded-lg shadow-md px-5 py-3">
          <div className="">
            <div className="text-[28px] pt-5 font-bold">
              Wishlist
            </div>
            <div className='flex flex-col gap-4'>
              <div className="text-[16px] font-medium opacity-75 w-full">
                Homes you’ve checked out in the last 30 days will appear here.
              </div>
              <Link>
                <button className="text-[14px] px-5 py-2 rounded-lg bg-black hover:bg-gray-800 active:scale-95 duration-500 font-semibold text-white">
                  Start exploring
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Wishlist
