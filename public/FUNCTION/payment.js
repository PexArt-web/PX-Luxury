const group = document.getElementById("list-group-item");
let shipMethodOptions = [
  {
    optionName: "Standard Shipping",
    optionPrice: 50,
  },
  {
    optionName: "Pickup medium B2C",
    optionPrice: 8,
  },
  {
    optionName: "Self Collect",
    optionPrice: "FREE",
  },
];

shipMethodOptions.forEach((ele, i) => {
  group.innerHTML += `
      <tbody>
        <tr>
        <p class = 'shipOptions'><td><input onclick="check(${i})" type="radio" name= 'ans' id="shipMethod"> ${ele.optionName}</td> <td id = 'second'>$${ele.optionPrice}</td></p>
        </tr>
      </tbody>`;
});

async function check(id) {
  let shipMethod = document.getElementById("shipMethod");
  localStorage.setItem("shipping-fee", shipMethodOptions[id].optionPrice);
  if (shipMethodOptions[id].optionPrice === "FREE") {
    localStorage.setItem("shipping-fee", 0);
    shipMethodOptions[id].optionPrice = 0;
  }
}

let countries = [
  "United States",
  "Nigeria",
  "New Zealand",
  "Yemen",
  "United Kingdom",
  "Japan",
  "Rwanda",
  "Lithuania",
  "Timor-Leste",
  "Estonia",
  "Belgium",
  "Angola",
  "France",
  "Iceland",
  "Belarus",
  "Greece",
  "Switzerland",
  "Bulgaria",
  "Latvia",
  "Cyprus",
  "Poland",
  "South Africa",
  "Morocco",
  "Australia",
  "Türkiye",
  "Djibouti",
  "Luxembourg",
  "Rusia",
  "Finland",
  "Ireland",
  "Hungary",
  "Netherlands",
  "Zimbabwe",
  "Oman",
];

let inputCountry = document.getElementById("inputCountry");
countries.forEach((e, i) => {
  inputCountry.innerHTML += `
    <option>${e}</option>
    `;
});

function validateZip(id) {
  let zipCode = document.getElementById("inputZip");
  let invalidZip = document.querySelector(".errorMessage");
  invalidZip.innerHTML = "";
  if (zipCode.value.length < 5) {
    zipCode.classList.remove("is-valid");
    zipCode.classList.remove("is-invalid");
    invalidZip.innerHTML = "";
  } else if (zipCode.value.length == 5 || zipCode.value.length == 6) {
    zipCode.classList.remove("is-invalid");
    zipCode.classList.add("is-valid");
    invalidZip.innerHTML = "";
  } else if (zipCode.value.length > 6 && zipCode.value.length < 10) {
    zipCode.classList.remove("is-valid");
    zipCode.classList.add("is-invalid");
    invalidZip.innerHTML = `Please provide a valid zip.`;
  } else if (zipCode.value.includes("-") && zipCode.value.length === 10) {
    zipCode.classList.remove("is-invalid");
    zipCode.classList.add("is-valid");
    invalidZip.innerHTML = "";
  } else if (zipCode.value.length > 10) {
    zipCode.classList.remove("is-valid");
    zipCode.classList.add("is-invalid");
    invalidZip.innerHTML = `Please provide a valid zip.`;
  }
}
