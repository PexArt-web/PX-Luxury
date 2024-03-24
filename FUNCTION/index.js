import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  onAuthStateChanged,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAlaJM-VlVbuu4P8bLYJueEycgbQGsKFXE",
  authDomain: "avifarms-38607.firebaseapp.com",
  projectId: "avifarms-38607",
  storageBucket: "avifarms-38607.appspot.com",
  messagingSenderId: "867675622454",
  appId: "1:867675622454:web:18760e520884d0902f9c97",
};

/* {work on that error}Firebase: Error (auth/too-many-requests). */
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signIn = document.getElementById("signIn");
signIn.addEventListener("click", (e) => {
  e.preventDefault();
  let signBlock = document.getElementById("signBlock");

  signIn.style.display = "none";
  signBlock.innerHTML += `<div class = 'card-body'>
  <div class ='mb-2 mt-2 closeSign'>
  <h2></h2>
  <h2></h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
  </div>
   <div class="d-grid gap-2">
  <button class="btn btn-success googled mb-3" type="button"><span><img src="../media/google_log-removebg-preview.png" alt="" height="40vh" width="40vw"></span>
    Sign In with Google
  </button>
</div>
  <form class="row g-3 card-body" id="hide" style = "">
  <div class="col-md-6">
  
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control " id="inputPassword4">

    


    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16" id="eyeClose">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" id="eyeOpen">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>
<a href= '../HTML/passwordRest.html' id="resetPass">forgot password?</a>

  </div>

  
  <button class="btn btn-outline-success signIn" type="submit" id="signInBtn">Sign In</button>

</form>
  </div>`;

  const closeSign = document.querySelector(".closeSign");
  closeSign.addEventListener("click", () => {
    const signIn = document.getElementById("signIn");
    let signBlock = document.getElementById("signBlock");
    signIn.style.display = "block";
    signBlock.innerHTML = "";
  });

  const signedWithGoogle = document.querySelector(".googled");
  signedWithGoogle.addEventListener("click", async (e) => {
    const provider = new GoogleAuthProvider();
    const provide = await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.href = "../HTML/shopCart.html";
      })
      .catch((error) => {});
  });

  const eyeClose = document.getElementById("eyeClose");
  const eyeOpen = document.getElementById("eyeOpen");

  const passwordInput = document.getElementById("inputPassword4");

  eyeClose.addEventListener("click", () => {
    passwordInput.setAttribute("type", "text");
    eyeClose.style.display = "none";
    eyeOpen.style.display = "block";
  });

  eyeOpen.addEventListener("click", () => {
    passwordInput.setAttribute("type", "password");
    eyeClose.style.display = "block";
    eyeOpen.style.display = "none";
  });

  const signInForm = document.getElementById("hide");

  signInForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const alert = document.getElementById("alert");
    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;

    signInBtn.disabled = true;
    signInBtn.innerHTML = `<div class="spinner-border text-success" role="status" id="spinnner">
 </div>`;

    try {
      const signInTask = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (signInTask.user.emailVerified == true) {
        window.location.href = "../HTML/shopCart.html";
      } else {
        alert.innerHTML = "";
        alert.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
      <strong>Holy guacamole!</strong> *Please Verify Your Email and Try again! <a class='link-underline-danger' id = 'resend'>Resend Verification link</a>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;

        const resendEmailVerification = document.getElementById("resend");

        resendEmailVerification.addEventListener("click", async () => {
          const alert = document.getElementById("alert");
          alert.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          A new email verification link has been sent check your email inbox or spam messages
          </div>
          `;
          setTimeout(() => {
            alert.innerHTML = "";
          }, 6000);
          const user = auth.currentUser;
          const verifyEmail = await sendEmailVerification(user)
            .then(() => {})
            .catch((error) => {});
        });
      }
    } catch (error) {
      if (error.message === `Firebase: Error (auth/invalid-credential).`) {
        alert.innerHTML = "";
        alert.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          <strong>Holy guacamole!</strong> *Invalid Email or Password!
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
      } else if (
        error.message === `Firebase: Error (auth/network-request-failed).`
      ) {
        alert.innerHTML = "";
        alert.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
          <strong>Holy guacamole!</strong> *Check Your Connection and try again 
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
      }
    } finally {
      signInBtn.disabled = false;
      signInBtn.innerHTML = `Sign In`;
    }
  });
});
const signUpBtn = document.getElementById("signUp");

signUpBtn.addEventListener("click", () => {
  window.location.href = "../HTML/signUp.html";
});

//
let homeProduct = [
  {
    id: 38,
    title: "Elegant Golden-Base Stone Top Dining Table",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FNWIJKUj.jpeg&w=640&q=75",
    price: 66,
    discription:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern decoration.",
  },
  {
    id: 34,
    title: "Sleek Mirror Finish Phone Case",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2Fyb9UQKL.jpeg&w=640&q=75",
    price: 27,
    discription: `Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.`,
  },
  {
    id: 33,
    title: "Stylish Red & Silver Over-Ear Headphones",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FYaSqa06.jpeg&w=640&q=75",
    discription:
      "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    price: 60,
  },
];

let sHomeProduct = [
  {
    title: "Dog",
    image:
      "https://humanepro.org/sites/default/files/styles/article_new/public/images/post/paw-toolkit-welcome-image.jpg?itok=NFe7EOwR",
  },
  {
    title: "PETS",
    image:
      "https://s1.eestatic.com/2020/08/26/curiosidades/mascotas/mascotas-perros-mascotas_515959375_158488466_1024x576.jpg",
  },
  {
    title: "FMLN FOREVER",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_FMLN.jpg/1200px-Flag_of_FMLN.jpg",
  },
];

let tMinDisplay = [
  {
    image:
      "https://dbluxurystore.com/cdn/shop/files/Sa0596842cf9b418b924aab9e252fd882L_1445x.webp?v=1702544488",
  },
  {
    image:
      "https://dbluxurystore.com/cdn/shop/files/S4e89afddd92b498a95b6a849598c9ad3t.webp?v=1702544496",
  },
  {
    image:
      "https://dbluxurystore.com/cdn/shop/files/S0950bae378bd4eae8d67fc093476325cy_550x.webp?v=1702544488",
  },
];
//

let carousel = document.getElementById("carouselExampleInterval");

carousel.innerHTML = `<div class="carousel-inner" >
<div class="carousel-item active " data-bs-interval="10000">
<div class="carousel-each">
<img src="${homeProduct[0].image}" class="d-block w-100" alt="..."">
  <div class="card">
  <h4 class="title">${homeProduct[0].title}</h4>
<h5>$${homeProduct[0].price} <del>$60.77</del></h5>
<p> ${homeProduct[0].discription}</p>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
  <button class="btn btn-dark me-md-2 mt-5" type="button">Shop Now</button>
</div>
</div>

</div>
  
</div>
<div class="carousel-item " data-bs-interval="2000">
<div class="carousel-each">
  <img src="${homeProduct[1].image}" class="d-block w-100" alt="..." id='imgg'>
  <div class="card ">
  <h4 class="title">${homeProduct[1].title}</h4>
  <h5>$${homeProduct[1].price} <del>$60.99</del></h5>
<p>${homeProduct[1].discription}</p>
     <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
  <button class="btn btn-dark me-md-2" type="button">Shop Now </button>
</div>

  </div>
  
  </div>
</div>
<div class="carousel-item ">
<div class="carousel-each">
  <img src="${homeProduct[2].image}" class="d-block w-100" alt="...">
  <div class="card">
  <h4 class="title">${homeProduct[2].title}</h4>
  <h5>$${homeProduct[2].price} <del>$755</del></h5>
<p>${homeProduct[2].discription}</p>
     <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
  <button class="btn btn-dark me-md-2" type="button">Shop Now</button>
</div>
  </div>
  
  </div>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>`;

function displayFirst() {
  let firstMinDisplay = document.getElementById("firstMiniDis");
  sHomeProduct.forEach((ele) => {
    firstMinDisplay.innerHTML += ` <div class="col">
        <div class="card h-100" style="height: 40vh">
        <img src="${ele.image}" class="card-img-top" alt="..." style="height: 40vh;">
        <div class="card-body">
          <h5 class="card-title">${ele.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <a href="#signIn">
          <div class="d-grid gap-2">
          <button class="btn  text-info shopDis" type="button" style="background-color:rgb(2,8,38); height:9vh;" >Shop Now <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right shopDis" viewBox="0 0 16 16" >
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg></span></button>
        </div></a>
        </div>
       
      </div>
      </div>
        `;
  });
}
displayFirst();
