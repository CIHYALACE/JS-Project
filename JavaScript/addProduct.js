window.addEventListener("load", () => {
  let addBtn = document.getElementById("addBtn");
  // to get data from the user in the form
  addBtn.addEventListener("click", () => {
    let obj = Array.from(
      document.querySelectorAll("#productForm input,select")
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    fetch("../db.json").then((resp) => {
      resp.json().then((data) => {
        let emailFound = false;

        for (let i = 0; i < data.Users.length; i++) {
          let userGmail = data.Users[i].email;
          if (obj.sellerEmail == userGmail) {
            emailFound = true;
            fetch("http://localhost:3000/Products", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(obj),
            }).then((res) => {
              alert("Product Added to Reuqists Succefully!");
              let userConfirmed = confirm("Wanna Add Another Product?");
              if (!userConfirmed) {
                window.close();
              }
            });
            break;
          }
        }
        if (!emailFound) {
          alert("Invalid Email");
        }
      });
    });
  });
}); //end load
