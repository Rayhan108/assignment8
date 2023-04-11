import React from 'react';
import "./ReviewJob.css"
import {MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const ReviewJob = ({interestedJob}) => {
    // console.log(interestedJob);
    const { company_name,
        company_logo,
        contact_information,
        educational_requirements,
        experiences,
        fulltime_or_parttime,
        job_description,
        job_responsibility,
        job_title,
        location,
        remote_or_onsite,
        salary,
    id} =interestedJob;
    return (
        <div className="cart mx-auto mt-10 ">
        <img className='p-3  company-logo' src={company_logo} alt="" />
        <div className="review-details m-3">
          <p className=" mt-3 text-2xl font-bold">{job_title}</p>
          <p className=" ">{company_name}</p>
     
          <div className='flex'>
                    <button className='p-2 mr-3 mt-3 text-purple-700 border-purple-700 rounded-md bg-white border hover:bg-purple-100'>{remote_or_onsite}</button>
                    <button className='p-2 mr-3 mt-3 text-purple-700 border-purple-700 rounded-md bg-white border hover:bg-purple-100'>{fulltime_or_parttime}</button>
                </div>
          <div className="flex mt-3 mb-3">
              <div className="flex">
              <MapPinIcon className="h-5 w-5 text-purple-800" /><p className=' ml-2'>{location}</p>
              </div>
           <div className="flex">
           <CurrencyDollarIcon className="h-5 w-5 text-purple-800" /><p className='ml-5 '>{salary}</p>
           </div>
                </div>
        </div>
  
        <Link to={`/${id}`}> <button  className='bg-purple-700  text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>View Details</button></Link> 
      </div>
    );
};

export default ReviewJob;