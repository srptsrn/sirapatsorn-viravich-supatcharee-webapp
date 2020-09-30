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
    name: "Chicken1",
    price: 50.0,
    inventory: 100,
    visibility: 0,
  },
  0002: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken2",
    price: 50.0,
    inventory: 100,
    visibility: 0,
  },
  0003: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken3",
    price: 50.0,
    inventory: 100,
    visibility: 0,
  },
  0004: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken4",
    price: 50.0,
    inventory: 100,
    visibility: 1,
  },
  0005: {
    img:
      "https://static.wixstatic.com/media/e9cd45_5733c955f336440fae920a5496704d95~mv2.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_85/e9cd45_5733c955f336440fae920a5496704d95~mv2.webp",
    name: "Chicken5",
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
          if (isHide) {
            if (confirm(`Confirm show ${element.name}?`)) {
              isHide = 0;
              divActionVis.style.backgroundImage = `url("${collectionImg.visibility[0]}")`;
            }
          } else {
            if (confirm(`Confirm hide ${element.name}?`)) {
              isHide = 1;
              divActionVis.style.backgroundImage = `url("${collectionImg.visibility[1]}")`;
            }
          }
        } else if (e.target.className === "duplicate") {
          if (confirm(`Confirm duplicate ${element.name}?`)) {
            alert(`Duplicate ${element.name} success.`);
          }
        }  else if (e.target.className === "delete") {
          if (confirm(`Confirm delete ${element.name}?`)) {
            alert(`Delete ${element.name} success.`);
          }
        } else {
          console.log(element);
        }
      });
      bodyTableProduct.appendChild(trow);
    }
  }
}
