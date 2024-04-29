import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

let resetPassword = document.getElementById("reset");

resetPassword.addEventListener("click", async (e) => {
  e.preventDefault(e);
  let email = document.getElementById("floatingInput").value;
  resetPassword.innerHTML = `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
  `;
  try {
    const passwordReset = await sendPasswordResetEmail(auth, email)
      .then((email) => {
        const verify_sent = document.querySelector(".resetEmailAlert");
        verify_sent.innerHTML = `<div class="alert alert-secondary alert-dismissible fade show" role="alert">
        An email has been sent, Please check Your Email to reset Your password
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    
      })
      .catch((error) => {});
  } catch (error) {
  } finally {
    resetPassword.innerHTML = `Continue`;
  }
});

let backHome = document.getElementById("backHome");
backHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});

const signUp = document.getElementById("signUp");
signUp.addEventListener("click", () => {
  window.location.href = "../HTML/luxurysignup.html";
});
