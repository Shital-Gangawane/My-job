import React from 'react'
import { TiTick } from "react-icons/ti";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const cardData = [
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"",
    list2:"",
    list3:"",
    list4:"",  
    icon: "",
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"2 team members",
    list2:"2 team members",
    list3:"2 team members",
    list4:"2 team members",    
    icon: <TiTick className='text-gray-400'/>,
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"2 team members",
    list2:"2 team members",
    list3:"2 team members",
    list4:"2 team members",    
    icon: <TiTick className='text-gray-400'/>,
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"2 team members",
    list2:"2 team members",
    list3:"2 team members",
    list4:"2 team members",    
    icon: <TiTick className='text-gray-400'/>,
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"2 team members",
    list2:"2 team members",
    list3:"2 team members",
    list4:"2 team members",    
    icon: <TiTick className='text-gray-400'/>,
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"2 team members",
    list2:"2 team members",
    list3:"2 team members",
    list4:"2 team members",    
    icon: <TiTick className='text-gray-400'/>,
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
  {
    name: "Standard",
    price:"$ 49",
    url: "#",
    list1:"2 team members",
    list2:"2 team members",
    list3:"2 team members",
    list4:"2 team members",    
    icon: <TiTick className='text-gray-400'/>,
    button:"Choose plan",
    color: "text-gray-400",
    bgColor: "bg-white",
  },
];

function Submitjobs() {
  return (
   
    <div className=' w-full h-auto  overflow-y-auto lg:mt-14 px-4 lg:px-14 py-7  pb-14 '>
    <h2 className=" text-lg text-[#202124] lg:text-3xl mb-10 font-medium">
        Packages
      </h2>

      <div className="w-full h-full flex flex-wrap justify-start p-5 px-9 gap-4">
      {cardData?.map((stat, i) => (
        <div
        key={i}
        className="w-ull  p-10 mx-8 bg-white border border-gray-200 rounded-lg shadow  dark:white hover:border-[#6ad61d]  flex-1 last:flex-grow-0 last:float-start"
        >
          <div className='px-4'>
           <h5 className= "mb-4 text-xl font-medium text-[#6ad61d] dark:text-[#6ad61d]">  {stat.name}</h5>
           <div className=" items-baseline text-gray-900 dark:text-white">
         <span className="text-3xl font-semibold text-gray-900">{stat.price}</span>

         <ul role="list" className="space-y-5 my-7">
    <li className="flex items-center">
    {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
         {stat.icon}
      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
         {stat.list1}
      </span>
    </li>
    <li className="flex items-center">
    {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
         {stat.icon}
      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
         {stat.list2}
      </span>
    </li>
    <li className="flex items-center">
    {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
         {stat.icon}
      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
         {stat.list3}
      </span>
    </li>
    <li className="flex items-center">
    {/* className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" */}
         {stat.icon}
      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
         {stat.list4}
      </span>
    </li>

    </ul>
    <button
    type="button"
    className="text-[#6ad61d] hover:text-white bg-gray-100 hover:bg-[#6ad61d] focus:ring-4 focus:outline-none focus:ring-[#6ad61d] dark:bg-gray-100 dark:hover:bg-[#6ad61d] dark:focus:ring-[#6ad61d] font-medium rounded-lg text-sm px-3 py-4 inline-flex justify-center w-full text-center"
  >{stat.button}
    
  </button>
  </div>
</div>
        </div>
      ))}
  </div>
   

    </div>

   
  )
}

export default Submitjobs