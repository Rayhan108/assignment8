import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-200'>
     
          
            <h2 className='text-2xl font-bold text-center'>Question Answer</h2>
      
        <div className="p-10">
         <h3 className='text-2xl font-bold text-center  mb-10'>1.When should you use context API?</h3>
            <p className='fw-bold'><span className='text-2xl  font-bold'>Ans</span>: 1.We use context API to avoiding props method.When some data needs to be accessible by many components  at different nesting levels these time we use cotext API.Context API works like a tower.
</p>

         <h3 className='text-2xl font-bold text-center mb-10'>2.What is a custom hook?</h3>
            <p className=''><span className='text-2xl font-bold'>Ans</span>:A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Custom Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetchData .</p>

         <h3 className='text-2xl font-bold text-center mb-10 '>3.What is useRef?</h3>
            <p className='fw-bold'><span className='text-2xl font-bold '>Ans</span>: useRef hook is a built-in React hook that accepts one argument as the initial value and returns a reference.The useRef Hook allows  to persist values between renders.It can be used to access a DOM element directly.</p>

         <h3 className='text-2xl mb-10 font-bold text-center'>4.What is useMemo?</h3>
            <p className='fw-bold'><span className='text-2xl font-bold'>Ans</span>: useMemo() is a function that returns a memoized value of a passed in resource-intensive function.It  is a great tool to memoize functional components.It prevents useless re-renderings when previous props equal to current props. Take precautions when memoizing components that use props as callbacks.</p>
            
        </div>
    </div>
    );
};

export default Blog;