
// // input 
// var uname = prompt('Enter your name?');


// // processing
// var welcomeMsg = ('the user is '+uname);


// // output
// alert(welcomeMsg);

var buttonClick = document.querySelector('#btn-translate');

console.log(buttonClick);

buttonClick.addEventListener("click", function clickEventHandler(){
    console.log('Clicked...!!!!')
    console.log('Input '+ txtInput.value);
})

//////
var txtInput = document.querySelector('#txt-Input');

console.log(txtInput);