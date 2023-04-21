// const Tempratures = [-1, -7, 8, 9, 10, 'error', 6, 4, 3];

// const CalcTempAmplitute = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// console.log(CalcTempAmplitute(Tempratures));
//With One More Array As Parameter
// const CalcTempAmplitute = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// console.log(CalcTempAmplitute([0, 2, -1], [5, 3, 4]));
//Coding Challenge
const array_1 = [17, 21, 23];
const printForcast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForcast(array_1);
