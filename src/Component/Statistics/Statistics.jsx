import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Tooltip,
    PieChart,
    Pie,
    ResponsiveContainer,
  } from "recharts";

const Statistics = () => {
    const marks =useLoaderData()
    console.log(marks);
    return (
        <div className='bg-gray-300'>
            <h1 className='text-3xl font-bold text-center  text-gray-700'>Assignmen Marks</h1>
            <p className='text-center font-bold text-2xl mt-10'>Pie Chart</p>
            <ResponsiveContainer width="100%" height={500} >
        <PieChart width={1000} height={500}>
          <Pie
            dataKey="mark"
            startAngle={180}
            endAngle={0}
            data={marks}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
        </ResponsiveContainer>

        </div>
    );
};

export default Statistics;