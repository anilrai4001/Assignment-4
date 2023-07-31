const display = document.getElementById('password-display');
const inputlength = document.getElementById('length');
const displaylength = document.getElementById('length-number');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const boxes = document.getElementsByClassName('boxes');

const copy = document.getElementById('copy');

const btn = document.getElementById('generate');

displaylength.innerText = inputlength.value;
inputlength.addEventListener('input',()=>{
    displaylength.innerText = inputlength.value;
})

function getChar(s){
    return s.charAt(Math.floor(Math.random()*s.length));
}

let uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
let numbersSet = "1234567890";
let symbolsSet = "~!@#$%^&*()";

function generatePassword(){

    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = "black";
    }

    let password = "";

    let strengthCount =0;
    if(uppercase.checked)
        strengthCount++;
    if(lowercase.checked)
        strengthCount++;
    if(numbers.checked)
        strengthCount++;
    if(symbols.checked)
        strengthCount++;

    let len=displaylength.innerText;

    if(len<4)
        return password;
    while(len>0){
        if(!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked){
            break;
        }
        if(uppercase.checked && len>0){
            password += getChar(uppercaseSet);
            len--;

        }
        if(lowercase.checked && len>0){
            password += getChar(lowercaseSet);
            len--;
        }
        if(numbers.checked && len>0){
            password += getChar(numbersSet);
            len--;
        }
        if(symbols.checked && len>0){
            password += getChar(symbolsSet);
            len--;
        }
    }
    for(let i=0;i<strengthCount;i++){
        boxes[i].style.backgroundColor = "#A4FFAF";
    }

    return password;
}

btn.addEventListener('click',()=>{
    display.value = generatePassword();
})

copy.addEventListener('click',()=>{
    if(display.value==""){
        return;
    }
    
    navigator.clipboard.writeText(display.value);
    copy.innerText="copied";
    setTimeout(() => {
        copy.innerHTML=`<img src="vector.svg" alt="copy">`;
    }, 2000);
})