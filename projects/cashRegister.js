const btnStart=document.getElementById("btn-star-cid-1");
const btnRegister=document.getElementById("btn-star-cid-2");
const mainStart=document.querySelector(".width-register");
const cashRegister=document.querySelector(".cash-register-ui");
const cashValues=document.querySelectorAll(".input-cash .data-money");
const storeValues=document.querySelectorAll(".item-cid");
const priceAndPay=document.querySelectorAll(".form-cash-cid .data-money");
const responseCID=document.querySelector(".response-cid");
const btnClose=document.querySelector('.btn-close-svg');
const responseText=document.querySelector('.box-cid-response p');
const markJosema=document.querySelector('#mark');

let arrayValues=[["PENNY", ], ["NICKEL", ], ["DIME", ], ["QUARTER", ], ["ONE", ], ["FIVE", ], ["TEN", ], ["TWENTY", ], ["ONE HUNDRED", ]];
let counter=0;

btnStart.addEventListener("click",startCID);
btnRegister.addEventListener("click",registerCID);
btnClose.addEventListener("click",closeResponse);

function startCID(){
    cashValues.forEach(element => {
        let currentValue=element.children[1].value;
        if(isNaN(parseFloat(currentValue))){
            arrayValues[counter][1]=0;
        }else{
            arrayValues[counter][1]=parseFloat(currentValue);
        }
        counter++;
    });
    console.log(arrayValues)
    for (let i = 0; i < storeValues.length; i++) {
        storeValues[i].children[1].innerHTML=arrayValues[i][1];
    }
    mainStart.classList.add("inactive");
    cashRegister.classList.remove("inactive");
    markJosema.classList.remove('inactive')
}


let pricePay=[]

function registerCID(){
    pricePay=[];
    priceAndPay.forEach(element=>{
        pricePay.push(Number(element.children[1].value));
    })

    let change=parseFloat((pricePay[1]-pricePay[0]).toFixed(2));
    let total=[]
    let valueofcoin=[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
    let count,estado;
    let sum1=0;
    let sum2=0;
    let salida={}
    for(let i = valueofcoin.length-1 ; i >= 0; i--){
        if(change >= valueofcoin[i][1]){
            if(change % valueofcoin[i][1] > 0){
                if(Math.floor(change / valueofcoin[i][1]) * valueofcoin[i][1] > arrayValues[i][1]){
                total.push([valueofcoin[i][0],arrayValues[i][1]])
                change = (change - arrayValues[i][1]).toFixed(2)
                }else{
                    total.push([valueofcoin[i][0],Math.floor(change / valueofcoin[i][1]) * valueofcoin[i][1]])
                    change=(change % valueofcoin[i][1]).toFixed(2)
                }
            }else{
                total.push([valueofcoin[i][0],Math.floor(change / valueofcoin[i][1]) * valueofcoin[i][1]])
                break
            }
        }
    }
    for(let i=0;i<arrayValues.length;i++){
        if(arrayValues[i].indexOf(total[0][0])!=-1){
            count=i
            break
        }
    }
    for(let i=0;i<total.length;i++){
        sum1+=total[i][1];
    }
    for(let i=0;i<=count;i++){
        sum2+=arrayValues[i][1];
    }

    if(sum1<sum2){
        estado="OPEN"
    }else if(sum1==sum2){
        estado="CLOSED"
        total=[...arrayValues]
    }else{
        estado="INSUFFICIENT_FUNDS";
        total=[];
    }
    salida.status=estado;
    salida.change=total;
    console.log(total)
    console.log(salida);


    responseText.innerHTML=`${salida.status.split("_").join(" ")}`
    responseCID.classList.remove('inactive')
}

function closeResponse(){
    responseCID.classList.add('inactive')
}