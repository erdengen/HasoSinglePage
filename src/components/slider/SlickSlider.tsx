"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Assets from "../../data/assets";
import { base64SolidImage } from "../../utility/SolidImage";

type Props = {};

const SlickSlider = (props: Props) => {
  const data = [
    {
      title:
        "HASO ile ihtiyaçlarını kredi kartın olsun ya da olmasın Hemen Al, bir ay sonra değişen taksit seçenekleriyle ödemeye başla!",
      image: Assets.img.sliderpink,
      imageVideo: Assets.img.hasovideo1,
    },
    {
      title:
        "HASSSSO ile ihtiyaçlarını kredi kartın olsun ya da olmasın Hemen Al, bir ay sonra değişen taksit seçenekleriyle ödemeye başla!",
      imageVideo: Assets.img.sliderpink,
      image: Assets.img.mobile_adam,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    initialSlide: 0,
  };
  return (
    <>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col gap-5 text-black z-20 w-full lg:w-4/6 ">
              <h2 className="font-extrabold text-hasoBlue-600 text-3xl lg:text-5xl px-4 text-center lg:text-left order-2 lg:order-1">
                Satın Almak <br /> Hiç Bu Kadar{" "}
                <span className="font-extralight">Hafif</span> Olmamıştı
              </h2>
              <div className="px-4 order-2 text-center lg:text-justify">
                {item.title}
              </div>

              <div className="px-4 lg:pr-16 order-3 text-center lg:text-justify">
                HASO Platformu, üyesi olan iş yerlerinin kendi müşterilerine
                taksitli satış yapmalarını sağlayan bir platformdur. HASO
                Platformu bir finansal kuruluş değildir sizi kredilendirmez,
                HASO ile yapmış olduğunuz tüm taksitlendirmeler ürünü satan HASO
                üye iş yerleri tarafından yapılmaktadır.
                <div className="py-4">
                  <button className="btnBlue"> Hemen Limitini Öğren!</button>
                </div>
              </div>

              <div className="mb-12 order-1 lg:order-4 text-center mx-auto">
                <Image
                  src={Assets.img.hasovideo1}
                  width={312}
                  height={246}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="lg:block lg:absolute lg:bottom-8 lg:right-0 z-10">
              <div className="hidden lg:block">
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt="Haso buy"
                />
              </div>
              <div className="flex lg:hidden w-full mx-auto text-center  justify-center">
                <Image
                  src={Assets.img.mobile_adam}
                  width={232}
                  height={282}
                  alt="Mobile Adam"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SlickSlider;
