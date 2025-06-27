import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";

const ExplorePage = () => {
  const users = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users || []);

  useEffect(() => {
    document.title = "Explore Gardeners";
  }, []);

  useEffect(() => {
    const filtered = users?.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-20 font-read">
      {/* Header */}
      <h1 className="text-center text-4xl md:text-5xl font-logo text-green-700 mb-10">
         Explore Gardeners
      </h1>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-14">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search gardeners by name..."
          className="w-full pl-12 pr-4 py-3 rounded-full shadow border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FaSearch className="absolute left-4 top-3.5 text-green-700" />
      </div>

      {/* Gardener Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 text-center"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-3">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name}
                  className="w-20 h-20 object-cover rounded-full border-2 border-green-400"
                />
              </div>

              {/* Name */}
              <h2 className="text-lg font-semibold text-green-800">{user.name}</h2>

              {/* Info Badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Age: {user.age}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {user.gender}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  {user.experience} yrs exp
                </span>
              </div>

              {/* Tips Count */}
              <div className="mt-4">
                <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                  Tips: {user.totalSharedTips}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No gardeners found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
