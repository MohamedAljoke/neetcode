// https:leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/

let circularSandwiche = 0;
let squareSandwiche = 1;
var countStudents = function (studentsPrefs, sandwiches) {
  let lengthOfStudents = studentsPrefs.length;
  let sandwichPointer = 0;
  let studentPointer = 0;
  while (
    studentsPrefs.length != 0 &&
    sandwichPointer < lengthOfStudents &&
    studentsPrefs.slice(studentPointer).includes(sandwiches[sandwichPointer])
  ) {
    if (studentsPrefs[studentPointer] == sandwiches[sandwichPointer]) {
      sandwichPointer++;
    } else {
      studentsPrefs[studentsPrefs.length] = studentsPrefs[studentPointer];
    }
    studentPointer++;
  }
  return sandwiches.length - sandwichPointer;
};

const res1 = countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]);
console.log(res1);
