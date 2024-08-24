import React from "react";
import { AccordionCustomIcon } from "./AccordianCustomIcon";
import faqImg from "../assets/faqImg.png";

function Faq() {
  return (
    <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-14 px-5 md:px-10">
      {/* Left section with FAQ content */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold">FAQS</h1>
        <p className="text-md font-semibold">
          Frequently asked Question & Answers Here
        </p>
        <div className="mt-3">
          <AccordionCustomIcon />
        </div>
      </div>
      {/* Right section with image */}
      <div className="items-center justify-center rounded-xl hidden lg:block">
        <img
          src={faqImg}
          alt="FAQ Image"
          className="w-full h-auto max-w-md rounded-xl"
        />
      </div>
    </div>
  );
}

export default Faq;
