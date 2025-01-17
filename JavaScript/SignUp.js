window.addEventListener("load", () => {
  let signupBtn = document.getElementById("signupBtn");
  let userEmail = document.getElementsByName("userEmail")[0];
  let userPass = document.getElementsByName("password")[0];
  let confPass = document.getElementsByName("confirmPassword")[0];
  let userEmailError = document.querySelector("#emailError");
  let userPassError = document.querySelector("#passError");
  let confPassError = document.querySelector("#confPassError");

  userEmail.addEventListener("blur", (e) => {
    validatedFunGlobal(
      userEmail,
      userEmailError,
      isUserEmailValid(userEmail.value)
    );
  });

  userPass.addEventListener("blur", (e) => {
    validatedFunGlobal(
      userPass,
      userPassError,
      isUserPassValid(userPass.value)
    );
  });

  confPass.addEventListener("blur", (e) => {
    validatedFunGlobal(
      confPass,
      confPassError,
      doPasswordsMatch(userPass.value,confPass.value)
    );
  });

  signupBtn.addEventListener("click", (e) => {
    let obj = Array.from(
      document.querySelectorAll("#signupForm input, select")
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
    if (
      !(
        isUserEmailValid(userEmail.value) &&
        isUserPassValid(confPass.value) &&
        doPasswordsMatch(confPass.value, confPass.value)
      )
    ) {
      e.preventDefault();

      validatedFunGlobal(
        userEmail,
        userEmailError,
        isUserEmailValid(userEmail.value)
      );
      validatedFunGlobal(
        userPass,
        userPassError,
        isUserPassValid(userPass.value)
      );
      validatedFunGlobal(
        confPass,
        confPassError,
        doPasswordsMatch(confPass.value)
      );
    } else {
      fetch("http://localhost:3000/Users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }).then((res) => {
        console.log(res);
        window.close(); //<<--------if i faced any problem with sorting the data into the json file it is from you!!
      });
    }
  });
});
