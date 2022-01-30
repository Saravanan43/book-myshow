import React from "react";
import {Link} from "react-router-dom";

const Poster = (props) =>{

    return(
         <Link to ={`/movie/${props.id}`}>   {/*Link acts as anchor tah */}
            <div classname="flex flex-col items-start gap-5 flex-wrap">
                 <div className="h-40 lg:h-80 px-1 md:px-2">
                 <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                 className="rounded-md w-full h-full"/>
                 </div>
                 
                {/*dynamic css*/}
                 <h1 className={`font-bold text-lg px-2 py-2
                 ${props.isDark ? "text-white" : "text-gray-700"}`}>
                 {props.title}
                 </h1>
                
                 
                 <p className={`font-bold text-sm px-2
                 ${props.isDark ? "text-white" : "text-gray-700"}`}>
                 {props.subtitle}
                 </p>
            
            </div>

         </Link>
    );
};
export default Poster;