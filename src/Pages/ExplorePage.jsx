import React, { useEffect } from "react";
import { useLoaderData } from "react-router"; 

const ExplorePage = () => {
  useEffect(() => {
    document.title = "Explore Gardeners";
  }, []);

  const users = useLoaderData();

  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-20">
      <h1 className="text-4xl md:text-6xl font-logo text-center text-green-700 mb-16">
        Explore Gardeners
        
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {users?.map((user, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-center rounded-4xl"
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <img
                src={user.image || "/default-avatar.png"}
                alt={user.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow"
              />
            </div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <div className="w-12 h-1 mx-auto mt-2 mb-4 bg-green-400 rounded-full" />

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 text-sm mb-5">
              <div className="bg-green-100 p-2 rounded-lg">
                <p className="text-green-800 font-medium">Age</p>
                <p>{user.age}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <p className="text-blue-800 font-medium">Gender</p>
                <p>{user.gender}</p>
              </div>
              <div className="bg-emerald-100 p-2 rounded-lg">
                <p className="text-emerald-800 font-medium">Status</p>
                <p>{user.status}</p>
              </div>
              <div className="bg-yellow-100 p-2 rounded-lg">
                <p className="text-yellow-800 font-medium">Experience</p>
                <p>{user.experience}</p>
              </div>
            </div>

            {/* Shared Tips Button */}
            <div>
              <button className="inline-flex items-center px-4 py-2 bg-green-400 text-white rounded-full font-medium">
                Shared Tips: {user.totalSharedTips}
               
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
