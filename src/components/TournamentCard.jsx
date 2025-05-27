import { Button } from "./ui/button";
export default function TournamentCard({ tournament }) {
  const {
    name,
    description,
    date,
    prizePool,
    location: { city, country, address },
    image,
  } = tournament;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 ">
      <img
        src={image}
        alt={name}
        className="w-full h-50 object-cover rounded-lg mb-4"
      />
      <div className="flex justify-between h-full ">
        <h2 className="text-xl font-semibold text-black mb-2">{name}</h2>
        <div className="flex flex-col items-end">
          <p className="text-black text-sm mb-2">PrizePool : </p>
          <h1 className="text-md font-bold text-black">${prizePool}</h1>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-2">📅 {date}</p>
      <p className="text-gray-500 text-sm">
        📍 {city}, {country}, {address}
      </p>
      <Button
        className={"mt-4 w-full bg-blue-900 hover:bg-blue-700 text-white"}
      >
        Join Tournament
      </Button>
    </div>
  );
}
