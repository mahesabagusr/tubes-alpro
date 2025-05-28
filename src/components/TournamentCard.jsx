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
    <div className="max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="relative h-56 overflow-hidden m-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-4 flex items-end  ">
          <h2 className="text-white text-xl font-extrabold truncate">{name}</h2>
        </div>
      </div>

      <div className="py-4 px-6 flex flex-col space-y-3">
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
            📍{city}, {country} <br /> {address}
          </div>
          <div className="grid gap-2 space-x-2 justify-center">
            <span className="text-gray-800 text-sm font-medium">
              Total Hadiah
            </span>
            <span className="flex bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-bold justify-center">
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
