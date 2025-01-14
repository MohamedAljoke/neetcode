# JavaScript LeetCode Problem Solutions

This repository contains JavaScript solutions to various LeetCode problems, focusing on array manipulation, string processing, and data structure implementations.

The project aims to provide clear, efficient, and well-tested solutions to common algorithmic challenges. Each problem is implemented in its own directory, complete with a solution file and corresponding test suite. This structure allows for easy navigation, understanding, and verification of the implemented algorithms.

Key features of this project include:
- Modular organization of problems and solutions
- Comprehensive test suites for each problem
- Implementation of popular data structures like MinStack
- Solutions to classic algorithmic problems such as Two Sum and Valid Parentheses

Whether you're preparing for coding interviews, improving your problem-solving skills, or looking for efficient JavaScript implementations of common algorithms, this repository serves as a valuable resource.

## Repository Structure

```
.
├── 01_remove_duplicate_from_sorted_array
│   ├── index.js
│   └── test.js
├── 02_remove_element
│   ├── index.js
│   └── test.js
├── 03_array_concatenation
│   ├── index.js
│   └── test.js
├── 04_valid_parentheses
│   ├── index.js
│   └── test.js
├── 05_min_stack
│   ├── index.js
│   └── test.js
├── 06_contains_duplicate
│   ├── index.js
│   └── test.js
├── 07_two_sums
│   ├── index.js
│   └── test.js
└── big_ideia_from_problems.md
```

Each numbered directory contains a specific problem solution:
- `index.js`: Contains the solution implementation
- `test.js`: Contains the test suite for the solution

Key Files:
- `big_ideia_from_problems.md`: Likely contains overall insights or patterns observed across the problems

## Usage Instructions

### Installation

Prerequisites:
- Node.js (version 12 or higher recommended)

To set up the project locally:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies (if any):
   ```
   npm install
   ```

### Running Tests

To run tests for a specific problem:

```
node <problem-directory>/test.js
```

For example, to run tests for the Valid Parentheses problem:

```
node 04_valid_parentheses/test.js
```

### Using the Solutions

Each solution is implemented as a function or class in its respective `index.js` file. To use a solution in your own code:

1. Import the solution:
   ```javascript
   import { Solution } from './path/to/problem/index.js';
   ```

2. Use the imported solution:
   ```javascript
   const solution = new Solution();
   const result = solution.methodName(params);
   ```

Example (Two Sum):

```javascript
import { twoSum } from './07_two_sums/index.js';

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Expected output: [0, 1]
```

### Common Use Cases

1. Remove Duplicates from Sorted Array:
   ```javascript
   import { removeDuplicateFromSortedArray } from './01_remove_duplicate_from_sorted_array/index.js';

   const nums = [1, 1, 2, 2, 3, 4, 4, 5];
   const newLength = removeDuplicateFromSortedArray(nums);
   console.log(newLength); // 5
   console.log(nums.slice(0, newLength)); // [1, 2, 3, 4, 5]
   ```

2. Valid Parentheses:
   ```javascript
   import { Solution } from './04_valid_parentheses/index.js';

   const solution = new Solution();
   console.log(solution.isValid("()[]{}")); // true
   console.log(solution.isValid("([)]")); // false
   ```

3. MinStack:
   ```javascript
   import { MinStack } from './05_min_stack/index.js';

   const minStack = new MinStack();
   minStack.push(-2);
   minStack.push(0);
   minStack.push(-3);
   console.log(minStack.getMin()); // -3
   minStack.pop();
   console.log(minStack.top()); // 0
   console.log(minStack.getMin()); // -2
   ```

### Troubleshooting

1. Module import errors:
   - Ensure you're using Node.js version 12 or higher
   - If using CommonJS, change `import` statements to `require()`

2. Test failures:
   - Check the specific test case that failed
   - Verify your implementation against the problem description
   - Use console.log statements to debug your code

3. Performance issues:
   - For large inputs, consider optimizing your solution
   - Look for opportunities to reduce time complexity (e.g., using hash maps)

## Data Flow

The data flow in this project is straightforward:

1. Problem Input -> Solution Function -> Output
2. Test Suite -> Solution Function -> Assertion

```
[Test Suite] ----> [Solution Function] ----> [Assertion]
    |                     ^
    |                     |
    v                     |
[Problem Input] ------> [Output]
```

Each problem's solution function takes specific inputs, processes them according to the problem requirements, and produces an output. The test suite provides various inputs, calls the solution function, and asserts that the output matches the expected result.

Note: Some problems, like MinStack, implement a class with multiple methods rather than a single function. In these cases, the data flow involves method calls on the class instance.