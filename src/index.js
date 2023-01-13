import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Q2F5sCysiSNam4kkhpH7hGGrP2oEYsE",
  authDomain: "vife-ecommerce.firebaseapp.com",
  projectId: "vife-ecommerce",
  storageBucket: "vife-ecommerce.appspot.com",
  messagingSenderId: "349227008209",
  appId: "1:349227008209:web:e543ec5b1133389f6d85f0",
  measurementId: "G-JXX8LD81NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const addOrder = async (order) => {
  const docSnap = await addDoc(collection(db, "orders"), order)
  return docSnap.id
}

export const db = getFirestore(app) 
export {addOrder}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
