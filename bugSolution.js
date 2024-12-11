function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Error: Both inputs must be numbers";
  }
}
console.log(foo(1, "1")); // output: Error: Both inputs must be numbers
console.log(foo(1, 1)); // output: 2

//Alternative using parseInt
function foo2(a,b){
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, "1")); //output 2
console.log(foo2("1","1")); //output 2