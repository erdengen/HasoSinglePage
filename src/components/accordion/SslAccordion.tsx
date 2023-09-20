"use client";
import React, { useState } from "react";
import { sslData } from "src/data/ssl";
import AccordionLayout from "./AccordionLayout";

type Props = {};

const SslAccordion = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 p-5 lg:p-14">
        <p className="text-center text-black text-[15px] leading-5 font-medium">
          HASO ile Kredi Kartın Olsun ya da Olmasın
          <br />
          <span className="font-extrabold">Hemen Al</span> Bir Ay Sonra Değişen
          Taksit Seçenekleriyle Ödemeye Başla!
        </p>
        <button className="btnBlue">Hemen Limitini Öğren!</button>
      </div>
      <h3 className="bg-[url('/img/Intersect.png')] bg-hasoBlue-300 bg-no-repeat text-white font-semibold rounded-lg px-6 py-3 my-3 text-sm lg:text-xl tracking-wider">
        HASO SSS (Sıkça Sorulan Sorular)
      </h3>
      {sslData.map((x, i) => (
        <div
          key={i}
          className="flex flex-col w-full justify-start items-center p-3 lg:p-6 mb-5 bg-white rounded-lg"
        >
          <AccordionLayout
            title={x.title}
            index={i + 1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {x.desc}
          </AccordionLayout>
        </div>
      ))}
    </>
  );
};

export default SslAccordion;
