import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import { PrevArrow,NextArrow } from "./arrows";
import axios from "axios";
import { logDOM } from "@testing-library/react";


const HeroSlider = () =>{
   const setting ={
       arrows:true,
       infinite:true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       prevArrow:<PrevArrow />,
       nextArrow: <NextArrow />,
   };
   const settingsLg = {
        arrows: true,
       // autoplay:true,
        centerMode: true,
        centerPadding: '200px',/*Makes one pic at center*/ 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow:<PrevArrow/>,
        nextArrow: <NextArrow/>,
        
      };
     // const images=["https://images.unsplash.com/photo-1629221220303-4eca4505b38f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80","https://images.unsplash.com/photo-1631796541242-16c2137c085d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80","https://images.unsplash.com/photo-1591693133219-fc741f184b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80","https://images.unsplash.com/photo-1641118678131-4ec197b260f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80","https://images.unsplash.com/photo-1641392924934-17fd6c260a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80"];
    
    const [images,setImages]=useState([]);

    useEffect(()=>{
        
        const getImageFn =async () =>
         {
             const getImages=await axios.get("/movie/now_playing");
             //console.log(getImages);
             setImages(getImages.data.results);
             
         };
         getImageFn();    
    },[]);
    
      return(
        <>
        <div className="hidden lg:block">
         <Slider {...settingsLg}>
             {images.map((i) =>{
              if(i.backdrop_path)
              {
              return(
                 <div className="w-full h-80 py-3 px-2">
                     <img src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`} className="w-full h-full rounded-md"/>
                 </div>
              );
              }   
             })}
         </Slider>
         </div>
         <div className="lg:hidden">
         <Slider {...setting}>
             {images.map((i) =>{
              if(i.backdrop_path)
              {
              return(
                  
                 <div className="w-full h-56 md:h-80 py-3">
                     <img src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`} className="w-full h-full"/>
                 </div>
                  
              );   
              }
              
             })}
         </Slider>
         </div>
        </>
    );
};
export default HeroSlider;