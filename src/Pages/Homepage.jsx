import React from "react";
import Entertainment from "../components/Entertainment/Entertainment.component";
import PosterSlider from "../components/Poster.Slider/PosterSlider";
import TempImages from "../components/settings/TempImages.config";

const Homepage = () =>{
    return <>
      <div className="flex flex-col gap-10">
      <div className="container mx-auto lg:px-9 mt-9">
       <h1 className="  md:text-3xl text-xl font-bold text-gray-800 my-3 pl-2">The best of entertainment</h1>
        <Entertainment/>
      </div>
      <div className="bg-bms-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
                <div className="w-full h-full">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                         className="w-full h-full"
                    />
                </div>
            </div>
            <PosterSlider images={TempImages} title="Premier" subtitle="Friday Releases" isDark/>
          </div>
      </div>
     
      <div className="container mx-auto px-4 flex flex-col gap-3 mt-7">
        <PosterSlider images={TempImages} title="Online Streaming Events" isDark={false} />
       </div>
     
      <div className="container mx-auto px-4 flex flex-col gap-3 mt-1">
        <PosterSlider images={TempImages} title="Outdoor Events" isDark={false} />
       </div>

      </div>
    </>
}

export default Homepage;