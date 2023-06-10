// Question1: print sum 

function sum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum(100));

//print in range
function rangeSum(start, end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum= sum+i;
    }
    return sum;
}
console.log (rangeSum(1,100));

//2. fibbonaci

function fibo(n){
  if(n<=1){
    return n;
  }
  let a=0;
  let b =1;
  let c;

  for(let i =2;i<=n;i++){
    c= a+b;
    a= b;
    b=c;
  }
  return b;
}
console.log(fib0(10));

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));

//3. pattern
// *
// **
// ***
// ****
function starPat(n) {
  for (let i = 1; i <= n; i++) {
    let pat = '';
    for (let j = 1; j <= i; j++) {
      pat += '* ';
    }
    console.log(pat);
  }
}

starPat(5);

// 4. starpattern
// **
// ****
// ******
// ********

function fatPat(n) {
  for (let i = 1; i <= n; i++) {
    let pat = '';
    for (let j = 1; j <= i; j++) {
      pat += '**';
    }
    console.log(pat);
  }
}
fatPat(5);
