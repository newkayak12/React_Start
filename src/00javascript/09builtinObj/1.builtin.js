/**
 *  자바스크립트 객체의 분류
 * 
 * 1. 표준 빌트인 객체 : ECMAScript 사양에 정의된 객체를 말하며, 애플리케이션 전역의 공통 기능을 제공한다. 표준 빌트인 객체는 ECMAScript 사양에 정의된 객체이므로
 * 		자바스크립트 실행 환경(브라우저/ Node.js)과 관계없이 언제나 사용할 수 있다. 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공된다. 따라서 선언 없이 전역 변수처럼 언제나 참조할 수 있다. 
 * 
 * 2. 호스트 객체 : 호스트 객체는 ECMAScript 사양에 정의되어 있지는 않지만 자바스크립트 실행 환경(브라우저/ Node.js)에서 추가로 제공하는 객체를 말한다.
 * 		- 브라우저 : DOM, BOM, Canvas XMLHttpRequest, fetch, requestAnimationFram, SVG, Web Storage, Web Component, Web worker와 같은 클라이언트 사이드 Web API를 호스트 객체로 제공하고
 * 		- Node.js : 고유의 API를 호스트 객체로 제공한다. 
 * 
 * 3. 사용자 정의 객체 : 사용자 정의 객체는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다. 
 */




/* 
 		1. 표준 빌트인 객체
 JS는 Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/setInterval, WeakMap, WeakSet, Function, Promise, Reflect, Proxy, JSON, Error 등 40여 개의 표준 빌트인 객체를 제공한다.
 Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체이다. 생성자 함수 객체인 표준 빌트인 객체느 ㄴ프로토타입 메소드와 정적 메소드를 제공하고 생성자 함수 객체가 아닌 표준 빌트인 객체는 정적 메소드만 제공한다.

 예를 들어 표준 빌트인 깨체인 String, Number, Boolean, FUnction, Array, Date는 생성자 함수로 호출하여 인스턴스를 생성할 수 있다. 
 */

// String 생성자 함수에 의한 String 객체 생성
const strObj  = new String('Lee'); //String {'lee'}
console.log(typeof strObj); //object

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123); //Number{123}
console.log(typeof numObj); //object

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true); //Boolean {true}
console.log(typeof boolObj); //object

//Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x'); //f anonymous(x)
console.log(typeof func); //function

//Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr  = new Array(1,2,3); // (3) [1,2,3]
console.log(typeof arr); //object

//RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i); // /ab+c/i
console.log(typeof regExp); //Object

// Date 생성자 함수에 의한 Date객체 생성
const date = new Date(); // 날짜~
console.log(typeof date); //Object


/**
 * 성성자 함수인 표준 빌트이 ㄴ객체가 생성한 인스턴스틔 프로토타입은 표준 빌트읜 객체의 prototype 프로퍼티에 바인딩된 객체이다.
 * 예를 들어 표준 빌트인 String을 생성자 함수로서 호출하여 생성한 String 인스턴스의 프로토타입은 String.prototype이다. 
 */
console.log(Object.getPrototypeOf(strObj) === String.prototype); //true


/**
 *  표준 빌트인 객체의 prototype프로퍼티에 바인딩된 객체는 다양한 기느으이 빌트인 프로토타입 메소드를 제공한다. 그리고 표준 빌트인 객체는 인스턴스 없이도 호출 가능한 빌트인 정적메소드를 제공한다. 
 * 
 * 예를 들어 Number의 prototype 프로퍼티에 바인딩된 객체, Number.prototype은 다양한  기능의 빌트인 프로토타입 메소드를 제공한다. 이 프로토타입 메소드 모든 Number 인스턴스가 상속ㅇ를 통해 사용할 수 있다. 
 * 그리고 표준 빌트인 객체인 Nubmer는 인스턴스 없이 정적으로 호출할 수 있는 정적 메소드를 제공한다. 
 */


// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); //Number {1.5}


// toFixed는 Number.prototype의 프로토타입 메소드다.
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환한다.
console.log(numObj.toFixed()); //2


// isInteger는 Numberdml wjdwjr apthemdlek.l
// Number.isInteger는 인수가 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInteger(0.5)); // false







// 원시값과 래퍼 객체 
/**
 *  원시 값이 있느네도 불구하고 표준 빌트인 생성자 함수가 존재하는 이유는 무엇인가?
 * >> 원시값은 객체가 아니므로 프로퍼티나 메소드를 가질 수 없다. 
 * 그러나 잘 보면 원시 값이 객체처럼 동작하는 것을 볼 수 있다.
 */
 const str = 'hello';

 //원시 타입인 문자열이 프로퍼티오 ㅏ메소드를 갖고 있는 객체처럼 동작한다
 console.log(str.length); //5
 console.log(str.toUpperCase()); // HELLO

 //JS 엔진은 암묵적으로 연관된 객체를 생성하여  생성된 객체로 프로퍼티에 접근하거나 메소드를 호출하고 다시 원시값으로 되돌리는데 이렇게 
 //문자열, 숫자, 불리언 ㄱ밧에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라고 한다. 