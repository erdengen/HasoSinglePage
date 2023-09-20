"use client";
import Image from "next/image";
import React from "react";

type Props = {
  image?: string;
  title?: string;
  desc?: string;
  desc2?: string | null;
  icons?: string;
};
import benefitOneImg from "@/assets/sepet_icon.svg";
const KutucukSlider = ({
  image,
  title,
  desc,
  icons = "sepet_icon",
  desc2 = null,
}: Props) => {
  return (
    <>
      <div className="rounded-lg hucre2 w-full min-h-[185px] lg:min-h-[64px] flex flex-col justify-center items-center gap-5 p-2 lg:py-10 lg:px-5">
        <div className="text-white lg:text-hasoBlue-500 flex flex-col justify-center items-center gap-2">
          <div>
            <Image
              src={require(`../../../assets/${icons}.svg`)}
              width={35}
              height={35}
              alt={`${title} Icon`}
            />
          </div>
          <div className="font-medium text-center">{title}</div>
        </div>
        <div className="text-white lg:text-black font-thin text-xs lg:text-sm text-center">
          {desc}
          {desc2 && (
            <>
              <div className="hidden lg:flex justify-between items-center my-10">
                <hr className="w-full border-gray-300" />
                <span className="p-3 text-xs leading-5 tracking-widest font-bold">
                  VEYA
                </span>
                <hr className="w-full border-gray-300" />
              </div>
              <div className="hidden lg:block">{desc2}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default KutucukSlider;
