import React from 'react';
import {Link} from "react-router-dom";
const FieldComponent = () => {
  return(
  <>
    <div className='hidden lg:block bg-slate-900'>
        <div className='container mx-auto flex justify-between py-2 px-6 font-light'>
            <div className='flex gap-4 items-center pl-5'>
               <h1 className='font-sm text-white'>Movie</h1>
               <Link to ={`/play`}>
               <h1 className='font-sm text-white'>Play</h1>
               </Link>
               <h1 className='font-sm text-white'>Sports</h1>
               <h1 className='font-sm text-white'>Events</h1>
            </div>
            <div className='flex gap-4 items-center'>
               <h1 className='font-sm text-white'>Corporates</h1>
               <h1 className='font-sm text-white'>Offers</h1>
               <h1 className='font-sm text-white'>Gift Cards</h1>
            </div>
        </div>
    </div>
  </>
  );
};

export default FieldComponent;
