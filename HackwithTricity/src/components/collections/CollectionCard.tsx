import { Home, Leaf } from "lucide-react";
import { useMemo, useState } from "react";
import { getPlants } from "../../api/firestoreApi";
import PlantsCard from "./PlantsCard";
import { Link } from "react-router-dom";
import SearchPlant from "./SearchPlant";

const CollectionCard = () => {

  const [allPlants, setAllPlants] = useState<
    {
      botanicalName: string;
      careInstructions: string;
      category: string;
      description: string;
      lightRequirement: string;
      name: string;
      origin: string;
      propagation: string;
      soil: string;
      temperature: string;
      userId: string;
      uses: string;
      wateringNeeds: string;
      id: string;
    }[]
  >([]);

  useMemo(() => {
    getPlants(setAllPlants);
  }, []);

  const [searchedPlant, setSearchedPlant] = useState("");


  const filteredPlants = allPlants.filter((plant) =>
    plant.name.toLowerCase().includes(searchedPlant.toLowerCase())
  );

  return (
    <div className="">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer"
              
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Collection</h1>
            </div>
            <div  className="flex items-center gap-6">
              <SearchPlant setSearchedPlant={setSearchedPlant} />
             <Link to="/">
                <p className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4 " />
                  Home
                </p>
              </Link>
          </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-wrap gap-3 p-4">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantsCard key={plant.id} plants={plant} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">No plants found 🌱</p>
        )}
      </div>
    </div>
  );
};

export default CollectionCard;
