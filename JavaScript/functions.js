const validatedFunGlobal=(input,error,validvar)=>{
    if(!validvar){  // 1
        input.focus();
        error.style.display='block';
    }else{
        error.style.display='none';
    }
}


const isUserEmailValid=(userEmail)=>{
    const pattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return userEmail.match(pattern);
}
const isUserPassValid=(userPass)=>{
    const pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return userPass.match(pattern);
}

const doPasswordsMatch = (userPass, confPass) => {
    return userPass === confPass;
};