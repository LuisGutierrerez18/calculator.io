const display = document.getElementById("Display");

function ShowOnDisplay(input){
    display.value += input;
}

function Clear(){
    display.value = "";
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}