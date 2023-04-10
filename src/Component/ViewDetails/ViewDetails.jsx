import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {

const id =useParams()
// console.log(id);
const details =useLoaderData()
// console.log(details);

// const [data,setData] =useState(details)
const [singledata,setSingledata]=useState({})
useEffect(()=>{
    const singleJob = details.find(det=>det.id === id)

    if(singleJob){
        setSingledata(singleJob)
        console.log('igiiuiuhiuhuhuuuuhhhhhhh');
    }
},[id])
console.log(singledata);

  
    return (
        <div>
            <h1>Details:</h1>
        </div>
    );
};

export default ViewDetails;