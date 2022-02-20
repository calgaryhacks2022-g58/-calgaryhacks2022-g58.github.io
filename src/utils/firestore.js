import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBMJmZxp-4fnCeOHmcsRCBvprEnO_lMqwI",
  authDomain: "calgaryhacks-2022-416e3.firebaseapp.com",
  projectId: "calgaryhacks-2022-416e3",
  storageBucket: "calgaryhacks-2022-416e3.appspot.com",
  messagingSenderId: "363766573568",
  appId: "1:363766573568:web:f02f7c3bd8de5d379386e5",
  measurementId: "G-8ZEZ3GX6YS",
};

const firebaseApp = initializeApp(config);

export const db = getFirestore(firebaseApp);

export default firebaseApp;
