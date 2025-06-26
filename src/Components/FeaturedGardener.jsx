import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturedGardener = () => {
  const users = useLoaderData();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white w-full">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center font-logo text-green-800 mb-12 sm:mb-16 leading-tight">
        Meet Our <span className="text-green-600">Featured Gardeners</span>
      </h1>

      {/* Grid layout with animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto font-read"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {users.map((user) => (
          <motion.div
            key={user.userID}
            className="flex items-start gap-6"
            variants={itemVariants}
          >
            {/* Image */}
            <img
              src={user.image || "https://placehold.co/120x120/E0F2F1/2E7D32?text=User"}
              alt={user.name || "Gardener"}
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-green-300 flex-shrink-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/120x120/E0F2F1/2E7D32?text=User";
              }}
            />

            {/* Content */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-1">
                Age: <span className="font-medium">{user.age}</span> • Gender: <span className="font-medium">{user.gender}</span>
              </p>
              <p className="text-green-700 font-semibold text-base sm:text-lg mb-1">
                {user.experience} Experience
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Shared <span className="text-green-800 font-bold">{user.totalSharedTips}</span> tips about gardening, sustainability, and care.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedGardener;
