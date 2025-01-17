const openSignupWindow = () => {
  window.open(
    "SignUpPage.html",
    "_blank",
    "width=400,height=550,left=483,top=134"
  );
};

const openAdminWindow = () =>{
  window.open("../HTML/AdminPage.html","_blank") // Open admin page if role is admin
}

document.getElementById('signupLink').addEventListener('click', function (e) {
  e.preventDefault();
  openSignupWindow();
});

window.addEventListener('load', ()=>{
  loginBtn = document.getElementById('loginBtn');

  loginBtn.addEventListener('click',()=>{
    // to get data from the user in the form
    let obj = Array.from(
      document.querySelectorAll("#loginForm input")
    ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    //to get dat from the jason file
    fetch('../db.json').then((resp)=>{
      resp.json().then(data=>{

        let found = false;
        //loop for all users in the json file
        for(let i =0;i<data.Users.length;i++){
        let gmail = data.Users[i].email;
        let gmailValue = obj.email;
        let password = data.Users[i].password;
        let role = data.Users[i].role;
        //check if the data are the same (from the user and json file)
        if(obj.email === gmail && obj.password === password){
          localStorage.setItem('userName',gmailValue.split('@')[0])
          localStorage.setItem('userGmail',gmailValue)
          
          if( role == "admin"){
            window.opener.location.reload();
            window.open('../HTML/AdminPage.html')
            // ^^^^^problem solved by enable pop_up wondow in browser sitting
          }else if( role == "seller"){
            window.opener.location.reload();
            window.open('../HTML/SellerPage.html')
          }else{
            window.opener.location.reload();
          }
          found = true;
          window.close()
          break;
         }
        }
        //if the loop finshed with matched results it will overwrite the var found to true
        // if the loop finished with no mached data will break and the found will be in defult value=false
        if(!found){
          alert("invalid email or password")
        }

        
      });
    });
  });
});