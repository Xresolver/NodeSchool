const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter((number) => number % 2 === 0);
console.log(filtered);

// long solution
// const filtered = numbers.filter( 
//   function evenNumbers (number)
//     { return number % 2 === 0 }
//   );