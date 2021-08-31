var add = function hoo(x, y) {
  return x + y;
};

console.log(add(2, 5));

/* console.log(hoo(1, 2)); */
// ReferenceError: hoo is not defined
function hoo(x, y) {
  return x * y;
}

console.log(hoo(2, 5));
