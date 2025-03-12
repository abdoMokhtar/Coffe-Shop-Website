const nav = document.querySelector(".navbar");
const cart = document.querySelector("header .cart-item-container");
const search = document.querySelector("header .search-form");

const menuBtn = document.querySelector(".icons #menu-btn");
const cartBtn = document.querySelector(".icons #cart-btn");
const searchBtn = document.querySelector(".icons #search-btn");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
  cart.classList.remove("active");
  search.classList.remove("active");
};
cartBtn.onclick = () => {
  cart.classList.toggle("active");
  search.classList.remove("active");
  nav.classList.remove("active");
};
searchBtn.onclick = () => {
  search.classList.toggle("active");
  nav.classList.remove("active");
  cart.classList.remove("active");
};

window.onscroll = () => {
  nav.classList.remove("active");
  cart.classList.remove("active");
  search.classList.remove("active");
};
