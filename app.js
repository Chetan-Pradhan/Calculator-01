let display = document.getElementById("display");





function displayNum(num){
    // display.value += num;
    display.value += num;
}

function clearScreen(){
    display.value= "";
}

function allThing(){
    try{
        display.value = eval(display.value)
    }
    catch(err){
        console.error("there is the error")
    }
}