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
  getDocs
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();
const colRef = collection(db, "users");
const storage = getStorage();
const orderRef = collection(db, "customerOrder");

onAuthStateChanged(auth, async (user) => {
  const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");
  const userRef = ref(storage, `images/${user.uid}`);
  const imageRef = ref(userRef, "profile-image.jpg");
  const docSnap = await getDoc(docRef);

  user.providerData.forEach((profile) => {
    console.log(profile, "new");
    if (profile.providerId == "password") {
      try {
        getDownloadURL(imageRef).then((url) => {
          const userImage = document.querySelector(".userimage");
          userImage.innerHTML = `<div class="text-center">
          <img src="${url}" class="rounded" alt="...">
        </div>`;
        });
        if (docSnap.exists()) {
          const welcomeName = document.querySelector(".welcomeName");
          welcomeName.innerHTML = `Welcome ${docSnap.data().firstname},`;
          const usersEmail = document.querySelector(".email");
          usersEmail.value = `${docSnap.data().email}`;
          const firstname = document.querySelector(".firstname");
          firstname.value = `${docSnap.data().firstname}`;
          const lastname = document.querySelector(".lastname");
          lastname.value = `${docSnap.data().lastname}`;
        } else {
          console.log("no document");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (profile.providerId == "google.com") {
      console.log(profile, "google", profile.photoURL);
      const userImage = document.querySelector(".userimage");
      userImage.innerHTML = `<div class="text-center">
      <img src="${profile.photoURL}" class="rounded" alt="...">
    </div>`;
      const welcomeName = document.querySelector(".welcomeName");
      welcomeName.innerHTML = `Welcome ${profile.displayName},`;
      const usersEmail = document.querySelector(".email");
      usersEmail.value = `${profile.email}`;
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
      try {
        getDownloadURL(imageRef).then((url) => {
          const userImage = document.querySelector(".userimage");
          userImage.innerHTML = `<div class="text-center">
          <img src="${url}" class="rounded" alt="...">
        </div>`;
        });
        if (docSnap.exists()) {
          const welcomeName = document.querySelector(".welcomeName");
          welcomeName.innerHTML = `Welcome ${docSnap.data().firstname},`;
          const usersEmail = document.querySelector(".email");
          usersEmail.value = `${docSnap.data().email}`;
          const firstname = document.querySelector(".firstname");
          firstname.value = `${docSnap.data().firstname}`;
          const lastname = document.querySelector(".lastname");
          lastname.value = `${docSnap.data().lastname}`;
        } else {
          console.log("no document");
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  //
});

const checkOut = document.querySelector(".checkOut");
checkOut.addEventListener("click", async (e) => {
  e.preventDefault();
  alert("from firebase");
  const cartBody = document.querySelector(".cartProductDisplay");
  let orderedList = cartBody.innerHTML;
  // console.log(orderedList);
  try {
    if (cartBody.innerHTML != false) {
      const creatNewDoc = await addDoc(orderRef, {
        orderedList,
      });

      const querySnapshot = await getDocs(orderRef)
      querySnapshot.forEach((orderslist)=>{
        console.log(orderslist.id, " => ", orderslist.data().orderedList, 'from base');
        const listOrder = document.querySelector('.orderCard')
        listOrder.innerHTML += `${orderslist.data().orderedList}`

      })
    }
  } catch (error) {
    console.log(error);
  }
});


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
