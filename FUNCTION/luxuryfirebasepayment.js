import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
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
    const email = document.querySelector(".email");
    const paymentcardname = document.querySelector(".cardname");
    const stackEmail = document.querySelector(".stackemail");
    const stackAmount = document.querySelector(".stackAmount");
    const stackFirstname = document.querySelector(".stackFirstname");
    const stackLastname = document.querySelector(".stackLastname");

    try {
      const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");

      const getNewDoc = await getDoc(docRef, "profileDetails");

      if (getNewDoc.exists()) {
        console.log(getNewDoc.data());
        email.value = getNewDoc.data().email;
        paymentcardname.value = `${getNewDoc.data().firstname} ${
          getNewDoc.data().lastname
        }`;

        /** paystack info */

        stackEmail.value = `${getNewDoc.data().email}`;
        stackFirstname.value = `${getNewDoc.data().firstname}`;
        stackLastname.value = `${getNewDoc.data().lastname}`;

        stackAmount.value = Number(localStorage.getItem("totalAmount"));
      }
    } catch (error) {
      console.log(error);
      const connectionerror = document.querySelector(".connection_error");
      if (error.message === `Firebase: Error (auth/network-request-failed).`) {
        connectionerror.innerHTML = "";
        connectionerror.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
        <strong>Holy guacamole!</strong> *Check Your Connection and try again 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
      }
    }
  }
});

const userEmail = document.querySelector(".stackemail");
console.log(userEmail.value, "stack email");
const stackAmount = document.querySelector(".stackAmount");
stackAmount.value = Math.round(localStorage.getItem("totalAmount"));
const payStack = document.querySelector(".payStack");
payStack.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
  let handler = PaystackPop.setup({
    key: "pk_test_bb3514eaf08a35c25e2d8d0a8c887d391362661d",
    email: userEmail.value,
    amount: stackAmount.value * 100,
    ref: "" + Math.round(Math.floor(Math.random() * 1000000000 + 1)),
    //

    onclose: function () {
      alert("window closed");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      const payStackWrap = document.querySelector(".payStack");
      payStackWrap.style.display = "none";
      const processed = document.querySelector(".processed");
      processed.style.display = "block";
    },
  });
  handler.openIframe();
}
