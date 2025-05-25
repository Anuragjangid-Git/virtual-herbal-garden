import { Search, Filter, Leaf, PersonStanding } from 'lucide-react';
import { Link } from 'react-router-dom';
import backGround from '../Images/2629ef31-5d6d-4516-875a-46ff5cc514a8.png'
import { useMemo, useState } from 'react';
import { getPlants } from '../api/firestoreApi';
import PlantsCard from '../components/PlantsCard';

function Home() {

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
    <div className="min-h-screen bg-sage-50">
    
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backGround})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">
            Virtual Herbal Garden
          </h1>
          <p className="text-xl text-white mb-8 text-center max-w-2xl">
            Discover the healing power of medicinal plants from around the world
          </p>
        </div>

        {/* Navigation Links */}
        <div className="absolute top-4 right-4 z-10 flex gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <Search className="h-5 w-5" />
             Plant Assistant
          </Link>
          <Link
            to="/collection"
            className="flex items-center gap-2 text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <Leaf className="h-5 w-5" />
            Collection
          </Link>
           <Link
            to="/profile"
            className="flex items-center gap-2 text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <PersonStanding className="h-5 w-5" />
            Profile
          </Link>
          
        </div>
      </div>

      {/* Quick Filters */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {['Digestion', 'Immunity', 'Skincare', 'Respiratory', 'Stress Relief'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Plants */}
      <div className="flex">
        {allPlants.map((plants)=>{
            return(
                <PlantsCard plants={plants} />
            );
        })}
     </div>
    </div>
  );
}

export default Home;