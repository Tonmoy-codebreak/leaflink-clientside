import React, { useState } from "react";
import { IoLeafSharp, IoMailOpen } from "react-icons/io5";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add your subscription logic here (API call or form handler)

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thank you for subscribing to our newsletter.",
      confirmButtonColor: "#16a34a", // Tailwind's green-600 hex color
    });

    setEmail("");
  };

  return (
    <section className="bg-green-600 py-16 px-6 sm:px-12 rounded-3xl max-w-5xl mx-auto mt-20 shadow-lg mb-20">
      <div className="max-w-3xl mx-auto text-center text-white">
        {/* Leaf Icon */}
        <div className="mx-auto mb-6 w-14 h-14 opacity-80">
          <IoLeafSharp className="w-full h-full mx-auto" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold mb-3 font-logo leading-tight">
          Grow Your Garden With Us
        </h2>
        <p className="text-green-200 mb-8 text-base sm:text-lg">
          Join our newsletter for the freshest gardening tips, seasonal advice,
          and exclusive guides delivered right to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <div className="relative flex-grow">
            <input
              id="email-input"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full text-black font-medium placeholder-gray-400 border-1 border-gray-200  bg-gray-50 focus:outline-none focus:ring-4 focus:ring-green-300"
              aria-label="Email address"
            />
            <IoMailOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600 text-xl pointer-events-none" />
          </div>

          <button
            type="submit"
            className="bg-white text-green-700 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
