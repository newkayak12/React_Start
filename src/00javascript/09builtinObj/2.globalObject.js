//전역 객체
/**
 * 전역 객체는 코드가 실행되기 이전 단계에 JS 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며, 어떤 객체에도 속하지 않는 최상위 객체이다. 
 * 
 * 전역 객체는 자바스크립트 환경에 따라 지칭하는 이름이 제각각이다. 
 * 브라우저 환경에서는 window(또는 self, this, frames)가 전역 객체를 가리키지만  Node.js환경에서는 global 전역 객체를 가리킨다.
 */


//브라우저
globalThis === this //true
globalThis === window //true
globalThis === self //true
globalThis === frames //true

//Node.js
globalThis === this //true
globalThis === global //true

/**
 * 전역 객체는 표준 빌트인 객체(Object, String, Number, Function, Array 등)와 환경에 따른 호스트 객체 (클라이언트 web API 또는 Node.js의 호스트 API), 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티르 갖는다. 
 * 
 * 즉, 전역 객체는 계층적 구조상 어떤 객체에도ㅓ 속하지 ㅇ낳는 모든 빌트인 객체( 표준 빌트인 객체와 호스트 객체)의 최상위 객체이다. 
 * 전역 객체 자신은 어떤 객체의 프로퍼티도 아니며 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 말한다.
 * 
 * >> 특징 : 
 * 		전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
 * 		전역 객체 의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다. 
 */

// 문자열 'F'를 16진수로 해석해서 10진수로 변환하여 반환한다.
window.parseInt('F',16); //15
// global.parseInt는 parseInt로 호출할 수 있다.
parseInt("F", 16); //15

window.parseInt === parseInt; // true


/**
 * var 키워드로 선언한 전역 변수와 선언하지 ㅇ낳는 변수에 ㄱ밧을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.
 */

// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티이다.
bar = 2; // window.bar = 2;
console.log(window.bar); //2

// 전역 함수
function baz(){return 3;}
console.log(window.baz()); //3


/**
 * let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다. 
 * let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 선언적 환경 레코드) 내에 존재하게 된다.
 */

let voo =123;
console.log(window.voo); //undefined
/**
 * 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다. 여러 개의 script 태그를 통해 자바스크립트 코드를 분리해도
 * 하나의 전역 객체 window를 공유하는 것은 변함이 없다. 이는 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다는 의미이다. 
 */






//>>>BUILT-IN 전역 프로퍼티 
// BUILT-IN 프로퍼티는 전역 객체의 프로퍼티를 의미한다. 

//Infinity
//무한대를 나타내는 숫자값이다.

//전역 프로퍼티는 window를 생략하고 참조할 수 있다.
console.log(window.Infinity === Infinity); //true

//양의 무한대
console.log(3/0); //Infinity
//양의 무한대
console.log(-3/0); //Infinity
//Infinity는 숫자값이다.
console.log(typeof Infinity); //Number


//NaN
//숫자가 아닌 숫자값을 갖는다. NaN프로퍼티는 Number.NaN 프로퍼티와 같다.

console.log(window.NaN); //NaN

console.log(Number('xyz')); // NaN
console.log(1*'String'); //NaN
console.log(typeof NaN); //Number

//undefined
//undefined  프로퍼티는 원시 타입 undefined를 값으로 갖는다. 
console.log(window.undefined); //undefined

var fool; 
console.log(fool); //undefined
console.log(typeof undefined); //undefined



//>>built-in 전역 함수
// 빌트인 전역함수는 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메소드이다. 

//eval : 믄지로 표현된 JS코드를 실행하는 함수
/**
 * eval 함수는 JS코드를 나타내는 문자열을 인수로 전달받는다. 전달받은 문자열 코드가 표현식이라면 eval 함수는 문자열 코드를 런타임에 평가하여 값을 생성하고,
 * 전달받은 인수가 표현식이 아닌 문이라면 eval함수는 문자열 코드를 런타임에 실행한다. 
 * 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한다.
 */

/**
 * 주어진 문자열 코드를 런타임에 평가 또는 실행한다.
 * @param {String} code = 코드를 나타내는 문자열
 * @return {*} 문자열 코드를 평가/실행한 값
 */
eval(code)


//표현식인 문
eval(`1+2;`); //3

