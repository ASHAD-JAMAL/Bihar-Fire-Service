import React from "react";
import { Typography } from "@material-tailwind/react";
import footerHand from "../assets/biharphone.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaXing,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function FooterWithLogo() {
  return (
    <footer className="w-full bg-[#35393a] py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="flex items-center md:items-start bg-[#35393a]">
          <img src={footerHand} className="w-40 mb-4" alt="Footer Hand" />
        </div>
        <div className="flex flex-col items-center md:items-start text-white mb-4">
          <Typography variant="h6" className="mb-4">
            Contact Us
          </Typography>
          <div className="flex text-center items-center mb-2 group">
            <FaPhoneAlt className="mr-2 w-10 h-10 rounded-full text-[#ca4445] bg-[#35393a] p-2 group-hover:bg-[#ca4445] group-hover:text-white  duration-300 cursor-pointer" />
            <Typography as="a" href="tel:+123456789" className="text-white">
              +1 234 567 89
            </Typography>
          </div>
          <div className="flex text-center items-center mb-2 group">
            <FaEnvelope className="mr-2 w-10 h-10 rounded-full text-[#ca4445] bg-[#35393a] p-2 group-hover:bg-[#ca4445] group-hover:text-white  duration-300 cursor-pointer" />
            <Typography
              as="a"
              href="mailto:info@example.com"
              className="text-white"
            >
              info@example.com
            </Typography>
          </div>
          <div className="flex text-center items-center mb-2 group">
            <FaMapMarkerAlt className="mr-2 w-10 h-10 rounded-full text-[#ca4445] bg-[#35393a] p-2 group-hover:bg-[#ca4445] group-hover:text-white duration-300 cursor-pointer" />
            <Typography className="text-white">
              1234 Street Name, City, Country
            </Typography>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <a
            href="https://www.facebook.com/biharfireservicesandhomeguard?mibextid=ZbWKwL "
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ca4445] transition-colors group"
            aria-label="Facebook"
          >
            <FaFacebookF className="group-hover:text-white text-[#1877F2] text-xl" />
          </a>
          <a
            href="https://instagram.com/biharfireservice?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ca4445] transition-colors group"
            aria-label="Instagram"
          >
            <FaInstagram className="group-hover:text-white text-[#E1306C] text-xl" />
          </a>
          <a
            href="https://x.com/Biharfire112?t=qMmYeexotDOXW_tbtT0DqQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ca4445] transition-colors group"
            aria-label="X"
          >
            <FaXing className="group-hover:text-white text-[#1DA1F2] text-xl" />
          </a>
          <a
            href="https://youtube.com/@BiharFireServiceHomeGuard?si=UgS5z9VH5AUHn_Q0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ca4445] transition-colors group"
            aria-label="YouTube"
          >
            <FaYoutube className="group-hover:text-white text-[#FF0000] text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/bihar-fire-service-home-guard/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-[#ca4445] transition-colors group"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="group-hover:text-white text-[#0077B5] text-xl" />
          </a>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography
        color="blue-gray"
        className="text-center font-normal text-white"
      >
        &copy; 2024 Bihar Fire Service
      </Typography>
    </footer>
  );
}

export default FooterWithLogo;
