import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);
    return (
        <div className='text-center mt-80'>
        <h1 className='justify-center items-center text-5xl font-extrabold text-gray-600'>404</h1>
        <h3>Sorry,not found</h3>
        <p>
    <i>{error.statusText || error.message}</i>
  </p>
  <Link to="/"> <button className='bg-purple-700 mt-5 justify-center text-white text-1xl font-bold p-3 rounded-md hover:bg-purple-400'>Back to Home</button></Link>
      </div>
    );
};

export default ErrorPage;