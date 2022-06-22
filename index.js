// Building a basic arithmetic calculator
let number1 = parseInt(prompt("Enter First Number: "))
let operation = prompt("Enter your preferred operator (* / - + ^): ")
let  number2 = parseInt(prompt("Enter Second Number: "))

if (operation === "+") {
    alert(number1 + "+" + number2 + "=" + parseInt(number1 + number2));
}
else if (operation === "-") { 
    alert(number1 + "-" + number2 + "=" + parseInt(number1 - number2));
}
else if (operation === "*") {
    alert(number1 + "*" + number2 + "=" + parseInt(number1 * number2));
}
else if (operation === "/") {
    alert(number1 + "/" + number2 + "=" + parseInt(number1 / number2));
}
else if (operation === "^") {
    alert(number1 + "^" + number2 + "=" + parseInt(number1 ** number2));
}
else alert("Re-enter correct parameter");
