"use client";
import Image from "next/image";
import React from "react";
import Assets from "../../data/assets";

type Props = {
  title?: string;
  desc?: string;
  imageSrc?: any;
  type?: boolean;
};

const HizliBasit = ({ title, desc, imageSrc, type = true }: Props) => {
  return (
    <>
      <div className="hucre rounded-t-lg lg:rounded-lg  w-full p-5 flex flex-col">
        <div className={`flex flex-col gap-5 ${type ? "order-1" : "order-2"}`}>
          <h1 className="w-full block text-center font-bold tracking-wider text-lg">
            {title}
          </h1>
          <p className="text-black font-thin text-sm text-center">{desc}</p>
        </div>
        <div
          className={`w-full text-center flex justify-center p-5 ${
            type ? "order-2" : "order-1"
          }`}
        >
          <Image
            src={imageSrc}
            width={246}
            height={350}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default HizliBasit;
