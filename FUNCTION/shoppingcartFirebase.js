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
  getDocs,
  query,
   where,
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
const transactionId = true

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
        const profileImage =  await getDownloadURL(imageRef).then((url) => {
          userImage.innerHTML =  `<div class="text-center">
          <img src="${url}" class="rounded" alt="..."> </div>`;
         
          })
        }
        getImagefromBase()
      if (docSnap.exists()) {
        welcomeName.innerHTML = `Welcome ${docSnap.data().firstname}`;
        userEmail.value = docSnap.data().email;
        firstname.value = docSnap.data().firstname;
        lastname.value = docSnap.data().lastname;
      }
      }else if (profile.providerId == "google.com") {
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
      }else if(profile.providerId == "password" && profile.providerId == "google.com"){
        const googlenone = document.querySelector(".googlenone");
        googlenone.style.display = "block";
        async function getImagefromBase() {
          const getImage =  await getDownloadURL(imageRef).then((url) => {
           
           userImage.innerHTML = `<div class="text-center">
            <img src="${url}" class="rounded" alt="..."> </div>`;
            })
          }
          getImagefromBase()
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
  }
});



const checkOut = document.querySelector(".checkOut");
checkOut.addEventListener("click", async (e) => {
  e.preventDefault();
  alert("from firebase");
  const total = document.querySelector('.total')
  total.innerHTML = `$${calculateTotalPrice()}`
  let totalChecked = total.innerHTML
  try {
    if (!cart) {
      return
    }else{
      cart.forEach(async (ele)=>{
        let ordertitle = ele.title
        let orderprice = ele.price
        console.log(ordertitle, orderprice , 'respectively');
        const creatNewDoc = await addDoc(orderRef,{
          ordertitle,
          orderprice,
          totalChecked,
          transactionId
        })
      })
    }
  } catch (error) {
    console.log(error);
  }
 
  displayCartProduct()
});

onAuthStateChanged(auth, async(user)=>{
  if (user){
    try {
     const orderQuery = query(orderRef, where('transactionId', '==', true))
     const documents = await getDocs(orderQuery).then((querysnapshot)=>{
      querysnapshot.forEach((doc)=>{
      
        const list_order = document.querySelector('.orderCard')
        list_order.innerHTML += `<ul>
        <li>${doc.data().ordertitle} x $${doc.data().orderprice}</li>       
        </ul>
        `
        const total_list_amount = document.querySelector('.totalChecked')
        total_list_amount.innerHTML = `OrderTotal: ${doc.data().totalChecked}`
      })
     })
    } catch (error) {
      console.log(error);
    }
  }else{
    console.log('no document found');
  }

})

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
