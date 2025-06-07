// SPLICE METHOD

// {
//  •	startIndex (required): Index to start modifying the array.
// 	•	deleteCount (optional): The number of elements to remove.
// 	•	item1, item2, … (optional): Items to add at the startIndex.

// }

const arrSplice = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
arrSplice.splice(1, 2); // Removes 2 and 3, arr becomes [1, 4, 5]
// console.log(arr); // [1, 4, 5]

// Add 6 at index 2
arrSplice.splice(2, 0, 6); // Adds 6 at index 2, arr becomes [1, 4, 6, 5]
// console.log(arr); // [1, 4, 6, 5]

// Replace 4 with 7
arrSplice.splice(1, 2, 7, 8); // Replaces 4 with 7 & 6 with 8, arr becomes [1, 7, 8, 5]
// console.log(arr); // [1, 7, 8, 5]

// Negative index (removes from the end)
arrSplice.splice(-2); // Removes last 2 elements
// console.log(arr); // [1, 7]

// ****************************************************************************************************************

// SLICE METHOD

// slice() returns a shallow copy of a portion of an array into a new array without modifying the original array.

// array.slice(startIndex, endIndex);

const arrSlice = [1, 2, 3, 4, 5];

// Extract elements from index 1 to 3 (not including 3)
const sliced = arrSlice.slice(1, 3);
// console.log(sliced); // [2, 3]
// console.log(arrSlice); // [1, 2, 3, 4, 5] (original array unchanged)

// Extract elements from index 2 to the end
const slicedEnd = arrSlice.slice(2);
// console.log(slicedEnd); // [3, 4, 5]

// Negative indices
const slicedNeg = arrSlice.slice(-3, -1);
// console.log(slicedNeg); // [3, 4]

const nums = [1, 2, 3, 4, 5];

// Multiply each element by 2
const doubled = nums.map((num) => {
  return num * 4;
});
console.log(doubled); // [2, 4, 6, 8, 10]

///////////

// Rest parameter

//
function functionName(...rest) {
  // rest will be an array containing all the passed arguments
}

function greet(message, ...names) {
  console.log(message);
  names.forEach((name) => {
    console.log(`Hello, ${name}!`);
  });
}

greet("Welcome", "Alice", "Bob", "Charlie");
// Output:
// Welcome
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
