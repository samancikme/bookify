import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'

const HomeTourCard = ({ item }) => {
    // console.log(item)
    return (
        <div className="h-[450px] w-[320px] bg-white rounded-lg shadow-lg flex-grow overflow-hidden">
            <div className="relative">
                <img
                    src={item.images[0]}
                    alt="Travel Destination"
                    className="w-full h-[250px] object-cover" />
                <div className="absolute top-3 right-3 text-white px-2 hover:scale-105 cursor-pointer py-1 rounded flex items-center gap-1">
                    <AiOutlineHeart className="text-[24px]" />
                </div>
            </div>
            <div className="p-4">
                <div className="text-[16px] font-semibold text-gray-900">
                    {item.title}
                </div>
                <div className="text-[14px] font-normal text-gray-700 h-[60px] overflow-y-scroll">
                    {item.details}
                </div>
                <div className="flex flex-col  mt-4 w-full">
                    <div className="flex justify-between items-center pr-5">
                        <div className="">
                            <span className="text-green-600 font-bold text-[18px]">{item.price}</span>
                            <span className="text-black text-[18px] font-semibold"> {"$"}</span>
                        </div>
                        <div className="">
                            <span className="text-yellow-500">★ {item.rating}</span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                            Book now <span>✈️</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTourCard