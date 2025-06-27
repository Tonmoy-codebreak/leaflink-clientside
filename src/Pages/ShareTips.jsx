import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ImLeaf } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import Swal from "sweetalert2";

const ShareTips = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Share Tips";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://leaflink-app-server.vercel.app/alltips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Tip Added",
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: result.message || "Failed to submit tip",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting tip:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while submitting the tip.",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen   py-16 px-2 sm:px-4 md:px-6">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl  border border-gray-100 p-6 sm:p-8 md:p-10 space-y-8">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-green-700 font-logo mb-6 flex items-center justify-center gap-2">
          <ImLeaf className="text-2xl sm:text-3xl" />
          Share Your Gardening Tip
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          noValidate
        >
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g., How I Grow Tomatoes Indoors"
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              required
            />
          </div>

          {/* Plant Type */}
          <div>
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Plant Type / Topic
            </label>
            <input
              type="text"
              name="plant_type"
              placeholder="Tomato, Herbs, etc."
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              required
            />
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Difficulty Level
            </label>
            <select
              name="difficulty_level"
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select level
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Category
            </label>
            <select
              name="category"
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
              <option value="Indoor Gardening">Indoor Gardening</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Availability
            </label>
            <select
              name="availability"
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select visibility
              </option>
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Image URL
            </label>
            <input
              type="url"
              name="tips_image"
              placeholder="https://image.url"
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Description
            </label>
            <textarea
              name="description"
              rows="5"
              placeholder="Write your tip in detail..."
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
              required
            ></textarea>
          </div>

          {/* User Name (read-only) */}
          <div>
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={user?.displayName || "Anonymous"}
              readOnly
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* User Email (read-only) */}
          <div>
            <label className="block mb-1 text-green-800 font-semibold text-sm sm:text-base">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email || "No Email"}
              readOnly
              className="w-full rounded-md border border-green-300 px-3 py-2 text-sm sm:text-base bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Hidden user image URL */}
          <input
            type="hidden"
            name="image"
            value={user?.photoURL || ""}
            readOnly
          />

          {/* Submit button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 justify-center rounded-full bg-green-600 px-8 py-2 text-white text-base font-semibold shadow-md hover:bg-green-700 transition"
            >
              <FiSend size={18} />
              Submit Tip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
