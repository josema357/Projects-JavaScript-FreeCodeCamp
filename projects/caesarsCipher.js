const inputText=document.getElementById("input-text-cipher");
const btnEncode=document.querySelector(".btn-encode");

btnEncode.addEventListener("click",encodeText);

function encodeText(){
    let str=inputText.value;
    let arr=[]
    for(let i=0;i<str.length;i++){
        arr.push(str.charCodeAt(i))
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=65 & arr[i]<=90){
            let valChar=arr[i]+13;
            if(valChar>90 && typeof(String.fromCharCode(arr[i]))=="string"){
                let nevalor=65+(valChar-90)-1
                arr.splice(i,1,nevalor)
            }else{
                arr.splice(i,1,valChar)
            }
        
        }
    }
    inputText.value=arr.map((elem)=>String.fromCharCode(elem)).join("");
}