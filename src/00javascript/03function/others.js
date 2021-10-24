//이외에 즉시 실행 함수, 재귀 함수, 중첩 함수, 콜백 함수, 순수 함수와 비순수 함수

//즉시 실행 함수 (+익명함수)

(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

//한 번 실행하면 다시 실행할 수가 없다.

(function test() {
  var a = 3;
  var b = 5;
  return a * b;
})();

// test();  //ReferenceError: test is not defined >> 함수 리터럴로 평가되어 함수 몸체에서만 참조할 수 있다. 결국 즉시 실행함수를 다시 호출할 수 없다.

// ()로 감싸지 않고 function () { }();와 같이 쓰면 SyntaxError가 발생한다.
// 이는 ;이 자동으로 붙으면서 문제가 된다. function foo() {};();와 같이 말이다. 


(function(){
  console.log(`(function(){}());`)
}());

(function(){
  console.log(`(function(){})();`)
})();

!function(){
  console.log(`!function(){}();`)
}();

+function(){
  console.log(`+function(){}();`)
}();




console.log(typeof function () {});
console.log(typeof function f() {});

var rest = (function (a, b) {
  return a ** b;
})(3, 5);

console.log(rest);



//재귀 함수

//자기 자신을 호출하는 함수이다. 0~10까지의 합을 for문 없이 구한다고 하면
console.log('\nto 10');
function to10(val = 0, temp = 0) {
  var result = val + temp;

  if (temp == 10) {
    console.log(result);
    return result;
  } else {
    temp += 1;
    to10(result, temp);
  }
}

to10();
console.log('\nfrom 10');
function from10(number = 10) {
  console.log(number);

  if (number == 0) {
    return;
  } else {
    number -= 1;
    from10(number);
  }
}

from10();

console.log('\nfactorial');
function factorial(number = 1, temp = 1) {
  var result = number * temp;
  console.log(result);
  if (number == 10) {
    return;
  } else {
    number += 1;
    factorial(number, result);
  }
}

factorial();

var facto2 = function (n) {
  if (n <= 1) return 1;
  return n * facto2(n - 1);
};
console.log('\nfactorial2');
console.log(facto2(10));



//중첩함수
//함수 내부에 정의된 함수를 중첩함수 또는 내부 함수라고 한다. 중첩 함수를 포함하는 함수는 외부 함수라고 부른다. 중첩함수는 외부 함수 내부에서만 호출활 수 있다. 
//중첩 함수는 자신을 포함하는 외부함수를 돕는 헬퍼 함수의 역할을 한다. 
console.log('\nnested function');
function outer() {
  var x = 1;
  //중첩 함수

  function inner() {
    var y = 2;
    //외부 함수의 변수를 참조할 수 있다. 
    console.log(x + y);
  }

  inner();
}

outer();






//콜백함수
console.log('\n callback');
function repeat(n, f) { // 미리 값으로 평가할 수 있는 함수 표현식까지 매개변수로 받아서 로직을 추상화할 수 있다. 
  for (var i = 0; i < n; i++) { //여기서의 함수 f는 일급 객체이다.
    f(i); // 또한, 함수의 매개변수를 통해서 다른 홤수의 내부로 전달되는 함수를 콜백함수라고 하며, 
  }       // 매개변수를 통해 함수의 외부에서 콜백함수를 전달받는 함수를 고차함수라고 한다. 고차함수는 콜백함수를 자신의 일부분으로 합성한다. 
}

//여기서 콜백함수를 다른 곳에서 사용하지 않으면 익명 함수 리터럴로 정의하여 곧바로 고차함수에 전달하는 식으로 사용한다. 함수 리터럴은 고차함수가 호출될 때마다 평가되어 함수 객체를 생성한다. 

var logAll = function (i) {
  console.log(i);
};

var logdOdd = function (i) {
  if (i % 2 == 0) {
    console.log(i);
  }
};
console.log('\nlogall');
repeat(5, logAll);
console.log('\nlogodd');
repeat(5, logdOdd);

// 콜백함수는 함수형 프로그래밍 패러다임 뿐만 아니라 비동기 처리(이벤트 처리, AJAX 통신, 타이머 함수 등) 에 활용되는 중요한 패턴이다. 


//배열 고차 함수 예시

var res = [1,2,3].map(function(item){
  return item *2;
});
console.log(res);

// -> map은 반복문을 돌며 배열 안의 요소들을 1:1로 짝지어준다. '
// 배열.map((요소, 인덱스, 배열) => { return 요소 });

res = [1,2,3].filter(function(item){
  return item%2;
});
console.log(res);

res = [1,2,3].reduce(function (acc, cur){
  return acc+cur;
}, 0);
console.log(res);
//배열.reduce((누적값, 현재 값, 인덱스, 요소)=>{ return 결과 }, 초기값);





//순수 함수와 비순수 함수
/*
  순수 함수란 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수효과가 없는 함수를 일컫는다. > 동일한 매개변수를 투입하면 항상 동일한 값이 나온다. 
  비순수 함수란 외부상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수라고 한다.  > 함수의 외부 상태를 변경하는 부수 효과가 있다. 


*/

//순수 함수

var count = 0;

function increase(n){
  return n++;
}

//순수 함수가 반환한 결과 값을 변수에 재할당하여 상태를 변경한다. (외부의 변수를 함수가 변경하는 것이 아니라. 함수의 반환값으로 재할당하는 방법으로 바꾸는 것이다. )
count = increase(count);
console.log(count);

count = increase(count);
console.log(count);


//비순수 함수 

var counter = 0;
function increaseNumber(){
  return ++counter;
}
//비순수 함수는 직접 변수(외부 상태)를 변경하므로 상태 변화를 추적하기 어려워진다.
increaseNumber();
console.log(counter);

increaseNumber();
console.log(counter);
