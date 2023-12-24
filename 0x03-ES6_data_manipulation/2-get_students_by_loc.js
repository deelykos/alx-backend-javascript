/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable eqeqeq */
const getStudentsByLocation = (listOfStudents, city) => {
    return listOfStudents.filter((x) => x.location === city);
};

export default getStudentsByLocation;
