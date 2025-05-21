import React from "react";
import { GiPlantRoots, GiWateringCan, GiHangingSign, GiFarmTractor } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";

const FinalSection = () => {
  const paths = [
    {
      icon: <GiPlantRoots className="text-4xl text-green-600" />,
      title: "Composting",
      desc: "Learn how to turn kitchen waste into nutrient-rich soil and reduce your carbon footprint.",
    },
    {
      icon: <GiWateringCan className="text-4xl text-green-600" />,
      title: "Hydroponics",
      desc: "Grow plants without soil using water-based nutrient solutions — efficient and futuristic.",
    },
    {
      icon: <GiHangingSign className="text-4xl text-green-600" />,
      title: "Balcony Gardens",
      desc: "Make the most of small spaces with creative and productive balcony gardening ideas.",
    },
    {
      icon: <GiFarmTractor className="text-4xl text-green-600" />,
      title: "Organic Farming",
      desc: "Dive into chemical-free, sustainable farming practices and reconnect with nature.",
    },
    {
      icon: <MdEventAvailable className="text-4xl text-green-600" />,
      title: "Events & Meetups",
      desc: "Join workshops, garden tours, and community events to grow together with Leaflink.",
    },
  ];

  return (
    <div className="w-10/12 mx-auto mt-40 mb-36 font-read">
      <h1 className="text-5xl text-center font-logo mb-12 text-green-800">
        Explore Gardening Paths
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paths.map((path, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-green-50"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">{path.icon}</div>
              <h3 className="text-xl font-semibold text-green-700">
                {path.title}
              </h3>
            </div>
            <p className="text-gray-700 text-sm">{path.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalSection;
