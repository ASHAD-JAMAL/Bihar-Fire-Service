import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody ,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="bg-[#efe6e1] p-2 rounded-xl"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b-0 px-1 text-lg" // Removes the bottom border
        >
          What services does the Fire Department provide?
        </AccordionHeader>
        <AccordionBody className="px-2">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody >
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="bg-[#efe6e1] my-3 p-2 rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0  px-1 text-lg ">
          How do I report a fire or emergency?
        </AccordionHeader>
        <AccordionBody className="px-2">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody >
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="bg-[#efe6e1] p-2 rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 px-1 text-lg">
          Can I request a fire safety inspection for my property?
        </AccordionHeader>
        <AccordionBody className="px-2">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody >
      </Accordion>
      <Accordion
        open={open === 4}
        icon={<Icon id={4} open={open} />}
        className="bg-[#efe6e1] my-3 p-2 rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 px-1 text-lg ">
          How can I obtain a copy of a fire incident report?
        </AccordionHeader>
        <AccordionBody className="px-2">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody >
      </Accordion>
      <Accordion
        open={open === 5}
        icon={<Icon id={5} open={open} />}
        className="bg-[#efe6e1] p-2 rounded-xl"
      >
        <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 px-1 text-lg">
          What type of training do firefighters undergo?
        </AccordionHeader>
        <AccordionBody className="px-2">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody >
      </Accordion>
    </>
  );
}
