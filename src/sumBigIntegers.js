/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n
*/

function sumBigIntegers(numStr1, numStr2) {
  var bigInt1 = BigInt(numStr1);
  var bigInt2 = BigInt(numStr2);  
  var sum = bigInt1 + bigInt2;
  return sum
}

// console.log(sumBigIntegers('9007199254740991', '9007199254740991')); // виводить 18014398509481982n