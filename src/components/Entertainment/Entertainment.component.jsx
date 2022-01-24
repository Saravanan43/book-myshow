import React from "react";
import Slider from "react-slick";

const EntertainmentCard =(props) =>{
    return(
      <>
          <div className="px-2  h-30">
              <img
                 className="rounded-xl w-full h-full"
                 src={props.src}
              />
          </div>
      </>
    );
};

const Entertainment = () =>{
    
   const EntertainmentImage=[
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjQwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
   ]

    const settings ={
        autoplay:false,
        infinite:false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive:[
            {
               breakpoint:1024,
               settings:{
                slidesToShow: 5,
                slidesToScroll: 5,
               }
            },
            {
                breakpoint:600,
                settings:{
                 slidesToShow: 5,
                 slidesToScroll: 5,
                }
            },
            {
                breakpoint:480,
                settings:{
                slidesToShow: 5,
                slidesToScroll: 5,
               }
            },
        ],
    }
    return(
        <>
        <Slider {...settings}>
          {
              EntertainmentImage.map(
                  (i)=>(
                      <EntertainmentCard src={i}/>
                         //passing the whole array
                  )
              )
          }
        </Slider>
        </>
    );
};
export default Entertainment;