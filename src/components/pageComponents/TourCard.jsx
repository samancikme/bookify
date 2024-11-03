import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import { useNavigate } from "react-router-dom";

const TourCard = ({ item }) => {
    const navigate = useNavigate()

    // console.log(item)
    return (
        <div className="bg-white flex flex-row w-full max-[600px]:flex-col rounded-lg shadow-md overflow-hidden">
            <img
                src={item.images[0]}
                alt={item.name}
                className="md:w-[30%] w-[40%] max-[600px]:w-[100%] max-[600px]:h-[100%] h-[200px] object-cover rounded-lg" />
            <div className="p-4 md:w-[70%] max-[600px]:w-[100%] w-[60%] relative">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500">★ {item.rating}</span>
                    <span className="text-gray-600 ml-2">1200( Reviews)</span>
                </div>
                <p className="text-gray-700 mb-4">Live a little and celebrate with champagne</p>
                {true && (
                    <div className="text-sm text-orange-500 font-medium mb-2">
                        Book now and receive 15% off
                    </div>
                )}
                <div className="flex items-center gap-3 max-[405px]:items-end flex-row max-[405px]:flex-col-reverse">
                    <button
                        onClick={() => navigate(item.slug)}
                        className="bg-blue-500 text-white flex-1 px-4 py-2 rounded-md hover:bg-blue-600">
                        See availability
                    </button>
                    <div className="text-right max-[800px]:flex-1 lg:flex-[3] ">
                        {/* {item.originalPrice && (
                            <span className="line-through text-gray-500 mr-2">
                              ${item.originalPrice}
                            </span>
                          )} */}
                        <span className="text-lg font-bold">${item.price}</span>
                        <div className="text-sm text-gray-500">Includes taxes and fees</div>
                    </div>
                </div>
                <div className="absolute top-3 right-3 px-2 cursor-pointer py-1 rounded flex items-center gap-1">
                    <AiOutlineHeart className="text-[24px] text-black" />
                </div>
            </div>
        </div>
    )
}

export default TourCard