const inputNumber=document.querySelector(".input-natural-number");
const btnConvert=document.querySelector(".convert");
const resultConvert=document.querySelector(".output-container");

btnConvert.addEventListener("click",convertNumber);

function convertNumber(num){
    if(num===4000){
        return 'IV'
    }
    const numers=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const leters=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let valor,posicion;
    let numleter=[]
    let resto=1;
    while(resto>0){
        for(let i=0;i<numers.length;i++){
            if(num>=numers[i]){
            valor=numers[i];
            posicion=i;
            break;
            }
        }
        numleter.push(leters[posicion].repeat(Math.trunc(num/valor)));
        resto=num%valor
        num=resto;
    }
    return numleter.join("");
}