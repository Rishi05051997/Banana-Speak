
// // input 
// var uname = prompt('Enter your name?');


// // processing
// var welcomeMsg = ('the user is '+uname);


// // output
// alert(welcomeMsg);

var buttonTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-Input');
var outputDiv = document.querySelector('#output');



// console.log(buttonTranslate);


function clickEventHandler(){
    // console.log("clicked...!!!");
    // console.log("Input"+ txtInput.value)
    outputDiv.innerText = "translated :"+ txtInput.value
}


buttonTranslate.addEventListener("click", clickEventHandler)

// console.log(txtInput);