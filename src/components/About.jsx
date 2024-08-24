import React from "react";
import service from "../assets/service.png";
import aboutfire from "../assets/about-fire.png";
import fireImg from "../assets/fire.png";
import { FaBolt, FaPhoneAlt } from "react-icons/fa";
import { TbCircleCheckFilled } from "react-icons/tb";
import { Typography } from "@material-tailwind/react";

function About() {
  return (
    <div id="about" className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-5 md:px-10">
      <div className="left-section">
        <h1 className="text-3xl font-bold my-3">About Us</h1>
        <div className="py-10">
          <h1 className="text-3xl font-bold text-black">
            Your Emergency Fire Allie Here for You, Every Time
          </h1>
          <p className="text-sm text-[#848788]">
            There are many variations of passages about of Lorem Ipsum
            available, but the majority have suffered alteration free in some
            form, by injected humour, or free randomised words which don't look
            even slightly believable.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <div
            style={{
              backgroundImage: `url(${service})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative h-full w-full"
          >
            {/* Overlay layer */}
            <div className="absolute inset-0 bg-[#ca4445] opacity-70 z-1"></div>

            {/* Content goes here */}
            <div className="relative z-2 p-6">
              <h1 className="flex items-center text-white">
                <i className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black transition-colors duration-300 cursor-pointer">
                  <FaBolt size={20} />
                </i>
                <span className="ml-4 text-3xl font-bold">
                  Fast Reliable Services
                </span>
              </h1>
              <br />
              <p className="text-white">
                Fast Reliable Services There are in many variations passages of
                Lorem Ipsum available, but the majority
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="space-y-4">
          <div className="flex space-x-4">
            <p className="flex items-center">
              <i className="mr-2 text-[#ca4445]">
                <TbCircleCheckFilled />
              </i>
              There are many variations
            </p>
            <p className="flex items-center">
              <i className="mr-2 text-[#ca4445]">
                <TbCircleCheckFilled />
              </i>
              There are many variations
            </p>
          </div>
          <div className="flex space-x-4">
            <p className="flex items-center">
              <i className="mr-2 text-[#ca4445]">
                <TbCircleCheckFilled />
              </i>
              There are many variations
            </p>
            <p className="flex items-center">
              <i className="mr-2 text-[#ca4445]">
                <TbCircleCheckFilled />
              </i>
              There are many variations
            </p>
          </div>
        </div>
      </div>
      <div className="right-section flex flex-col justify-center">
        <img src={aboutfire} alt="About Fire" className="mb-4" />
        <img
          src={fireImg}
          alt="Fire"
          className="w-1/2 h-auto mx-auto md:mx-0 hidden lg:block"
        />
        <div className="mt-4 md:-mt-36 md:ml-48">
          <div className="bg-black h-auto flex flex-col md:flex-row items-center gap-4 md:gap-10 py-8 px-4 md:px-10 hover:bg-[#ca4445] transition-colors">
            <div className="text-white">
              <FaPhoneAlt size={30} />
            </div>
            <div className="text-white group text-center md:text-left">
              <p className="font-bold text-xl">Call To AnyTime</p>
              <Typography
                as="a"
                href="tel:+123456789"
                className="text-white text-md group-hover:underline"
              >
                +1 234 567 89
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
