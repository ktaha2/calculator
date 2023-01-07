// use DOM queries to get access to the DOM elements that you need


let equals = document.getElementById("btnEqual");
// link the displayDigit function to the click event of the digit buttons

//link the operationClicked function to the click even of the operation buttons

// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
// to the contents of the display label

    function clickEvent(){
        const digits = document.querySelectorAll('button');

            for (let index = 0; index < 10; index++){
                digits[index].onclick = displayDigit;
            }

        }
        
    clickEvent();

    function displayDigit(event){
        let text = event.target.innerText;
        let display = document.getElementById("display");
        display.innerHTML += text;
    }

// set the click event of the clear button
// to an anonymous function that clears the text of the display lable
let clear = document.getElementById("btnClear")
clear.onclick = clearDisplay;

function clearDisplay(){
    document.getElementById('display').innerHTML="";
}

let firstValue, secondValue, operation;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
    //Convert the value in the display label into a number and store it in the variable firstValue
    //Store the text of the clicked button in the variable 'operation' for latter reference
    //Clear the display lable to allow the user to enter the second value

    
    function operationClick(){
        const operation = document.querySelectorAll('button');

            for (let index = 11; index < 15; index++){
                operation[index].onclick = clickOperation;
            }

        }
operationClick();
    
    function clickOperation(event){
        firstValue = document.getElementById("display").innerHTML;
        operation = event.target.innerText;
        
       display.innerHTML="";
        
    }

//Define the equalClicked function to handle the click event of the equal button with the following steps
    //Convert the value in the display label to a number and store it in the variable secondValue
    // based on the value stored in the operation apply the corresponding operator on the first and second values
    // and display the result in the display label.

function equalClicked(){
        const equal = document.getElementById('btnEqual');
                equal.onclick = eqClickEvent;

        }

equalClicked();
    
    function eqClickEvent(event){
        var result;
        secondValue = document.getElementById("display").innerHTML;
    
        if (operation == "+") {
            result = Number(firstValue) + Number(secondValue);
        } else if (operation == "-") {
            result = firstValue - secondValue;
        } else if (operation == "/") {
            result = firstValue / secondValue;
        } else {
            result = firstValue * secondValue;
        }
        
       display.innerHTML=result;
        
    }


