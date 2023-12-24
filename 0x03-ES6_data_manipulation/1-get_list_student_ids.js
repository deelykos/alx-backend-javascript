/* eslint-disable arrow-body-style */
/* eslint-disable indent */
const getListStudentIds = (arrayOfObjects) => {
    return Array.isArray(arrayOfObjects) ? arrayOfObjects.map((x) => x.id) : [];
};

export default getListStudentIds;
