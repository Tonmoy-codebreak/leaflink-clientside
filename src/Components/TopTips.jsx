import React from "react";
import { useLoaderData } from "react-router";

const TopTips = () => {
  const users = useLoaderData();

  return (
    <div className="w-10/12 mx-auto mt-36">
      <div className="flex items-center gap-4 mb-12">
        <hr className="flex-grow border-t border-gray-300" />
        <h1 className="text-5xl font-logo text-center text-gray-800 whitespace-nowrap">
          Top Tips
        </h1>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.userID}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:border-green-300"
          >
            {/* Tip Content */}
            <p className="text-2xl text-gray-800 leading-relaxed mb-6 font-semibold">
             "{user.tips[0]}"
            </p>

            {/* Footer Row */}
            <div className="relative flex items-center justify-between mt-auto p-4 border-t border-gray-200 rounded-2xl overflow-hidden group-hover:border-green-500 transition-all duration-500">
              {/* Liquid effect background */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 group-hover:w-full z-0"></div>

              {/* Profile Image + Name */}
              <div className="flex items-center gap-3 z-10 transition-all duration-300 group-hover:text-white">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                />
                <p className="text-lg font-read font-semibold">{user.name}</p>
              </div>

              {/* Age and Experience */}
              <p className="text-sm font-logo text-right z-10 transition-all duration-300 group-hover:text-white">
                Age {user.age}, {user.experience} experience
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTips;
