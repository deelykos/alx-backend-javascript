/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
const updateStudentGradeByCity = (listOfStudents, city, newGrades) => {
  const filteredArray = listOfStudents.filter((x) => x.location === city);

  const mappedArray = filteredArray.map((x) => {
    for (const item of newGrades) {
      if (x.id === item.studentId) {
        x.grade = item.grade;
      }
    }
    if (x.grade === undefined) {
      x.grade = 'N/A';
    }
    return x;
  });

  return mappedArray;
};

export default updateStudentGradeByCity;
