import { Disclosure } from '@headlessui/react'
import {FiChevronDown} from 'react-icons/fi';

function MyDisclosure(props) {
  return (
    <Disclosure>
     {
       ({open})=>(
         <>
         <div className="shadow-lg p-2">
          <Disclosure.Button className="py-2 flex items-center flex-row-reverse gap-2">
          <span className={ `text-lg font-semibold ${open ? "text-red-600" : "text-gray-700"}`}>
          {props.title}
          </span>
          <FiChevronDown className={`${open ? "transform rotate-180" : ""}`}/>
          </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 w-full">
       <div className="w-full flex flex-wrap gap-2 items-center p-2">
         {
           props.tags.map(
             (i)=>(
               <>
               <div className="border-2 border-gray-200 p-2">
                <span className="text-gray-600">{i}</span>
               </div>
               </>
             )
           )
         }
       </div>
      </Disclosure.Panel>
      </div>
      </>
       )
     }
     
    </Disclosure>
  );
};
export default MyDisclosure;