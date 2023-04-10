import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    // const [open,setOpen] =useState(false)
    return (
        <nav className='bg-gray-300  flex justify-between p-5'>
              {/* <div onClick={()=>setOpen(!open)} className='md:hidden'>
        <span>{open? <XMarkIcon className="h-6 w-6 text-purple-800" />  : <Bars3Icon className="h-6 w-6 text-purple-800" />  }</span>
      </div > */}
      {/* <div className={` md:static md:flex md:justify-between md:flex absolute  duration-500 ${open?'top-6':'-top-48'}`} >
      </div> */}

   
<div className='font-bold text-3xl'>
           <h1>IT-Jobs-Portal</h1>
           </div>
     
    <div className=''>
                 
     <Link className='mr-12 text-2xl   py-2  font-bold hover:bg-purple-400' to="/">Home</Link>
        <Link className='mr-12 text-2xl   py-2  font-bold hover:bg-purple-400' to="/statistics">Statistics</Link>
        <Link className='mr-12 text-2xl   py-2  font-bold hover:bg-purple-400' to="/applied-jobs">Applied Jobs</Link>
        <Link className='mr-12 text-2xl   py-2  font-bold hover:bg-purple-400' to="/blog">Blog</Link>
    </div>
    <div className="">
    <Link ><button className='bg-purple-700 text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>Start Applying</button></Link>
    </div>
         
       </nav>
    );
};

export default Header;