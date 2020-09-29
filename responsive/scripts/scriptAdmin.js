const btnEditProductNav = document.querySelector("#product-nav");
const btnOrderNav = document.querySelector("#orders-nav");

btnEditProductNav.addEventListener("click", (e) => {
  window.location.href = "AdminEditProducts.html";
});
btnOrderNav.addEventListener("click", (e) => {
  window.location.href = "AdminOrders.html";
});
