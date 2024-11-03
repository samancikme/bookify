import DestCard from '../components/pageComponents/DestCard';
import { BsArrowRight, BsSearch } from "react-icons/bs";
import 'react-date-range/dist/theme/default.css';
import Container from '../components/Container';
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import img1 from '../image/homeimg.png';
import { useState } from "react";
import { features, testimonials } from '../constants/HomeCards';
import HomeTourCard from '../components/pageComponents/HomeTourCard';

const Home = () => {
  const { destinations } = useSelector(state => state.destinations);
  const { offers } = useSelector(state => state.offers)
  const [typeAct, setTypeAct] = useState(false);
  const [dateAct, setDateAct] = useState(false);
  const [adultsAct, setAdultsAct] = useState(false);



  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const [selectedDates, setSelectedDates] = useState({
    startDate: "Add dates",
    endDate: "Add dates",
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleSaveDates = () => {
    setSelectedDates({
      startDate: date.startDate.toDateString().slice(4, 10),
      endDate: date.endDate.toDateString().slice(4, 10),
    });
    setDateAct(false)
  };

  const destinationsa = [
    { name: "Almaty",  description: "Any week" },
    { name: "Tbilisi",  description: "Any week" },
    { name: "İstanbul",  description: "Any week" },
    { name: "Jaipur, India",  description: "For sights like Amber Fort" },
    { name: "Manali, India",  description: "For nature-lovers" },
    { name: "New Delhi, India",  description: "For its stunning architecture" },
  ];

  return (
    <div className='min-h-screen min-w-screen pt-3 font-nunito'>
      <Container className={`w-[95%] sm:w-[90%]`}>
        <div className="w-[100%]">
          <div className='relative'>
            <div className="border z-0 rounded-xl overflow-hidden h-[300px] sm:h-[calc(100vh-150px)]">
              <img
                className='object-cover w-full h-[300px] sm:h-full'
                src={img1}
                alt="image" />
            </div>
            <div className="absolute top-[30%] text-white gap-2 w-full flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 justify-center items-center">
                <div className="sm:text-[30px] cursor-default text-[24px] font-bold">
                  Enjoy Your Dream Vacation
                </div>
              </div>
              <form
                className="lg:w-[60%] md:w-[90%] sm:w-[95%] sm:flex rounded-full bg-black bg-opacity-15 backdrop:blur-xl mx-auto relative hidden justify-between items-center p-[3px]">
                <div className="flex justify-start pl-6 items-center gap-2 hover:bg-[#999999] rounded-full flex-[2]">
                  <div
                    onClick={() => setTypeAct(!typeAct)}
                    className="justify-center items-center cursor-pointer py-2">
                    <div className="flex flex-col gap-0">
                      <span className="text-[14px] font-medium">Where</span>
                      <span className="text-[15px] font-medium">Search destinations</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 flex-1 hover:bg-[#999999] rounded-full">
                  <div
                    onClick={() => setDateAct(!dateAct)}
                    className="flex justify-center items-center cursor-pointer py-2">
                    <div className="flex flex-col gap-0">
                      <span className="text-[14px] font-medium">Check in</span>
                      <span className="text-[15px] font-medium">{selectedDates.startDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 flex-1 hover:bg-[#999999] rounded-full">
                  <div
                    onClick={() => setDateAct(!dateAct)}
                    className="flex justify-center items-center cursor-pointer py-2">
                    <div className="flex flex-col gap-0">
                      <span className="text-[14px] font-medium">Check out</span>
                      <span className="text-[15px] font-medium">{selectedDates.endDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start pl-6 items-center gap-2 flex-[2] hover:bg-[#999999] rounded-full">
                  <div
                    onClick={() => setAdultsAct(!adultsAct)}
                    className="flex justify-center items-center cursor-pointer py-2">
                    <div className="flex flex-col gap-0">
                      <span className="text-[14px] font-medium">Who</span>
                      <span className="text-[15px] font-medium">Add guests</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 bottom-0">
                  <button
                    type="button"
                    onClick={handleSaveDates}
                    className="py-3 w-full h-full pr-7">
                    <BsSearch />
                  </button>
                </div>

                {dateAct && (
                  <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 z-10 max-w-full flex justify-center">
                    <DateRange
                      ranges={[date]}
                      onChange={handleChange}
                      months={2}
                      direction="horizontal"
                      showMonthAndYearPickers={false}
                      className="dateRange" />
                    <button onClick={handleSaveDates} className="mt-2 bg-green-500 text-white py-1 px-3 rounded">
                      Save Dates
                    </button>
                  </div>
                )}
                {typeAct && (
                  <div className="absolute top-[60px] z-10 max-w-full flex justify-center">
                    <div className="w-64 p-4 bg-white shadow-lg rounded-lg">
                      {destinationsa.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 py-2">
                          <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <p className="font-medium text-black">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col md:py-[100px]">
            <div className="flex flex-col gap-3 w-full">
              <div className='flex flex-col'>
                <div className="text-[14px] font-normal text-center text-green-400">
                  Find Top Destinations
                </div>
                <div className="text-[26px] text-center font-bold">
                  Trendy Travel Locations
                </div>
              </div>
              <div className="flex justify-between flex-grow flex-wrap gap-3">
                {destinations?.slice(0, 4)?.map((item, index) => (
                  <DestCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
            <Link to={'/destinations'}>
              <button className="flex justify-center items-center gap-2 mt-[40px] duration-500 rounded-lg px-4 py-2 hover:text-green-500 active:scale-95">
                <h1 className="text-[16px] font-semibold">View all Destinations</h1>
                <div className="text-[20px]">
                  <BsArrowRight />
                </div>
              </button>
            </Link>
          </div>
          <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-10">
              <p className="text-green-500 text-[14px] font-semibold">Who We Are</p>
              <h2 className="text-[26px] md:text-[30px] font-bold">Why TripRex Is Best</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-500">
                  <div className={`mb-4 text-[36px] ${feature.className}`}>{feature.icon()}</div>
                  <h3 className="text-[20px] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="flex justify-center items-center flex-col md:py-[100px]">
            <div className="flex flex-col gap-3 w-full">
              <div className='flex flex-col'>
                <div className="text-[14px] font-normal text-center text-green-400">
                  Find Top Destinations
                </div>
                <div className="text-[26px] text-center font-bold">
                  Trendy Travel Locations
                </div>
              </div>
              <div className="flex flex-grow flex-wrap gap-2">
                {offers?.slice(0, 4)?.map((item, index) => (
                  <HomeTourCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
            <Link to={'/tours'}>
              <button className="flex justify-center items-center gap-2 mt-[40px] duration-500 rounded-lg px-4 py-2 hover:text-green-500 active:scale-95">
                <h1 className="text-[16px] font-semibold">View all Tours</h1>
                <div className="text-[20px]">
                  <BsArrowRight />
                </div>
              </button>
            </Link>
          </div>


          <div className="bg-white py-16">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-[30px] font-extrabold text-gray-900 mb-2">
                Travelers Say About Us
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis et sed vehicula tortor malesuada gravida. Mauris vulputate enim quis.
              </p>
              <div className="flex flex-grow flex-wrap gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-100 min-w-[250px] p-6 flex-1 flex-grow rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {testimonial.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover mr-3" />
                      <div>
                        <p className="text-gray-900 font-medium">{testimonial.name}</p>
                        <p className="text-gray-600 text-[14px">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;