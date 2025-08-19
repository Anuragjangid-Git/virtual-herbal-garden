import PlantDetailCard from '../components/collections/PlantDetailCard';
import { ArrowLeft } from 'lucide-react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { getSinglePlant } from '../api/firestoreApi';

function PlantDetails() {
    const [singlePlant,setSinglePlant] =  useState({})

  const {id} = useParams<{id: string}>();
  
 useEffect(() => {
    if (id) {
      getSinglePlant(id, setSinglePlant);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-sage-50">
      <div 
        className="h-[50vh] relative bg-cover bg-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=2070&quot)` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-4 left-4 z-10">
          <Link
            to="/"
            className="flex items-center gap-2 text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
      <PlantDetailCard plant={singlePlant}/>
    </div>
  );
}



export default PlantDetails;