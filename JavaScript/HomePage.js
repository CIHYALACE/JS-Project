let account = document.getElementById("account");
  let userName = localStorage.getItem("userName");
  if (userName == null) {
    account.innerHTML = `<a href="#" id="accText" onclick="openLoginWindow()">SignUp/Login</a>`;
  } else {
    account.innerHTML = `<a href="#" id="accText" onclick="openLoginWindow()">${userName}</a>`;
  }
const openLoginWindow = () => {
  let accText = document.getElementById("accText");

  console.log(userName)
  account.style.fontSize = "16px";

  console.log(accText.innerText);
  if (accText.innerText == "SignUp/Login") {
    window.open(
      "LoginPage.html",
      "_blank",
      "width=400,height=550,left=483 ,top=134"
    );
  } else {
    if(confirm("Do You Wanna Logout?")){    
      localStorage.removeItem("userName");
      localStorage.removeItem("userGmail");
      account.innerHTML = `<a href="#" id="accText" onclick="openLoginWindow()">SignUp/Login</a>`;
      alert("You Logged out Successfully!")
    }
  }
};
