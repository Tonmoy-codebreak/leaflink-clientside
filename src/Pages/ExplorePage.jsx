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
        const activeRes = await fetch(
          "https://leaflink-app-server.vercel.app/allusers"
        );
        const activeUsers = await activeRes.json();

        const tipsRes = await fetch(
          "https://leaflink-app-server.vercel.app/tip-users"
        );
        const tipUsers = await tipsRes.json();

        const mergedMap = new Map();

        [...activeUsers, ...tipUsers].forEach((user) => {
          const key = user.email || user.name;
          if (!mergedMap.has(key)) {
            mergedMap.set(key, user);
          } else {
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
        Explore Tip Contributors
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

      {/* Table-like card container */}
      <div className="bg-white rounded-xl shadow border border-green-200">
        {/* Table header */}
        <div className="hidden sm:grid grid-cols-[80px_1fr_120px] items-center px-8 py-4 border-b border-green-100 text-green-700 font-semibold select-none">
          <div>Avatar</div>
          <div>Name</div>
          <div className="text-right">Tips Shared</div>
        </div>

        {/* Table rows */}
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, idx) => (
            <div
              key={idx}
              className="relative border-t border-green-100 hover:shadow-lg hover:scale-[1.02] transform-gpu transition duration-300 ease-in-out cursor-default
                grid grid-cols-1 gap-3 p-4 sm:grid-cols-[80px_1fr_120px] sm:items-center sm:px-8 sm:py-4"
              style={{ animation: `fadeInUp 0.3s ease forwards`, animationDelay: `${idx * 0.05}s` }}
            >
              {/* Vertical accent bar only on sm+ */}
              <span className="hidden sm:block absolute left-0 top-0 bottom-0 w-1 rounded-tr-md rounded-br-md bg-green-500"></span>

              <div className="flex justify-center sm:justify-start">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "Gardener"}
                  className="w-16 h-16 rounded-full border-2 border-green-500 object-cover shadow-sm"
                />
              </div>

              <div className="text-green-800 font-semibold text-lg truncate ml-0 sm:ml-6 text-center sm:text-left">
                {user.name || "Anonymous"}
              </div>

              <div className="text-green-700 font-bold text-lg select-text text-center sm:text-right">
                {user.totalSharedTips || 0}
              </div>
            </div>
          ))
        ) : (
          <p className="p-8 text-center text-gray-500 italic">Loading Users...</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
