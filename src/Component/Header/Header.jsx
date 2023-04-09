import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-300 mb-10 flex justify-between p-5'>

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
    <Link to=""><button className='bg-purple-700 text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>Start Applying</button></Link>
    </div>

   
         
       </nav>
    );
};

export default Header;