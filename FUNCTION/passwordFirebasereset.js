import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "../config/config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const connectionerror = document.querySelector(".connection_error");
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
      </div>`;
      })
      .catch((error) => {
        if (
          error.message === `Firebase: Error (auth/network-request-failed).`
        ) {
          connectionerror.innerHTML = "";
          connectionerror.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          <strong>Holy guacamole!</strong> *Check Your Connection and try again 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
        }
      });
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
