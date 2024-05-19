const subTotalAmount = Number(localStorage.getItem('totalPrice'))
const subtotal = document.querySelector('.subTotal')
subtotal.innerHTML = `$${subTotalAmount.toFixed(2)}`
const vatPercentage = document.querySelector('.vatax');
const vatpercent = Math.round(0.2 * subTotalAmount)
console.log(vatpercent, 'new percent');
vatPercentage.innerHTML = `$${vatpercent}`;
const shippingFee = Number(localStorage.getItem("shipping-fee"));

const calculateTotalAmount = (subTotalAmount + vatpercent + shippingFee
).toFixed(2)
const totalAmount = document.querySelector('.totalAmount')

totalAmount.innerHTML = `$${calculateTotalAmount}`

const userInput = document.querySelector('.userInput')
userInput.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const cardnumber = document.querySelector('.cardnumber')
    const cardexpirydate = document.querySelector('.expirydate')
    const cvv = document.querySelector('.cvv')
    const payBtn = document.querySelector('.paybutton')
    payBtn.disabled = true
    payBtn.innerHTML = `
    <div class="text-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
    if (cardnumber.value != '' && cardexpirydate.value != '' && cvv != '') {
        try {
            localStorage.removeItem('totalAmount')
            localStorage.setItem('totalAmount', calculateTotalAmount)
    
        } catch (error) {
            console.log(error);
        }finally{
            const processing = document.querySelector('.processingWrapper')
            const paystackblock = document.querySelector('.payStack')
            payBtn.innerHTML = `
            <i class="bi bi-lock-fill"></i>
             </svg> PAY NOW`;
            setTimeout(()=>{
            payBtn.disabled = false
            userInput.style.display = 'none'
             processing.style.display = 'block'
            }, 4000)  
            
            setTimeout(()=>{
                processing.style.display = 'none'
                paystackblock.style.display = 'block'

            },8000)
            
            //  storage update
            localStorage.clear()
        }
        
    }else{
        return
    }
    
})

//  storage update

// localStorage.clear()

const backtoshipping = document.querySelector('.backToluxuryshipping')
backtoshipping.style.cursor = 'pointer'
backtoshipping.addEventListener('click',()=>{
    window.location.href = './luxuryshipping.html'
})
const backTopayment = document.querySelector('.backToPayment')
backTopayment.addEventListener('click',()=>{
    window.location.href = '../HTML/luxurypayment.html'
})


