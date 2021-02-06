import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD2Swmf9Kp1I5Wpx_TWbyUailurKxuxJBs",
  authDomain: "netflix-36e4f.firebaseapp.com",
  projectId: "netflix-36e4f",
  storageBucket: "netflix-36e4f.appspot.com",
  messagingSenderId: "276988581098",
  appId: "1:276988581098:web:c60b4eb855c2111b62f393",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
