

const display = document.getElementById("display");

document.addEventListener("keydown", keyinput);
function keyinput(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "/" || key === "*"||key===".") {
        appendToDisplay(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteLastDigit();
    } else if (key === "Delete") {
        clearDisplay();
    }
}
function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
}

function calculate(){
try {
   display.value= eval(display.value);
} catch (error) {
    display.value="invalid expression";
}
} 
function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay() {
    display.value="";
}
