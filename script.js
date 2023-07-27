const uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '`', '~'];

const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');

let includeUpper=false;
let includeLower=false;
let includeNumber=false;
let includeSymbol=false;

upper.addEventListener('click',(e)=>{
    includeUpper = !includeUpper;
    console.log(includeUpper);
});
lower.addEventListener('click',(e)=>{
    includeLower = !includeLower;
    console.log(includeLower);
});
number.addEventListener('click',(e)=>{
    includeNumber = !includeNumber;
    console.log(includeNumber);
});
symbol.addEventListener('click',(e)=>{
    includeSymbol = !includeSymbol;
    console.log(includeSymbol);
});


let s = "test";
let num=10;
while(num>10){
    if(num>0 && includeUpper){
        let index = Math.floor(Math.random()*26);
        s += uppercaseAlphabets[index];
        console.log(s);
        --num;
    }
    if(num>0 && includeLower){
        let index = Math.floor(Math.random()*26);
        s += lowercaseAlphabets[index];
        console.log(s);
        --num;
    }
    if(num>0 && includeNumber){
        let index = Math.floor(Math.random()*10);
        s += numbersArray[index];
        console.log(s);
        --num;
    }
    if(num>0 && includeSymbol){
        let index = Math.floor(Math.random()*(symbolsArray.length));
        s += symbolsArray[index];
        console.log(s);
        --num;
    }
    num--;
}

console.log(s);