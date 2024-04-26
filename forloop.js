// Generating a multiplication table for a given number
// const number = 7; // The number for which we want to generate the multiplication table

// console.log("Multiplication table for", number, ":");

// for (let i = 1; i <= 10; i++) {
//     const result = number * i;
//     console.log(number, "x", i, "=", result);
// }



// Define the number of rows for the star pattern
// const numRows = 5;

// // Loop through each row
// for (let i = 1; i <= numRows; i++) {
//     let pattern = '';

//     // Loop to create the pattern for each row
//     for (let j = 1; j <= i; j++) {
//         pattern += '* ';
//        // document.getElementById('star').innerHTML = pattern;

//     }

//     // Display the pattern for the current row
    
//     console.log(pattern);
// }


function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

printMultiplicationTable(9); // Replace 5 with any number

