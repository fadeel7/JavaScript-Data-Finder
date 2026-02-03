# JavaScript Data Finder

A JavaScript implementation of a data finder function that uses closures to search for values within specified ranges of an array.

## Problem Description

Implement the function `dataFinder` such that:

- It takes a single argument `data`, an array of integers
- It returns a new function called `find`
- The `find` function takes 3 arguments: `minRange`, `maxRange`, and `value`
- It searches for the `value` in the `data` array within the inclusive range `[minRange, maxRange]` using 0-based indexing
- Returns `true` if the value is found in the given range, `false` otherwise
- Throws an `Error` with message 'Invalid range' if `minRange` or `maxRange` is beyond the bounds of the array

## Features

- **Closure Pattern**: The returned `find` function maintains access to the original `data` array
- **Range Validation**: Validates that indices are within array bounds
- **Efficient Search**: Linear search within the specified range
- **Error Handling**: Proper error handling for invalid ranges

## Usage

### Basic Example

```javascript
const finder = dataFinder([1, 6, 3, 0, 2, 15, 10]);

// Search for value 10 in range [2, 4] (indices 2 through 4)
const result = finder(2, 4, 10); // Returns false
// Subarray searched: [3, 0, 2] - 10 not found
```

### Example with Found Value

```javascript
const finder = dataFinder([15, 1, 10, 5, 4, 20]);

// Search for value 4 in range [1, 4]
const result = finder(1, 4, 4); // Returns true
// Subarray searched: [1, 10, 5, 4] - 4 found at index 4
```

### Example with Invalid Range

```javascript
const finder = dataFinder([10, 1, 0, 13, 4, 15]);

try {
    const result = finder(1, 10, 13);
} catch (error) {
    console.log(error.message); // "Invalid range"
    // maxRange (10) is beyond array length (6)
}
```

## Running the Program

### From Standard Input

```bash
node dataFinder.js < input.txt
```

### Input Format

Line 1: Space-separated integers representing the data array  
Line 2: Three space-separated integers: `minRange maxRange value`

### Sample Input

```
15 1 10 5 4 20
1 4 4
```

### Sample Output

```
true
```

## Test Cases

### Test Case 1: Value Found

**Input:**
```
15 1 10 5 4 20
1 4 4
```

**Output:**
```
true
```

**Explanation:** Searching for 4 in range [1, 4] of array [15, 1, 10, 5, 4, 20]. Value 4 is found at index 4.

### Test Case 2: Value Not Found

**Input:**
```
1 6 3 0 2 15 10
2 4 10
```

**Output:**
```
false
```

**Explanation:** Searching for 10 in range [2, 4] of array [1, 6, 3, 0, 2, 15, 10]. The subarray [3, 0, 2] does not contain 10.

### Test Case 3: Invalid Range

**Input:**
```
10 1 0 13 4 15
1 10 13
```

**Output:**
```
Error: Invalid range
```

**Explanation:** maxRange (10) exceeds the array bounds (length 6).

## Constraints

- Maximum array length: 10
- All array elements are integers
- 0-based indexing is used

## Implementation Details

The `dataFinder` function demonstrates:

1. **Closures**: The inner `find` function has access to the `data` parameter
2. **Validation Logic**: 
   - Checks if `minRange < 0`
   - Checks if `maxRange >= data.length`
   - Checks if `minRange > maxRange`
3. **Search Algorithm**: Simple linear search through the specified range
4. **Error Handling**: Throws Error object with specific message for invalid ranges

## License

MIT License - Feel free to use this code for learning and development purposes.

## Author

Created as a solution to a JavaScript coding challenge demonstrating closure patterns and array manipulation.
