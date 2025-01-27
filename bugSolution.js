function foo(a, b) {
  // Convert to numbers and handle NaN
  a = Number(a) || 0; 
  b = Number(b) || 0;
  
  return a + b;
}

console.log(foo(0, 1)); // 1
console.log(foo(1, 0)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, false)); // 1
console.log(foo(1, "")); // 1
console.log(foo(undefined, 5)); // 5