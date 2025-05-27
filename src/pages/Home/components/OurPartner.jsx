import { partnerLists } from "@/constants/OurPartnerList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurPartner() {
  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: -50,
    slidesPerView: 5,
    loop: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <section
      id="partner"
      className="bg-white text-primary-black h-[80vh] max-w-full px-2 py-24  flex justify-center items-center"
    >
      <div className="w-full h-full mx-auto">
        <div className="flex flex-col justify-center items-center text-center mb-8 ">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
            Partner Kami
          </h1>
          <p className="text-sm lg:text-md text-gray-900 max-w-2xl">
            Kami bekerja sama dengan tim e-sport terkemuka untuk memberikan
            pengalaman belajar yang terbaik.
          </p>
        </div>

        <div className="relative w-full px-12">
          <Swiper {...swiperConfig}>
            {partnerLists.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-50 bg-white">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="max-h-[130px] w-auto object-contain object-center transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev !left-0 !text-black !w-10 !h-10  transition-colors" />
            <div className="swiper-button-next !right-0 !text-black !w-10 !h-10  transition-colors" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
