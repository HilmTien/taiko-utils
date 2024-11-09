import AccuracyCard from "./cards/AccuracyCard";
import MapStatsCard from "./cards/MapStatsCard";
import ModsCard from "./cards/ModsCard";

export default function PPInputCards() {
  return (
    <div className="flex gap-4 flex-wrap mx-10 justify-center">
      <MapStatsCard />
      <AccuracyCard />
      <ModsCard />
    </div>
  );
}
