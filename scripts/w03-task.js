document.addEventListener("DOMContentLoaded", function () {
    /* LESSON 3 - Programming Tasks */

    /* FUNCTIONS */

    /* Function Definition - Add Numbers */
    function add(number1, number2) {
        return number1 + number2;
    }

    /* Function Declaration - Add Numbers from HTML Form Controls */
    function addNumbers() {
        let addNumber1 = Number(document.querySelector('#add1').value);
        let addNumber2 = Number(document.querySelector('#add2').value);
        document.querySelector('#sum').value = add(addNumber1, addNumber2);
    }

    /* Function Expression - Subtract Numbers */
    let subtract = function (number1, number2) {
        return number1 - number2;
    };

    /* Function Expression - Subtract Numbers from HTML Form Controls */
    let subtractNumbers = function () {
        let subtractNumber1 = Number(document.querySelector('#subtract1').value);
        let subtractNumber2 = Number(document.querySelector('#subtract2').value);
        document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
    };

    /* Arrow Function - Multiply Numbers */
    let multiply = (number1, number2) => number1 * number2;

    /* Arrow Function - Multiply Numbers from HTML Form Controls */
    let multiplyNumbers = () => {
        let factor1 = Number(document.querySelector('#factor1').value);
        let factor2 = Number(document.querySelector('#factor2').value);
        document.querySelector('#product').value = multiply(factor1, factor2);
    };

    /* Open Function Use - Divide Numbers */
    function divide(dividend, divisor) {
        return dividend / divisor;
    }

    /* Open Function Use - Divide Numbers from HTML Form Controls */
    function divideNumbers() {
        let dividend = Number(document.querySelector('#dividend').value);
        let divisor = Number(document.querySelector('#divisor').value);
        document.querySelector('#quotient').value = divide(dividend, divisor);
    }

    /* Connect Buttons to Functions */
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

    /* Decision Structure */
    document.querySelector('#getTotal').addEventListener('click', function () {
        let subtotal = Number(document.querySelector('#subtotal').value);
        let isMember = document.querySelector('#member').checked;

        if (isMember) {
            subtotal *= 0.8; // Apply 20% discount for members
        }

        let total = subtotal.toFixed(2);
        document.querySelector('#total').textContent = `$${total}`;
    });

    /* ARRAY METHODS - Functional Programming */

    /* Declare and Instantiate an Array */
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    /* Assign Array to HTML */
    document.querySelector('#array').textContent = numbersArray;

    /* Filter Odd Numbers */
    document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0);

    /* Filter Even Numbers */
    document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

    /* Reduce - Sum of Array */
    document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

    /* Map - Multiply by 2 */
    document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

    /* Map and Reduce - Sum of Multiplied Array */
    document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2)
        .reduce((sum, number) => sum + number, 0);
});
