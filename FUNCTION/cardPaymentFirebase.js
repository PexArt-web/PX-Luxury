import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAlaJM-VlVbuu4P8bLYJueEycgbQGsKFXE",
  authDomain: "avifarms-38607.firebaseapp.com",
  projectId: "avifarms-38607",
  storageBucket: "avifarms-38607.appspot.com",
  messagingSenderId: "867675622454",
  appId: "1:867675622454:web:18760e520884d0902f9c97",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const colRef = collection(db, "users");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const cardName = document.getElementById("cardName");
    const email = document.getElementById("floatingInput");
    //
    const payStackEmail = document.getElementById("userEmail");
    const payStackfirstName = document.querySelector(".firstName");
    const payStacklastName = document.querySelector(".lastName");
    try {
      const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");
      const getNewDoc = await getDoc(docRef, "profileDetails");
      if (getNewDoc.exists()) {
        email.value = getNewDoc.data().email;
        cardName.value = `${getNewDoc
          .data()
          .firstName.toUpperCase()}  ${getNewDoc
          .data()
          .lastName.toUpperCase()}`;
        //
        payStackEmail.value = getNewDoc.data().email;
        payStackfirstName.value = getNewDoc.data().firstName.toUpperCase();
        payStacklastName.value = getNewDoc.data().lastName.toUpperCase();
      }
    } catch (error) {
      if (
        error.message ==
        `firestore: Firestore (10.7.1): Could not reach Cloud Firestore backend. Backend didn't respond within 10 seconds.
     This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`
      ) {
        console.log(error);
      }
    }
  }
});
