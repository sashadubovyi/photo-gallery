import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBV36jpX-P4riejmVYQlexhyen4DEijUyU",
  authDomain: "photo-gallery-478c0.firebaseapp.com",
  projectId: "photo-gallery-478c0",
  storageBucket: "photo-gallery-478c0.appspot.com",
  messagingSenderId: "948924880062",
  appId: "1:948924880062:web:1458bd90eacf61bedefaef",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
