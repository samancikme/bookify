import HomeTourCard from '../components/pageComponents/HomeTourCard';
import { features, testimonials } from '../constants/HomeCards';
import DestCard from '../components/pageComponents/DestCard';
import Search from '../components/pageComponents/Search';
import Container from '../components/Container';
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import img1 from '../image/homeimg.png';

const Home = () => {
  const { destinations, isDestLoad } = useSelector(state => state.destinations);
  const { offers, isOfferLoad } = useSelector(state => state.offers)


  return (
    <div className='min-h-screen min-w-screen pt-3 font-nunito'>
      <Container className={`w-[95%] sm:w-[90%]`}>
        <div className="w-[100%]">
          <section className='relative'>
            <div className="z-0 rounded-xl overflow-hidden max-md:bg-home md:border bg-no-repeat bg-bottom bg-contain h-[calc(100vh-150px)]">
              <img
                className='object-cover w-full h-full max-md:hidden'
                src={img1}
                alt="image" />
            </div>
            <div className="absolute top-[30%] text-white gap-2 w-full flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 justify-center items-center">
                <div className="sm:text-[30px] cursor-default text-[24px] font-bold max-md:hidden">
                  Enjoy Your Dream Vacation
                </div>
              </div>
              <Search />
            </div>
          </section>



          {/* Destination section */}
          <section className="flex justify-center items-center flex-col py-[30px]">
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
                {isDestLoad ?
                  <>
                    {[1, 2, 3, 4].map((i,index) => (
                      <div key={index} className='transform transition-transform duration-300 ease-out cursor-pointer rounded-lg shadow-lg flex-grow w-[280px] bg-black bg-opacity-10 animate-pulse h-[400px]'></div>
                    ))}
                  </>
                  :
                  <>
                    {destinations?.slice(0, 4)?.map((item, index) => (
                      <DestCard key={index} item={item} index={index} />))}
                  </>}
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
          </section>


          {/* About section */}
          <section className="py-3 px-4 md:px-8 lg:px-16">
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




          {/* Tour section */}
          <section className="flex justify-center items-center flex-col py-[30px]">
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
                {isOfferLoad ?
                  <>
                    {[1, 2, 3, 4].map((i,index) => (
                      <div key={index} className='h-[450px] w-[320px] bg-black bg-opacity-10 animate-pulse transition-transform rounded-lg shadow-lg flex-grow cursor-pointer'></div>
                    ))}
                  </>
                  :
                  <>
                    {offers?.slice(0, 4)?.map((item, index) => (
                      <HomeTourCard key={index} item={item} index={index} />
                    ))}
                  </>}
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
          </section>


          {/* Testimonial section */}
          <section className="bg-white py-[20px]">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-green-400 text-[14px] font-medium text-center">Testimonials</div>
              <div className="text-center md:text-[30px] text-[26px] font-extrabold text-gray-900 mb-2">
                Travelers Say About Us
              </div>
              <div className="flex flex-grow flex-wrap gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-100 min-w-[250px] p-6 flex-1 flex-grow rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-2">
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
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Home;