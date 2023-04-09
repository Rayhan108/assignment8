import React from 'react';

const FirstPage = () => {
    return (
        <div>
 <div className='flex bg-gray-100 mb-10'>
         <div className='my-auto mx-auto w-96 p-11 mt-10 '>
         <h1 className='text-6xl font-bold '>One Step Closer To Your <span className='text-purple-800'> Dream Job</span></h1>
            <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='bg-purple-700 text-white mt-5 text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>Get Started</button>
         </div>
         <div>
            <img src="person.png" alt="" />
         </div>
        </div>
        {/* Catagory section */}
        <div>
           <div className='mx-auto text-center py-3'>
           <h1 className='text-3xl font-bold '>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           
        </div>
        </div>
       
    );
};

export default FirstPage;