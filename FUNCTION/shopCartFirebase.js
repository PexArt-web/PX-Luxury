import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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

let userName = document.getElementById("name");

let pDetails = document.getElementById("details");

const storage = getStorage();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const storageRef = ref(storage);
    const userRef = ref(storage, `images/${uid}`);
    const imageRef = ref(userRef, "profile-image.jpg");
    const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");
    const url = await getDownloadURL(imageRef);
    const getNewDoc = await getDoc(docRef, "profileDetails");
    const proImg = document.getElementById("proImg");

    try {
      user.providerData.forEach((info) => {
        if (info.providerId === "google.com") {
          pDetails.innerHTML = "";
          userName.innerHTML = `<h4 class = 'text-body'>${info.displayName}</h4>`;
          proImg.innerHTML = `<p> <img src = "${info.photoURL}" class = "rounded-circle" id = "profilePic"> </p>`;

          pDetails.innerHTML = `
          <label for="floatingInputDisabled">Firstname</label>
            <div class="form-floating mb-3">
            <input type="text" class="form-control bg-light" id="floatingInputDisabled" placeholder="name@example.com"
            value="${info.displayName}" disabled>
          </div>

          <label for="floatingInputDisabled">Lastname</label>
          <div class="form-floating mb-3">
            <input type="text" class="form-control bg-light" id="floatingInputDisabled" placeholder="name@example.com" 
            value="" disabled>
          
          </div>
          

          <label for="floatingInputDisabled">Gender</label>
          <div class="form-floating mb-3">
            <input type="text" class="form-control bg-light" id="floatingInputDisabled" placeholder="name@example.com"
            value="" disabled>
          </div>

          <label >Email address</label>
          <div class="form-floating mb-3">
            <input type="email" class="form-control bg-light border-none" id="floatingInputDisabled" placeholder="name@example.com"
            value="${info.email}" disabled>
          </div>
          
          `;
        } else if (info.providerId == "password") {
          proImg.innerHTML = `<p> <img src = "${url}" class = "rounded-circle" id = "profilePic"> </p>`;

          if (getNewDoc.exists()) {
            userName.innerHTML = `<h4 clas ='text-body'>${
              getNewDoc.data().firstName
            }</h4>`;

            pDetails.innerHTML = `
            <form id = 'newDeals'>
            <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile01"
            disabled>
          </div>
         <label for="floatingInputDisabled">Firstname</label>
         <div class="form-floating mb-3">
         <input type="text" class="form-control bg-light firstname" id="floatingInputDisabled" placeholder="name@example.com"
         value="${getNewDoc.data().firstName}" disabled>
       </div>
      
       <label for="floatingInputDisabled">Lastname</label>
       <div class="form-floating mb-3">
         <input type="text" class="form-control bg-light lastname" id="floatingInputDisabled" placeholder="name@example.com" 
         value="${getNewDoc.data().lastName}" disabled>
       
       </div>
       
      
       <label for="floatingInputDisabled">Gender</label>
       <div class="form-floating mb-3">
         <input type="text" class="form-control bg-light gender" id="floatingInputDisabled" placeholder="name@example.com"
         value="${getNewDoc.data().gender}" disabled>
       </div>
      
       <label >Email address</label>
       <div class="form-floating mb-3">
         <input type="email" class="form-control bg-light border-none email" id="floatingInputDisabled" placeholder="name@example.com"
         value="${getNewDoc.data().email}" disabled>
       </div>
            </form>
       `;
          } else {
          }
        } else if (
          info.providerId == "password" &&
          info.providerId == "google.com"
        ) {
          proImg.innerHTML = `<p> <img src = "${url}" class = "rounded-circle" id = "profilePic"> </p>`;

          if (getNewDoc.exists()) {
            userName.innerHTML = `<h4 clas ='text-body'>${
              getNewDoc.data().firstName
            }</h4>`;
            pDetails.innerHTML = `
            <form id = 'newDeals'>
            <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile01"
            disabled>
          </div>
         <label for="floatingInputDisabled">Firstname</label>
         <div class="form-floating mb-3">
         <input type="text" class="form-control bg-light firstname" id="floatingInputDisabled" placeholder="name@example.com"
         value="${getNewDoc.data().firstName}" disabled>
       </div>
      
       <label for="floatingInputDisabled">Lastname</label>
       <div class="form-floating mb-3">
         <input type="text" class="form-control bg-light lastname" id="floatingInputDisabled" placeholder="name@example.com" 
         value="${getNewDoc.data().lastName}" disabled>
       
       </div>
       
      
       <label for="floatingInputDisabled">Gender</label>
       <div class="form-floating mb-3">
         <input type="text" class="form-control bg-light gender" id="floatingInputDisabled" placeholder="name@example.com"
         value="${getNewDoc.data().gender}" disabled>
       </div>
      
       <label >Email address</label>
       <div class="form-floating mb-3">
         <input type="email" class="form-control bg-light border-none email" id="floatingInputDisabled" placeholder="name@example.com"
         value="${getNewDoc.data().email}" disabled>
       </div>
            </form>
       `;
          }
        }
      });
    } catch (error) {
      const connection_error = document.getElementById("connection_error");
      connection_error.innerHTML += `<div class="alert alert-danger alert-dismissible fade show text-center" role="alert" id="shopalert">
        <strong>Connection error! Please Refresh Page</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    }
    //
  }
});
const signedOut = document.getElementById("signOut");

signedOut.addEventListener("click", async () => {
  try {
    signOut(auth).then(() => {
      window.location.href = "../HTML/index.html";
    });
  } catch (error) {}
});
