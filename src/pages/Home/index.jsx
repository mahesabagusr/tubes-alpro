import { Button } from "@/components/ui/button";
import jumbotron from "@/assets/images/landing-page-jumbotron.svg";

export const HomePage = () => {
  return (
    <>
      <section
        id="'home"
        className="bg-blue-200 text-primary-black h-full w-full px-32 pt-6 "
      >
        <div className="grid-cols-2 grid gap-2 justify-between">
          <div className="container mx-auto flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6 leading-[60px]">
              Jadilah Pemain Game Terbaik dengan JadiJago
            </h1>
            <p className="text-md mb-8 text-gray-900">
              Bareng tim e-sport berpengalaman, kamu bisa dapetin insight dan
              strategi jitu buat jadi yang terbaik di game favoritmu dengan{" "}
              <span className="font-bold">JadiJago</span>
            </p>
            <Button
              variant="secondary"
              size="sm"
              className=" h-[50px] w-[178px]"
            >
              Daftar Sekarang
            </Button>
          </div>
          <div className="order-1 md:order-2 flex justify-center ">
            <img
              src={jumbotron}
              alt="Jumbotron"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};
