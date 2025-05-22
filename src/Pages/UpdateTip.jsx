import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FiSend } from "react-icons/fi";
import { ImLeaf } from "react-icons/im";

const UpdateTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [tipData, setTipData] = useState(null);

  useEffect(() => {
    document.title = "Update Tip";

    const fetchTip = async () => {
      try {
        const res = await fetch(`http://localhost:3000/tips/${id}`);
        const data = await res.json();
        setTipData(data);
      } catch (error) {
        console.error("Failed to load tip data:", error);
      }
    };

    fetchTip();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(`http://localhost:3000/alltips/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        Swal.fire("Updated!", "Your tip has been updated.", "success");
           navigate("/auth/mytips");
      } else {
        throw new Error("Failed to update tip");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong while updating.", "error");
    }
  };

  if (!tipData) return <p className="text-center mt-20">Loading tip data...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-200 p-8 md:p-12 space-y-8">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-green-700 font-logo mb-6">
          <span className="flex items-center justify-center gap-2">
            <ImLeaf />
            Update Your Gardening Tip
          </span>
        </h1>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={tipData.title}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant Type */}
          <div>
            <label className="label">Plant Type / Topic</label>
            <input
              type="text"
              name="plant_type"
              defaultValue={tipData.plant_type}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="label">Difficulty Level</label>
            <select
              name="difficulty_level"
              className="select select-bordered w-full"
              defaultValue={tipData.difficulty_level}
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue={tipData.category}
              required
            >
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
              <option value="Indoor Gardening">Indoor Gardening</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="label">Availability</label>
            <select
              name="availability"
              className="select select-bordered w-full"
              defaultValue={tipData.availability}
              required
            >
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>

          {/* Tips_Image */}
          <div className="col-span-1 md:col-span-2">
            <label className="label">Image URL</label>
            <input
              type="text"
              name="tips_image"
              defaultValue={tipData.tips_image}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="label">Description</label>
            <textarea
              name="description"
              rows="5"
              className="textarea textarea-bordered w-full"
              defaultValue={tipData.description}
              required
            ></textarea>
          </div>

          {/* Read-only user info */}
          <div>
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              value={user?.displayName || "Anonymous"}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="label">Your Email</label>
            <input
              type="email"
              name="email"
              value={user?.email || "No Email"}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-gray-500"
            />
          </div>

          <div className="hidden">
            <label className="label">Your Image URL</label>
            <input
              type="text"
              name="image"
              value={user?.photoURL || "No Photo"}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-gray-500"
            />
          </div>

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="btn btn-wide text-white primary-bg flex items-center gap-2"
            >
              <FiSend size={18} />
              <p>Update Tip</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;
