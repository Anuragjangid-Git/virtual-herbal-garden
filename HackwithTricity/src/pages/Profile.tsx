import { LogoutApi } from "../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import {
  Edit2,
  MapPin,
  Mail,
  LogOut,
  Leaf,
  ShoppingBag,
  Camera,
  Calendar,
  Heart,
  Home,
} from "lucide-react";
import { useMemo, useState } from "react";
import { getCurrentUser } from "../api/firestoreApi";
interface User {
  name?: string;
  email?: string;
  location?: string;
  joinedDate?: string;
}

function Profile() {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<User>({});
  const logOut = () => {
    LogoutApi()
      .then(() => {
        localStorage.removeItem("userEmail");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={
                  "https://i.pinimg.com/474x/c3/08/ed/c308ed9ea418a1c2492f5b1fb46104ca.jpg"
                }
                alt={currentUser?.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{currentUser?.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {currentUser?.email}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {"New Delhi, India"}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {"Jan 2023"}
                </div>
              </div>
            </div>
            <div className="flex  gap-4  items-center">
              {/* <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                <Edit2 className="h-4 w-4" />
                Edit Profile
              </button> */}
              <Link to="/">
                <p className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2">
                  <Home className="w-4 h-4 " />
                  Home
                </p>
              </Link>
              <button
                onClick={logOut}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Leaf className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{18}</div>
              <div className="text-sm text-gray-600">Saved Plants</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{12}</div>
              <div className="text-sm text-gray-600">Orders</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Heart className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{5}</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
