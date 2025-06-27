import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1745451288155-7dd26bbb74e7?w=500&auto=format&fit=crop&q=60",
    alt: "Dark Leaf",
    title: "Proper Soil & Nutrients",
    desc: "Healthy soil enriched with nutrients is vital to nurture your trees and help them grow strong.",
  },
  {
    src: "https://images.unsplash.com/photo-1732825269192-747993dfe094?w=500&auto=format&fit=crop&q=60",
    alt: "Dark Leaf Close-up",
    title: "Consistent Watering",
    desc: "Regular watering ensures your trees stay hydrated, especially during dry spells.",
  },
  {
    src: "https://images.unsplash.com/photo-1738026173767-a2d9df381a83?w=500&auto=format&fit=crop&q=60",
    alt: "Leaf Detail",
    title: "Adequate Sunlight",
    desc: "Sunlight fuels photosynthesis, so place your trees where they can soak in plenty of light.",
  },
  {
    src: "https://images.unsplash.com/photo-1679230369881-a50b8720add4?w=500&auto=format&fit=crop&q=60",
    alt: "Garden Tools Setup",
    title: "Pruning & Care",
    desc: "Regular pruning removes dead branches and promotes healthy growth for your trees.",
  },
  {
    src: "https://images.unsplash.com/photo-1718443447370-73996990f61b?w=500&auto=format&fit=crop&q=60",
    alt: "Green Leaf with Water Drops",
    title: "Pest Protection",
    desc: "Keep your trees healthy with natural pest control methods and regular inspections.",
  },
  {
    src: "https://images.unsplash.com/photo-1602348816147-64a404a1e1f1?w=500&auto=format&fit=crop&q=60",
    alt: "Tree Leaves with Dew",
    title: "Seasonal Care",
    desc: "Adjust your care routine with seasons to optimize growth and health.",
  },
  {
    src: "https://images.unsplash.com/photo-1602292205396-49edac474993?w=500&auto=format&fit=crop&q=60",
    alt: "Leafy Tree Branch",
    title: "Root Care",
    desc: "Healthy roots are the foundation — ensure proper soil aeration and avoid overwatering.",
  },
  {
    src: "https://images.unsplash.com/photo-1644090466924-cc4fe30614ee?w=500&auto=format&fit=crop&q=60",
    alt: "Tree Branch Detail",
    title: "Fertilization",
    desc: "Use the right fertilizers at the right times for lush growth and vibrant leaves.",
  },
  {
    src: "https://images.unsplash.com/photo-1703696397143-c1adf930d56c?w=500&auto=format&fit=crop&q=60",
    alt: "Young Tree",
    title: "Young Tree Support",
    desc: "Support your saplings with staking and proper care for healthy establishment.",
  },
];

const GardenTools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 5s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const prevSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-green-50 to-white font-read"
      aria-label="Tree care essentials section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-5xl font-logo pb-20 font-bold text-green-900 leading-tight">
            Essentials every tree requires
          </h1>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map(({ src, alt }, i) => (
              <div
                key={i}
                className="min-w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-72 sm:h-96 object-cover rounded-3xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            &#8594;
          </button>
        </div>

        {/* Info below slider */}
        <div className="max-w-4xl mx-auto mt-12 text-green-900 text-xl leading-relaxed font-light px-4 sm:px-0">
          <h2 className="text-2xl font-semibold mb-3">{images[currentIndex].title}</h2>
          <p>{images[currentIndex].desc}</p>
        </div>
      </div>
    </section>
  );
};

export default GardenTools;
