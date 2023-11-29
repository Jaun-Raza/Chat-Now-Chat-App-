import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1LfHPlSbQoffQQs68Px8m1CTp3V6h9CA",
  authDomain: "chat-app-9349e.firebaseapp.com",
  projectId: "chat-app-9349e",
  storageBucket: "chat-app-9349e.appspot.com",
  messagingSenderId: "790153304786",
  appId: "1:790153304786:web:b562f0629d81505964ab0b",
  measurementId: "G-941G0YCFZR"
};

export const app = initializeApp(firebaseConfig);