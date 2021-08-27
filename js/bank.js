  document.getElementById('loginSubmit').addEventListener('click', function () {

    //1. get use email
    const email = document.getElementById('emailInput');
     const result = email.value;
    //    console.log(result);
    email.value = '';

    //2. get use password
    const password = document.getElementById('passwordInput');
    const output = password.value;
    // console.log(output);
    password.value = '';
    
    //3. check email and password and go another page
    if (result == 'sontan@baap.com' && output == 'secret') {
        window.location.href = 'banking.html';
    }
   
   
})




    