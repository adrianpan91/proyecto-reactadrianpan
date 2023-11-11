import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGBbjuSNR_CMvBgRRHwIAbkXi3lHa1X9c",
  authDomain: "proyecto-react-final-bf047.firebaseapp.com",
  projectId: "proyecto-react-final-bf047",
  storageBucket: "proyecto-react-final-bf047.appspot.com",
  messagingSenderId: "1004849475349",
  appId: "1:1004849475349:web:3269bca6a297f9f531031c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
