import React from 'react';
import Poster from "../components/Poster/Poster.component";
import PlayFilter from "../components/PlaysFilter/Play.filter";
import react,{useState,useEffect} from 'react';
import axios from 'axios';

const Playspage = () => {
  
  const [posterImage,setPosterImage]=useState([]);
  
  useEffect(()=>{
    
    const getImages = async()=>{
      const images=await axios.get("/movie/popular");
      setPosterImage(images.data.results);
    };
    getImages();
  },[]);
  
  return(
   
   <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse lg:gap-2">
          <div className="lg:w-3/4">
           {/*Right posters */}
            <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2>
            <div className="flex flex-wrap ">
              
               {
                 posterImage.map((poster)=>(
                  <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                 {...poster}
                />
                 </div>
                 )
                 )
               }
             
              
            </div>
          </div>
          {/* Left filters */}
          <div className="lg:w-3/12">
            <h2 className="font-bold text-2xl mb-4">Filters</h2>
            <PlayFilter title="Date" tags={["Today","Tomorrow","This weekend"]}/>
          </div>
       </div>
      </div>   
   </>
    
  );
};

export default Playspage;
