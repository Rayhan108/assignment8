import React from 'react';
import "./FeatureJob.css"
import {MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';

const FeatureJob = ({featureJob}) => {
    // console.log(featureJob);
    const {id,company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location
,salary,} =featureJob;

// const navigate =useNavigate()
// const handleNavigation=()=>{
//     navigate(`/${id}`)
// }


    return (
        <div>
            <div className='card'>
               <div className='p-10'>
               <img src={company_logo} alt="" />
                <h1 className='text-2xl font-bold mb-3 mt-3'>{job_title}</h1>
                <h3 className='font-bold'>{company_name}</h3>
                <div className='flex'>
                    <button className='p-2 mr-3 text-purple-700 border-purple-700 rounded-md bg-white hover:bg-purple-100'>{remote_or_onsite}</button>
                    <button className='p-2 mr-3 text-purple-700 border-purple-700 rounded-md bg-white hover:bg-purple-100'>{fulltime_or_parttime}</button>
                </div>
                <div className="flex">
                    <p className='mr-5'><MapPinIcon className="h-6 w-6 text-purple-800" /> {location}</p>
                    <p><CurrencyDollarIcon className="h-6 w-6 text-purple-800" />{salary}</p>
                </div>
                <div className="">
  <Link to=""> <button  className='bg-purple-700 mt-3 text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>View Details</button></Link> 
  {/* <Link to={`/${id}`}> <button  className='bg-purple-700 mt-3 text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>View Details</button></Link>  */}
    </div>
               </div>
            </div>
        </div>
    );
};

export default FeatureJob;