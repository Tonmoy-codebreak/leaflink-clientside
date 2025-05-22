import React from 'react';
import Accordion from './Accordion';

const GardenTools = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-logo text-center primary-text py-5 mt-20 md:mt-32 mb-10 md:mb-16">
        Gardening Tools FAQ
      </h1>

      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-10 gap-6 items-center">
        {/* Image Section */}
        <div className="md:col-span-4 mb-6 md:mb-0">
          <img
            src="/images/gardener.jpg"
            alt="Gardener"
            className="w-full h-auto rounded-xl "
          />
        </div>

        {/* Accordion Section */}
        <div className="md:col-span-6">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default GardenTools;
