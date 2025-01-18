window.addEventListener("load", () => {
  let targetDiv = document.getElementById("product-container");
  let decoresBtn = document.getElementById("decoresBtn");
  let candelsHoldersBtn = document.getElementById("candelsHoldersBtn");
  let keysHoldersBtn = document.getElementById("keysHoldersBtn");
  let vasesBtn = document.getElementById("vasesBtn");
  let allBtn = document.getElementById("allBtn");
  fetch("http://localhost:3000/Products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        const imgUrl = product.productImg.slice(12);
        const productCardHTML = `
            <div class="product-card">
              <img src="../Images/Products/${imgUrl}" alt="${product.productName}">
              <h3>${product.productName}</h3>
              <p class="price">${product.price}</p>
              <p>Enjoy Our ${product.role}</p>
              <button class="add-to-cart" onclick="openLoginWindow2()">Add to Cart</button>
            </div>
            <script>let openLoginWindow = ()=>{indow.open('LoginPage.html', '_blank', 'width=400,height=550,left=483,top=134')};</script>
          `;

        targetDiv.innerHTML += productCardHTML;
      });
    });

  decoresBtn.addEventListener("click", () => {
    targetDiv.innerHTML = "";
    fetch("http://localhost:3000/Products").then((res) => {
      res.json().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].role == "decores") {
            const imgUrl = data[i].productImg.slice(12);
            const productCardHTML = `
                    <div class="product-card">
                      <img src="../Images/Products/${imgUrl}" alt="${data[i].productName}">
                      <h3>${data[i].productName}</h3>
                      <p class="price">${data[i].price}</p>
                      <p>Enjoy Our ${data[i].role}</p>
                      <button class="add-to-cart" onclick="openLoginWindow2()">Add to Cart</button>
                    </div>
                    <script>let openLoginWindow = ()=>{indow.open('LoginPage.html', '_blank', 'width=400,height=550,left=483,top=134')};</script>
                  `;

            targetDiv.innerHTML += productCardHTML;
          }
        }
      });
    });
  });

  candelsHoldersBtn.addEventListener("click", () => {
    targetDiv.innerHTML = "";
    fetch("http://localhost:3000/Products").then((res) => {
      res.json().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].role == "candleHolders") {
            const imgUrl = data[i].productImg.slice(12);
            const productCardHTML = `
                    <div class="product-card">
                      <img src="../Images/Products/${imgUrl}" alt="${data[i].productName}">
                      <h3>${data[i].productName}</h3>
                      <p class="price">${data[i].price}</p>
                      <p>Enjoy Our ${data[i].role}</p>
                     <button class="add-to-cart" onclick="openLoginWindow2()">Add to Cart</button>
                    </div>
                    <script>let openLoginWindow = ()=>{indow.open('LoginPage.html', '_blank', 'width=400,height=550,left=483,top=134')};</script>
                  `;

            targetDiv.innerHTML += productCardHTML;
          }
        }
      });
    });
  });

  keysHoldersBtn.addEventListener("click", () => {
    targetDiv.innerHTML = "";
    fetch("http://localhost:3000/Products").then((res) => {
      res.json().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].role == "keysHolders") {
            const imgUrl = data[i].productImg.slice(12);
            const productCardHTML = `
                    <div class="product-card">
                      <img src="../Images/Products/${imgUrl}" alt="${data[i].productName}">
                      <h3>${data[i].productName}</h3>
                      <p class="price">${data[i].price}</p>
                      <p>Enjoy Our ${data[i].role}</p>
                      <button class="add-to-cart" onclick="openLoginWindow2()">Add to Cart</button>
                    </div>
                    <script>let openLoginWindow = ()=>{indow.open('LoginPage.html', '_blank', 'width=400,height=550,left=483,top=134')};</script>
                  `;

            targetDiv.innerHTML += productCardHTML;
          }
        }
      });
    });
  });

  vasesBtn.addEventListener("click", () => {
    targetDiv.innerHTML = "";
    fetch("http://localhost:3000/Products").then((res) => {
      res.json().then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].role == "vases") {
            const imgUrl = data[i].productImg.slice(12);
            const productCardHTML = `
                    <div class="product-card">
                      <img src="../Images/Products/${imgUrl}" alt="${data[i].productName}">
                      <h3>${data[i].productName}</h3>
                      <p class="price">${data[i].price}</p>
                      <p>Enjoy Our ${data[i].role}</p>
                      <button class="add-to-cart" onclick="openLoginWindow2()">Add to Cart</button>
                    </div>
                    <script>let openLoginWindow = ()=>{indow.open('LoginPage.html', '_blank', 'width=400,height=550,left=483,top=134')};</script>
                  `;

            targetDiv.innerHTML += productCardHTML;
          }
        }
      });
    });
  });

  allBtn.addEventListener("click", () => {
    targetDiv.innerHTML = "";
    fetch("http://localhost:3000/Products")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          const imgUrl = product.productImg.slice(12);
          const productCardHTML = `
            <div class="product-card">
              <img src="../Images/Products/${imgUrl}" alt="${product.productName}">
              <h3>${product.productName}</h3>
              <p class="price">${product.price}</p>
              <p>Enjoy Our ${product.role}</p>
              <button class="add-to-cart" onclick="openLoginWindow2()">Add to Cart</button>
              <script>let openLoginWindow = ()=>{indow.open('LoginPage.html', '_blank', 'width=400,height=550,left=483,top=134')};</script>

            </div>
          `;

          targetDiv.innerHTML += productCardHTML;
        });
      });
  });
});

let account = document.getElementById("account");
let userName = localStorage.getItem("userName");
if (userName == null) {
  account.innerHTML = `<a href="#" id="accText" onclick="openLoginWindow()">SignUp/Login</a>`;
} else {
  account.innerHTML = `<a href="#" id="accText" onclick="openLoginWindow()">${userName}</a>`;
}
const openLoginWindow = () => {
  let accText = document.getElementById("accText");

  console.log(accText.innerText);
  if (accText.innerText == "SignUp/Login") {
    window.open(
      "LoginPage.html",
      "_blank",
      "width=400,height=550,left=483 ,top=134"
    );
  } else {
    if (confirm("Do You Wanna Logout?")) {
      localStorage.removeItem("userName");
      localStorage.removeItem("userGmail");
      account.innerHTML = `<a href="#" id="accText" onclick="openLoginWindow()">SignUp/Login</a>`;
      alert("You Logged out Successfully!");
    }
  }
};

const openLoginWindow2 = () => {
  let accText = document.getElementById("accText");

  console.log(accText.innerText);
  if (accText.innerText == "SignUp/Login") {
    window.open(
      "LoginPage.html",
      "_blank",
      "width=400,height=550,left=483 ,top=134"
    );
  } else {
    alert("I Don't Have Cart So Pretend We Have One (╥﹏╥)");
  }
};
