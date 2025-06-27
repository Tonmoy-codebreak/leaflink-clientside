import React from "react";
import { useLoaderData, Link } from "react-router";
import { FaEye } from "react-icons/fa";

const AllTips = () => {
  const allTips = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center font-logo">
        All Submitted Gardening Tips
      </h1>

      {allTips.length === 0 ? (
        <p className="text-center text-gray-500 italic">No tips found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-green-200 bg-white text-sm">
            <thead>
              <tr className="bg-green-100 text-left text-gray-800 font-semibold">
                <th className="py-3 px-4 border-b">Image</th>
                <th className="py-3 px-4 border-b">Title</th>
                <th className="py-3 px-4 border-b">Category</th>
                <th className="py-3 px-4 border-b">Difficulty</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100">
              {allTips.map((tip) => (
                <tr key={tip._id} className="hover:bg-green-50 transition">
                  <td className="py-3 px-4">
                    <img
                      src={tip.tips_image}
                      alt={tip.title}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{tip.title}</td>
                  <td className="py-3 px-4">{tip.category}</td>
                  <td className="py-3 px-4">{tip.difficulty_level}</td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/auth/tipsDetails/${tip._id}`}
                      className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 font-medium"
                    >
                      <FaEye className="text-sm" />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTips;
