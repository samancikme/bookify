import React, { useState } from 'react';
import { Tilt } from 'react-tilt';


const DestCard = ({ item , index}) => {
  const [authLoading, setAuthLoading] = useState(true);

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 800,
    scale: 1.03,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }


  return (
    <>
      <Tilt
        options={defaultOptions}
        className='transform hover:scale-105 transition-transform duration-300 ease-out cursor-pointer rounded-lg overflow-hidden shadow-lg hover:z-10 flex-grow w-[280px]'>
        <div className="rounded-xl overflow-hidden group">
          <div className="relative h-[400px] w-full">
            <img
              className={`h-full w-full ${index === 3 ? "max" : "object-cover"}`}
              src={item.image}
              alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute w-full h-full top-0 flex justify-start px-5 pb-4 items-end">
              <div className='flex flex-col gap-0'>
                <h2 className="text-green-500 text-[14px] font-normal">
                  Travel to
                </h2>
                <h3 className="text-white text-[24px] font-bold">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default DestCard;