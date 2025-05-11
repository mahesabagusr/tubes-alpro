import evos from "@/assets/images/evos.png";
export default function OurPartner() {

  const partners = [
    {
      name: "Evos",
      logo: evos,
    },
    {
      name: "Alter Ego",
      logo: evos,
    },
    {
      name: "Onic",
      logo: evos,
    },
  ];

  return (
    <section
      id="partner"
      className="bg-gray-100 text-primary-black h-full w-full px-32 pt-12"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-6 leading-[60px]">Partner Kami</h1>
        <p className="text-md mb-8 text-gray-900">
          Kami bekerja sama dengan tim e-sport terkemuka untuk memberikan
          pengalaman belajar yang terbaik.
        </p>
        <div className="flex justify-between gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center mb-4 grid-cols-5"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="w-full max-w-[250px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
