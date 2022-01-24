import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import React from 'react'
import Crew from "../components/Crew/Crew.component";
import MovieHero from '../components/MovieHero/Movie.Hero.Component';
import PosterSlider from "../components/Poster.Slider/PosterSlider";
import TempImages from "../components/settings/TempImages.config";

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
    return (
        <>
            <MovieHero/>
          
            {/* About */}
            <div className='container my-5 px-4 items-start lg:w-2/3 lg:ml-20'>
                <div className='flex flex-col gap-3'>
                    <h1  className='font-bold text-2xl'>About the movie</h1>
                    <p>Based on the smuggling of red sander trees in Seshachalam forest, Andhra Pradesh, Pushpa tells the story of a lorry driver who is part of the illegal business.</p>
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

                <div className="">
                    <h1 className="font-bold text-2xl">Cast</h1>
                    <div className="flex flex-wrap items-start gap-4 mt-4">
                        <Crew img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg" name="aaa" role="bbb"/>
                        <Crew img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg" name="aaa" role="bbb"/>
                        <Crew img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg" name="aaa" role="bbb"/>
                        <Crew img="https://in.bmscdn.com/iedb/artist/images/website/poster/large/allu-arjun-125-03-10-2016-01-55-06.jpg" name="aaa" role="bbb"/>
                    </div>
                </div>

                <div>
                  <div className=" flex flex-col gap-3 mt-1">
                   <PosterSlider images={TempImages} title="Outdoor Events" isDark={false} configSettings={settings} />
                  </div>

                </div>

                <div className='my-8'>
                    <hr/>
                </div>

                <div>
                  <div className=" flex flex-col gap-3 mt-1">
                   <PosterSlider images={TempImages} title="BMS Exclusive" isDark={false} configSettings={settings} />
                  </div>

                </div>

            </div>
        </>
    );
};

export default MoviePage;