import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTipsPage = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    document.title = "My Tips";
    if (user?.email) {
      fetch(`https://leaflink-app-server.vercel.app/ownedtips?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setTips(data))
        .catch((err) => console.error("Error fetching tips:", err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`https://leaflink-app-server.vercel.app/alltips/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setTips((prev) => prev.filter((tip) => tip._id !== id));
          Swal.fire("Deleted!", "Your tip has been deleted.", "success");
        } else {
          Swal.fire("Failed", "Could not delete the tip.", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-3xl sm:text-5xl font-logo text-center text-green-800 mb-12">
        My Gardening Tips
      </h1>

      {tips.length === 0 ? (
        <p className="text-center text-gray-600 font-read text-lg">
          You haven’t shared any tips yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-green-200">
          <table className="min-w-full divide-y divide-green-100 text-sm text-left">
            <thead className="bg-green-100 text-green-900 font-semibold text-sm">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Plant</th>
                <th className="px-4 py-3">Difficulty</th>
                <th className="px-4 py-3">Visibility</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {tips.map((tip) => (
                <tr key={tip._id} className="hover:bg-green-50">
                  <td className="px-4 py-3">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-16 h-16 rounded object-cover border"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-green-900">
                    {tip.title}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{tip.plant_type}</td>
                  <td className="px-4 py-3 text-gray-700">{tip.difficulty_level}</td>
                  <td className="px-4 py-3 text-gray-700">{tip.availability}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2 flex-wrap">
                      <Link
                        to={`/auth/tipsDetails/${tip._id}`}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                      >
                        View
                      </Link>
                      <Link
                        to={`/auth/updatetip/${tip._id}`}
                        className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 text-xs"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(tip._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                      >
                        Delete
                      </button>
                    </div>
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

export default MyTipsPage;
