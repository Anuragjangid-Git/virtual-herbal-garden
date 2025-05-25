import { toast } from "react-toastify";
import { firestore } from "../firebaseConfig";
import { addDoc, collection, doc, getDoc, onSnapshot } from "firebase/firestore";
interface PostObject {
  [key: string]: any;
}
const userRef = collection(firestore, "users");
const plantCollectionRef = collection(firestore, "plantscollection");
export const postUserData = (object: PostObject) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser: Function) => {
  let currEmail = localStorage.getItem("userEmail");
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((doc) => ({
          ...(doc.data() as { email: string }),
          userId: doc.id,
        }))
        .filter((item) => {
          return item.email === currEmail;
        })[0]
    );
  });
};

export const addToCollection = (
  userId: string,
  payload: Record<string, any>
) => {
  addDoc(plantCollectionRef, {
    ...payload,
    userId: userId,
  })
    .then(() => {
      toast.success("Plant added to collection ");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPlants = (setAllPlants: Function) => {
  onSnapshot(plantCollectionRef, (response) => {
    setAllPlants(
      response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  });
};

export const getSinglePlant = async (id: string, setSinglePlant: Function) => {
  try {
    const docRef = doc(plantCollectionRef, id); 
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSinglePlant({ ...docSnap.data(), id: docSnap.id });
    } else {
      console.log("❌ No such document!");
      setSinglePlant(null);
    }
  } catch (error) {
    console.error("❌ Error fetching plant:", error);
    setSinglePlant(null);
  }
};





