const collectionImg = {
  visibility: {
    0: "https://www.flaticon.com/svg/static/icons/svg/565/565654.svg", // show
    1: "https://www.flaticon.com/svg/static/icons/svg/565/565655.svg", // hide
  },
};
const dataProduct = {
  0001: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken",
    price: 50.0,
    inventory: 100,
    visibility: 0,
  },
  0002: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken",
    price: 50.0,
    inventory: 100,
    visibility: 0,
  },
  0003: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken",
    price: 50.0,
    inventory: 100,
    visibility: 0,
  },
  0004: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken",
    price: 50.0,
    inventory: 100,
    visibility: 1,
  },
  0005: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken",
    price: 50.0,
    inventory: 100,
    visibility: 1,
  },
};
const bodyTableProduct = document.querySelector("#body_table_product");
displayTableOfProducts(dataProduct);

function displayTableOfProducts(data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      let isHide = element.visibility;
      const trow = document.createElement("tr");
      const tdImg = document.createElement("td");
      const image = document.createElement("img");
      const tdName = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdInv = document.createElement("td");
      const tdAction = document.createElement("td");
      const divActionVis = document.createElement("div");
      const divActionDup = document.createElement("div");
      const divActionDel = document.createElement("div");
      image.className = "table-img-product";
      image.setAttribute("src", element.img);
      tdImg.appendChild(image);
      tdName.innerHTML = element.name;
      tdPrice.innerHTML = element.price + " Baht";
      tdInv.innerHTML = element.inventory;
      tdAction.className = "action-edit-product";
      divActionVis.className = "visibility";
      divActionVis.style.backgroundImage = `url("${collectionImg.visibility[isHide]}")`;
      //   divActionVis.addEventListener("click", (e) => {
      //       console.log(element.visibility);
      //     if (element.visibility) {
      //       divActionVis.style.backgroundImage = `url("${collectionImg.visibility[0]}")`;
      //     } else {
      //       divActionVis.style.backgroundImage = `url("${collectionImg.visibility[1]}")`;
      //     }
      //   });
      divActionDup.className = "duplicate";
      divActionDel.className = "delete";
      tdAction.appendChild(divActionVis);
      tdAction.appendChild(divActionDup);
      tdAction.appendChild(divActionDel);

      trow.appendChild(tdImg);
      trow.appendChild(tdName);
      trow.appendChild(tdPrice);
      trow.appendChild(tdInv);
      trow.appendChild(tdAction);
      trow.addEventListener("click", (e) => {
        if (e.target.className === "visibility") {
          console.log(isHide);
          if (isHide) {
            isHide = 0;
            divActionVis.style.backgroundImage = `url("${collectionImg.visibility[0]}")`;
          } else {
            isHide = 1;
            divActionVis.style.backgroundImage = `url("${collectionImg.visibility[1]}")`;
          }
        } else {
          console.log(element);
        }
      });
      bodyTableProduct.appendChild(trow);
    }
  }
}
