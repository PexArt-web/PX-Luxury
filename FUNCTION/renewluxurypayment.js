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
let backtoshipping = document.querySelector('.backToluxuryshipping')
backtoshipping.style.cursor = 'pointer'
backtoshipping.addEventListener('click',()=>{
    window.location.href = './luxuryshipping.html'
})

let backTopayment = document.querySelector('.backToPayment')
backTopayment.addEventListener('click',()=>{
    window.location.href = '../HTML/luxurypayment.html'
})