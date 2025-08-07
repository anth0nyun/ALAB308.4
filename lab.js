// Part 1

// Starting String
// let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// //  Variables
// let row = ["", "", "", ""];
// let commas = 0; // Counter variable

// // Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//     if (csvStr[i] == ",") {
//         // If comma
//         commas++; // Add to comma counter
//     } else if (csvStr[i] == "\n") {
//         // If new line
//         console.log(...row); // print new line

//         // Clear previous data for new row
//         commas = 0;
//         row = ["", "", "", ""];
//     } else {
//         row[commas] += csvStr[i];
//     }

//     // If last char in string print final cells
//     if (csvStr.length - 1 == i) {
//         console.log(...row)
//     }
// }


// Part 2

//Variables
let allRows = [];
let row = [""];
let comma = 0;
let newCols = 1;
let numCols = 1;

for (let i = 0; i < csvStr.length; i++) {
  if (csvStr[i] === ",") numCols++;
  if (csvStr[i] === "\n");
}

for (let i = 0; i < csvStr.length; i++) {
    let char = csvStr[i];
    if (char === ",") {
        comma++;
    } else if (char === "\n") {
        console.log(row);
        row = [""];
        comma = 0;
    } else {
        row[comma] += char;
    }

    if (i === csvStr.length - 1) {
        console.log(row);
    }
}
