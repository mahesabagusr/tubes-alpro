import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TournamentCard from "@/components/TournamentCard"; // sesuaikan path komponen TournamentCard
import { TournamentList } from "@/constants/TournamentList"; // sesuaikan path datanya

export default function BestTournament() {
  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 24,
    slidesPerView: 4,
    loop: true,
  };
  const isCarousel = TournamentList.length > 3;

  return (
    <section
      id="tournament"
      className="text-white py-24 bg-tournament-gradient"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <h1 className="text-5xl font-bold mb-4">Turnamen Terbaik</h1>
          <p className="text-md max-w-xxl text-white/80">
            Bergabunglah dengan turnamen kami dan buktikan kemampuanmu di dunia
            e-sport!
          </p>
        </div>

        {isCarousel ? (
          <Swiper {...swiperConfig}>
            {TournamentList.map((tournament, index) => (
              <SwiperSlide key={index}>
                <TournamentCard tournament={tournament} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {TournamentList.map((tournament, index) => (
              <TournamentCard key={index} tournament={tournament} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
