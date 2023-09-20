"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import KutucukSlider from "../misc/KutucukSlider";

type Props = {};

const TeaserSlider = (props: Props) => {
  useEffect(() => {}, []);
  const teaser = [
    {
      desc: "Sana Uygun ürünleri sepetine ekle.",
      title: "Sepetine Ürün Ekle",
      icons: "sepet_icon",
    },
    {
      desc: "Başvuru formunda istenilen bilgileri gir, HASO Kullanım Koşulları’nı onayla ve limitini öğren butonuna tıkla.",
      title: "Limitini Öğren",
      icons: "limit_icon",
    },
    {
      title: "SMS Şifreni Onayla",
      desc: "Telefonuna Findeks veya HASO’dan gelen SMS şifresini gir.",
      icons: "smsonay_icon",
    },
    {
      desc: "Kendine uygun olan taksit planını seçerek işlemini onayla.",
      title: "Taksit Planını Seç",
      icons: "taksitplan_icon",
    },
    {
      desc: "Sana uygun ürünleri sepetine ekle",
      title: "Ödeme Yöntemini Seç",
      icons: "odeme_yontem_mobil",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    useTransform: false,
    dotsClass: "slick-dots w-full",
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    centerPadding: "30px",
  };
  const sliderRef = React.useRef<Slider | null>(null);

  return (
    <div className="block relative mx-auto w-full">
      <Slider {...settings} arrows={true} ref={sliderRef} className="slidernew">
        {teaser.map((item, index) => (
          <div key={index} className="relative w-full block px-1 ">
            <KutucukSlider
              desc={item.desc}
              title={item.title}
              icons={item.icons}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeaserSlider;
