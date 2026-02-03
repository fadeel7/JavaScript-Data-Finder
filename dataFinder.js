'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * Creates a data finder function with closure over the provided data array
 * @param {number[]} data - Array of integers to search within
 * @returns {function} - A find function that searches for values in specified ranges
 */
function dataFinder(data) {
    // Return the find function that has access to data through closure
    return function find(minRange, maxRange, value) {
        // Validate range bounds
        if (minRange < 0 || maxRange >= data.length || minRange > maxRange) {
            throw new Error('Invalid range');
        }
        
        // Search for value in the inclusive range [minRange, maxRange]
        for (let i = minRange; i <= maxRange; i++) {
            if (data[i] === value) {
                return true;
            }
        }
        
        return false;
    };
}

function main() {
    // Read the data array
    const data = readLine().trim().split(' ').map(Number);
    
    // Read minRange, maxRange, and value
    const params = readLine().trim().split(' ').map(Number);
    const minRange = params[0];
    const maxRange = params[1];
    const value = params[2];
    
    // Get the find function
    const find = dataFinder(data);
    
    // Call find and handle potential errors
    try {
        const result = find(minRange, maxRange, value);
        console.log(result);
    } catch (error) {
        console.log(error.toString());
    }
}
