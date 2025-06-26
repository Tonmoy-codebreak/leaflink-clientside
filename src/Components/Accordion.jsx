import React, { useState } from "react";

const faqData = [
  {
    question: "Which tools are essential for beginners?",
    answer:
      "Beginners should start with gloves, a trowel, pruning shears, a watering can, and a hand fork. These cover most basic gardening needs.",
  },
  {
    question: "How often should I clean my garden tools?",
    answer:
      "You should clean your garden tools after every use to prevent the spread of plant diseases and rust buildup. Simply rinsing with water and wiping dry is often enough for daily use. Once a month, disinfect with rubbing alcohol or diluted bleach, and apply oil to metal parts to keep them sharp and rust-free.",
  },
  {
    question: "What's the best way to store garden tools to extend their lifespan?",
    answer:
      "Store your garden tools in a dry, sheltered place like a shed or garage to protect them from moisture and rust. Hang tools with sharp edges or long handles on wall hooks to prevent damage and injury. For extra protection, apply a light coat of linseed oil to wooden handles and machine oil to metal parts before storing them.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className="flex max-w-6xl mx-auto gap-4 select-none font-read"
      style={{ minHeight: 160 }}
    >
      {faqData.map(({ question, answer }, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            tabIndex={0}
            className={`
              flex flex-col
              bg-white
              rounded-xl
              shadow-md
              cursor-pointer
              border border-green-300
              transition-[flex] duration-500 ease-in-out
              overflow-hidden
              ${isActive ? "flex-[4] min-h-[180px]" : "flex-[1] min-h-[80px] opacity-80 hover:opacity-100"}
            `}
            aria-expanded={isActive}
          >
            <div className="px-5 py-3 bg-green-700 text-white font-semibold text-base rounded-t-xl">
              {question}
            </div>
            <div
              className={`
                px-5 pt-2 pb-4 text-gray-800 text-sm transition-opacity duration-300 ease-in-out
                ${isActive ? "opacity-100 max-h-48" : "opacity-0 max-h-0 pointer-events-none"}
                overflow-hidden
                flex-grow
              `}
            >
              {answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
