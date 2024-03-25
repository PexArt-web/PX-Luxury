import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
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
  uploadBytesResumable,
  getDownloadURL,
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
//
const validPassword = document.querySelector(".validate");
const pattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
validPassword.addEventListener("blur", () => {
  const isValid = pattern.test(validPassword.value);
  if (isValid) {
    validPassword.classList.add("is-valid");
    validPassword.classList.remove("is-invalid");
    const validityMessage = document.querySelector(".error-message");
    validityMessage.innerHTML = "";
  } else if (validPassword.value == "") {
    validPassword.classList.remove("is-invalid");
    validPassword.classList.remove("is-valid");
    const validityMessage = document.querySelector(".error-message");
    validityMessage.innerHTML = "";
  } else {
    validPassword.classList.add("is-invalid");
    validPassword.classList.remove("is-valid");
    const validityMessage = document.querySelector(".error-message");
    validityMessage.innerHTML = `
    Password requires a minimum length of 8 characters and a mix of lowercase letters, uppercase letters, digits, and special characters.
    `;
  }
});

const signUp = document.getElementById("signUp");
signUp.addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("inputGender").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("floatingPassword").value;

  let signUpBTN = document.getElementById("signUpBtn");

  signUpBTN.disabled = true;
  signUpBTN.innerHTML = `<div class="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
  </div>
    `;
  if (email == "" || password == "") {
    return;
  }

  try {
    const createUserTask = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const sendEmailTask = await sendEmailVerification(createUserTask.user);

    const docRef = doc(
      colRef,
      createUserTask.user.uid,
      "usersDetails",
      "profileDetails"
    );

    const createNewDoc = await setDoc(docRef, {
      firstName,
      lastName,
      gender,
      email,
    });
    const storage = getStorage(app);
    const storageRef = ref(storage);

    const file = document.getElementById("profileImage").files[0];

    const userRef = ref(storage, `images/${createUserTask.user.uid}`);
    const imageRef = ref(userRef, "profile-image.jpg");
    const profileImages = await uploadBytesResumable(imageRef, file).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {});
      }
    );
  } catch (error) {
    if (error.message === `Firebase: Error (auth/email-already-in-use).`) {
      const accountExisted = document.querySelector(".accountExisted");
      accountExisted.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
         <strong>An Account with this Email already Exist</strong>
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`;
    }
  } finally {
    if (pattern.test(password) == true) {
      window.location.href = "../HTML/index.html";
    }
    signUpBTN.disabled = false;
    signUpBTN.innerHTML = `
    Create Account
         `;
  }
});

const signWithGoogle = document.querySelector(".google");

signWithGoogle.addEventListener("click", async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    auth.languageCode = "en";
    const cred = await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        window.location.href = "../HTML/shopCart.html";
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  } catch (error) {}
});
