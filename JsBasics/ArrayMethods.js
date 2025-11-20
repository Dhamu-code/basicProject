let arr = [1,5,9,2,8,4,6];

arr.push(10);
console.log(arr);

let sum = arr.reduce((acc,curr) => acc + curr, 0);
console.log(sum);

let redu = arr.reduce((acc,curr) => acc + curr,[]);
console.log(redu);
