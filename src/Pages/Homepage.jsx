import React,{useState,useEffect} from "react";
import Entertainment from "../components/Entertainment/Entertainment.component";
import PosterSlider from "../components/Poster.Slider/PosterSlider";
import TempImages from "../components/settings/TempImages.config";
import axios from "axios";

const Homepage = () =>{
    
    const [premierImages,setPremierImages]=useState([]);

    useEffect(
      ()=>{
        const getImageFn = async () =>{
            const getImages=await axios.get("/movie/popular");
            console.log(getImages);
            setPremierImages(getImages.data.results);
        };
        getImageFn();
      }
      ,[]
    );

    const [outImages,setOutImages]=useState([]);
    useEffect(
      ()=>{
        const getImageFn= async() =>
        {
          const getImages=await axios.get("/movie/top_rated");
          setOutImages(getImages.data.results);
        };
        getImageFn();
      },
      []
    );

    const [onlineImages,setOnlineImages]=useState([]);
    useEffect(
      ()=>{
        const getImageFn= async() =>
        {
          const getImages=await axios.get("/movie/upcoming");
          setOnlineImages(getImages.data.results);
        };
        getImageFn();
      },
      []
    );


    return <>
      <div className="flex flex-col gap-10">
      <div className="container mx-auto lg:px-9 mt-9">
       <h1 className="  md:text-3xl text-xl font-bold text-gray-800 my-3 pl-2">The best of entertainment</h1>
        <Entertainment/>
      </div>
      <div className="bg-bms-800 md:pb-7 sm:pb-5 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
                <div className="w-full h-full">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                         className="w-full h-full"
                    />
                </div>
            </div>
            <PosterSlider images={premierImages} title="Premier" subtitle="Friday Releases" isDark/>
          </div>
      </div>
     
      <div className="container mx-auto px-4 flex flex-col gap-3 mt-7 ">
        <PosterSlider images={onlineImages} title="Online Streaming Events" isDark={false} />
       </div>
     
      <div className="container mx-auto px-4 flex flex-col gap-3 mt-1 ">
        <PosterSlider images={outImages} title="Outdoor Events" isDark={false} />
       </div>

      </div>
    </>
}

export default Homepage;