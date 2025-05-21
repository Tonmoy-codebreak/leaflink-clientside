import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title bg-green-700 text-white font-read font-semibold">
          Which tools are essential for beginners?
        </div>
        <div className="collapse-content text-lg font-read">
          Beginners should start with gloves, a trowel, pruning shears, a
          watering can, and a hand fork. These cover most basic gardening needs.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title  bg-green-700 text-white font-read font-semibold">
          How often should I clean my garden tools?
        </div>
        <div className="collapse-content text-lg font-read">
         You should clean your garden tools after every use to prevent the spread of plant diseases and rust buildup. Simply rinsing with water and wiping dry is often enough for daily use. Once a month, disinfect with rubbing alcohol or diluted bleach, and apply oil to metal parts to keep them sharp and rust-free.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title  bg-green-700 text-white font-read font-semibold">
          What's the best way to store garden tools to extend their lifespan?
        </div>
        <div className="collapse-content text-lg font-read">
          Store your garden tools in a dry, sheltered place like a shed or garage to protect them from moisture and rust. Hang tools with sharp edges or long handles on wall hooks to prevent damage and injury. For extra protection, apply a light coat of linseed oil to wooden handles and machine oil to metal parts before storing them.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
