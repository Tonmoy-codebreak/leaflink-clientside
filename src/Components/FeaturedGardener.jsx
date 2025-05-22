import React from "react";
import { useLoaderData } from "react-router";

const FeaturedGardener = () => {
  const users = useLoaderData();

  return (
    <div className="w-11/12 sm:w-10/12 mx-auto mt-12 sm:mt-20">
      <h1 className="text-3xl sm:text-5xl text-center font-logo mb-8 sm:mb-12">
        Featured Gardeners
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 font-read sm:w-10/12 mx-auto">
        {users.map((user) => (
          <div
            key={user.userID}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-amber-50"
          >
            <div className="relative">
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-green-400"
              />
              <span className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                Active
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">
              {user.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-1">
              Age: {user.age} • {user.gender}
            </p>
            <p className="text-green-600 font-medium text-sm sm:text-base">
              {user.experience} Experience
            </p>

            <div className="w-full border-t border-gray-100 my-3"></div>

            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-semibold text-gray-800">
                {user.totalSharedTips}
              </span>{" "}
              Tips Shared
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardener;
