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
    <div className="max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 ">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-tl from-black/50 via-transparent to-40% p-4">
          <h2 className="text-white text-xl font-extrabold truncate">
            {name}
          </h2>
        </div>
      </div>

      <div className="p-6 flex flex-col space-y-3">
        <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

        <div className="flex justify-between items-center text-gray-700 text-md font-medium">
          <span>
            {new Date(date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-600 text-sm">
            {city}, {country} <br /> {address}
          </div>
          <div className="grid gap-2 space-x-2 justify-center">
            <span className="text-gray-600 text-sm">Total Hadiah</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-bold justify-center">
              ${prizePool.toLocaleString()}
            </span>
          </div>
        </div>

        <Button className="mt-4 w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-colors duration-200">
          Join Tournament
        </Button>
      </div>
    </div>
  );
}
