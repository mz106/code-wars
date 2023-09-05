// function isDivisible(a, b, c) {
//   let count;
//   let result;

//   if (a % b === 0) {
//     count = 1;
//   }

//   if (a % c === 0) {
//     count = count + 1;
//   }

//   if (count === 2) {
//     result = true;
//   } else {
//     result = false;
//   }

//   return result;
// }

// const isDivisible = (a, b, c) => (a % b === 0 && a % c === 0 ? true : false);

// function isDivisible(...args) {
//   num = args[0];
//   let count = 0;
//   args.shift();

//   args.forEach((arg) => {
//     if (num % arg === 0) count += 1;
//   });
//   console.log(count);
//   return count === args.length ? true : false;
// }

// function isDivisible(...args) {
//   let count = 0;
//   const num = args.shift();

//   args.forEach((arg) => {
//     if (num % arg === 0) count += 1;
//   });

//   return count === args.length ? true : false;
// }

// function isDivisible(firstN, ...otherN) {
//   return otherN.every((n) => firstN % n === 0);
// }

// solution from other on CodeWars
const isDivisible = (firstN, ...otherN) =>
  otherN.every((n) => firstN % n === 0);

console.log(isDivisible(10, 5, 2, 1, 10));
