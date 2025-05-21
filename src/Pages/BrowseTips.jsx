import React, { useEffect, useState } from 'react';
import { useLoaderData, NavLink } from 'react-router';
import { FaEye } from 'react-icons/fa';

const BrowseTips = () => {
  const allTips = useLoaderData();
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [filteredTips, setFilteredTips] = useState(allTips);

  useEffect(() => {
    document.title = "Browse Tips";
  }, []);

  useEffect(() => {
    if (selectedDifficulty === "All") {
      setFilteredTips(allTips);
    } else {
      setFilteredTips(allTips.filter(tip => tip.difficulty_level === selectedDifficulty));
    }
  }, [selectedDifficulty, allTips]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-72">
      <h1 className="text-5xl font-bold text-green-600 mb-6 text-center font-logo">Available Plant Tips</h1>

      {/*  Filter Dropdown */}
      <div className="mb-8 text-center">
        <label className="mr-4 font-medium text-gray-700 text-lg">Filter by Difficulty:</label>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="bg-white border border-green-300 text-green-700 font-medium px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/*  Table */}
      <div className="overflow-x-auto shadow-lg rounded-xl backdrop-blur-md bg-white/60 border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-green-200/60 text-green-900 font-read text-md tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Difficulty</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white/50 divide-y divide-gray-100">
            {filteredTips.map((tip) => (
              <tr
                key={tip._id}
                className="hover:bg-green-50 transition duration-300 ease-in-out"
              >
                <td className="px-6 py-4">
                  <div className="w-14 h-14 rounded-md overflow-hidden shadow-md ring-1 ring-green-300/30">
                    <img
                      src={tip.tips_image}
                      alt={tip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-800 text-lg">{tip.title}</td>
                <td className="px-6 py-4 text-gray-600 font-read text-lg">{tip.category}</td>
                <td className="px-6 py-4 text-gray-600 font-read text-lg">{tip.difficulty_level}</td>
                <td className="px-6 py-4 text-center">
                  <NavLink
                    to={`/auth/tipsDetails/${tip._id}`}
                    className="inline-flex items-center justify-center text-green-600 hover:text-green-800 hover:scale-110 transition-transform duration-200"
                    title="See More"
                  >
                    <FaEye className="text-xl" />
                  </NavLink>
                </td>
              </tr>
            ))}
            {filteredTips.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500 italic">
                  No tips found for this difficulty level.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
