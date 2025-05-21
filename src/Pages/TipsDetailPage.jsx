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
    <div>
        <article className="w-10/12 mx-auto p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg  mt-20 mb-52">
      <header className="mb-8">
        <h1 className="text-4xl font-logo font-bold text-green-700 mb-2">{tip.title}</h1>

        <div className="flex flex-wrap gap-4 text-sm font-read text-gray-700">
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

        <div className="flex items-center gap-4 mt-6">
          <img
            src={tip.image}
            alt={tip.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-green-300"
          />
          <p className="font-read text-green-800 font-semibold">Shared by: {tip.name}</p>
        </div>
      </header>

      <img
        src={tip.tips_image}
        alt={tip.title}
        className=" h-96 object-cover rounded-lg mb-8 shadow-md"
      />

      <section className="prose max-w-full font-read text-gray-800 leading-relaxed">
        <p>{tip.description}</p>

        {tip.care_tips && (
          <>
            <h2 className="mt-10 mb-3 text-green-600 font-semibold">Extra Care Tips</h2>
            <p>{tip.care_tips}</p>
          </>
        )}
      </section>
    </article>
    </div>
  );
};

export default TipsDetailPage;
