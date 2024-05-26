// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, setDoc, doc, collection, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoL0BI-a7Y5TiHzwaWbjwgBKahpV7azpU",
  authDomain: "px-luxury-289ba.firebaseapp.com",
  projectId: "px-luxury-289ba",
  storageBucket: "px-luxury-289ba.appspot.com",
  messagingSenderId: "1091968351878",
  appId: "1:1091968351878:web:dbb11496b81afa7d7edb07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app);
const colRef = collection(db, "users");
const connectionerror = document.querySelector('.connection_error')

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

const formsubmit = document.querySelector('form')

formsubmit.addEventListener('submit',async(e)=>{
  e.preventDefault()
const firstname = document.querySelector('.firstname').value
const lastname = document.querySelector('.lastname').value
const email = document.querySelector('.email').value
const password = document.querySelector('.validate').value

const createaccount = document.querySelector('.signUpBtn')
createaccount.disabled = true
createaccount.innerHTML = ''
createaccount.innerHTML = `<div class="text-center">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`
if (email == "" || password == "") {
  return;
}

try {
  const createUserTask = await createUserWithEmailAndPassword(auth,email,password)
  
  const sendEmailTask = await sendEmailVerification(createUserTask.user)

  const docRef = doc(
    colRef, createUserTask.user.uid,'usersDetails','profileDetails'
  )

  const createNewDoc = await setDoc (docRef, {
    firstname,
    lastname,
    email
  })

  /*starting from adding  class to image input*/
  const storage = getStorage(app)

  const userRef = ref(storage, `images/${createUserTask.user.uid}`)
  const imageRef = ref(userRef, 'profile-image.jpg')
  const file = document.getElementById('profileImage').files[0]
  const uploadProfileImageTask = await uploadBytesResumable(imageRef, file).then((snapshot)=>{
    getDownloadURL(snapshot.ref).then((downloadURL)=>{
    })
  })
} catch (error) {
  console.log(error);
  if (error.message === `Firebase: Error (auth/network-request-failed).`) {
    connectionerror.innerHTML = "";
    connectionerror.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
    <strong>Holy guacamole!</strong> *Check Your Connection and try again 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
  }
}finally{
  if (pattern.test(password)== true) {
    window.location.href = '../index.html'
    createaccount.innerHTML = `Create Account`
    createaccount.disabled = false
  }
}
})

const signWithGoogle = document.querySelector('.google');
signWithGoogle.addEventListener('click',async () =>{
  try {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    auth.languageCode = 'en'
    const cred = await signInWithPopup(auth, provider)
    .then((result)=>{
       // This gives you a Google Access Token. You can use it to access the Google API.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const user = result.user;
       // IdP data available using getAdditionalUserInfo(result)
       // ...
       window.location.href = "./shoppingcart.html";
    })
    .catch((error)=>{
      console.log(error);
      if (error.message === `Firebase: Error (auth/network-request-failed).`) {
        connectionerror.innerHTML = "";
        connectionerror.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
        <strong>Holy guacamole!</strong> *Check Your Connection and try again 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
      }
    })
    .finally(()=>{})
  } catch (error) {
    console.log(error);
  }
})
