import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  GiPlantRoots,
  GiWateringCan,
  GiHangingSign,
  GiFarmTractor,
  GiSeedling,
} from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";

const paths = [
  {
    icon: <GiPlantRoots />,
    title: "Composting",
    desc: "Turn your kitchen scraps into rich, natural fertilizer to boost plant growth and reduce waste.",
  },
  {
    icon: <GiWateringCan />,
    title: "Hydroponics",
    desc: "Grow plants soil-free with nutrient-rich water, perfect for urban spaces and faster yields.",
  },
  {
    icon: <GiHangingSign />,
    title: "Balcony Gardens",
    desc: "Maximize small spaces with creative container gardening and vertical planters.",
  },
  {
    icon: <GiFarmTractor />,
    title: "Organic Farming",
    desc: "Sustainable, chemical-free farming methods to nourish your garden and protect the planet.",
  },
  {
    icon: <MdEventAvailable />,
    title: "Events & Meetups",
    desc: "Connect with fellow gardeners at workshops, tours, and seasonal events near you.",
  },
  {
    icon: <GiSeedling />,
    title: "Seed Saving",
    desc: "Preserve plant varieties by learning to save and store your own seeds sustainably.",
  },
];

const handleClick = (title) => {
  Swal.fire({
    title: `${title}`,
    text: "This gardening path guide is coming soon",
    icon: "info",
    confirmButtonColor: "#16a34a",
    confirmButtonText: "Okay",
  });
};

const FinalSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-4 font-read">
      <h2 className="text-3xl lg:text-5xl text-center font-logo font-semibold mb-14 text-green-800">
        Explore Gardening Paths
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-white rounded-3xl p-6 md:p-12 shadow-inner">
        {paths.map(({ icon, title, desc }, i) => {
          const isEven = i % 2 === 1;
          return (
            <motion.div
              key={i}
              onClick={() => handleClick(title)}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`cursor-pointer bg-white shadow-sm border border-gray-200 rounded-2xl p-5 flex items-start gap-5 hover:shadow-lg transition-all duration-300 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="text-green-600"
                style={{ fontSize: "2.5rem", flexShrink: 0 }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <div className="max-w-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-1">{title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FinalSection;
