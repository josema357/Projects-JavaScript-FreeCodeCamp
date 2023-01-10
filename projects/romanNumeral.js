const inputNumber=document.querySelector(".input-natural-number");
const btnConvert=document.querySelector(".convert");
const resultConvert=document.querySelector(".ouput-container");

btnConvert.addEventListener("click",validatorFn);

function validatorFn(){
    if(inputNumber.value>0 && inputNumber.value<=4000){
        let ouputResult=convertNumber(Number(inputNumber.value));
        document.querySelector(".number-entered").innerHTML=inputNumber.value;
        document.querySelector(".number-converted").innerHTML=ouputResult;
        resultConvert.classList.remove("inactive");
    }
}

function convertNumber(num){
    if(num===4000){
        document.querySelector(".number-converted").classList.add("overline");
        return 'IV'
    }
    const numers=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const leters=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let value,position;
    let numleter=[]
    let resto=1;
    while(resto>0){
        for(let i=0;i<numers.length;i++){
            if(num>=numers[i]){
                value=numers[i];
                position=i;
                break;
            }
        }
        numleter.push(leters[position].repeat(Math.trunc(num/value)));
        resto=num%value
        num=resto;
    }
    document.querySelector(".number-converted").classList.remove("overline");
    return numleter.join("");
}