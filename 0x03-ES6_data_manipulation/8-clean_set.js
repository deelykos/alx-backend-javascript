/* eslint-disable no-restricted-syntax */
const cleanSet = (set, startString) => {
  const resultArray = [];

  if (startString.length === 0 || typeof startString !== 'string' || typeof set !== 'object') {
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
