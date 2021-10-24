console.dir(add); //[Function: add]
console.dir(sub); //undefined

console.log(add(2, 5)); //7
// console.log(sub(2, 5)); //TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

//함수 표현식

var sub = function (x, y) {
  return x - y;
};

/*
함수 호이스팅으로 인한 것으로 함수 선언문으로 선언할 경우 미리 함수를 다 읽고 메모리에 할당하며  RUNTIME 이전에 객체가 생성된다.
함수 표현식은 변수 호이스팅의 영향을 받으며 미리 변수를 다 읽고  undefined로 초기화되며, RUNTIME에 평가를 통해 함수가 배정되는 식이다.

함수 선언문은 함수 호출 이전에 함수에 접근할 수 있다는 부분이 문제가 될 소지가 높다. 실제로 C, C++에서는 필요에 따라 함수 선언부만 상단에 선언해 놓는 등의 명시적 표현이 따르지만
자바스크립트는 그렇지 않다.
*/

// NEW 연산자, function생성자 함수

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

console.log(add1(1, 2));

var add2 = (function () {
  var a = 10;
  return new Function('x', 'y', 'return x+y+a');
})();

// console.log(add2(1, 2)); //ReferenceError: a is not defined

// -> 일반적인 함수와 Function 생성자 함수로 생성한 함수가 동일하지 않다는 증거이다.
// >> 클로저가 생성되지 않는다.


//화살표 함수 
//기존 함수와 this 바인딩 방식이 다르며,  prototype프로퍼티가 없고 argument객체를 생성하지 않는다. 
