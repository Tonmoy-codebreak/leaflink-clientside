import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

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

// Duplicate images to create infinite scrolling effect
const duplicatedImages = [...images, ...images];

const GardenTools = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isPaused]);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50 to-white font-read">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-logo font-bold text-green-900 leading-tight">
            Essentials every tree requires
          </h1>
          
        </div>

        {/* Sliding Carousel */}
        <div
          className="overflow-hidden rounded-3xl "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Tree care essentials horizontal slider"
        >
          <motion.div
            className="flex w-[calc(200%)]"
            animate={controls}
            style={{ gap: "1rem" }}
          >
            {duplicatedImages.map(({ src, alt, title, desc }, i) => (
              <div
                key={i}
                className="group min-w-[25%] relative rounded-3xl overflow-hidden cursor-pointer shadow-md"
                role="group"
                tabIndex={0}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-72 object-cover brightness-90 rounded-3xl group-hover:brightness-75 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-white text-sm font-light">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GardenTools;
