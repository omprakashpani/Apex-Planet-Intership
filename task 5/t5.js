let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total;
  document.getElementById("cart-items").textContent = cart.length;
  document.getElementById("cart-count").textContent = cart.length;
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
});
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    const sectionHeight = sec.offsetHeight;
    const sectionId = sec.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const totalSlides = slides.length;
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}
