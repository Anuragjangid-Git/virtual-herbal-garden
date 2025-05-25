import { Leaf } from "lucide-react";
import { useMemo, useState } from "react";
import {  getPlants } from "../api/firestoreApi";
import PlantsCard from "./PlantsCard";
import { useNavigate } from "react-router-dom";


interface AddToCollectionProps {
  onEdit: () => void;
}



const CollectionCard = ({ onEdit }: AddToCollectionProps) => {
    let navigate = useNavigate();
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
    }[]
>([]);

    useMemo(() => {
        getPlants(setAllPlants);
       
    }, []);



  return (
    <div>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Collection</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="bg-green-600 text-white p-[5px] rounded-lg"
                onClick={onEdit}
              >
                Add Plant
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {allPlants.map((plants)=>{
            return(
                <PlantsCard plants={plants} />
            );
        })}
     </div>
    </div>
  );
};

export default CollectionCard;
