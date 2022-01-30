import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import React,{useState,useEffect,useContext} from 'react'
import Crew from "../components/Crew/Crew.component";
import MovieHero from '../components/MovieHero/Movie.Hero.Component';
import PosterSlider from "../components/Poster.Slider/PosterSlider";
import TempImages from "../components/settings/TempImages.config";
import {MovieContext} from "../context/movie.context";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";


function MoviePage() {
    const settings ={
        autoplay:false,
        infinite:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ],
    }
    
    const settingsCast ={
      autoplay:false,
      infinite:false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ],
  }
  // Cast API  
  const {movie}=useContext(MovieContext);
    const [cast,setCast]=useState([]);
    const {isbn}=useParams();
    useEffect(()=>{
        const getCast= async() =>{
          const crewDetails= await axios.get(`/movie/${isbn}/credits`);
          setCast(crewDetails.data.cast);
        }
        getCast();
    },[]);
   
   // similiar Movies API
   const [similiarMovie,setSimiliarMovie]=useState([]);
   
   useEffect(()=>{
    const getMovieData = async() => {
      const movieData=await axios.get(`/movie/${isbn}/similar`);
      setSimiliarMovie(movieData.data.results);
    }
    getMovieData();
   },[]);

   //recommended movies api

   const [recMovie,setRecMovie]=useState([]);
   
   useEffect(()=>{
    const getRecMovieData = async() => {
      const movieData=await axios.get(`/movie/${isbn}/recommendations`);
      setRecMovie(movieData.data.results);
    }
    getRecMovieData();
   },[]);

    return (
        <>
            <MovieHero/>
          
            {/* About */}
            <div className='container my-5 px-4 items-start lg:w-2/3 lg:ml-20'>
                <div className='flex flex-col gap-3'>
                    <h1  className='font-bold text-2xl'>About the movie</h1>
                    <p>{movie.overview}</p>
                </div>
               
                <div className='my-8'>
                    <hr/>
                </div>
          
               {/* Offers */}
                <div>
                    <h1 className='font-bold text-2xl'>Applicable Offers</h1>
                    <div className="lg:flex lg:gap-5">
                        <div className="flex gap-3 bg-yellow-200 border-yellow-600 border-dashed border-2 p-3 rounded-lg my-3">
                            <div className="w-8 h-8">
                            <FaCcVisa className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start ">
                                <h1 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h1>
                                <p className="text-gray-600">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 bg-yellow-200 border-yellow-600 border-dashed border-2 p-3 rounded-lg my-3">
                            <div className="w-8 h-8">
                            <FaCcApplePay className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col items-start ">
                                <h1 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h1>
                                <p className="text-gray-600">Get 70% off up to INR 350 on all PayPal cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='my-8'>
                    <hr/>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl">Cast</h1>
                    <Slider {...settingsCast}>
                        {
                          cast.map((i)=>
                        (i.profile_path)?
                        <Crew img={`https://image.tmdb.org/t/p/original${i.profile_path}`} name={i.name} role={i.character}/>
                        :null
                          )
                        }
                    </Slider>
                </div>

                <div>
                  <div className=" flex flex-col gap-3 mt-1">
                   <PosterSlider images={similiarMovie} title="You Also Might Like" isDark={false} configSettings={settings} />
                  </div>

                </div>

                <div className='my-8'>
                    <hr/>
                </div>

                <div>
                  <div className=" flex flex-col gap-3 mt-1">
                   <PosterSlider images={recMovie} title="Recommended Movies" isDark={false} configSettings={settings} />
                  </div>

                </div>

            </div>
        </>
    );
};

export default MoviePage;