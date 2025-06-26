import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";

const TipsDetailPage = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://leaflink-app-server.vercel.app/tips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        document.title = `${data.title} | Tip Details`;
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tip:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  if (!tip) {
    return (
      <div className="text-center text-red-500 font-read text-xl mt-20">
        Tip not found or an error occurred.
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10 space-y-10 font-read">
        {/* Title */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-3">{tip.title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 text-sm sm:text-base font-medium">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Category: {tip.category}</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">Difficulty: {tip.difficulty_level}</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Type: {tip.plant_type}</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Availability: {tip.availability}</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src={tip.tips_image}
            alt={tip.title}
            className="w-full h-[280px] sm:h-[400px] object-cover"
          />
        </div>

        {/* Description */}
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-6">
          <p className="whitespace-pre-line">{tip.description}</p>

          {tip.care_tips && (
            <div>
              <h2 className="text-green-700 font-semibold text-lg sm:text-xl mb-2">🌿 Extra Care Tips</h2>
              <p className="whitespace-pre-line">{tip.care_tips}</p>
            </div>
          )}
        </div>

        {/* Shared by */}
        <div className="flex items-center gap-4 pt-6 border-t border-green-200">
          <img
            src={tip.image}
            alt={tip.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-green-300"
          />
          <div>
            <p className="text-green-800 font-semibold text-sm sm:text-base">Shared by: {tip.name}</p>
            <p className="text-gray-500 text-xs">Thanks for contributing 🌱</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TipsDetailPage;
