'use strict';
const form = document.getElememtById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const conformPassword = document.getElementById('conform-password')

const inputArr = [username,email,password,conformPassword]

const showError = function(input,message){
    let formControl = username.parentElement;
        formControl.classList = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
}
const showSucess = function(input){
    let formControl = input.parentElement;
    formControl.classList = 'form-control sucess';
}

const checkRequired = function(inputArr){
    inputArr.forEach((input)=>{
        console.log(input);
    if (input.value.trim()===''){
        showError(input,`${input.name} is required`);
    }else {
        showSucess(input);
    }
} 

const checkPasswordMatch = function (input1,input2){
        if (input1.value.trim() ! =='' && input2.value.trim() ! ==''){
        if (input1.value.trim()!== input2.value.trim()){
            showError(input2,'password is not matched');

        }else{
            showSucess(input1);
            showSucess(input2);
        }
        };
    }



form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkRequired(inputArr);
    checkLength(username,5,12);
    checkLength(password,5,10);
    checkPasswordMatch(password,conformPassword);
//     if (username.value.trim()===''){
//         showError(username,'username is required')
// }else{
//     showSucess(username);
// }
//     if (email.value.trim()===''){
//         showError(email,'email is required')
//     }
//     else{
//         showSucess(email);
//     }
//     if (password.value.trim()===''){
//         showError(password,'password is required')
//     }
//     else{
//         showSucess(password);
//     }
//     if (conformPassword.value.trim()===''){
//         showError(conformPassword,'conformpassword is required')
//     }
//     else{
//         showSucess(conformPassword);
//     }
};