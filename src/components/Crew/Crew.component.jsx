import React from 'react';

function Crew(props) {
  return (
    <>
      <div className='flex flex-col items-center'>
         <div className='w-36 h-36'>
          <img src={props.img} className='w-full h-full rounded-full'/>
         </div>
         <h1 className='text-xl text-gray-800'>{props.name}</h1>
         <p className='text-sm text-gray-500'>{props.role}</p>
      </div>
    </>
  );
}

export default Crew;
