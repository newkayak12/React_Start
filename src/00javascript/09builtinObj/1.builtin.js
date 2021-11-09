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
 //문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라고 한다. 


 // ' . '으로 접근하면 그 순간 래퍼 객체인 String 생성자 함수의 인스턴스가 생성되고 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
 // 이떄 문자열 래퍼 객체인 String 생성자 함수의 인스턴스는 String.prototype의 메소드를 상속받아 사용할 수 있다. 
 // 그 후 래퍼 객체의 처리가 종료되면 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시 값으로 원래의 상태, 즉 식별자가 원시값을 갖도록 되돌리고 래퍼 객체는 가비지 컬렉션 대상이 된다. 



 //1. 식별자 str은 문자열을 값으로 가지고 있다.
 const strs = 'hello';


 //2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다.
 // 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
 // 래거 객체의 name 프로퍼티가 동적으로 추가된다.
 strs.name = 'lee';

 //3. 식별자 str은 다시 원래 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
 // 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이브로 가비지 컬렉션의 대상이 된다.

 //4. 식별자 str은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼 객체와는 다른) 래퍼 객체를 가리킨다.
 //새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 ㅇ낳는다.
 console.log(strs.name); //undefined

 //5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.
 //이때 4에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.
 console.log(typeof str, str); //String hello

 /**
  * 숫자 값도 마찬가지이다. 숫자 값에 대해 마침표 표기법으로 접근하면 그 순간 래퍼 객체인 Number 생성자 함수의 인스턴스가 생성되고 숫자는 래퍼 객체의 [[NumberData]] 내부 슬롯에 할당된다.
  * 이 떄 래퍼 객체인 Number 객체는 당연히 Number.prototype의 메소드를 상속받아 사용할 수 있다. 그 후, 래퍼 객체의 처리가 종료되면 래퍼 객체의 [[NumberData]] 내부 슬롯에 할당된 원시값을 되돌리고 래퍼 객체는 가비지 컬렉션의 대상이 된다. 
  */
 const numbs = 1.5;

 //원시 타입인 숫자가 래퍼 객체인 String 객체로 변환된다.
 console.log(numbs.toFixed()); //2

 //래퍼 객체로 프로퍼티에 접근하거나 메소드를 호출한 후, 다시 원시값으로 되돌린다. 
 console.log(typeof numbs, numbs);// number 1.5



 /**
  * 이처럼 문자열, 숫자, 불리언, 심벌은 암묵적으로 생성되는 래퍼 객체에 의해 마치 객체처럼 사용할 수 있으며, 
  * 표준 빌트인 객체인 String, Number, Boolean, Symbol의 프로토타입 메소드 또는 프로퍼티를 찾조할 수 있다. 
  * 
  * 따라서 String, Number, Boolean 생성자 함수를 new 연산자와 함께 호출하여 문자열, 숫자, 불리언 인스턴스를 생성할 필요가 으며 권장하지도 않는다.
  * 
  * 
  * null과 undefined는 래퍼 객체를 생성하지 않는다. 
  */