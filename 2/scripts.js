// User login function
function login() {

    // user name
    var username = document.getElementById('username').value;

    // password
    var password = document.getElementById('password').value;

    var passwordLength = password.length;

    var usernameLength = username.length;


    var isInfoValid = true;

    // check if the data is valid

    isInfoValid = passwordLength > 0 && usernameLength > 0 && username == 'admin@email.com' && password == 'secret';

    if(isInfoValid) {
        console.log('login');
    }else{
        console.log('invalid data');
    }

}