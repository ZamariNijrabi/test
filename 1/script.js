// console.log('I am fine');
//
// alert('I am fine');
//
// document.getElementById('message').innerText = 'I am fine';

var name = 'Edris';

var lastName  = 'Ahmadi';

var fee = false;

var fullName = name + ' ' + lastName;

var age = null;


// display to user

document.getElementById('name').innerText = name;
document.getElementById('lastName').innerText = lastName;
document.getElementById('age').innerText = age;

document.getElementById('fee').innerText = fee ? 'Paid' : 'Not paid yet';
