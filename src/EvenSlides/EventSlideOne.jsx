import React, { useState } from "react";
import Swal from "sweetalert2";

const EventSlideOne = ({ bgImage, title, date, location, about }) => {
  const [hasParticipated, setHasParticipated] = useState(false);

  const handleParticipate = () => {
    Swal.fire({
      title: "Participated!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: "top-end",
    });

    setHasParticipated(true);
  };

  return (
    <div
      className="relative h-[60vh] w-full bg-cover bg-center font-logo"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/90"></div>

      {/* Content */}
      <div className="absolute bottom-5 right-5 text-white text-right p-4 max-w-lg z-10">
        <h2 className="text-2xl font-bold mb-2 text-[#ffffc5]">{title}</h2>
        <p className="text-sm">{date}</p>
        <p className="text-sm mb-4">Location: {location}</p>
        <p className="text-lg font-read py-3">{about}</p>
        <button
          onClick={handleParticipate}
          disabled={hasParticipated}
          className={`transition-all px-4 py-2 rounded-lg text-white font-semibold shadow-lg ${
            hasParticipated
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {hasParticipated ? "Participated" : "Participate"}
        </button>
      </div>
    </div>
  );
};

export default EventSlideOne;
