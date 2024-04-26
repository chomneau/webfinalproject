

// function sum(num1, num2){
//     console.log(num1+num2);
// }

// sum(5,2);

//Return function
// function add(a,b){
//     return a+b;
// }
// let result = add(3,5);
// console.log(result);

//Function Expressions
// const total = function(a,b){
//     return a*b;
// };

// let result = total(9,8);
// console.log(result);

// Arrow Function
// const subtract = (a, b) => a - b;

// let result = subtract(10, 5); // result will be 5
// console.log(result);


function calculateRectangleArea(length, width) {
   
    // Check if both length and width are positive numbers
    if (length <= 0 || width <= 0) {
        return "Invalid input. Length and width must be positive numbers.";
    }

    // Calculate the area of the rectangle
    let area = length * width;
    return area;
}

function callMe(){
    let width = prompt("please input width");
    let length = prompt("please input length");
   let result = calculateRectangleArea(width, length);
    document.getElementById("area").innerHTML = "The area is :"+result;
}

// Test the function


//console.log(calculateRectangleArea(width, length)); // Output: 15
//console.log(calculateRectangleArea(0, 4)); // Output: Invalid input. Length and width must be positive numbers.
//console.log(calculateRectangleArea(10, 6)); // Output: 60
