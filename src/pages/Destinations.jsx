import React from 'react'
import { useSelector } from 'react-redux';
import DestCard from '../components/pageComponents/DestCard';
import Container from '../components/Container';

const Destinations = () => {
  const { destinations, isDestLoad } = useSelector(state => state.destinations);


  return (
    <div className='overflow-x-hidden font-nunito'>
      <Container>
        <div className='felx flex-col'>
          <div className="text-[30px] font-extrabold text-center">
            Destinations
          </div>
          <div className="flex justify-between flex-grow flex-wrap gap-3 my-[50px]">
            {isDestLoad ?
              <>
                {[1, 2, 3 ,4 ].map(i => (
                  <div className='transform transition-transform duration-300 ease-out cursor-pointer rounded-lg shadow-lg flex-grow w-[320px] bg-black bg-opacity-10 animate-pulse h-[400px]'></div>
                ))}
              </>
              :
              <>
                {destinations?.map((item, index) => (
                  <DestCard key={index} item={item} index={index} />
                ))}
              </>}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Destinations
