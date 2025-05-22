import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TipsDetailPage = () => {


          
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/tips/${id}`)
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
      <div className="flex justify-center items-center mt-20">
        <span className="loading loading-spinner loading-xl text-green-600"></span>
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
    <div className="w-10/12 mx-auto mt-20 mb-52 p-6 bg-white/70 backdrop-blur-md rounded-xl ">
      {/* tips.Title */}
      <h1 className="text-4xl lg:text-5xl font-read font-semibold text-center text-green-700 py-1 mb-6">
        {tip.title}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-4 text-sm font-read text-gray-700 mb-10 md:mb-28">
        <span className="px-3 py-1 bg-green-100 rounded-full text-green-800 font-medium">
          Category: {tip.category}
        </span>
        <span className="px-3 py-1 bg-yellow-100 rounded-full text-yellow-800 font-medium">
          Difficulty: {tip.difficulty_level}
        </span>
        <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 font-medium">
          Type: {tip.plant_type}
        </span>
        <span className="px-3 py-1 bg-purple-100 rounded-full text-purple-800 font-medium">
          Availability: {tip.availability}
        </span>
      </div>

      {/* Card */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Image */}
        <img
          src={tip.tips_image}
          alt={tip.title}
          className="w-full lg:w-1/2 h-96 object-cover rounded-lg shadow-md"
        />

        {/* Description */}
        <div className="flex-1 font-read text-gray-800 leading-relaxed">
          <p className="mb-6">{tip.description}</p>

          {tip.care_tips && (
            <>
              <h2 className="text-green-600 font-semibold mb-2">Extra Care Tips</h2>
              <p>{tip.care_tips}</p>
            </>
          )}

          {/* Shared By */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src={tip.image}
              alt={tip.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-green-300"
            />
            <p className="text-green-800 font-semibold">Shared by: {tip.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetailPage;
