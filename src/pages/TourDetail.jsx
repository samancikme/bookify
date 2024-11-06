import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Container from '../components/Container';
import ModalAlert from './../components/ModalAlert';
import { toggleModal, setSelectedTour } from "../store/reducers/pageSlice";
import Booking from "../components/pageComponents/Booking";



const TourDetail = () => {
  const { destinations } = useSelector(state => state.destinations);
  const { offers } = useSelector(state => state.offers)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()

  const tour = offers?.find(offer => offer.slug === slug)

  return (
    <div className='font-nunito relative'>
      <Container>
        <div className="w-full min-h-[calc(100vh-60px)] pt-[30px] pb-[50px]">
          <div className="flex flex-col gap-2">
            <div className=' font-bold flex justify-start items-center gap-4'>
              <div
                onClick={() => navigate('/tours')}
                className="cursor-pointer rounded-md flex justify-center items-center ">
                <IoIosArrowBack className="text-[24px]" />
              </div>
            </div>
            <div className="flex justify-between gap-[15px] lg:flex-row flex-col">
              <div className='flex justify-between lg:w-[60%] w-full flex-wrap items-center flex-grow gap-4 border border-gray-100 rounded-lg shadow-lg px-3 py-2'>
                {tour?.images?.map((img, index) =>
                  <img
                    key={index}
                    className='w-[350px] h-[400px] object-cover flex-grow rounded-lg'
                    src={img}
                    alt={tour?.title} />)}
              </div>
              <div className="lg:w-[40%]  w-full border border-gray-100 border-b rounded-lg shadow-lg px-3 pt-5 pb-[20px] h-max sticky top-[50px]">
                <div className="md:text-[28px] text-[24px] border-gray-300 border-b">
                  {tour?.title}
                </div>
                <div className="flex flex-col py-4 gap-1">
                  <span className="text-[18px] font-medium">Details</span>
                  <span className="text-[16px] font-normal text-gray-800">{tour?.details}</span>
                </div>
                <div className="">
                  <div className="">
                    <span className="text-[24px]">Price : </span>
                    <span className="text-[24px]">{tour?.price}$</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      dispatch(setSelectedTour(tour.id))
                      dispatch(toggleModal())
                    }}
                    className="text-[20px] font-semibold text-white px-3 py-1 bg-green-400 rounded-md duration-500  hover:bg-green-700">Book now </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ModalAlert >
        <Booking id={tour?.id} />
      </ModalAlert>
    </div>
  )
}

export default TourDetail