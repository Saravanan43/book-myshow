import React from "react";

const Poster = (props) =>{

    return(
         <>
            <div classname="flex flex-col items-start gap-5 ">
                 <div className="h-40 lg:h-80 px-1 md:px-2">
                 <img src={props.src}
                 className="rounded-md w-full h-full"/>
                 </div>
                 
                {/*dynamic css*/}
                 <h1 className={`font-bold text-lg px-2
                 ${props.isDark ? "text-white" : "text-gray-700"}`}>
                 {props.title}
                 </h1>
                
                 
                 <p className={`font-bold text-sm px-2
                 ${props.isDark ? "text-white" : "text-gray-700"}`}>
                 {props.subtitle}
                 </p>
            
            </div>

         </>
    );
};
export default Poster;