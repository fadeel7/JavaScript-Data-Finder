/**
 * Simple test script to verify the dataFinder function
 */

function dataFinder(data) {
    return function find(minRange, maxRange, value) {
        if (minRange < 0 || maxRange >= data.length || minRange > maxRange) {
            throw new Error('Invalid range');
        }
        
        for (let i = minRange; i <= maxRange; i++) {
            if (data[i] === value) {
                return true;
            }
        }
        
        return false;
    };
}

// Test cases
console.log('Running tests...\n');

// Test 1: Value found in range
const test1 = dataFinder([15, 1, 10, 5, 4, 20]);
const result1 = test1(1, 4, 4);
console.log(`Test 1 - Value found: ${result1 === true ? 'PASS' : 'FAIL'}`);
console.log(`  Expected: true, Got: ${result1}\n`);

// Test 2: Value not found in range
const test2 = dataFinder([1, 6, 3, 0, 2, 15, 10]);
const result2 = test2(2, 4, 10);
console.log(`Test 2 - Value not found: ${result2 === false ? 'PASS' : 'FAIL'}`);
console.log(`  Expected: false, Got: ${result2}\n`);

// Test 3: Invalid range (maxRange beyond array)
const test3 = dataFinder([10, 1, 0, 13, 4, 15]);
try {
    test3(1, 10, 13);
    console.log('Test 3 - Invalid range: FAIL');
    console.log('  Expected: Error, Got: No error thrown\n');
} catch (error) {
    console.log(`Test 3 - Invalid range: ${error.message === 'Invalid range' ? 'PASS' : 'FAIL'}`);
    console.log(`  Expected: "Invalid range", Got: "${error.message}"\n`);
}

// Test 4: Invalid range (minRange negative)
const test4 = dataFinder([1, 2, 3]);
try {
    test4(-1, 2, 1);
    console.log('Test 4 - Negative minRange: FAIL');
    console.log('  Expected: Error, Got: No error thrown\n');
} catch (error) {
    console.log(`Test 4 - Negative minRange: ${error.message === 'Invalid range' ? 'PASS' : 'FAIL'}`);
    console.log(`  Expected: "Invalid range", Got: "${error.message}"\n`);
}

// Test 5: Invalid range (minRange > maxRange)
const test5 = dataFinder([1, 2, 3, 4, 5]);
try {
    test5(3, 1, 2);
    console.log('Test 5 - minRange > maxRange: FAIL');
    console.log('  Expected: Error, Got: No error thrown\n');
} catch (error) {
    console.log(`Test 5 - minRange > maxRange: ${error.message === 'Invalid range' ? 'PASS' : 'FAIL'}`);
    console.log(`  Expected: "Invalid range", Got: "${error.message}"\n`);
}

// Test 6: Edge case - single element range
const test6 = dataFinder([5, 10, 15, 20]);
const result6 = test6(2, 2, 15);
console.log(`Test 6 - Single element range: ${result6 === true ? 'PASS' : 'FAIL'}`);
console.log(`  Expected: true, Got: ${result6}\n`);

console.log('All tests completed!');
