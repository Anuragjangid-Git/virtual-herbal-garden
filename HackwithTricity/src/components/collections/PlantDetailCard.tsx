interface Plant {
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
}

const PlantDetailCard = ({ plant }: { plant: Plant }) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 -mt-20 relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{plant.name}</h1>
              <p className="text-xl text-gray-600 italic">{plant.botanicalName}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="font-semibold text-gray-700 mb-1">Category</h2>
              <p className="mb-4">{plant.category}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Origin</h2>
              <p className="mb-4">{plant.origin}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Light Requirement</h2>
              <p className="mb-4">{plant.lightRequirement}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Soil</h2>
              <p className="mb-4">{plant.soil}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Temperature</h2>
              <p className="mb-4">{plant.temperature}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Watering Needs</h2>
              <p className="mb-4">{plant.wateringNeeds}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 mb-1">Uses</h2>
              <p className="mb-4">{plant.uses}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Propagation</h2>
              <p className="mb-4">{plant.propagation}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Care Instructions</h2>
              <p className="mb-4">{plant.careInstructions}</p>
              <h2 className="font-semibold text-gray-700 mb-1">Description</h2>
              <p className="mb-4">{plant.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetailCard;
