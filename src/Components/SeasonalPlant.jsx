import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const seasons = [
  {
    name: "Summer",
    plants: ["Sunflower", "Tomato", "Cucumber", "Corn", "Pepper", "Okra"],
    image:
      "https://images.unsplash.com/photo-1604296578937-75057d5be935?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Rainy",
    plants: ["Taro", "Spinach", "Paddy", "Ginger", "Turmeric", "Bottle Gourd"],
    image:
      "https://images.unsplash.com/photo-1637202467427-cbc8f49a92ac?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Autumn",
    plants: ["Radish", "Cauliflower", "Cabbage", "Fenugreek", "Lettuce", "Beans"],
    image:
      "https://images.unsplash.com/photo-1681247338255-00272cf13ba2?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Frostfall",
    plants: ["Pumpkin", "Garlic", "Beetroot", "Mustard", "Green Peas", "Broccoli"],
    image:
      "https://images.unsplash.com/photo-1648885021633-6e9dd2ed0f56?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Winter",
    plants: ["Carrot", "Spinach", "Coriander", "Onion", "Peas", "Turnip"],
    image:
      "https://images.unsplash.com/photo-1735922187966-c0ebe81e8cd0?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Spring",
    plants: ["Marigold", "Papaya", "Zinnia", "Guava", "Basil", "Chili"],
    image:
      "https://images.unsplash.com/photo-1703797131537-f7e7c30b25a6?w=500&auto=format&fit=crop&q=60",
  },
];

const infoVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const SeasonalPlant = () => {
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleClick = (season) => {
    if (selectedSeason && selectedSeason.name === season.name) {
      setSelectedSeason(null);
    } else {
      setSelectedSeason(season);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-green-50 to-white font-logo">
      <h1 className="text-center text-3xl lg:text-5xl font-logo pb-12 sm:pb-20 text-green-800">
        Plants That Thrive by Season
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left: Circle with season names only */}
        <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-green-300"></div>

          {seasons.map((season, i) => {
            const angle = (360 / seasons.length) * i;
            const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
            const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);

            const isSelected = selectedSeason?.name === season.name;

            return (
              <div
                key={i}
                onClick={() => handleClick(season)}
                className={`absolute rounded-full cursor-pointer flex items-center justify-center shadow-md text-center transition-transform
                  ${
                    isSelected
                      ? "bg-green-600 text-white scale-110"
                      : "bg-green-100 text-green-900 hover:scale-110"
                  }
                  ${
                    // width & height responsive
                    "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                  }`}
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="font-semibold text-xs sm:text-sm md:text-base px-2">
                  {season.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right: Info panel with fading background */}
        <div className="relative rounded-3xl shadow-xl p-6 sm:p-8 mt-10 md:mt-0 md:p-10 min-h-[280px] sm:min-h-[300px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSeason ? selectedSeason.name : "default"}
              className="absolute inset-0 rounded-3xl bg-center bg-cover filter brightness-50"
              style={{
                backgroundImage: selectedSeason
                  ? `url(${selectedSeason.image})`
                  : "none",
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={infoVariants}
            />
          </AnimatePresence>

          <motion.div
            key={selectedSeason ? selectedSeason.name : "default-text"}
            className="relative text-green-900 text-base sm:text-lg leading-relaxed min-h-[280px] sm:min-h-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {!selectedSeason ? (
              <div>
                <h2 className="text-2xl sm:text-3xl font-logo mb-4 text-green-800">
                  Why Grow Plants Seasonally?
                </h2>
                <p className="mb-3">
                  Growing plants according to the season ensures optimal growth,
                  higher yields, and better resistance to pests and diseases.
                </p>
                <p>
                  Embracing seasonal gardening not only boosts your harvest but
                  also supports a healthy, sustainable ecosystem.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl sm:text-3xl font-logo mb-4 text-green-50">
                  {selectedSeason.name} Plants
                </h2>
                <ul className="list-disc list-inside space-y-1 text-white text-sm sm:text-base">
                  {selectedSeason.plants.map((plant, i) => (
                    <li key={i}>{plant}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPlant;
