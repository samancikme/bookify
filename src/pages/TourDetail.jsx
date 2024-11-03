import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../components/Container';


const TourDetail = () => {
  const { destinations } = useSelector(state => state.destinations);
  const { offers } = useSelector(state => state.offers)

  const { slug } = useParams()
  const navigate = useNavigate()

  const tour = offers?.find(offer => offer.slug === slug)
  console.log(tour)


  return (
    <div className='font-nunito'>
      <Container className={'relative'}>
        <div className="w-full min-h-[calc(100vh-60px)] pt-[30px] pb-[50px]">
          <div className="">
            <div className=' font-bold flex justify-start flec\ items-center gap-4'>
              <div
                onClick={() => navigate('/tours')}
                className="cursor-pointer hover:bg-gray-400 rounded-md flex justify-center items-center ">
                <IoIosArrowBack className="text-[24px]" />
              </div>
              <div className="md:text-[28px] text-[24px]">
                {tour?.title}
              </div>
            </div>
            <div className='flex justify-between flex-wrap items-center w-full flex-grow gap-4 pb-2 border-b-2 border-gray-600'>
              {tour?.images?.map(img =>
                <img
                  className='w-[350px] h-[400px] object-cover flex-grow rounded-lg'
                  src={img}
                  alt={tour?.title} />)}
            </div>
            <div className="flex flex-col py-4">
              <span className="text-[22px] font-bold text-center">Details</span>
              <span className="text-[16px] font-normal">{tour?.details}</span>
            </div>
            <div className="">
              <div className="flex justify-start items-center gap-2">
                <span className="text-[20px]"> Rating : </span>
                <span className="text-[20px] flex justify-start gap-1 items-center">
                  <span> {tour?.rating}</span>
                  <AiFillStar className="text-yellow-300" />
                </span>
              </div>
              <div className="">
                <span className="text-[24px]">Price : </span>
                <span className="text-[24px]">{tour?.price}$</span>
              </div>
            </div>
            <div className=" flex justify-end">
              <button className="text-[20px] font-semibold text-white px-3 py-1 bg-green-400 rounded-md duration-500  hover:bg-green-700">Book now </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TourDetail
