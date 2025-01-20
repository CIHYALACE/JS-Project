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
            buyerButton.style.backgroundColor = "grey";
            buyerButton.style.color = "white";
            buyerButton.style.border = "1px solid black";
            buyerButton.style.borderRadius = "4px";
            buyerButton.style.cursor = "pointer";
            buyerButton.style.padding="5px";


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
            let sellerButton = document.createElement("button");
            sellerButton.innerText = "Seller";
            sellerButton.style.backgroundColor = "grey";
            sellerButton.style.color = "white";
            sellerButton.style.border = "1px solid black";
            sellerButton.style.borderRadius = "4px";
            sellerButton.style.cursor = "pointer";
            sellerButton.style.padding="5px";
            sellerButton.style.margin="1px";

            sellerButton.addEventListener("click", () => {
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
            buttonTd.appendChild(sellerButton);
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
          let acceptButton = document.createElement("button");
          acceptButton.innerText = "Accept";
          acceptButton.style.backgroundColor = "grey";
          acceptButton.style.color = "white";
          acceptButton.style.border = "1px solid black";
          acceptButton.style.borderRadius = "4px";
          acceptButton.style.cursor = "pointer";
          acceptButton.style.padding="5px";
          acceptButton.style.margin="1px";

          acceptButton.addEventListener("click", () => {
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
          let rejectButton = document.createElement("button");
          rejectButton.innerText = "Reject";
          rejectButton.style.backgroundColor = "grey";
          rejectButton.style.color = "white";
          rejectButton.style.border = "1px solid black";
          rejectButton.style.borderRadius = "4px";
          rejectButton.style.cursor = "pointer";
          rejectButton.style.padding="5px";
          rejectButton.style.margin="1px";

          rejectButton.addEventListener("click", () => {
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
          buttonTd.appendChild(rejectButton);
          buttonTd.appendChild(acceptButton);
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
