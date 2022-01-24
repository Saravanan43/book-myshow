import react from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.component";
import settings from "../settings/settings.config";
const PosterSlide = (props)=>{
    const Images=props.images;
    const PosterSettings= props.configSettings?props.configSettings:settings;
    return(
        <>
          <div className="flex flex-col gap-1">
                  <h1 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h1>
                  <p className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
          </div>
           <Slider {...PosterSettings}> 
               {
                 props.images.map((i)=>
                 (
                    <Poster {...i} isDark={props.isDark} /> 
                 ))
               }
           </Slider>
        </>
        );
};
export default PosterSlide;
