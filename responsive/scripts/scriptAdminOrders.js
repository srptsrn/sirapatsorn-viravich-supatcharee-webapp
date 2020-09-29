const dataOrders = {
  0001: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Unconfirmed",
    status: "-",
  },
  0002: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Confirmed",
    status: "Waiting for send",
  },
  0003: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Cancel",
    status: "-",
  },
  0004: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Unconfirmed",
    status: "-",
  },
  0005: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Unconfirmed",
    status: "-",
  },
  0006: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Unconfirmed",
    status: "-",
  },
  0007: {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Confirmed",
    status: "Waiting for send",
  },
  '0008': {
    name: "Jan Jan",
    email: "email1@mail.com",
    phone: "0987654321",
    date: "18:30 16/09/2020",
    confirm: "Confirmed",
    status: "Waiting for send",
  },
};
const bodyTableOrders = document.querySelector("#body_table_orders");
displayTableOfOrders(dataOrders);

function displayTableOfOrders(data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key];
      const trow = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdEmail = document.createElement("td");
      const tdPhone = document.createElement("td");
      const tdDate = document.createElement("td");
      const tdConfirm = document.createElement("td");
      const tdStatus = document.createElement("td");
      const tdDetail = document.createElement("td");
      const divDetail = document.createElement("div");

      tdName.innerHTML = element.name;
      tdEmail.innerHTML = element.email;
      tdPhone.innerHTML = element.phone;
      tdDate.innerHTML = element.date;
      tdConfirm.innerHTML = element.confirm;
      tdStatus.innerHTML = element.status;
      tdDetail.className = "detail-order";
      divDetail.className = "detail";
      tdDetail.appendChild(divDetail);

      trow.appendChild(tdName);
      trow.appendChild(tdEmail);
      trow.appendChild(tdPhone);
      trow.appendChild(tdDate);
      trow.appendChild(tdConfirm);
      trow.appendChild(tdStatus);
      trow.appendChild(tdDetail);
      trow.addEventListener("click", (e) => {
        console.log(element);
      });
      bodyTableOrders.appendChild(trow);
    }
  }
}
