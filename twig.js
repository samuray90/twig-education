/**
 * @param {array} arr
 * @param {number} numberOfGrouops
 * @returns array
 */
const groupArrayElementsFirstSolution = (arr, numberOfGrouops) => {
  // find out the size of each group that we need to extract from the main array
  const groupSize = Math.ceil(arr.length / numberOfGrouops);

  const finalArray = [...Array(numberOfGrouops).keys()]
    // grab slices from the larger array
    .map((number) => arr.slice(number * groupSize, (number + 1) * groupSize));

  return finalArray;
};

/**
 * @param {array} arr
 * @param {number} length
 * @returns array
 */
const groupArrayElementsSecondSolution = (arr, length) => {
  // find out the size of each group that we need to extract from the main array
  const groupSize = Math.ceil(arr.length / length);

  // generate an array with values beeing the group slices from the main array
  const finalArray = Array.from({ length }, (v, k) =>
    arr.slice(k * groupSize, (k + 1) * groupSize)
  );

  return finalArray;
};

groupArrayElementsFirstSolution([1, 2, 3, 4, 5], 3);
// will output: "[[1,2], [3,4], [5]]"

groupArrayElementsSecondSolution([1, 2, 3, 4, 5], 3);
// will output: "[[1,2], [3,4], [5]]"
