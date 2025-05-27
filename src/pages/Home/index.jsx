import { Button } from "@/components/ui/button";
import Jumbotron from "./components/Jumbotron";
import BestTournament from "./components/BestTournament";


import OurPartner from "./components/OurPartner";
export const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <OurPartner/>
      <BestTournament></BestTournament>
    </>
  );
};
