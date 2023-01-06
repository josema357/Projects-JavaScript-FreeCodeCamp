const inputText=document.querySelector(".input-text");
const btnChecker=document.querySelector(".btn-checker");
const sheet=document.querySelector(".sheet");
const sheetText=document.querySelector(".sheet-text");
const sheetClose=document.querySelector(".sheet-close");

btnChecker.addEventListener("click",verify);
sheetClose.addEventListener("click",closeSheet);

//function to check the text
function verify(){
    let text=inputText.value;
    if(palindrome(text)===true && text!==""){
        sheet.classList.remove("inactive");
        sheetText.innerHTML="Is a palindrome.";
    }else if(palindrome(text)===false && text!==""){
        sheet.classList.remove("inactive");
        sheetText.innerHTML="Is not a palindrome.";
    }
}
//verifier function
function palindrome(str) {
    let nuevo=str.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    let compare=nuevo.split("").reverse().join("");
    if(nuevo===compare){
      return true;
    }
    return false;
}
//function to close the sheet
function closeSheet(){
    sheet.classList.add("inactive");
}

