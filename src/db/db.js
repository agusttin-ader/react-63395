import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_o6rrjSXeGA0_xT7NSXtR0qr3frr62fw",
    authDomain: "cofito-s-63395.firebaseapp.com",
    projectId: "cofito-s-63395",
    storageBucket: "cofito-s-63395.firebasestorage.app",
    messagingSenderId: "58711629129",
    appId: "1:58711629129:web:08d053c6953072a0d7ce98"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;