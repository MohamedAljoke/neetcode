// https:leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/

let circularSandwiche = 0;
let squareSandwiche = 1;
var countStudents = function (studentsPrefs, sandwiches) {
  let didNotEat = studentsPrefs.length;
  const prefs = {
    0: 0,
    1: 0,
  };
  for (let studentPref of studentsPrefs) {
    prefs[studentPref] = prefs[studentPref] + 1;
  }

  for (let sandwiche of sandwiches) {
    if (prefs[sandwiche]) {
      prefs[sandwiche] = prefs[sandwiche] - 1;
      didNotEat--;
    } else {
      break;
    }
  }
  return didNotEat;
};

const res1 = countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]);
console.log(res1);
