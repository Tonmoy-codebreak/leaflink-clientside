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
      {/* Uniform dark overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Centered content */}
      <div className="absolute inset-0 flex  items-center justify-center z-10 px-4">
        <div className="text-white text-center max-w-xl md:max-w-2xl">
          <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#ffffc5]">{title}</h2>
          <p className="text-sm md:text-base">{date}</p>
          <p className="text-sm md:text-base mb-2">Location: {location}</p>
          <p className="text-sm md:text-base font-read mb-4">{about}</p>
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
    </div>
  );
};

export default EventSlideOne;
