/* eslint-disable no-restricted-syntax */
const cleanSet = (set, startString) => {
  const resultArray = [];

  if (typeof set !== 'object' || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      const sliceStartWith = elem.slice(3);
      resultArray.push(sliceStartWith);
    }
  }
  return resultArray.join('-');
};

export default cleanSet;
