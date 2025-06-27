import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="font-read text-gray-800">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4 font-logo">
            Who We Are
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            LeafLink is a community-powered gardening platform built to inspire,
            educate, and connect plant lovers around the world. Whether you're
            growing herbs on your windowsill or maintaining a lush backyard
            garden, LeafLink helps you share your journey and learn from others.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1498766707495-856f300a5821?w=800"
          alt="Who we are"
          className="rounded-xl shadow-md w-full object-cover h-64 sm:h-80 md:h-full"
        />
      </div>

      {/* Mission Section */}
      <div className="bg-green-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1484268234627-2278797bec04?w=500&auto=format&fit=crop&q=60"
            alt="Gardening mission"
            className="rounded-xl shadow-lg w-full object-cover h-64 sm:h-80 md:h-full"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4 font-logo">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We aim to make gardening inclusive, collaborative, and joyful.
              With LeafLink, users can share their gardening tips, explore advice
              from fellow green thumbs, and participate in plant-related
              events—all while maintaining control over their privacy and
              content.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700 mb-10 font-logo">
            What Makes LeafLink Special?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Browse Tips",
                desc: "Explore a rich collection of public gardening tips from our community.",
                img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600",
              },
              {
                title: "Explore Gardeners",
                desc: "Discover profiles of active gardeners and their shared tips.",
                img: "https://images.unsplash.com/photo-1444392061186-9fc38f84f726?w=600",
              },
              {
                title: "Share & Manage Tips",
                desc: "Post, update, or delete your own gardening wisdom with ease.",
                img: "https://images.unsplash.com/photo-1553123428-247ffbd12d90?w=600",
              },
            ].map(({ title, desc, img }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-48 sm:h-56 w-full object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
              Join the LeafLink Family
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Whether you're looking for gardening advice or ready to share your
              green thumb, LeafLink is your community hub. Our platform features
              secure sign-in, privacy controls, and a growing ecosystem of events
              and contributors.
            </p>
            <Link to="/auth/sharetips">
              <button className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition">
                Get Started
              </button>
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504541891213-1b1dfdadb739?w=800"
            alt="Gardening family"
            className="rounded-xl shadow-md order-1 md:order-2 w-full object-cover h-64 sm:h-80 md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
