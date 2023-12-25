/* eslint-disable no-restricted-syntax */
const cleanSet = (set, startString) => {
  const resultArray = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';

  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      const sliceStartWith = elem.slice(3);
      resultArray.push(sliceStartWith);
    }
  }
  return resultArray.join('-');
};

export default cleanSet;
