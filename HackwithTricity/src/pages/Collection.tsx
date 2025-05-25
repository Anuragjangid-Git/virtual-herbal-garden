import { useMemo, useState } from 'react';
import AddToCollection from '../components/AddToCollection';
import CollectionCard from '../components/CollectionCard';
import { getCurrentUser } from '../api/firestoreApi';

function Collection() {
  interface User {
      name?: string;
      email?: string;
      location?: string;
      joinedDate?: string;
      userId: string;
    }

  const [currentUser, setCurrentUser] = useState<User>({ userId: '' });
  const [isEditing, setIsEditing] = useState(false);
  const onEdit =()=>{
    setIsEditing(!isEditing);
  }

useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className="min-h-screen bg-sage-50">
     
    {isEditing?<AddToCollection onEdit={onEdit}  currentUser={currentUser} />:<CollectionCard onEdit={onEdit}  />} 
    </div>
  );
}

export default Collection;