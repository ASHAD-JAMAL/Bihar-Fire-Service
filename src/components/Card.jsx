import React from "react";

function Card({ title, icon, para }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-12 flex flex-col items-center text-center">
      <div className="flex items-center mb-4 gap-10 cursor-pointer bg-[#efe6e1]">
        <div className="text-black  hover:text-white p-3 hover:bg-black">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <i className="mr-2 text-xl">{icon}</i>
      </div>
      <p className="text-center">{para}</p>
    </div>
  );
}

export default Card;
