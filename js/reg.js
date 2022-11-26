if(localStorage.getItem('users') === null) {
    localStorage.setItem('users',JSON.stringify([]))
}
let btn = document.querySelector('.reg-btn');
btn.onclick = function() {
    let name = document.querySelector('.f-name').value;
    let surname = document.querySelector('.l-name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.pass').value;
    let error = document.getElementById('Error')
    var check = true;
    
    let list = JSON.parse(localStorage.getItem('users'));
        console.log(list);
    for (const user of list) {
        if (user.Email == email) {
            check = false
        }
    }

    if (check == true) {
        list.push({
            FirstName:name,
            LastName:surname,
            Email: email,
            Password: password,
        
            
        })
        localStorage.setItem('users',JSON.stringify(list))
        location.replace("/page-1.html")
        console.log(list);
    }
    else{
        error.innerHTML ="<i class='fa-regular fa-face-angry'></i>"+ " " + "Еhis e-mail is already registered.";
        error.style.color ="red"
    }
   
   
}
