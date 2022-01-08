import React from "react";
import {BiChevronRight,BiSearch} from "react-icons/bi";
import {FaChevronCircleDown} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
const NavSm= ()=>{
    return(
      <>
        <div className="text-white items-center flex justify-between">
          <div>
              <h6 className="text-2xl font-bold">It All Starts Here!</h6>
              <span className="text-gray-400 text-sm flex items-center">
              Chennai
              <BiChevronRight/>
              </span>
          </div>
          <div className="w-7 h-7">
          <BiSearch className="w-full h-full"/>
          </div>
        </div>
      </>
    );
};
const NavMd= ()=>{
    return(
        <>
        
            <div className="w-full flex gap-2 items-center bg-white px-3 py-2 rounded-md md:container md:mx-auto">
                <div>
                <BiSearch/>
                </div>
                
                <div className="w-full">
                 <input type="search"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search for Movies,Plays,Sports,Events and Activities"
                />
                </div>
            </div>
        
        </>
    );
};
const NavLg= ()=>{
    return(
         <>
             <div className="container lg-auto px-4 flex justify-between items-center">
             <div className="flex items-center w-1/2 gap-3 ml-9">
                  <div className="w-10 h-10">
                      <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                       className="w-full h-10"
                      />
                  </div>
                  <div className='w-full h-9 flex bg-white items-center gap-3 px-3 py-2 rounded-md'>
                      <BiSearch/>
                      <input
                          type="search"
                          className="focus:outline-none w-full"
                          placeholder="Search for Movies,Plays,Sports,Events and Activities"
                      />
                  </div>
             </div>
             <div className="flex items-center gap-4">
                 <div className="flex items-center text-gray-400 text-sm gap-1">
                     <h1>Chennai</h1>
                     <FaChevronCircleDown/>
                 </div>
                 <div className="bg-red-600 rounded-md">
                     <button className="text-center text-white text-sm px-3 py-1">Sign in</button>
                 </div>
                 <div className="w-8 h-8 text-white">
                    <GiHamburgerMenu className="w-full h-full"/>
                 </div>
             </div>
             </div>
         </>
    );
};


const Navbar = () =>{
      return(
          <>
              <nav className="bg-navclr-700 p-4">
                 <div className="md:hidden">
                  {
                      <NavSm/>
                  }
                  
                </div>
                  <div className="hidden md:flex lg:hidden"> 
                      {<NavMd/>}
                      
                  </div>
                  <div className="hidden lg:flex">
                      <NavLg/>
                      
                  </div>
              </nav>
          </>
      );
};

export default Navbar;