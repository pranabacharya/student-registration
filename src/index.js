const uname = document.querySelector("#name")
const dob = document.querySelector("#dob")
const email = document.querySelector("#email")
const add = document.querySelector("#address")

const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", (e)=> {
    let username = uname.value;
    let userdob = dob.value;
    let useremail = email.value;
    let useraddress = add.value;
    if(username !== '' || userdob !== '' || useremail !== '' || useraddress !== ''){
        localStorage.setItem("data", JSON.stringify({
            uname: username,
            udob: userdob,
            uemail: useremail,
            uaddress: useraddress
        }))
    }else {
        e.preventDefault();
        alert("kindly fill all the details")
    }
})
