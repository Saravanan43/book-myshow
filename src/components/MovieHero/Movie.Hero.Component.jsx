import React from 'react'
import MovieInfor from './Movie.info'

function MovieHero() {
    return (
        <>
            <div>
               {/*sm device*/}
               <div className='relative md:hidden' style={{height:"calc(170vw)"}}>{/*dynamic height. */}
                     <div className="absolute w-full h-56 bottom-0 z-10 bg-black bg-opacity-40" />
                     
                     <div className='absolute bottom-5 left-4 z-30 '> {/*Making the info at the bottom absolute and relative are imp */}
                         <MovieInfor/>
                     </div>
                     
                     <img 
                     src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg'
                     alt=''
                     className='w-full h-full'
                     />

                </div>
               
               {/*  md device*/ }
               <div className='relative hidden md:block  lg:hidden' style={{height:"calc(100vw)"}}>
                    <div className="absolute w-full h-56 bottom-0 z-10 bg-black bg-opacity-40" />
                    
                    <div className='absolute z-20  bottom-7'>
                        <MovieInfor/>
                    </div>
                    
                    <img 
                     src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg'
                     alt=''
                     className='w-full h-full'
                     />
               </div>
               
                <div className='relative hidden w-full lg:block' style={{height:"32rem"}}>
                
                {/*background clr*/}
                 <div className="absolute h-full w-full z-10" 
                  style={{backgroundImage:
                 "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>

                 {/*Poster*/}    
                       <div className='absolute  z-30 top-24 left-24 flex items-center gap-10'>
                        <div className='w-64 h-96'>
                        <img 
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg"
                        className='w-full h-full rounded-xl'
                        />
                        </div>
                        <MovieInfor/>
                      </div>
                   {/*background img */}
                     <img 
                     src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg'
                     alt=''
                     className='w-full h-full'
                     />

               </div>
            </div>
        </>
    );
};

export default MovieHero;
