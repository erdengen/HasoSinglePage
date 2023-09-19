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
const Kutucuk = ({
  image,
  title,
  desc,
  icons = "sepet_icon",
  desc2 = null,
}: Props) => {
  return (
    <>
      <div className="rounded-lg hucre w-full min-h-[64px] flex flex-col justify-center items-center gap-5 py-10 px-5">
        <div className="text-hasoBlue-500 flex flex-col justify-center items-center gap-2">
          <div>
            <Image
              src={require(`../../../assets/${icons}.svg`)}
              width={35}
              height={35}
              alt={`${title} Icon`}
            />
          </div>
          <div className="font-medium">{title}</div>
        </div>
        <div className="text-black font-thin text-sm text-center">
          {desc}
          {desc2 && (
            <>
              <div className="flex justify-between items-center my-10">
                <hr className="w-full border-gray-300" />
                <span className="p-3 text-xs leading-5 tracking-widest font-bold">
                  VEYA
                </span>
                <hr className="w-full border-gray-300" />
              </div>
              <div className="blocas">{desc2}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Kutucuk;
