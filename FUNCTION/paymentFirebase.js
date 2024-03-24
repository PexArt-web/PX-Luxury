import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
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
    const uid = user.uid;
    const email = document.getElementById("inputEmail4");
    const fName = document.getElementById("inputFirstname");
    const lName = document.getElementById("inputSecondname");

    try {
      const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");

      const getNewDoc = await getDoc(docRef, "profileDetails");
      if (getNewDoc.exists()) {
        email.value = getNewDoc.data().email;
        fName.value = getNewDoc.data().firstName.toUpperCase();
        lName.value = getNewDoc.data().lastName.toUpperCase();
      }
    } catch (error) {}

    const submitForm = document.getElementById("paymentForm");
    submitForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const address1 = document.getElementById("inputAddress1").value;
      const address2 = document.getElementById("inputAddress2").value;
      const inputCity = document.getElementById("inputCity").value;
      const inputState = document.getElementById("inputState").value;
      const country = document.getElementById("inputCountry").value;
      const shipFee = localStorage.getItem("shipping-fee");
      const zipCode = document.getElementById("inputZip").value;
      const contBTN = document.getElementById("contBTN");
      contBTN.disable = true;
      contBTN.innerHTML = `
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    `;

      try {
        const docRef = doc(colRef, uid, "usersDetails", "usersAddress");

        const setNewDoc = await setDoc(docRef, {
          address1,
          address2,
          inputCity,
          inputState,
          country,
          zipCode,
          shipFee,
        });
      } catch (error) {
      } finally {
        contBTN.disable = false;
        contBTN.innerHTML = "Continue";
        window.location.href = "../HTML/cardPayment.html";
      }
    });
  }
});
