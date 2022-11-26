if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]))
}
function Check() {
let email = document.querySelector('#Email1').value;
let errEmail = document.querySelector('.errEmail');
let password = document.querySelector('#Password1').value;
let errPas = document.querySelector('.errPass')
let login = document.getElementById('Login')
if (email.length == 0) {
    errEmail.style.color = "red"
    errEmail.innerHTML = "<i class='fa-regular fa-face-angry'></i>"+" "+ "The email or mobile number you entered isn’t connected to an account. Find your account and log in."
    return false;
 }
 if (password.length == 0) {
    errPas.style.color = "red"
    errPas.innerHTML = "<i class='fa-regular fa-face-angry'></i>"+" "+ "The password you’ve entered is incorrect. Forgot Password?"
    return false;
 }

let users = JSON.parse(localStorage.getItem('users'));
let emailCheck = false;
let passCheck = false;
for (const user of users) {
    if(user.Email === email ){
        emailCheck = true;
        if (user.Password == password ) {
            passCheck = true;
            break;
        }
    }
}
console.log(emailCheck);
console.log(passCheck);

if (emailCheck == false) {
    errEmail.style.color = "red"
    errEmail.innerHTML = "<i class='fa-regular fa-face-angry'></i>"+ " " + "The email or mobile number you entered isn’t connected to an account. Find your account and log in."
 
}
else if (passCheck == false){
    errPas.style.color = "red"
    errPas.innerHTML ="<i class='fa-regular fa-face-angry'></i>"+" "+ "The password you’ve entered is incorrect. Forgot Password?"
}
else{
    location.replace("/page-1.html")
        console.log("++");
        return;
}

}