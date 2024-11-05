import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useState } from 'react';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from '../components/pageComponents/TourCard';
import { toggleModal } from "../store/reducers/pageSlice";
import ModalAlert from "../components/ModalAlert";

const Tours = () => {
  const { offers, isOfferLoad } = useSelector(state => state.offers);
  const [budgetFilter, setBudgetFilter] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [activityFilter, setActivityFilter] = useState([]);
  const dispatch = useDispatch();

  const budgetFilData = [
    ['$0 - $200', '0-200'],
    ['$200 - $500', '200-500'],
    ['$500 - $1,000', '500-1000'],
    ['$1,000 - $2,000', '1000-2000'],
    ['$2,000 - $5,000', '2000-5000'],
  ];

  const handleBudgetChange = (range) => {
    setBudgetFilter(range);
  };

  const handleRatingChange = (rating) => {
    setRatingFilter(rating);
  };

  const handleActivityToggle = (activity) => {
    setActivityFilter((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  const handleClearFilters = () => {
    setBudgetFilter(null);
    setRatingFilter(null);
    setActivityFilter([]);
  };

  const filteredTours = offers?.filter((tour) => {
    if (budgetFilter) {
      const [min, max] = budgetFilter.split('-').map(Number);
      if (tour.price < min || tour.price > max) return false;
    }
    if (ratingFilter && tour.rating < ratingFilter) {
      return false;
    }
    if (activityFilter.length && !activityFilter.every(act => tour.activities.includes(act))) {
      return false;
    }
    return true;
  });

  return (
    <div className="pb-12 font-nunito ">
      <Container className="w-[85%]">
        <div className="flex gap-6 w-full relative">
          <div className="w-[25%] bg-gray-50 p-4 rounded-lg shadow-md md:flex flex-col hidden ">
            <div className="sticky top-[20px]">
              <div className="text-[20px] font-semibold mb-4">Filter by</div>
              <div className="mb-6 py-2">
                <div onClick={() => dispatch(toggleModal())} className="font-medium mb-2">Your budget per day</div>
                {budgetFilData.map(([label, range], index) => (
                  <label
                    key={index}
                    className="block transition-transform transform hover:scale-105">
                    <input
                      type="radio"
                      name="budget"
                      checked={budgetFilter === range}
                      onChange={() => handleBudgetChange(range)}
                      className="mr-2 appearance-none w-[16px] h-[16px] border border-gray-400 rounded-full checked:bg-blue-500 checked:border-transparent" />
                    {label}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <div className="font-medium mb-2">Rating</div>
                <div className="flex justify-start gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className="cursor-pointer text-yellow-500 text-[24px]">
                      {ratingFilter >= star ? <AiFillStar /> : <AiOutlineStar />}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="text-[18px] font-semibold mb-2">Activities</div>
                {['Fishing', 'Hiking', 'Beach', 'Cycling', 'Sauna', 'Night lights'].map(
                  (activity, index) => (
                    <label key={index} className="flex items-center mb-1">
                      <input
                        type="checkbox"
                        checked={activityFilter.includes(activity)}
                        onChange={() => handleActivityToggle(activity)}
                        className="mr-2" />
                      {activity}
                    </label>
                  )
                )}
              </div>

              <div className="mt-4">
                <button
                  onClick={handleClearFilters}
                  className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
                  Clear All
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-[75%] w-full gap-6">
            {filteredTours.length > 0 ? (
              filteredTours.map((item, index) => <TourCard key={index} item={item} />)
            ) :
              <>
                {
                  isOfferLoad ?
                    <>
                      {[1, 2, 3, 4, 5].map((i,index) => <div key={index} className="bg-black bg-opacity-10 animate-pulse w-full max-[600px]:flex-col h-[200px] rounded-lg shadow-md overflow-hidden" />)}
                    </>
                    :
                    <span className="text-center col-span-3 text-gray-600">Tour not found :( </span>
                }
              </>
            }
          </div>
        </div >
      </Container >
      <ModalAlert>
        hellodsadasdas
      </ModalAlert>
    </div >
  );
};

export default Tours;
