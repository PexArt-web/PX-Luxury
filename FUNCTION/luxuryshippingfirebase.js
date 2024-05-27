import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDoL0BI-a7Y5TiHzwaWbjwgBKahpV7azpU",
  authDomain: "px-luxury-289ba.firebaseapp.com",
  projectId: "px-luxury-289ba",
  storageBucket: "px-luxury-289ba.appspot.com",
  messagingSenderId: "1091968351878",
  appId: "1:1091968351878:web:dbb11496b81afa7d7edb07",
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
        fName.value = getNewDoc.data().firstname.toUpperCase();
        lName.value = getNewDoc.data().lastname.toUpperCase();
      }
    } catch (error) {
      if (error.message === `Firebase: Error (auth/network-request-failed).`) {
        const ConnectionError = document.querySelector(".connection_error");
        ConnectionError.innerHTML = "";
        ConnectionError.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          <strong>Holy guacamole!</strong> *Check Your Connection and try again 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
      }
    }

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
        console.log(error);
        if (error.message == `Firebase: Error (auth/network-request-failed).`) {
          const ConnectionError = document.querySelector(".connection_error");
          ConnectionError.innerHTML = "";
          ConnectionError.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
            <strong>Holy guacamole!</strong> *Check Your Connection and try again 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `;
        }
      } finally {
        contBTN.disable = false;
        contBTN.innerHTML = "Continue";
        window.location.href = "../HTML/luxurypayment.html";
      }
    });
  }
});
