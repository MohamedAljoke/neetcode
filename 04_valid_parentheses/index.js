/*
ensure  ()[]{} is valid ([]{}[]) also valid
[}] not valid
*/
export class Solution {
  isValid(s) {
    const stackList = [];
    const listOfPatterns = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let i = 0; i < s.length; i++) {
      if (!listOfPatterns[s[i]]) {
        stackList.push(s[i]);
      } else if (listOfPatterns[s[i]] === stackList[stackList.length - 1]) {
        stackList.pop();
      } else {
        return false;
      }
    }
    return stackList.length === 0;
  }
}

const mySolution = new Solution();

const res = mySolution.isValid("()[]{}");
console.log(res);
