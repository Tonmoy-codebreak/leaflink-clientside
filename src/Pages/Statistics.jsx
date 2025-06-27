import React, { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  Legend,
} from "recharts";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";

const COLORS = [
  "#34D399",
  "#60A5FA",
  "#FBBF24",
  "#F87171",
  "#A78BFA",
  "#4ADE80",
  "#F472B6",
  "#FCD34D",
];

const Statistics = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [categoryStats, setCategoryStats] = useState([]);
  const [myTipsCount, setMyTipsCount] = useState(0);

  useEffect(() => {
    document.title = "Dashboard - LeafLink - Statistics";

    fetch("https://leaflink-app-server.vercel.app/alltips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);

        // Category count map
        const categoryMap = new Map();
        data.forEach((tip) => {
          const cat = tip.category || "Uncategorized";
          categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
        });

        const formattedStats = Array.from(categoryMap.entries()).map(
          ([name, value]) => ({
            name,
            value,
          })
        );
        setCategoryStats(formattedStats);

        if (user?.email) {
          const mine = data.filter((tip) => tip.email === user.email);
          setMyTipsCount(mine.length);
        }
      });
  }, [user]);

  const totalTips = tips.length;
  const publicTips = tips.filter((tip) => tip.availability === "Public").length;
  const privateTips = totalTips - publicTips;

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-12 font-read">
      <h1 className="text-4xl font-bold text-green-700 mb-10 text-center font-logo">
        Statistics Overview
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-100 p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-green-800">{totalTips}</h2>
          <p className="text-sm text-green-700 mt-1">Total Tips Shared</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-blue-800">{publicTips}</h2>
          <p className="text-sm text-blue-700 mt-1">Public Tips</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-yellow-800">{privateTips}</h2>
          <p className="text-sm text-yellow-700 mt-1">Private Tips</p>
        </div>
      </div>

      {/* Chart + User + MyTips Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Pie Chart + Breakdown */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-xl shadow overflow-x-auto">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tips by Category
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Pie Chart Wrapper for centering on mobile */}
            <div className="flex justify-center">
              <PieChart
                width={Math.min(window.innerWidth * 0.9, 300)}
                height={300}
              >
                <Pie
                  data={categoryStats}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {categoryStats.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </div>

            {/* Category Breakdown List */}
            <div className="flex-1 space-y-3 pt-4 min-w-[200px]">
              <h3 className="text-md font-semibold text-gray-700 mb-1">
                Breakdown
              </h3>
              {categoryStats.map((entry, index) => (
                <div
                  key={entry.name}
                  className="flex items-center justify-between border-b pb-1"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    ></span>
                    <span className="text-sm text-gray-800">{entry.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-green-700">
                    {entry.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Info & My Tips */}
        <div className="space-y-6">
          {/* User Card */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={user?.photoURL || "/images/default-avatar.png"}
              alt="User"
              className="w-24 h-24 mx-auto mb-3 rounded-full border-4 border-green-400 object-cover"
            />
            <h3 className="text-xl font-bold text-green-700">
              {user?.displayName || "Anonymous"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
            <div className="mt-4">
              <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Logged In
              </span>
            </div>
          </div>

          {/* My Tips Card */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Shared Tips
            </h3>
            <p className="text-2xl font-bold text-green-600 mb-4">{myTipsCount}</p>
            <Link to="mytips">
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow">
                View My Tips
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
