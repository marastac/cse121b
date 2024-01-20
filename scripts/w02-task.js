/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Mario Alberto Astonitas Acuña'; // Declare and instantiate a variable to hold your name.
const currentYear = new Date().getFullYear(); // Declare and instantiate a variable for the current year.
const profilePicture = 'images/mario.png'; // Declare and instantiate a variable for the profile picture file path.


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name'); // Get the HTML element with the id of 'name'.
const foodElement = document.getElementById('food'); // Get the HTML element with the id of 'food'.
const yearElement = document.querySelector('#year'); // Get the element with the id of 'year'.
const imageElement = document.querySelector('main picture img'); // Get the profile image element.




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; // Assign the nameElement's innerHTML property the fullName variable value.
yearElement.textContent = currentYear; // Use the textContent property to set the value of the element to the value of the variable currentYear.
imageElement.setAttribute('src', profilePicture); // Use the setAttribute method to set the src property of the image element.
imageElement.setAttribute('alt', `Profile image of ${fullName}`); // Use the setAttribute method to set the alt property of the image element with a template literal.





/* Step 5 - Array */
const favFoods = ['Pizza', 'Sushi', 'Chocolate']; // Declare an array variable to hold your favorite foods.

foodElement.innerHTML = favFoods.join('<br>'); // Modify the HTML element with the id of 'food' to display your favorite foods array.

const singleFavoriteFood = 'Ice Cream'; // Declare and instantiate a variable to hold another single favorite food item.
favFoods.push(singleFavoriteFood); // Add the value stored in this new variable to your favorite food array.

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`; // Append the new array values onto the displayed content of the HTML element with the id of 'food' using a line break.

favFoods.shift(); // Remove the first element in the favorite food array.

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`; // Append the array output showing the modified array, using a line break.

favFoods.pop(); // Remove the last element in the favorite food array.

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`; // Append the array output with this final modified favorite foods array.





