const btnEditProductNav = document.querySelector("#product-nav");
const btnOrderNav = document.querySelector("#orders-nav");
const slideNav = document.querySelector("#mySidenav");
const menuNav = document.querySelector(".menu-admin-nav");

btnEditProductNav.addEventListener("click", (e) => {
  window.location.href = "AdminProducts.html";
});
btnOrderNav.addEventListener("click", (e) => {
  window.location.href = "AdminOrders.html";
});
menuNav.addEventListener("click", () => {
  if (slideNav.style.top === "68px") {
    slideNav.style.height = "0";
    slideNav.style.top = "0";
    menuNav.style.backgroundImage = `url("https://www.flaticon.com/svg/static/icons/svg/2099/2099153.svg")`;
  } else {
    slideNav.style.top = "68px";
    slideNav.style.height = "100%";
    menuNav.style.backgroundImage = `url("https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg")`;
  }
});
slideNav.addEventListener('click', (e) => {
  if (e.toElement.nodeName !== 'A') {
    slideNav.style.height = "0";
    slideNav.style.top = "0";
    menuNav.style.backgroundImage = `url("https://www.flaticon.com/svg/static/icons/svg/2099/2099153.svg")`;
  }
})
function closeNav() {
  slideNav.style.height = "0";
  slideNav.style.top = "0";
}
