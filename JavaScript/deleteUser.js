window.addEventListener('load', ()=>{
    deleteBtn = document.getElementById('deleteBtn');

    deleteBtn.addEventListener('click',()=>{
      // to get data from the user in the form
      let obj = Array.from(
        document.querySelectorAll("#deleteForm input")
      ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

      //to get data from the jason file
      fetch('../db.json').then((resp)=>{
        resp.json().then(data=>{

          let found = false;
          //loop for all users in the json file
          for(let i =0;i<data.Users.length;i++){
          let gmail = data.Users[i].email;
          let role = data.Users[i].role;
        
          //check if the data are the same (from the user and json file)
          if(obj.email === gmail  && role != 'admin'){
            let userId = data.Users[i].id;
            fetch(`http://localhost:3000/Users/${userId}`,{
                method:'DELETE',
            })
            alert("User Deleted Successfully!");
            found = true;
            window.close()
            break;
           }
          }
          //if the loop finshed with matched results it will overwrite the var found to true
          // if the loop finished with no mached data will break and the found will be in defult value=false
          if(!found){
            alert("invalid email")
          }  
        });
      });
    });
  });