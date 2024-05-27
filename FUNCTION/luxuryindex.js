const carouselDisplay = [
  {
    id: 1,
    title: "Elegant Golden-Base Stone Top Dining Table",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FNWIJKUj.jpeg&w=640&q=75",
    price: 66,
    discription:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern decoration.",
  },
  {
    id: 2,
    title: "Sleek Mirror Finish Phone Case",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2Fyb9UQKL.jpeg&w=640&q=75",
    price: 27,
    discription: `Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.`,
  },
  {
    id: 3,
    title: "Stylish Red & Silver Over-Ear Headphones",
    image:
      "https://yard-sale-store.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FYaSqa06.jpeg&w=640&q=75",
    discription:
      "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    price: 60,
  },
];

const firstDisplay = [
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

const lastImageDisplay = [
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

const carousel = document.querySelector(".carousel");
carousel.innerHTML = `<div class="carousel-inner" >
<div class="carousel-item active " data-bs-interval="10000">
<div class="carousel-each">
<img src="${carouselDisplay[0].image}" class="d-block w-100" alt="..."">
  <div class="card">
  <h4 class="title">${carouselDisplay[0].title}</h4>
<h5>$${carouselDisplay[0].price} <del>$60.77</del></h5>
<p> ${carouselDisplay[0].discription}</p>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
  <button class="btn btn-dark me-md-2 mt-5" type="button">Shop Now</button>
</div>
</div>

</div>
  
</div>
<div class="carousel-item " data-bs-interval="2000">
<div class="carousel-each">
  <img src="${carouselDisplay[1].image}" class="d-block w-100" alt="..." id='imgg'>
  <div class="card ">
  <h4 class="title">${carouselDisplay[1].title}</h4>
  <h5>$${carouselDisplay[1].price} <del>$60.99</del></h5>
<p>${carouselDisplay[1].discription}</p>
     <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
  <button class="btn btn-dark me-md-2" type="button">Shop Now </button>
</div>

  </div>
  
  </div>
</div>
<div class="carousel-item ">
<div class="carousel-each">
  <img src="${carouselDisplay[2].image}" class="d-block w-100" alt="...">
  <div class="card">
  <h4 class="title">${carouselDisplay[2].title}</h4>
  <h5>$${carouselDisplay[2].price} <del>$755</del></h5>
<p>${carouselDisplay[2].discription}</p>
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

firstDisplay.forEach((display) => {
  const firstMinDisplay = document.querySelector(".firstMiniDisplay");
  firstMinDisplay.innerHTML += `<div class="col">
   <div class="card h-100" style="height: 40vh">
   <img src="${display.image}" class="card-img-top" alt="..." style="height: 40vh;">
   <div class="card-body">
     <h5 class="card-title">${display.title}</h5>
     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <a href="#signIn" class="text-decoration-none">
     <div class="d-grid gap-2">
     <button class="btn  text-info shopDis" type="button" style="background-color:rgb(2,8,38); height:9vh;" >Shop Now </button>
   </div></a>
   </div>
  
 </div>
 </div>
   `;
});

const eyeOpen = document.querySelector(".eyeOpen");
const eyeClose = document.querySelector(".eyeClose");
eyeClose.style.display = "none";
eyeOpen.addEventListener("click", () => {
  const password = document.querySelector(".password");
  password.setAttribute("type", "text");
  eyeOpen.style.display = "none";
  eyeClose.style.display = "block";
});
eyeClose.addEventListener("click", () => {
  const password = document.querySelector(".password");
  password.setAttribute("type", "password");
  eyeClose.style.display = "none";
  eyeOpen.style.display = "block";
});
