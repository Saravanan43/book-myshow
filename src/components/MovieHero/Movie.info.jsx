import React from 'react';

const MovieInfo = () => {
  return( 
  <>
   <div className='flex flex-col gap-3  lg:gap-8 '>
    <div className='flex items-center gap-4 md:px-4'>
         <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
        <span className='bg-bms-800 pl-1 pr-1 text-xs text-white rounded-md'>Streaming Now</span>
    </div>

    <div>
        <h1 className='text-white font-bold text-5xl hidden lg:block md:px-4'>Pushpa</h1>
    </div>
    
    <div className='flex flex-col-reverse lg:flex-col gap-4'>
    <div className='text-sm text-white font-light flex flex-col gap-2 md:px-4'>
    <h1 >4K &bull; English &bull; Action </h1>
    <h1>1h 53m &bull; Action,Sci-fi &bull; 13+</h1>
    </div>

    <div className='flex gap-4 text-white text-md font-bold md:w-screen lg:w-full md:px-4'>{/*button aloe takes the width */}
      <button className="bg-red-600 rounded-md w-full py-2 ">Buy</button>
      <button className="bg-red-600 rounded-md w-full py-2 ">Rent</button>
    </div>
    </div>
    </div>
  </>
  );
};

export default MovieInfo;
