import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./ViewDetails.css"

const ViewDetails = () => {

const id =useParams()
// console.log(id.detailsId);
const jobId =id.detailsId;
console.log(jobId);
const details =useLoaderData()
// console.log(details);
const job =details.find(detail=>detail.id == jobId )
// console.log(job);

const {company_name,company_logo,contact_information,educational_requirements,experiences
,fulltime_or_parttime,job_description,job_responsibility,job_title
,location,remote_or_onsite,salary} =job;


  
    return (
        <div className='flex justify-between items-center m-20'>
           <div>
<h1 ><span className='text-1xl font-bold'>Job Description:</span> {job_description}</h1>
<h1 className='mt-10'><span className='text-1xl font-bold'>Job Responsibilities:</span> {job_responsibility}</h1>
<h1 className='mt-10'><span className='text-1xl font-bold'>Educational Requirement:</span> {educational_requirements}</h1>
<h1 className='mt-10'><span className='text-1xl font-bold'>Experienced:</span> {experiences}</h1>
           </div>
           <div className='job-cart'>
<h1 className='text-3xl font-bold px-5 mt-5'>Job Details</h1>
<hr className='mt-5 hr mx-auto' />
<div className=' p-5'>
    <p><span className='text-1xl font-bold'>Salary:</span> {salary}</p>
    <p><span className='text-1xl font-bold'>Job Title:</span> {job_title}</p>
</div>
<h1 className='text-3xl font-bold px-5 mt-5'>Contact Information</h1>
<hr className='mt-5 hr mx-auto' />
<div className='p-5'>
<p><span className='text-1xl font-bold'>Phone:</span> {contact_information.phone}</p>
<p><span className='text-1xl font-bold'>Email:</span> {contact_information.email}</p>
<p><span className='text-1xl font-bold'>Address:</span> {location}</p>
</div>
<div className='mx-auto'>
<button className='bg-purple-700 text-white mt-5 text-1xl font-bold p-3 rounded-md hover:bg-purple-400 apply-btn ml-3 '>Apply Now</button>
</div>
           </div>
        </div>
    );
};

export default ViewDetails;