let result=document.getElementById("result");
let CurrentResult='';

function addNumber(number){
    CurrentResult+=number;
    UpdateResult();
}
function clearResult(){
    CurrentResult='';
    UpdateResult();
}
function operate(operator){
    if(CurrentResult!==''){
        CurrentResult+=' '+operator+' ';
        UpdateResult();
    }
}
function addDecimal(){
    if(CurrentResult.indexOf('.')===-1){
        CurrentResult+='.';
        UpdateResult();
    }
}
function calculate(){
    if(CurrentResult!==''){
        try{
            CurrentResult=eval(CurrentResult).toString();
            UpdateResult();
        }
        catch(error){
            CurrentResult='';
            UpdateResult();
            alert("Invalid Expression");
        }
    }
}
function UpdateResult(){
    result.value=CurrentResult;
}