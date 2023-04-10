import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
    return (
        <div className='text-center mt-80'>
        <h1 className='justify-center items-center text-5xl font-extrabold text-gray-600'>404</h1>
        <h3>Sorry,not found</h3>
        <p>
    <i>{error.statusText || error.message}</i>
  </p>
    </div>
    );
};

export default ErrorPage;