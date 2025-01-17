window.addEventListener("load", () => {
  let usersListBtn = document.getElementById("usersBtn");
  let productsListBtn = document.getElementById("productsBtn");
  let ordersListBtn = document.getElementById("ordersBtn");
  let requistsListBtn = document.getElementById("requistBtn");
  let addUser = document.getElementById("addUser");
  let delUser = document.getElementById("delUser");
  targetDiv = document.getElementById("mainWrapper");

  usersListBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/Users").then((res) => {
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
        actionTh.innerText = "Change role";
        targetTr.appendChild(actionTh);

        targetTable.appendChild(targetTr);

        for (let i = 0; i < data.length; i++) {
          let targetTr = document.createElement("tr");
          if (data[i].role != "admin") {
            for (let r in data[i]) {
              let targetTd = document.createElement("td");

              targetTd.innerText = data[i][r];
              targetTr.appendChild(targetTd);
            }
            // button to change the user role to buyer
            let buttonTd = document.createElement("td");
            let buyerButton = document.createElement("button");
            buyerButton.innerText = "Buyer";
            buyerButton.style.backgroundColor = "black";
            buyerButton.style.color = "white";
            buyerButton.style.border = "none";
            buyerButton.style.borderRadius = "4px";
            buyerButton.style.cursor = "pointer";

            buyerButton.addEventListener("click", () => {
              fetch(`http://localhost:3000/Users/${data[i].id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  role: "buyer",
                }),
              }).then((res) => {
                alert(`Role Changed To Buyer!`);
              });
            });
            // button to change the user role to normal seller
            let sillerButton = document.createElement("button");
            sillerButton.innerText = "Seller";
            sillerButton.style.backgroundColor = "black";
            sillerButton.style.color = "white";
            sillerButton.style.border = "none";
            sillerButton.style.borderRadius = "4px";
            sillerButton.style.cursor = "pointer";

            sillerButton.addEventListener("click", () => {
              fetch(`http://localhost:3000/Users/${data[i].id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  role: "seller",
                }),
              }).then((res) => {
                alert(`Role Changed To seller!`);
              });
            });
            buttonTd.appendChild(sillerButton);
            buttonTd.appendChild(buyerButton);
            targetTr.appendChild(buttonTd);

            targetTable.appendChild(targetTr);
            /**/
          }
        }
        targetDiv.appendChild(targetTable);
      });
    });
  });

  productsListBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/Products").then((res) => {
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
        actionTh.innerText = "Actions";
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
          actionButton.innerText = "Delete";
          actionButton.style.backgroundColor = "black";
          actionButton.style.color = "white";
          actionButton.style.border = "none";
          actionButton.style.borderRadius = "4px";
          actionButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/Products/${data[i].id}`, {
              method: "DELETE",
            }).then((res) => {
              alert(`Product Deleted!`);
            });
          });
          buttonTd.appendChild(actionButton);
          targetTr.appendChild(buttonTd);

          targetTable.appendChild(targetTr);
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
        actionTh.innerText = "Actions";
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
          actionButton.innerText = "Delete";
          actionButton.style.backgroundColor = "black";
          actionButton.style.color = "white";
          actionButton.style.border = "none";
          actionButton.style.borderRadius = "4px";
          actionButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/Products/${data[i].id}`, {
              method: "DELETE",
            }).then((res) => {
              alert(`Product Deleted!`);
            });
          });
          buttonTd.appendChild(actionButton);
          targetTr.appendChild(buttonTd);

          targetTable.appendChild(targetTr);
        }
        targetDiv.appendChild(targetTable);
      });
    });
  });

  requistsListBtn.addEventListener("click", () => {
    fetch("http://localhost:3000/Requists").then((res) => {
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
        actionTh.innerText = "Statu";
        targetTr.appendChild(actionTh);

        targetTable.appendChild(targetTr);

        for (let i = 0; i < data.length; i++) {
          let targetTr = document.createElement("tr");
          for (let r in data[i]) {
            let targetTd = document.createElement("td");

            targetTd.innerText = data[i][r];
            targetTr.appendChild(targetTd);
          }
          // button to change the user role to buyer
          let buttonTd = document.createElement("td");
          let buyerButton = document.createElement("button");
          buyerButton.innerText = "Accept";
          buyerButton.style.backgroundColor = "black";
          buyerButton.style.color = "white";
          buyerButton.style.border = "none";
          buyerButton.style.borderRadius = "4px";
          buyerButton.style.cursor = "pointer";

          buyerButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/Requists/${data[i].id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                statu: "Accepted",
              }),
            }).then((res) => {
              alert(`Requist Accepted Successfully!`);
            });
          });
          // button to change the user role to normal seller
          let sillerButton = document.createElement("button");
          sillerButton.innerText = "Reject";
          sillerButton.style.backgroundColor = "black";
          sillerButton.style.color = "white";
          sillerButton.style.border = "none";
          sillerButton.style.borderRadius = "4px";
          sillerButton.style.cursor = "pointer";
          sillerButton.addEventListener("click", () => {
            fetch(`http://localhost:3000/Requists/${data[i].id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                statu: "Rejected",
              }),
            }).then((res) => {
              alert(`Requist Rejected Successfully!`);
            });
          });
          buttonTd.appendChild(sillerButton);
          buttonTd.appendChild(buyerButton);
          targetTr.appendChild(buttonTd);

          targetTable.appendChild(targetTr);
        }
        targetDiv.appendChild(targetTable);
      });
    });
  });

  addUser.addEventListener("click", () => {
    window.open(
      "AddUser.html",
      "_blank",
      "width=400,height=550,left=483,top=134"
    );
  });

  delUser.addEventListener("click", () => {
    window.open(
      "DeleteUser.html",
      "_blank",
      "width=400,height=550,left=483,top=134"
    );
  });
});
