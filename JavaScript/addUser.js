window.addEventListener("load", () => {
  let addUserBtn = document.getElementById("addUserBtn");

  addUserBtn.addEventListener("click", () => {
    let obj = Array.from(document.querySelectorAll("#addUserForm input, select")).reduce(
      (acc, input) => ({ ...acc, [input.id]: input.value }),
      {}
    );
    fetch("http://localhost:3000/Users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((res) => {
      console.log(res);
      window.close();//<<--------if i faced any problem with sorting the data into the json file it is from you!!
    });
  });
});

