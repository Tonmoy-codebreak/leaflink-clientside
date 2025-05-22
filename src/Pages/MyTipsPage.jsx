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
      fetch(`http://localhost:3000/ownedtips?email=${user.email}`)
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
        const res = await fetch(`http://localhost:3000/alltips/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setTips(tips.filter((tip) => tip._id !== id));
          Swal.fire("Deleted!", "Your tip has been deleted.", "success");
        } else {
          Swal.fire("Failed", "Could not delete the tip.", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 mb-48">
      <h1 className="text-4xl md:text-5xl font-logo mt-10 md:mt-20 text-center mb-10 text-green-800">
        My Gardening Tips
      </h1>

      {tips.length === 0 ? (
        <p className="text-center text-base md:text-lg font-read text-gray-600">
          You haven’t shared any tips yet.
        </p>
      ) : (
        <>
          {/* Table view (for md and up) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full text-sm table-auto border-collapse bg-white/5 text-white">
              <thead >
                <tr className="bg-lime-200 text-gray-900 font-semibold">
                  <th className="px-4 py-3 text-left">Title</th>
                  <th className="px-4 py-3 text-left">Plant</th>
                  <th className="px-4 py-3 text-left">Difficulty</th>
                  <th className="px-4 py-3 text-left">Visibility</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-black divide-white/10">
                {tips.map((tip) => (
                  <tr key={tip._id} className="hover:bg-white/10">
                    <td className="px-4 py-3">{tip.title}</td>
                    <td className="px-4 py-3">{tip.plant_type}</td>
                    <td className="px-4 py-3">{tip.difficulty_level}</td>
                    <td className="px-4 py-3">{tip.availability}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Link
                          to={`/auth/updatetip/${tip._id}`}
                          className="btn btn-xs bg-yellow-400 text-black hover:bg-yellow-500"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(tip._id)}
                          className="btn btn-xs bg-red-500 text-white hover:bg-red-600"
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

          {/* Card view (for mobile) */}
          <div className="md:hidden text-black space-y-4">
            {tips.map((tip) => (
              <div
                key={tip._id}
                className="bg-white/10 border border-white/20 p-4 rounded-xl shadow font-read"
              >
                <h2 className="text-lg font-semibold mb-1">{tip.title}</h2>
                <p>
                  <span className="font-medium">Plant:</span> {tip.plant_type}
                </p>
                <p>
                  <span className="font-medium">Difficulty:</span> {tip.difficulty_level}
                </p>
                <p>
                  <span className="font-medium">Visibility:</span> {tip.availability}
                </p>
                <div className="mt-3 flex gap-2">
                  <Link
                    to={`/auth/updatetip/${tip._id}`}
                    className="btn btn-sm bg-yellow-400 text-black hover:bg-yellow-500"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyTipsPage;
