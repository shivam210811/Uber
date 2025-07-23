import React from 'react';
import uberlogo from '../assets/uberlogo.png';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 flex justify-between flex-col w-full">
      <img src={uberlogo} alt="logo" className='w-16 ml-8'/>
      <div className='bg-white py-4 px-4'>
          <h2 className="text-3xl font-bold ">Get Started with Uber</h2>
          <Link to='/login' className="flex items-center justify-center  py-3 w-full bg-black text-white rounded mt-5">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
