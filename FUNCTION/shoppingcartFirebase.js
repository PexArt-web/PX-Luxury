// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { firebaseConfig } from "../config/config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();
const colRef = collection(db, "users");
const storage = getStorage();
const connectionerror = document.querySelector(".connection_error");

// getting profile details
onAuthStateChanged(auth, async (user) => {
  const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");
  const userRef = ref(storage, `images/${user.uid}`);
  const imageRef = ref(userRef, "profile-image.jpg");
  const docSnap = await getDoc(docRef);

  let userImage = document.querySelector(".userimage");
  let welcomeName = document.querySelector(".welcomeName");
  let userEmail = document.querySelector(".email");
  let firstname = document.querySelector(".firstname");
  let lastname = document.querySelector(".lastname");
  try {
    const checkLogInType = await user.providerData.forEach((profile) => {
      console.log(profile, "new profile");
      if (profile.providerId == "password") {
        async function getImagefromBase() {
          const profileImage = await getDownloadURL(imageRef).then((url) => {
            userImage.innerHTML = `<div class="text-center">
          <img src="${url}" class="rounded" alt="..."> </div>`;
          });
        }
        getImagefromBase();
        if (docSnap.exists()) {
          welcomeName.innerHTML = `Welcome ${docSnap.data().firstname}`;
          userEmail.value = docSnap.data().email;
          firstname.value = docSnap.data().firstname;
          lastname.value = docSnap.data().lastname;
        }
      } else if (profile.providerId == "google.com") {
        userImage.innerHTML = `<div class="text-center"> <img src="${profile.photoURL}" class="rounded" alt="...">
     </div>`;
        welcomeName.innerHTML = `Welcome ${profile.displayName},`;
        userEmail.value = profile.email;
        const namelabel = document.querySelector(".namelabel");
        namelabel.innerHTML = "Display Name";
        const name = document.querySelector(".name");
        name.value = profile.displayName;
        const googlenone = document.querySelector(".googlenone");
        googlenone.style.display = "none";
      } else if (
        profile.providerId == "password" &&
        profile.providerId == "google.com"
      ) {
        const googlenone = document.querySelector(".googlenone");
        googlenone.style.display = "block";
        async function getImagefromBase() {
          const getImage = await getDownloadURL(imageRef).then((url) => {
            userImage.innerHTML = `<div class="text-center">
            <img src="${url}" class="rounded" alt="..."> </div>`;
          });
        }
        getImagefromBase();
        if (docSnap.exists()) {
          welcomeName.innerHTML = `Welcome ${docSnap.data().firstname}`;
          userEmail.value = docSnap.data().email;
          firstname.value = docSnap.data().firstname;
          lastname.value = docSnap.data().lastname;
        }
      }
    });
    //
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
  }
});

// check out config
const checkOut = document.querySelector(".checkOut");
const emptyCartAlert = document.querySelector(".emptycartalert");
const total = document.querySelector(".total");
checkOut.addEventListener("click", async () => {
  onAuthStateChanged(auth, async (user) => {
    if (cart.length == 0) {
      emptyCartAlert.innerHTML = "";
      emptyCartAlert.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
      <strong>Hello! Your cart is empty</strong> 
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
      `;
      setTimeout(() => {
        emptyCartAlert.innerHTML = "";
      }, 3000);
      return;
    }
    localStorage.setItem("totalPrice", calculateTotalPrice());
    let totalChecked = total.innerHTML;
    const orderRef = collection(colRef, user.uid, "customerOrder");
    let transactionStatus = "Order in progress or canceled";
    try {
      cart.push({ totalOrder: totalChecked });
      const createDoc = await addDoc(orderRef, {
        cart,
        transactionStatus,
      });
      localStorage.setItem("document#", createDoc.id);
    } catch (error) {
      console.log(error, "order error");
    } finally {
      window.location.href = "../HTML/luxuryshipping.html";
    }
  });
});

// sign out
const signedOut = document.querySelector(".signedOut");
signedOut.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const signout = await signOut(auth)
      .then(() => {
        //
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
});
