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
    } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
    import {getStorage,
      ref,
      getDownloadURL
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
  appId: "1:1091968351878:web:dbb11496b81afa7d7edb07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth()
const colRef = collection(db, "users");
const storage = getStorage()


onAuthStateChanged(auth,async(user) => {
  const docRef = doc(
    colRef, user.uid,'usersDetails','profileDetails'
  )
  const userRef = ref(storage, `images/${user.uid}`)
  const imageRef = ref(userRef, 'profile-image.jpg')
  try {
    getDownloadURL(imageRef).then((url)=>{
      console.log('profileUrl@', url );
      const userImage = document.querySelector('.userimage')
      userImage.innerHTML =`<div class="text-center">
      <img src="${url}" class="rounded" alt="...">
    </div>`
    })
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const welcomeName = document.querySelector('.welcomeName')
      welcomeName.innerHTML = `Welcome ${docSnap.data().firstname},`
      console.log('data', docSnap.data(), docSnap.data().firstname);
      const usersEmail = document.querySelector('.email')
      usersEmail.value = `${docSnap.data().email}`
      const firstname = document.querySelector('.firstname')
      firstname.value = `${docSnap.data().firstname}`
      const lastname = document.querySelector('.lastname')
      lastname.value = `${docSnap.data().lastname}`
    }else{
      console.log('no document');
    }
  } catch (error) {console.log(error);}
  
});

const signedOut = document.querySelector('.signedOut')
signedOut.addEventListener('click',async (e)=>{
  e.preventDefault()
  try {
    const signout = await signOut(auth).then(()=>{
      // 
      window.location.href = '../index.html'
    }).catch((error)=>{
      console.log(error);
    })
  } catch (error) {
  }
  
})


