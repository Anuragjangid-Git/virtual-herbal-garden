import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";



export const RegisterApi = async (email: string, password: string) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error; 
  }
};




export const LogoutApi = async () => {
  try {
    let response = await signOut(auth);
    return response;
  } catch (error) {
    return error;
  }
};


export const LoginApi = async (email: string, password: string) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

export const GoogleSignInApi = async () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let response = await signInWithPopup(auth, googleProvider);
    return response;
  } catch (error) {
    throw error;
  }
};
