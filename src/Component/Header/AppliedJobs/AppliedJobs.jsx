import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewJob from './ReviewJob/ReviewJob';

const AppliedJobs = () => {
    const dataFromDb =useLoaderData()
    // console.log(dataFromDb);
 
    return (
        <div>
           
            {
                dataFromDb.map(interestedJob =><ReviewJob interestedJob={interestedJob} key={interestedJob.id}></ReviewJob>)
            }
        </div>
    );
};

export default AppliedJobs;