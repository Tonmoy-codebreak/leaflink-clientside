import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1745451288155-7dd26bbb74e7?w=500&auto=format&fit=crop&q=60",
    alt: "Dark Leaf",
    title: "Proper Soil & Nutrients",
    desc: `Healthy soil enriched with essential nutrients forms the foundation for strong tree growth.
           Ensuring your soil has the right balance of nitrogen, phosphorus, and potassium promotes robust roots 
           and vibrant foliage. Incorporate organic matter such as compost or mulch to improve soil texture, 
           moisture retention, and microbial activity, leading to healthier, more resilient trees.`,
  },
  {
    src: "https://images.unsplash.com/photo-1732825269192-747993dfe094?w=500&auto=format&fit=crop&q=60",
    alt: "Dark Leaf Close-up",
    title: "Consistent Watering",
    desc: `Watering your trees consistently is crucial, especially during dry periods or early stages of growth. 
           Deep watering encourages roots to grow deeper into the soil, making your trees more drought-resistant. 
           Avoid overwatering, which can lead to root rot and other fungal diseases. Using drip irrigation or 
           soaker hoses can efficiently provide moisture directly to the root zone without wasting water.`,
  },
  {
    src: "https://images.unsplash.com/photo-1738026173767-a2d9df381a83?w=500&auto=format&fit=crop&q=60",
    alt: "Leaf Detail",
    title: "Adequate Sunlight",
    desc: `Sunlight is the energy source for photosynthesis, the process that fuels tree growth. 
           Position your trees in locations where they receive ample direct sunlight for at least 6 hours a day. 
           Monitor shading from nearby structures or other plants and prune surrounding vegetation if needed 
           to maximize light exposure. Proper sunlight encourages healthy leaves, flowering, and fruiting.`,
  },
  {
    src: "https://images.unsplash.com/photo-1679230369881-a50b8720add4?w=500&auto=format&fit=crop&q=60",
    alt: "Garden Tools Setup",
    title: "Pruning & Care",
    desc: `Pruning your trees regularly helps maintain their shape, removes damaged or diseased branches, 
           and promotes airflow throughout the canopy, reducing pest and disease risks. Use clean, sharp tools 
           and prune during the dormant season or as recommended for specific species. Proper pruning enhances 
           sunlight penetration and stimulates new growth for stronger, healthier trees.`,
  },
  {
    src: "https://images.unsplash.com/photo-1718443447370-73996990f61b?w=500&auto=format&fit=crop&q=60",
    alt: "Green Leaf with Water Drops",
    title: "Pest Protection",
    desc: `Protect your trees from harmful pests and insects using natural control methods when possible. 
           Regularly inspect your trees for signs of infestations such as discolored leaves, holes, or sticky residue. 
           Introducing beneficial insects like ladybugs, using neem oil, or applying organic insecticidal soaps can 
           help maintain a balanced ecosystem while keeping your trees healthy and pest-free.`,
  },
  {
    src: "https://images.unsplash.com/photo-1602348816147-64a404a1e1f1?w=500&auto=format&fit=crop&q=60",
    alt: "Tree Leaves with Dew",
    title: "Seasonal Care",
    desc: `Adapt your tree care routine according to seasonal changes to support growth cycles and prepare for environmental stresses. 
           In spring, focus on fertilization and new growth support; during summer, ensure adequate hydration; 
           autumn is a great time for pruning and pest prevention; and in winter, protect your trees from frost and cold damage. 
           Seasonal adjustments help maintain vitality year-round.`,
  },
  {
    src: "https://images.unsplash.com/photo-1602292205396-49edac474993?w=500&auto=format&fit=crop&q=60",
    alt: "Leafy Tree Branch",
    title: "Root Care",
    desc: `Roots are the anchor and nutrient highway of your trees. Avoid compacting the soil around roots by limiting heavy foot traffic. 
           Ensure proper aeration by mulching and avoiding overwatering, which can suffocate roots. When planting, loosen the soil to 
           encourage outward root growth, and consider using root stimulators or mycorrhizal fungi inoculants to improve nutrient uptake and soil health.`,
  },
  {
    src: "https://images.unsplash.com/photo-1644090466924-cc4fe30614ee?w=500&auto=format&fit=crop&q=60",
    alt: "Tree Branch Detail",
    title: "Fertilization",
    desc: `Fertilizing your trees with the right nutrients at the proper times can dramatically enhance growth and leaf vibrancy. 
           Use slow-release fertilizers formulated for trees and shrubs, and apply according to the specific needs of the species. 
           Avoid excessive fertilization which can harm roots and the environment. Regular soil testing can guide precise nutrient management.`,
  },
  {
    src: "https://images.unsplash.com/photo-1703696397143-c1adf930d56c?w=500&auto=format&fit=crop&q=60",
    alt: "Young Tree",
    title: "Young Tree Support",
    desc: `Young trees require extra care to establish strong root systems and withstand environmental challenges. 
           Use stakes or tree supports to protect against wind damage, but ensure they don’t constrict growth. Monitor watering 
           closely and protect saplings from pests and harsh weather. Mulching around the base helps retain moisture and suppress weeds, 
           giving your young trees the best start possible.`,
  },
];

const GardenTools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <section
      className="py-16 lg:mb-20 mt-20 sm:py-20 bg-gradient-to-b from-white via-green-50 to-white font-read"
      aria-label="Tree care essentials section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <h1 className="text-center text-3xl md:text-5xl  pb-10 font-logo font-bold text-green-900 leading-tight mb-12">
          Essentials every tree requires
        </h1>

        {/* Content grid: left image, right text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image with fade animation */}
          <div className="rounded-3xl overflow-hidden shadow-lg  mx-auto md:mx-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={images[currentIndex].src}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-80 sm:h-96 object-cover rounded-3xl"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Right - Text */}
          <div className="text-green-900 text-xl leading-relaxed font-light px-4 sm:px-0 max-w-3xl mx-auto md:mx-0">
            <h2 className="text-3xl font-semibold mb-6">{images[currentIndex].title}</h2>
            <p className="whitespace-pre-line">{images[currentIndex].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenTools;
