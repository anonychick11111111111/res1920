// $(document).ready(function(){
//     $('.image-slider').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//         prevArrow:"<button type='button' class='slick-prev pull-left' style='height: 20px; margin-top:300px;' ><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//         nextArrow:"<button type='button' class='slick-next pull-right' style='height: 20px; margin-top:300px'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

//         // autoplay: true,
//         // autoplaySpeed: 1000
//     });
//   });


function signUp(e) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(password.length < 8) {
        document.getElementById('checkValid').style.display = 'block';
    } else if(password != confirmPassword) {
        window.location.href = './signUp.html';
        alert('password must equal password confirmation')
    }

    const user = {
        userName,
        email,
        password
    }

    localStorage.setItem(userName, JSON.stringify(user));
    alert('....')
}

function logIn(e) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = localStorage.getItem(userName);
    console.log(user)
    const data = JSON.parse(user);
    console.log(data)

    if(userName == data.userName && email == data.email && password == data.password) {
        alert('Log In Succesfully');
    } else if(user == null) {
        alert('You must sign up first')
    } else {
        alert('User Name or Email, Password not corect') 
    }
}