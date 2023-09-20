import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

type Props = {
  title: String;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: any;
};

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: Props) => {
  const handleSetIndex = (index: number) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex w-full justify-between mb-5  "
      >
        <div className="flex text-[.88rem] lg:text-base">
          <div
            className={`${
              activeIndex === index ? "font-semibold" : "  "
            } text-black`}
          >
            <span className="pr-1 lg:pr-5  text-gray-500">{`${index} )`} </span>{" "}
            {title} <span className="hidden">{activeIndex}</span>
          </div>
        </div>
        <div className="flex items-center justify-center  text-white  ">
          <div className="bg-gray-100 rounded-full p-1">
            {activeIndex === index || activeIndex === 99 ? (
              <ChevronDownIcon
                className={`${
                  activeIndex === 99
                    ? "hidden"
                    : "bg-gray-100 w-5 h-5 font-bold"
                }`}
              />
            ) : (
              <ChevronUpIcon className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
      {(activeIndex === index || activeIndex === 99) && (
        <div className="w-full shadow-3xl rounded-2xl text-black  mb-6 px-3 lg:px-10 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
