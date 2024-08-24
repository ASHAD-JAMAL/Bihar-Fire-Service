import React from "react";
import { CarouselCustomArrows } from "./CarouselCustomArrows";
import companyBg from "../assets/company-bg.png";
import { MdEmergencyRecording } from "react-icons/md";
import { RiAlarmWarningFill } from "react-icons/ri";
import { FaFireExtinguisher } from "react-icons/fa";
import Card from "../components/Card.jsx";

function Slider() {
  const items = [
    {
      title: "Fire Statements",
      icon: <FaFireExtinguisher />,
      para: "There are many variations of passages about of Lorem Ipsum avalable, but the majority have suffered alteration",
    },
    {
      title: "EMERGENCY HELP",
      icon: <MdEmergencyRecording />,
      para: "There are many variations of passages about of Lorem Ipsum avalable, but the majority have suffered alteration",
    },
    {
      title: "Smoke Alarms",
      icon: <RiAlarmWarningFill />,
      para: "There are many variations of passages about of Lorem Ipsum avalable, but the majority have suffered alteration",
    }
  ];

  return (
    <div className="w-full">
      <CarouselCustomArrows />
      <div
        style={{ backgroundImage: `url(${companyBg})` }}
        className="bg-cover bg-center h-auto w-full py-10 px-4 md:px-20 lg:p-40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              para={item.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
