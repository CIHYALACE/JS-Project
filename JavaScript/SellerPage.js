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
            let actionButton = document.createElement("button");
            actionButton.innerText = "Delete";
            actionButton.style.backgroundColor = "grey";
            actionButton.style.color = "white";
            actionButton.style.border = "1px solid black";
            actionButton.style.borderRadius = "4px";
            actionButton.style.cursor = "pointer";
            actionButton.style.padding="5px";
            actionButton.style.margin="1px";

            actionButton.addEventListener("click", () => {
              fetch(`http://localhost:3000/Products/${data[i].id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res) => {
                alert(`Product Deleted successfully!`);
              });
            });
            buttonTd.appendChild(actionButton);
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
          let deliverdButton = document.createElement("button");
          deliverdButton.innerText = "Deliverd";
          deliverdButton.style.backgroundColor = "grey";
          deliverdButton.style.color = "white";
          deliverdButton.style.border = "1px solid black";
          deliverdButton.style.borderRadius = "4px";
          deliverdButton.style.cursor = "pointer";
          deliverdButton.style.padding="5px";
          deliverdButton.style.margin="1px";
          
          deliverdButton.addEventListener("click", () => {
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

          let shippedButton = document.createElement("button");
          shippedButton.innerText = "Shipped";
          shippedButton.style.backgroundColor = "grey";
          shippedButton.style.color = "white";
          shippedButton.style.border = "1px solid black";
          shippedButton.style.borderRadius = "4px";
          shippedButton.style.cursor = "pointer";
          shippedButton.style.padding="5px";
          shippedButton.style.margin="1px";

          shippedButton.addEventListener("click", () => {
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
          buttonTd.appendChild(shippedButton);
          buttonTd.appendChild(deliverdButton);
          targetTr.appendChild(buttonTd);

          targetTable.appendChild(targetTr);
        }
        targetDiv.appendChild(targetTable);
      });
    });
  });
});