//표현식이 아닌 문
eval(`var x = 5;`); //undefined

//eval 함수에 의해 런타임에 변수 선언문이 실행되어 x변수가 선언되었다.
console.log(x); // 5


//객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval(`({a:1})`);
console.log(o); //{a:1}

//함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval(`(function() {return 1;})`);
console.log(f()); //1

//인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환한다.
eval(`1+2; 3+4;`); //7

//eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수행한다. 

const xs = 1;
function vooo(){
	//eval 함수는 런타임에 vooo함수의 스코프를 동적으로 수정한다.
	eval('var xs = 2');
	console.log(xs); //2
}
vooo()
console.log(xs); //1

//위 예제의 eval 함수는 새로운 xs를 선언하면서 vooo함수의 스코프에 선언된   xs변수를 동적으로 추가한다.
// 함수가 호출되면 런타임 이전에 먼저 함수 몸체 내부의 모든 선언문을 먼저 실행하고 그 결과를 스코프에 등록한다.

// 따라서 eval함수가 호출되는 시점에는 이미 vooo함수의 스코프가 존재한다. 
//eval함수는 기존의 스코프를 런타임에 동적으로 수정한다.


/**
 * strict mode의 경우에는
 */

const ys = 1;
function booo(){
	'use strict';

	//strict mode에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성한다. 
	eval(`var ys = 2; console.log(ys);`);//2
	console.log(ys);//1
}
booo();
console.log(x); //1
//또한 인수로 전달받은 문자열 코드가 let, const 키워드를 사용한 변수 선언문이라면 암묵적으로 strict mode가 적용된다. 



//isFinite
//전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true/ 무한수이면 false를 반환한다. 
// 전달받은 인수의 타입이 숫자가 아닌 경우, 변환하여 검사한다. 인수가 NaN이라면 false를 반환한다. 

// isNaN
//전달받은 인수가 NaN인지 검사하여 반환한다.

//parseFloat
//전달받은 문자열 인수를 부동 소수점 숫자로 해석해서 반환한다.

//parseInt
//전달받은 문자열 인수를 정수로 해석해서 반환한다. 



//encodeURI / decodeURI

//encodeURI는 완전한 URI(Uniform Resource Identifier)를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.
// URI:	https://www.mydomain.com:80/doc/search?category=javascript&lang=ko#intro
// URL: https://www.mydomain.com:80/doc/search
//	-  Scheme(Protocol) : https
//	-  Host(Domain) :  www.mydomain.com
//	-  port 	: 80
//	-  path		: /docs/search
//
// URN: www.mydomain.com:80/docs/search?category=javascript&lang=ko#intro
//	-  Query(queyrString) : ?category=javascript&lang=ko
//	-  Fragment	      : #intro


// 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다. 
/**
 * 이스케이프처리는 네트워크를 통해 정보를 고융할 때 어떠 시스템에서도 읽을 수있는 아스키 문자 셋으로 변환하는 것이다. 
 * 따라서 URL 내에서 의미를 갖고 있는 문자(%,?,#)나 URL에 올 수 없는 문자(한글, 공백 등) 또는 시스템에 의해 해석할 수 있는 문자(<,>)를 이스케이프 처리하여 야기될 수 있는 문제를 예방하기 위해 이스케이프 처리가 필요하다.
 * 
 * 단, 알파벳, 0~9의 숫자 , -_.!~*'()문자는 이스케이프 처리에서 제외된다. 
 */


//encodingURIComponent / decodeURIComponent
/**
 * encodeURIComponent 함수는 URI 구성 요소를 인수로 전달받아 인코딩한다. 
 * 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다. 
 * decodeURIComponent 함수는 매개변수로 전달된 URI 구성 요소를 디코딩 한다. 
 * encodingURIComponent =, ?, & 까지 인코딩한다.
 * encodingURI은 =,?,&은 인코딩 하지 않는다.
 * 
 * 
 * 
 	encodeURI는 알파벳, 0~9의 숫자, ; , / ? : @ & = + $ #    - _ . ! ~ * ' ( ) 를 제외한 문자를 인코딩(이스케이프 처리)
	encodeURIComponent는 알파벳,0~9의 숫자 - _ . ! ~ * ' ( ) 를 제외한 문자를 이스케이프 처리
 * 
 */