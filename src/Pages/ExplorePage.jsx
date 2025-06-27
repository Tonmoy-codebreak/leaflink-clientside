import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    document.title = "Explore Gardeners";

    async function fetchUsers() {
      try {
        // Fetch users from active_users
        const activeRes = await fetch(
          "https://leaflink-app-server.vercel.app/allusers"
        );
        const activeUsers = await activeRes.json();

        // Fetch users from tip-users (tips_collection aggregation)
        const tipsRes = await fetch(
          "https://leaflink-app-server.vercel.app/tip-users"
        );
        const tipUsers = await tipsRes.json();

        // Merge users, avoid duplicates by email (or name if email missing)
        const mergedMap = new Map();

        [...activeUsers, ...tipUsers].forEach((user) => {
          const key = user.email || user.name; // unique key
          if (!mergedMap.has(key)) {
            mergedMap.set(key, user);
          } else {
            // If user exists, merge tip counts if applicable
            const existing = mergedMap.get(key);
            mergedMap.set(key, {
              ...existing,
              totalSharedTips:
                (existing.totalSharedTips || 0) + (user.totalSharedTips || 0),
            });
          }
        });

        const mergedUsers = Array.from(mergedMap.values());

        setUsers(mergedUsers);
        setFilteredUsers(mergedUsers);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-20 font-read">
      <h1 className="text-center text-4xl md:text-5xl font-logo text-green-700 mb-10">
        Explore Gardeners
      </h1>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 text-center"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "Gardener"}
                  className="w-20 h-20 object-cover rounded-full border-2 border-green-400"
                />
              </div>

              <h2 className="text-lg font-semibold text-green-800">
                {user.name || "Anonymous"}
              </h2>

              <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Age: {user.age || "N/A"}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {user.gender || "N/A"}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  {user.experience || "N/A"} exp
                </span>
              </div>

              <div className="mt-4">
                <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                  Tips: {user.totalSharedTips || 0}
                </span>
              </div>
            </div>
          ))
        ) : (
           <p>Loading Users...</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
