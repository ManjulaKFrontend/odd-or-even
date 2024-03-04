function checkOddOrEven() {
    var userInput = document.getElementById("numberInput").value;
    var resultElement = document.getElementById("result");

    if (isNaN(userInput)) {
        resultElement.textContent = "Please enter a valid number.";
    } else {
        var number = parseInt(userInput);
        resultElement.textContent = number % 2 === 0 ? "Even" : "Odd";
    }
}
