window.addEventListener("load", () => {
  let addProductBtn = document.getElementById("addproduct");
  let productsListBtn = document.getElementById("productsBtn");
  let ordersListBtn = document.getElementById("ordersBtn");
  let targetDiv = document.getElementById("mainWrapper");

  addProductBtn.addEventListener("click", () => {
    window.open(
      "addProduct.html",
      "_blank",
      "width=400,height=550,left=483,top=134"
    );
  });

  productsListBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/Products").then((res) => {
      res.json().then((data) => {
        targetDiv.innerHTML = "";

        let targetTable = document.createElement("table");
        let targetTr = document.createElement("tr");
        let sellerGmail = localStorage.getItem("userGmail");

        Object.keys(data[0]).forEach((k) => {
          let targetTh = document.createElement("th");
          targetTh.innerText = k;
          targetTr.appendChild(targetTh);
        });

        let actionTh = document.createElement("th");
        actionTh.innerText = "Action";
        targetTr.appendChild(actionTh);

        targetTable.appendChild(targetTr);

        for (let i = 0; i < data.length; i++) {
          let targetTr = document.createElement("tr");
          if (data[i].sellerEmail == sellerGmail) {
            for (let r in data[i]) {
              let targetTd = document.createElement("td");

              targetTd.innerText = data[i][r];
              targetTr.appendChild(targetTd);
            }
            // button to change the user role to buyer
            let buttonTd = document.createElement("td");

            // button to change the user role to normal seller
            let sillerButton = document.createElement("button");
            sillerButton.innerText = "Delete";
            sillerButton.style.backgroundColor = "black";
            sillerButton.style.color = "white";
            sillerButton.style.border = "none";
            sillerButton.style.borderRadius = "4px";
            sillerButton.style.cursor = "pointer";

            sillerButton.addEventListener("click", () => {
              fetch(`http://localhost:3000/Products/${data[i].id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res) => {
                alert(`Product Deleted successfully!`);
              });
            });
            buttonTd.appendChild(sillerButton);
            targetTr.appendChild(buttonTd);

            targetTable.appendChild(targetTr);
            /**/
          }
        }
        targetDiv.appendChild(targetTable);
      });
    });
  });

  ordersListBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/Orders").then((res) => {
      res.json().then((data) => {
        targetDiv.innerHTML = "";

        let targetTable = document.createElement("table");
        let targetTr = document.createElement("tr");

        Object.keys(data[0]).forEach((k) => {
          let targetTh = document.createElement("th");
          targetTh.innerText = k;
          targetTr.appendChild(targetTh);
        });

        let actionTh = document.createElement("th");
        actionTh.innerText = "status";
        targetTr.appendChild(actionTh);

        targetTable.appendChild(targetTr);

        for (let i = 0; i < data.length; i++) {
          let targetTr = document.createElement("tr");
          for (let r in data[i]) {
            let targetTd = document.createElement("td");

            targetTd.innerText = data[i][r];
            targetTr.appendChild(targetTd);
          }

          let buttonTd = document.createElement("td");
          let actionButton = document.createElement("button");
          actionButton.innerText = "Deliverd";
          actionButton.style.backgroundColor = "black";
          actionButton.style.color = "white";
          actionButton.style.border = "none";
          actionButton.style.borderRadius = "4px";
          actionButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/Orders/${data[i].id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                statu: "deliverd",
              }),
            }).then((res) => {
              alert(`statu Changed To delirerd!`);
            });
          });

          let sillerButton = document.createElement("button");
          sillerButton.innerText = "Shipped";
          sillerButton.style.backgroundColor = "black";
          sillerButton.style.color = "white";
          sillerButton.style.border = "none";
          sillerButton.style.borderRadius = "4px";
          sillerButton.style.cursor = "pointer";

          sillerButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/Orders/${data[i].id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                statu: "shipped",
              }),
            }).then((res) => {
              alert(`Statu Changed To shipped!`);
            });
          });
          buttonTd.appendChild(sillerButton);
          buttonTd.appendChild(actionButton);
          targetTr.appendChild(buttonTd);

          targetTable.appendChild(targetTr);
        }
        targetDiv.appendChild(targetTable);
      });
    });
  });
});
