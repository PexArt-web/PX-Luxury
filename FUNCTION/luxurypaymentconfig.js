

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { firebaseConfig } from "../config/config.js";
import { unlock } from "../config/config.js";
import { blueEmail } from "../config/config.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const colRef = collection(db, "users");
//
const email = document.querySelector(".email");
const paymentcardname = document.querySelector(".cardname");
const stackEmail = document.querySelector(".stackemail");
let stackAmount = document.querySelector(".stackAmount");
const stackFirstname = document.querySelector(".stackFirstname");
const stackLastname = document.querySelector(".stackLastname");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(colRef, user.uid, "usersDetails", "profileDetails");

    try {
      const getNewDoc = await getDoc(docRef, "profileDetails");
      if (getNewDoc.exists()) {
        email.value = getNewDoc.data().email;
        paymentcardname.value = `${getNewDoc.data().firstname} ${
          getNewDoc.data().lastname
        }`;
        // paystack info**
        stackEmail.value = getNewDoc.data().email;
        stackFirstname.value = getNewDoc.data().firstname;
        stackLastname.value = getNewDoc.data().lastname;
        stackAmount.value = amountTotal.innerHTML;
      }
    } catch (error) {
      console.log(error);
      const connectionerror = document.querySelector(".connection_error");
      if (error.message === `Firebase: Error (auth/network-request-failed).`) {
        connectionerror.innerHTML = "";
        connectionerror.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" >
        <strong>Holy guacamole!</strong> *Check Your Connection and try again 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
      }
    } finally {
    }
  }
});

// userInput
const cardnumber = document.querySelector(".cardnumber");
const cardexpirydate = document.querySelector(".expirydate");
const cvv = document.querySelector(".cvv");
const payBtn = document.querySelector(".paybutton");
const userInput = document.querySelector(".userInput");
userInput.addEventListener("submit", async (e) => {
  e.preventDefault();
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      return;
    }
    if (!cardnumber.value && !cvv.value && !cardexpirydate.value) {
      return;
    }
    payBtn.disabled = true;
    try {
      let processing = document.querySelector(".processingWrapper");
      const payStackblock = document.querySelector(".payStack");

      setTimeout(() => {
        userInput.style.display = "none";
        processing.style.display = "block";
      }, 4000);

      setTimeout(() => {
        processing.style.display = "none";
        payStackblock.style.display = "block";
      }, 8000);
    } catch (error) {
      console.log(error, "updating error");
    } finally {
      payBtn.disabled = false;
      payBtn.innerHTML = `<i class="bi bi-lock-fill"></i>
    </svg> PAY NOW
    `;
    }
  });
});

//
const payStackform = document.querySelector(".payStack");
payStackform.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
  let handler = PaystackPop.setup({
    key: unlock,
    email: stackEmail.value,
    amount: parseInt(stackAmount.value) * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1),
    //
    onclose: function () {
      alert("Transaction was not completed, window closed");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      const payStackWrap = document.querySelector(".payStack");
      payStackWrap.style.display = "none";
      //
      const processed = document.querySelector(".processed");
      processed.style.display = "block";

      console.log(response.message, "response");

      // to update document
      if (response.message == "Approved") {
        onAuthStateChanged(auth, async (user) => {
          let transactionId = localStorage.getItem("document#");
          const orderDocRef = doc(
            colRef,
            user.uid,
            "customerOrder",
            transactionId
          );
          let transactionStatus = "Order completed and will be shipped soon";
          const updateTransactionId = await updateDoc(orderDocRef, {
            transactionId,
            transactionStatus,
            timestamp: serverTimestamp(),
          });

          //send in blue email
          function sendEmail() {
            let emailData = {
              sender: { name: "PX Luxury", email: "pelumiadeayo72@gmail.com" },
              to: [{ email: "pexart74@gmail.com", name: "Pelumi" }],
              subject: "Your Order Confirmation",
              htmlContent:
                "<html><body><h1>Thank you for your order </h1></body></html>",
            };
            fetch("https://api.sendinblue.com/v3/smtp/email", {
              method: "Post",
              headers: {
                "Content-Type": "application/json",
                "api-key": blueEmail ,
              },
              body: JSON.stringify(emailData)
            })
              .then((feed) => feed.json())
              .then((data) => console.log("email sent:", data))
              .catch((error) => console.log("error sending email:", error));
          }

          // clear storage
          // localStorage.clear();
        });
      }
      alert(response.message);
    },
  });

  handler.openIframe();
}
