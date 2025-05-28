// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
// apiKey: "AIzaSyDe1j3LTQM0WLnyvibD21p2kU77QhVjuDQ",
// authDomain: "subscription-box-fd605.firebaseapp.com",
// projectId: "subscription-box-fd605",
// storageBucket: "subscription-box-fd605.firebasestorage.app",
// messagingSenderId: "247365881797",
// appId: "1:247365881797:web:f1c57c8fb6445ed22bc5ac",
// measurementId: "G-MLWRSPHRQP",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe1j3LTQM0WLnyvibD21p2kU77QhVjuDQ",
  authDomain: "subscription-box-fd605.firebaseapp.com",
  projectId: "subscription-box-fd605",
  storageBucket: "subscription-box-fd605.firebasestorage.app",
  messagingSenderId: "247365881797",
  appId: "1:247365881797:web:f1c57c8fb6445ed22bc5ac",
  measurementId: "G-MLWRSPHRQP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
