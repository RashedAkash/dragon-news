// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  console.log(import.meta.env.VITE_AUTHDOMAIN);

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD1Qw85nELD1_iI1Nbvdry62OuHe7UKheo",
//   authDomain: "dragon-news-5086a.firebaseapp.com",
//   projectId: "dragon-news-5086a",
//   storageBucket: "dragon-news-5086a.appspot.com",
//   messagingSenderId: "538701726468",
//   appId: "1:538701726468:web:2b7c99ca7896f3616b4651"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);