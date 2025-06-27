import React from "react";
import { useLoaderData, Link } from "react-router";
import { FaEye } from "react-icons/fa";

const AllTips = () => {
  const allTips = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 sm:mb-8 text-center font-logo">
        All Submitted Gardening Tips
      </h1>

      {allTips.length === 0 ? (
        <p className="text-center text-gray-500 italic text-sm sm:text-base">
          No tips found.
        </p>
      ) : (
        <table className="w-full border-collapse md:table  bg-white text-sm sm:text-base">
          <thead className="hidden md:table-header-group bg-green-100 text-left text-gray-800 font-semibold text-sm">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Difficulty</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {allTips.map((tip) => (
              <tr
                key={tip._id}
                className="block mb-6 md:table-row border border-green-200 rounded-lg p-4 md:p-0 hover:bg-green-50 transition"
              >
                <td className="block md:table-cell py-2 md:py-3 px-2 md:px-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={tip.tips_image}
                      alt={tip.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-semibold text-green-700 md:hidden">
                      Image
                    </span>
                  </div>
                </td>

                <td className="block md:table-cell py-2 md:py-3 px-2 md:px-4">
                  <span className="font-semibold text-green-700 md:hidden">
                    Title:
                  </span>{" "}
                  {tip.title}
                </td>

                <td className="block md:table-cell py-2 md:py-3 px-2 md:px-4">
                  <span className="font-semibold text-green-700 md:hidden">
                    Category:
                  </span>{" "}
                  {tip.category}
                </td>

                <td className="block md:table-cell py-2 md:py-3 px-2 md:px-4">
                  <span className="font-semibold text-green-700 md:hidden">
                    Difficulty:
                  </span>{" "}
                  {tip.difficulty_level}
                </td>

                <td className="block md:table-cell py-2 md:py-3 px-2 md:px-4">
                  <Link
                    to={`/auth/tipsDetails/${tip._id}`}
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm md:text-base border border-gray-300 rounded-md px-3 py-1 hover:bg-green-100 transition"
                    title="View Tip Details"
                  >
                    <FaEye className="w-5 h-5" />
                    <span className="hidden md:inline">View</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllTips;
