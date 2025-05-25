
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {auth} from '../firebaseConfig'
import Loader from "../components/Loader"
import RegisterComponent from "../components/RegisterComponent"
const Register = () => {
  let navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, async (res) => {
        if (res) {
            const token = await res.getIdToken();
            if (token) {
                navigate('/');
            }
            else {
              setLoading(false);
          }
        }
    });
},[])
  return !loading ? <Loader/>:<RegisterComponent />
}

export default Register
