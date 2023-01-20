const btnStart=document.querySelector(".btn-start-cid");
const mainStart=document.querySelector(".width-register");
const cashRegister=document.querySelector(".cash-register-ui");
const cashValues=document.querySelectorAll(".input-cash .data-money");
const storeValues=document.querySelectorAll(".item-cid");

let arrayValues=[]

btnStart.addEventListener("click",startCID)

function startCID(){
    cashValues.forEach(element => {
        arrayValues.push(element.children[1].value);
    });
    console.log(arrayValues)
    for (let i = 0; i < storeValues.length; i++) {
        if(arrayValues[i]===""){
            storeValues[i].children[1].innerHTML="0";
        }else{
            storeValues[i].children[1].innerHTML=arrayValues[i];
        }
    }
    mainStart.classList.add("inactive");
    cashRegister.classList.remove("inactive");
}