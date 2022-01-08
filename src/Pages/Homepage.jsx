import React from "react";
import Entertainment from "../components/Entertainment/Entertainment.component";
const Homepage = () =>{
    return <>
      <div className="container mx-auto lg:px-9 mt-9">
       <h1 className="  md:text-3xl text-xl font-bold text-gray-800 my-3 pl-2">The best of entertainment</h1>
        <Entertainment/>
      </div>
    </>
}

export default Homepage;