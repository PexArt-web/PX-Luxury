const subTotalAmount = Number(localStorage.getItem("totalPrice"));
const subTotal = document.querySelector(".subTotal");
subTotal.innerHTML = `$${subTotalAmount.toFixed(2)}`;
const vatPercentage = document.querySelector(".vatax");
vatPercentage.innerHTML = `$${(0.2 * subTotalAmount).toFixed(2)}`;
const shippingFee = Number(localStorage.getItem("shipping-fee"));
let totalAmount = document.querySelector(".totalAmount");
const calculateTotalAmount =
  subTotalAmount + 0.2 * subTotalAmount + shippingFee;
totalAmount.innerHTML = `$${calculateTotalAmount.toFixed(2)}`;
const userInput = document.querySelector(".userInput");
userInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardNumber = document.getElementById("cardNumber").value;
  const cardExpiryDate = document.getElementById("Expiry").value;
  const cardCvv = document.getElementById("cvv").value;
  const payBTN = document.getElementById("cardpay");
  payBTN.disabled = true;
  payBTN.innerHTML = `
    <div class="text-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  try {
    localStorage.setItem("totalAmount", calculateTotalAmount);
  } catch (error) {
  } finally {
    setTimeout(() => {
      payBTN.disabled = false;
      payBTN.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill mb-1" viewBox="0 0 16 16">
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
       </svg> PAY NOW`;
      const initial = document.querySelector(".init");
      initial.style.display = "none";
      const processing = document.querySelector(".processingWrapper");
      processing.style.display = "block";
    }, 4000);

    setTimeout(() => {
      const processing = document.querySelector(".processingWrapper");
      processing.style.display = "none";
      const payStackWrapper = document.querySelector(".payStackWrapper");
      payStackWrapper.style.display = "block";
    }, 8000);
  }
});
//
//
const payStack = document.querySelector(".payStack");
const stackAmount = document.getElementById("amountInput");
stackAmount.value = Math.round(localStorage.getItem("totalAmount"));
payStack.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();
  const userEmail = document.getElementById("userEmail");
  const amountInput = document.getElementById("amountInput");
  let handler = PaystackPop.setup({
    key: "pk_test_bb3514eaf08a35c25e2d8d0a8c887d391362661d",
    email: userEmail.value,
    amount: amountInput.value * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1),
    //

    onclose: function () {
      alert("window closed");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      const payStackWrapper = document.querySelector(".payStackWrapper");
      payStackWrapper.style.display = "none";
      const processed = document.querySelector(".processedWrapper");
      processed.style.display = "block";
      console.log(response, "response");
    },
  });
  handler.openIframe();
}
//
const previous = document.querySelector(".arrow-item");
previous.style.cursor = "pointer";
previous.addEventListener("click", () => {
  const payStackWrapper = document.querySelector(".payStackWrapper");
  payStackWrapper.style.display = "none";
  const initial = document.querySelector(".init");
  initial.style.display = "block";
});
const BacktoPayment = document.querySelector(".init-arrow-item");
BacktoPayment.style.cursor = "pointer";
BacktoPayment.addEventListener("click", () => {
  window.location.href = "../HTML/payment.html";
});
