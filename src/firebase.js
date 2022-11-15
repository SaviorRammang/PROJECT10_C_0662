import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAp5taGKmS8d0uLIb1HqFRuZChgSaSiccI",
  authDomain: "vuefire0662.firebaseapp.com",
  databaseURL: "https://vuefire0662-default-rtdb.firebaseio.com",
  projectId: "vuefire0662",
  storageBucket: "vuefire0662.appspot.com",
  messagingSenderId: "1074941822493",
  appId: "1:1074941822493:web:14f33a5991205b323c68f4"
}

const firebaseApp = initializeApp(firebaseConfig);

//tambahkan code untuk menginisialisasikan Realtime Database 
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp); //testmic
