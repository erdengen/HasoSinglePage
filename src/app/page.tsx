"use client";
import SslAccordion from "@/components/accordion/SslAccordion";
import SlickSlider from "@/components/slider/SlickSlider";
import Assets from "../data/assets";

import benefitOneImg from "@/assets/sepet_icon.svg";
import Image from "next/image";
import Kutucuk from "@/components/misc/Kutucuk";
import HizliBasit from "@/components/misc/HizliBasit";
import TeaserSlider from "@/components/slider/TeaserSlider";
//union
export default function Home() {
  return (
    <main id="content" className="flex flex-col ">
      <div className="slickSlider  bg-[url('/img/Union.png')] bg-no-repeat  bg-left-top bg-cover  bg-opacity-5 pt-5">
        <div className="container xl:max-w-[1348px] mx-auto px-4 text-hasoBlue-500">
          <SlickSlider />
        </div>
      </div>
      <div className="bg-[#dce4f1] lg:min-h-[968px]">
        <div className="container xl:max-w-[1348px] mx-auto px-4 text-hasoBlue-400 my-24">
          <div className="article">
            <div className="lg:absolute text-white bg-[url('/img/44.svg')] bg-no-repeat bg-hasoBlue-300 w-full lg:min-h-[296px]  rounded-t-lg lg:rounded-lg  flex flex-col justify-start items-center ">
              <div className="w-full  text-center text-lg font-medium  tracking-wider mt-5">
                Hızlı <span className="font-thin ">ve</span> Basit
              </div>
              <div className="w-full  text-center text-base font-thin  mb-5 lg:mb-1">
                Tıkla, hemen limitini öğren ve alışverişini tamamla!
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5  z-20 top-32 w-full lg:px-10 lg:absolute">
              <HizliBasit
                title={"Kredi Kartın mı Yok? Dert Etme!"}
                desc="Kredi kartın olmasa da alışverişini hemen yap, vade gününde
              istediğin kanaldan (havale-EFT, Mobil, Ödeme, Kredi Kartı, Debit
              Kart, Ön Ödeme Kart) Öde!"
                imageSrc={Assets.img.phone_limit1}
              />

              <HizliBasit
                title={"Heman Al, 1 Ay Sonra Taksitle Öde"}
                desc="İhtiyaçlarını bugün al, ödemeye değişen taksit seçenekleri ile 1 ay sonra başla."
                imageSrc={Assets.img.phone_limit2}
                type={false}
              />

              <HizliBasit
                title={"Kart Limitini Düşünme"}
                desc="Mevcut kart limitinden bağımsız alışverişini tamamla, kredi kartından alışveriş tutarın bloke olmadan, her ay ödemeni gerçekleştir."
                imageSrc={Assets.img.phone_limit3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 bg-gradient-to-b from-gray-200 to-transparent bg-no-repeat  bg-left-top bg-cover  ">
        <div className="container xl:max-w-[1348px] mx-auto px-4 text-hasoBlue-500">
          <div className="flex flex-col font-medium text-center">
            <h1 className="w-full block text-center font-bold tracking-wider text-2xl">
              Hemen Al Sonra Öde
            </h1>
            <p>Nasıl Kullanılır?</p>
          </div>
          <div className="flex flex-col gap-5 lg:hidden mt-10">
            <div className="">
              <div className="w-full flex mx-auto text-center items-center justify-center">
                <Image
                  src={Assets.img.phone_limit}
                  width={300}
                  height={450}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="w-full">
              <TeaserSlider />
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-4 gap-4 mt-10 ">
            <div className="flex flex-col gap-10">
              <Kutucuk
                desc="Sana uygun ürünleri sepetine ekle"
                title="Sepetine Ürün Ekle"
              />
              <Kutucuk
                desc="Başvuru formunda istenilen bilgileri gir, HASO Kullanım Koşulları’nı onayla ve limitini öğren butonuna tıkla."
                title="Limitini Öğren"
                icons="limit_icon"
              />
              <Kutucuk
                desc="Telefonuna Findeks veya HASO’dan gelen SMS şifresini gir."
                title="SMS Şifreni Onayla"
                icons="smsonay_icon"
              />
            </div>
            <div className="col-span-2">
              <div className="w-full flex mx-auto text-center items-center justify-center">
                <Image
                  src={Assets.img.phone_limit}
                  width={332}
                  height={657}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="flex flex-col gap-24">
              <Kutucuk
                desc="Kendine uygun olan taksit planını seçerek işlemini onayla."
                title="Taksit Planını Seç"
                icons="taksitplan_icon"
              />
              <Kutucuk
                desc="Sana uygun ürünleri sepetine ekle"
                title="Ödeme Yöntemini Seç"
                desc2="Kartlı ödeme haricinde bir yöntem ile ödeme butonuna tıklayarak alışverişini tamamla."
                icons="odemeyontemi"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dce4f1] w-full mx-auto pb-16">
        <div className="container xl:max-w-[1348px] mx-auto px-4 ">
          <SslAccordion />
        </div>
      </div>
    </main>
  );
}
