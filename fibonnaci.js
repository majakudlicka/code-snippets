const arr = [];

arr[0] = 0;
arr[1] = 1;

for (let i = 2; i <= 10; i++) {
  arr[i] = arr[i - 2] + arr[i - 1];
}

console.log(arr);
