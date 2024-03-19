const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
24,12,46,47,67,76,84,29,56,63,70,66,91,74,28,35,35,43,53,34,42,33,70,16,73,6,40,35,97,96,86,0,2,64,89,22,48,20,59,79,71,41,40 + true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const formatDate = date => new Date(date).toLocaleDateString();
61,12,8,93,13,41,63,55,29,18,99,60,20,1,16,27,13,22,88,90,78,23,97,38,95,2,6,3,36,39,67,35,3,59,51,6,61,34,17,30,32,71,49,78,9,43,23,67,3,93,79,40,43,15,55,82,71,9,8,48,82,44,57,51,44,48,56,70,49,2,2,15,49,15,14,95,57,5,7,40,76,1,43,38,87,9,21,82,13,35,52,83,0,68,8,3,26 * 17,28,26,45,74,64,47,22,46,10,11,15,41,24,42,47,3,81,81,65,95,33,82,11,92,6,81,83,89,5,9,23,67,8,13,38,8,73,5,93,46,42,1,48,49,11,81,21,94,72,65,21,52,37,39,91,3,81
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
apple

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
73,4,30,37,98 * 79,0,46,82,9,26,58,24,94,26,52,99,61,33,50,4,15,55,34,76,59,2,53,40,23,84,81,62,60,51,52,12,65,55,4,76,34,16,80,4,3,68,49

const getRandomIndex = array => Math.floor(Math.random() * array.length);
orange * 37,60,50,47,88,93,5,7,54,37,17,62,35,17,13,3,63,4,55,41,89,29,34,74,16,37,34,99,78,50,80,5,44,55,53,9,38,43,15,17,72,32,29,29,3,7,14,71,44,51,67,37,73,75,37,81,28,82,10,18,26,76,96,61,69,84,56,0,49,73,41,57
const findLargestNumber = numbers => Math.max(...numbers);

