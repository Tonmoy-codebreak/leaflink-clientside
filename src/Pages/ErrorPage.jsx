import React from 'react';
import { Link } from 'react-router';
import { ImLeaf } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';

import { GiFlowerPot } from 'react-icons/gi';

const ErrorPage = () => {
  return (
    <div className="bg-green-600 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white/10  backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-xl w-full shadow-xl text-white text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <ImLeaf size={50} className="text-lime-300 drop-shadow" />
        </div>

        {/* Headline */}
        <h1 className="text-7xl font-logo bg-gradient-to-br from-lime-200 to-green-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Subtext */}
        <p className="text-xl font-read mb-2">
          Oh no, you lost yourself between the roots...
        </p>
        <p className="text-lg font-read text-lime-100/80 italic mb-6">
          
          <span className='flex justify-center items-center gap-2'>
            
            Let the petals guide you back to the garden
            <GiFlowerPot  />
          </span>
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-lime-400 to-green-500 hover:from-green-500 hover:to-lime-400 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105"
        >
          <span className='flex justify-center items-center gap-2'>
            <FaHome />
            <p>Back to LeafLink</p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
