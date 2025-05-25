import { Link } from "react-router-dom";

interface Plant {
    id: string;
    name: string;
    description: string;
}

const PlantsCard = ({ plants }: { plants: Plant }) => {
    
    return (
        <div className="py-16 bg-sage-50">
            <div className="flex  items-center">
                <div className="w-[400px] p-[10px] m-[10px]">
                    <div
                        key={plants.name}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={
                                "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=2070"
                            }
                            alt={plants.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {plants.name}
                            </h3>
                          <p className="text-gray-600 mb-4">
  {plants.description.length > 70
    ? plants.description.slice(0, 70) + "..."
    : plants.description}
</p>
                            <Link
                                to={`/plant/${plants.id}`}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors inline-block"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantsCard;
