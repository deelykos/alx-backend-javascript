/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
const getStudentIdsSum = (listOfStudents) => {
  const initialValue = 0;
  return listOfStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue,
  );
};

export default getStudentIdsSum;
