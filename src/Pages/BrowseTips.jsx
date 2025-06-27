import React, { useEffect, useState } from "react";
import { useLoaderData, NavLink } from "react-router";
import { FaEye, FaSearch } from "react-icons/fa";

const BrowseTips = () => {
  const allTips = useLoaderData();

  // Extract unique categories from allTips for filter dropdown
  const categories = Array.from(new Set(allTips.map((tip) => tip.category)));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTips, setFilteredTips] = useState(allTips);

  useEffect(() => {
    document.title = "Browse Tips";
  }, []);

  useEffect(() => {
    let filtered = allTips;

    if (selectedDifficulty !== "All") {
      filtered = filtered.filter(
        (tip) => tip.difficulty_level === selectedDifficulty
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((tip) => tip.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((tip) =>
        tip.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTips(filtered);
  }, [selectedDifficulty, selectedCategory, searchTerm, allTips]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mb-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-8 text-center font-logo md:py-16">
        Available Plant Tips
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar Filters */}
        <aside className="md:w-1/4 space-y-6 sticky top-24 self-start">
          {/* Search by Title */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <FaSearch className="text-green-600" />
                Search by Title
              </div>
            </label>
            <input
              type="text"
              placeholder="Enter tip title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Filter by Difficulty */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Filter by Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Filter by Category */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="All">All</option>
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
              <option value="Indoor Gardening">Indoor Gardening</option>
            </select>
          </div>
        </aside>

        {/* Right: Tips Cards */}
        <main className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.length > 0 ? (
            filteredTips.map((tip) => (
              <div
                key={tip._id}
                className="bg-white rounded-xl shadow-md border border-green-200 p-4 flex flex-col"
              >
                <div className="w-full h-36 rounded-md overflow-hidden shadow-sm mb-3">
                  <img
                    src={tip.tips_image}
                    alt={tip.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-1">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {tip.category} · {tip.difficulty_level}
                </p>
                <NavLink
                  to={`/auth/tipsDetails/${tip._id}`}
                  className="mt-auto inline-flex items-center justify-center text-green-600 hover:text-green-800 font-medium"
                >
                  <FaEye className="mr-1" /> View Details
                </NavLink>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 italic">
              No tips found.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default BrowseTips;
