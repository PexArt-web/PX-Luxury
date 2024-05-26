// get subtotal from storage
const subtotal_amount = Number(localStorage.getItem("totalPrice"));
const subtotal = document.querySelector(".subTotal");
subtotal.innerHTML = subtotal_amount.toFixed(2);

// calculate V.A.T

const vatPercent = document.querySelector(".vatax");

let vatPercentage = Math.round(0.2 * subtotal_amount);
vatPercent.innerHTML = vatPercentage;

// get shipping fee from storage
const shippingFee = Number(localStorage.getItem("shipping-fee"));

// calculate total amount
let calculateTotalAmount = subtotal_amount + vatPercentage + shippingFee;
let amountTotal = document.querySelector(".totalAmount");
amountTotal.innerHTML = ''
amountTotal.innerHTML = calculateTotalAmount.toFixed(2);
//

const userInput = document.querySelector(".userInput");
userInput.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cardnumber = document.querySelector(".cardnumber");
  const cardexpirydate = document.querySelector(".expirydate");
  const cvv = document.querySelector(".cvv");
  const payBtn = document.querySelector(".paybutton");
  payBtn.disabled = true;
  // payBtn.innerHTML
  if (!cardnumber.value && !cardexpirydate.value && !cvv.value) {
    return;
  }
  try {
   
  } catch (error) {
    console.log(error);
  } finally {
    let processing = document.querySelector(".processingWrapper");
    const payStackblock = document.querySelector(".payStack");

    // setTimeout(()=>{
    //     userInput.style.display = 'none'
    //     processing.style.display = 'block'
    // }, 4000)

    // setTimeout(()=>{
    //     processing.style.display = 'none'
    //     payStackblock.style.display = 'block'
    // }, 8000)


    payBtn.disabled = false
    payBtn.innerHTML = `<i class="bi bi-lock-fill"></i>
    </svg> PAY NOW
    `;
  }
});

let backtoshipping = document.querySelector('.backToluxuryshipping')
backtoshipping.style.cursor = 'pointer'
backtoshipping.addEventListener('click',()=>{
    window.location.href = './luxuryshipping.html'
})

let backTopayment = document.querySelector('.backToPayment')
backTopayment.addEventListener('click',()=>{
    window.location.href = '../HTML/luxurypayment.html'
})