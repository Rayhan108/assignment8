import React from 'react';
import "./Catagory.css"

const Catagory = ({catagory}) => {
    // console.log(catagory)
    const {available_jobs,title,logo} =catagory
    return (
        <div>
            <div className="catagory-box m-10">
               <div className="py-10 px-10">
               <img src={logo} alt="" />
                <h1 className='text-2xl fond-bold mt-3'>{title}</h1>
                <p>{available_jobs} Jobs Available</p>
               </div>
            </div>
        </div>
    );
};

export default Catagory;