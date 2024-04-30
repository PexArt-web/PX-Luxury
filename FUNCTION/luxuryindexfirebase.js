import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDoL0BI-a7Y5TiHzwaWbjwgBKahpV7azpU",
  authDomain: "px-luxury-289ba.firebaseapp.com",
  projectId: "px-luxury-289ba",
  storageBucket: "px-luxury-289ba.appspot.com",
  messagingSenderId: "1091968351878",
  appId: "1:1091968351878:web:dbb11496b81afa7d7edb07",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const initSignInBtn = document.querySelector(".signIn");
const cartLogo = document.querySelector('.bi-cart3')
const signInForm = document.querySelector("form");

const signinWrapper = document.querySelector(".signinWrapper");
initSignInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signinWrapper.style.display = "block";
  initSignInBtn.style.display = "none";
  cartLogo.style.display = 'none'
});

const closeSignIn = document.querySelector(".closeSignInbox");
closeSignIn.addEventListener("click", () => {
  signinWrapper.style.display = "none";
  initSignInBtn.style.display = "block";
  cartLogo.style.display = 'block'
});

//
/* sign in with google starts here */
const signInwithGoogleBTN = document.querySelector(".googleBtn");
signInwithGoogleBTN.addEventListener("click", async (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider();
  const provide = await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.href = "./HTML/shoppingcart.html";
    })
    .catch((error) => {
      console.log(error);
    });
}); 
/* sign in with google ends */

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const signInPasswordandEmailBTN = document.querySelector(".signInBtn");
  signInPasswordandEmailBTN.disabled = true;
  signInPasswordandEmailBTN.innerHTML = `<div class="spinner-border text-success" role="status" id="spinnner">
 </div>`;

  try {
    const signInTask = await signInWithEmailAndPassword(auth, email, password);

    if (signInTask.user.emailVerified == true) {
      window.location.href = "./HTML/shoppingcart.html";
    } else {
      const alert = document.querySelector(".alert");
      alert.innerHTML = "";
      alert.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
      <strong>Holy guacamole!</strong> *Please Verify Your Email and Try again! <a class='link-underline-danger resendEmail'>Resend Verification link</a>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
      signInPasswordandEmailBTN.disabled = false
      signInPasswordandEmailBTN.innerHTML =`Sign In`
      const resendEmailVerification = document.querySelector('.resendEmail')
      resendEmailVerification.style.cursor = 'pointer'
      resendEmailVerification.addEventListener('click',async()=>{
        const user = auth.currentUser 
        const reverifyEmail = await sendEmailVerification(user).then(()=>{})
        .catch(error =>{console.log(error);})
        alert.innerHTML = ''
        alert.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          A new email verification link has been sent check your email inbox or spam messages
          </div>
          `;
          setTimeout(() => {
            alert.innerHTML = ''
          }, 6000);
      })
    }
  } catch (error) {
    console.log(error);
    const alert = document.querySelector(".alert");
    if (error.message === `Firebase: Error (auth/invalid-credential).`){
      alert.innerHTML = "";
        alert.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          <strong>Holy guacamole!</strong> *Invalid Email or Password!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
    }else if(error.message === `Firebase: Error (auth/network-request-failed).`){
      alert.innerHTML = "";
      alert.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
        <strong>Holy guacamole!</strong> *Check Your Connection and try again 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }
  } finally {
    signInPasswordandEmailBTN.disabled = false;
    signInPasswordandEmailBTN.innerHTML = `Sign In`;
  }
});

const signUp = document.querySelector('.signUp')
signUp.addEventListener('click',()=>{
  window.location.href = "./HTML/luxurysignup.html"
})