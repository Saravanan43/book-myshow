import React,{useContext} from 'react'
import MovieInfor from './Movie.info'
import {MovieContext} from '../../context/movie.context';
function MovieHero() {

    const {movie}=useContext(MovieContext);
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
                     src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
                     src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        className='w-full h-full rounded-xl'
                        />
                        </div>
                        <MovieInfor/>
                      </div>
                   {/*background img */}
                     <img 
                     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                     alt=''
                     className='w-full h-full'
                     />

               </div>
            </div>
        </>
    );
};

export default MovieHero;
