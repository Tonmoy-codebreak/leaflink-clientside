import React, { useEffect, useState } from 'react';
import { FaEye, FaFolder, FaStar } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';
import { NavLink } from 'react-router'; 
import { Typewriter } from 'react-simple-typewriter';

const TopTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://leaflink-app-server.vercel.app/toptips')
      .then(res => res.json())
      .then(data => {
        setTips(data);
        setLoading(false);
      })
      .catch(err => console.error('Failed to fetch tips:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 my-36 ">
      <h2 className="text-5xl font-bold text-center text-green-700 font-logo pb-10 mb-8">
        Top{' '}
        <span className="text-green-900">
          <Typewriter
            words={['Trending Tips', 'Useful Tips', 'Gardening Tips']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </span>
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-xl text-green-700"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-green-100"
            >
              <img
                src={tip.tips_image}
                alt={tip.plant_type}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-green-800 mb-2">{tip.title}</h2>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {tip.description}
                </p>

                {/* ✅ View Details Button */}
                <NavLink
                  to={`/auth/tipsDetails/${tip._id}`}
                  className="mt-2 inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
                >
                  View Details
                </NavLink>

                {/* <div className="mt-4 flex flex-wrap gap-2 text-xs font-read">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <RiPlantFill /> {tip.plant_type}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaStar /> {tip.difficulty_level}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaFolder /> {tip.category}
                  </span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopTips;
