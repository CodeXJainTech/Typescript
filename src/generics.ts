/*
  language independent cvoncept
  Generics allows you to create components that work with any data type while providing compiler time type safety.
*/

function getEle<T>(arr: T[]): T | undefined{
  return arr[1];
}

let out1 = getEle<string>(["anchal", "jain"]);
let out2 = getEle<number>([1,2,3,5]);

//if we do not assign the type it will assume the type of arrguments value passed.

let out3 = getEle(["anchal", 1, 2, "jain"]);
//type = string | number

console.log(out1);
console.log(out2);
console.log(out3);
