const btnValidate=document.querySelector(".btn-validate-usa");
const numberUSA=document.querySelector(".input-number-usa");
const sheet=document.querySelector(".sheet");
const closeSheet=document.querySelector(".sheet-close");
const sheetText=document.querySelector(".sheet-text")

btnValidate.addEventListener("click",validateNumber);
closeSheet.addEventListener("click",closeWindow);

function validateNumber(){
    if(numberUSA.value!==""){
        let str=numberUSA.value;
        let regex=new RegExp('^([1]{0,1}[" "]{0,1})(([(])([0-9]{3})([)])|([" "])([0-9]{3})([" "]|[-])|([0-9]{3}))(-{0,1}|[" "])([0-9]{3})(-{0,1}|[" "])([0-9]{4})$','g')
        if(regex.test(str)===true){
            sheetText.innerHTML="The number is valid";
        }else{
            sheetText.innerHTML="The number is not valid";
        }
        sheet.classList.remove("inactive")
    }
}

function closeWindow(){
    sheet.classList.add("inactive")
}