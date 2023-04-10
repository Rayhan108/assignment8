import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import FeatureJob from '../FeatureJob/FeatureJob';

const FirstPage = () => {
    const [catagories,setCatagories] =useState([])
const [featurejob,setFeaturejob] =useState(false)
const featureJobs = useLoaderData().slice(0,4);
// if(!featurejob){
//     const featureJobs = useLoaderData();
// }else{
//     const featureJobs = useLoaderData().slice(0,4);
// }
  
    // console.log(featureJobs)

    useEffect(()=>{
        fetch('catagorydata.json').then(res=>res.json()).then(data=>setCatagories(data))
    },[])


    return (
        <div>
 <div className='flex bg-gray-100 mb-10'>
         <div className='my-auto mx-auto w-96 p-11 mt-10 '>
         <h1 className='text-6xl font-bold '>One Step Closer To Your <span className='text-purple-800'> Dream Job</span></h1>
            <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='bg-purple-700  text-white mt-5 text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>Get Started</button>
         </div>
         <div>
            <img src="person.png" alt="" />
         </div>
        </div>
        {/*---------- Catagory section -----------------*/}
        <div>
           <div className='mx-auto text-center py-3'>
           <h1 className='text-3xl font-bold '>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
<div className='flex  justify-between  '>
    
{
    catagories.map((catagory,idx) =><Catagory key={idx} catagory={catagory}></Catagory>)
}

</div>
        </div>
{/*-------------------------- feature Job section ------------------------------------*/}

 <div>
<div className='mx-auto text-center py-3 mb-10'>
           <h1 className='text-3xl font-bold '>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
<div className="grid grid-cols-2 gap-10 justify-center">
{
 
featureJobs.map(featureJob=><FeatureJob featureJob={featureJob} key={featureJob.id}></FeatureJob>)

}
</div>

</div> 



   
<div onClick={()=>setFeaturejob(!featurejob)} className=" m-10 justify-center">
<span>{!featurejob?  <button className='bg-purple-700 mt-3 justify-center text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>See All Jobs</button> : ''  }</span>

    {/* <Link to=""><button className='bg-purple-700 mt-3 justify-center text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>See All Jobs</button></Link> */}

</div>
        </div>
        
       
    );




};

export default FirstPage;