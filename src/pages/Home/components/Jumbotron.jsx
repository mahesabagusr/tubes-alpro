import jumbotron from "@/assets/images/landing-page-jumbotron.svg";
import { Button } from "@/components/ui/button";
export default function Jumbotron() {
  return (
    <section
      id="home"
      className="relative h-[80vh] w-full px-32  text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url(@/assets/images/jumbotron-background.jpg)] bg-cover bg-no-repeat bg-center z-10 brightness-45"></div>

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-2 gap-8 items-center min-h-[80vh] py-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6 leading-[60px] tracking-tight">
              Jadilah Pemain Game Terbaik dengan JadiJago
            </h1>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Bareng tim e-sport berpengalaman, kamu bisa dapetin insight dan
              strategi jitu buat jadi yang terbaik di game favoritmu dengan{" "}
              <span className="font-bold text-white">JadiJago</span>
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="h-[50px] w-[178px] hover:scale-105 transition-transform"
            >
              Daftar Sekarang
            </Button>
          </div>
          <div className=" flex justify-center ">
            <img src={jumbotron} alt="Jumbotron" className=" max-w-[500px] pt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
