// Building a basic arithmetic calculator
let number1 = parseInt(prompt("Enter First Number: "))
let  number2 = parseInt(prompt("Enter Second Number: "))
let operation = prompt("Enter your preferred operator (* / - +): ")

if (operation === "+") {
    alert(number1 + number2); 
}
else if (operation === "-") {
    alert(number1 - number2);
}
else if (operation === "*") {
    alert(number1 * number2);
}
else if (operation === "/") {
    alert(number1 / number2);
}
else alert("Re-enter correct parameter");