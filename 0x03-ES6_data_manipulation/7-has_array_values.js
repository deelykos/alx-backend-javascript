/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
const hasValuesFromArray = (set, array) => {
  for (const elem of array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
