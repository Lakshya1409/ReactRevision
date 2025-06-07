

# JavaScript Methods and Examples

## 1. SPLICE METHOD

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

**Syntax:**
```
array.splice(startIndex, deleteCount, item1, item2, ...);
```

- **startIndex (required):** Index to start modifying the array.
- **deleteCount (optional):** The number of elements to remove starting from startIndex.
- **item1, item2, ... (optional):** Items to add to the array starting at startIndex.

**Examples:**

```javascript
const arrSplice = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
arrSplice.splice(1, 2); // Removes 2 and 3, arr becomes [1, 4, 5]
console.log(arrSplice); // [1, 4, 5]

// Add 6 at index 2 (does not remove any elements)
arrSplice.splice(2, 0, 6); // Adds 6 at index 2, arr becomes [1, 4, 6, 5]
console.log(arrSplice); // [1, 4, 6, 5]

// Replace 4 with 7 & 6 with 8
arrSplice.splice(1, 2, 7, 8); // Replaces 4 with 7, arr becomes [1, 7, 8, 5]
console.log(arrSplice); // [1, 7, 8, 5]

// Negative index (removes from the end)
arrSplice.splice(-2); // Removes the last 2 elements, arr becomes [1, 7]
console.log(arrSplice); // [1, 7]
```

---

## 2. SLICE METHOD

The slice() method returns a shallow copy of a portion of an array into a new array without modifying the original array.

**Syntax:**
```
array.slice(startIndex, endIndex);
```

- **startIndex (optional):** The index at which to begin extraction (inclusive).
- **endIndex (optional):** The index at which to end extraction (exclusive).

**Examples:**

```javascript
const arrSlice = [1, 2, 3, 4, 5];

// Extract elements from index 1 to 3 (not including 3)
const sliced = arrSlice.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arrSlice); // [1, 2, 3, 4, 5] (original array unchanged)

// Extract elements from index 2 to the end
const slicedEnd = arrSlice.slice(2);
console.log(slicedEnd); // [3, 4, 5]

// Negative indices: start from the end
const slicedNeg = arrSlice.slice(-3, -1);
console.log(slicedNeg); // [3, 4]
```

---

## 3. SPLIT METHOD

The split() method splits a string into an array of substrings based on a specified separator.

**Syntax:**
```
string.split(separator, limit);
```

- **separator (optional):** The character(s) to use for splitting the string.
- **limit (optional):** The maximum number of splits to make.

**Examples:**

```javascript
const str = "hello world";

// Split string by space
const words = str.split(" ");
console.log(words); // ["hello", "world"]

// Split string into individual characters
const chars = str.split("");
console.log(chars); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

// Limit number of splits
const limited = str.split(" ", 1);
console.log(limited); // ["hello"]
```

Key Points:
- **If separator not found:** If the separator is not found, split() returns an array with the original string as the only element.
- **Limit:** The limit restricts the number of splits.

---

## 4. MAP METHOD

The map() method creates a new array by calling a provided function on every element of the original array.

**Syntax:**
```
array.map(callback, thisArg);
```

- **callback:** A function that is called for each element.
- **thisArg (optional):** The value to use as this when executing the callback.

**Examples:**

```javascript
const nums = [1, 2, 3, 4, 5];

// Multiply each element by 2
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```



Key Points:
- **Creates a new array:** Unlike forEach(), map() returns a new array with modified values.
- **Does not modify the original array.**

---

## 5. FILTER METHOD

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

**Syntax:**
```
array.filter(callback, thisArg);
```

- **callback:** A function that tests each element.
- **thisArg (optional):** The value to use as this when executing the callback.

**Examples:**

```javascript
const nums = [1, 2, 3, 4, 5];

// Filter out numbers less than 3
const filtered = nums.filter(num => num >= 3);
console.log(filtered); // [3, 4, 5]
```

Key Points:
- **Returns a new array:** If no elements pass the test, an empty array is returned.
- **Does not modify the original array.**

---

## 6. REDUCE METHOD

The reduce() method applies a function to each element in the array to reduce it to a single value (e.g., sum, product, etc.).

**Syntax:**
```
array.reduce(callback, initialValue);
```

- **callback:** A function that takes two arguments: the accumulator (initially set to initialValue) and the current element.
- **initialValue (optional):** The value to use as the first argument to the first call of the callback.

**Examples:**

```javascript
const nums = [1, 2, 3, 4, 5];

// Sum of all elements
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

Key Points:
- **initialValue is important:** If initialValue is not provided, the first element is used as the initial value of the accumulator.
- **Accumulator:** The accumulator holds the cumulative result across all iterations.

---

## 7. FIND METHOD

The find() method returns the first element in the array that satisfies the provided testing function.

**Syntax:**
```
array.find(callback, thisArg);
```

- **callback:** A function to test each element.
- **thisArg (optional):** The value to use as this when executing the callback.

**Examples:**

```javascript
const nums = [1, 2, 3, 4, 5];

// Find the first number greater than 3
const result = nums.find(num => num > 3);
console.log(result); // 4
```

Key Points:
- **Returns the first matching element:** If no element satisfies the condition, it returns undefined.

---

## 8. SORT METHOD

The sort() method sorts the elements of an array in place.

**Syntax:**
```
array.sort(compareFunction);
```

- **compareFunction (optional):** A function that defines the sort order.

**Examples:**

```javascript
const nums = [3, 1, 4, 2, 5];

// Sort in ascending order
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 3, 4, 5]
```

Key Points:
- **Sorts in place:** It modifies the original array.
- **Sorting strings:** By default, sort() converts elements to strings and compares their Unicode values.
