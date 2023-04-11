import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from './ReviewJob/ReviewJob';

const AppliedJobs = () => {
    const dataFromDb =useLoaderData()
    // console.log(dataFromDb);
 
    return (
        <div>
           <h1 className='text-3xl font-bold text-center p-10 bg-gray-100'>Applied Jobs</h1>
            {
                dataFromDb.map(interestedJob =><ReviewJob interestedJob={interestedJob} key={interestedJob.id}></ReviewJob>)
            }
        </div>
    );
};

export default AppliedJobs;