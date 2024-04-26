// Get the current date
const currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDay = currentDate.getDay();

console.log(currentDay);
// Initialize a variable to store the name of the day
let dayName;

// Use a switch statement to assign the day name based on the day of the week
switch (currentDay) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

// Output the name of the day
console.log("Today is " + dayName);
document.getElementById("currentDay").innerHTML = "Today is "+dayName;
