//StrictMode

/* function foo(){
	x=10;
}
foo();
console.log(x);//???? >> 10이 나온다. 

 */



/**
 *  JS 엔진은 x변수가 어디에 선언되었는지 스코프 체인을 통해 검색하기 시작한다. 
 *  JS엔진은 먼저 foo 함수의 스코프에서 x 변수의 선언을 검색한다. 
 *  JS엔진은 X변수를 검색하기 위해 foo 함수 컨텍스트의 상위 스코프에서 x변수의 선언을 검색한다. 
 * 
 *  JS엔진은 암묵적으로 전역 객체에 x프로퍼티를 동적으로 생성한다. 이때 전역 객체의 x 프로퍼티는 마치 전역 변수처럼 사용할 수 있다.
 *  이러한 현상을 암묵적 전역이라고 한다. 
 * 
 * 개발자의 의도와는 상관없이 발생한 암묵적 전역은 오류를 발생시키는 원인이 될 간으성이 크다.
 * 따라서 반드시 var, let, const 키워드를 이용해서 사용해야한다. 
 * 
 * 애초에 이러한 문제가 발생하지 않을 수 있는 환경이 제공되면 어떨까?
 * 
 * strict mode를 적용하려면 전역이 선두 또는 함수 몸체의 선두에 user stirct를 추가한다. 
 * 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다. 
 */






/* 'use strict';
function foo(){
	x = 10; // referenceError : x is not defined
}
foo(); */
// console.log(x);
/**
 *        x = 10; // referenceError : x is not defined
          ^

	ReferenceError: x is not defined
	at foo (/Users/sanghyeon/Downloads/dev/React/do-it-example/src/00javascript/08strictMode/strictMode.js:32:4)
	at Object.<anonymous> (/Users/sanghyeon/Downloads/dev/React/do-it-example/src/00javascript/08strictMode/strictMode.js:34:1)
 */


// 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.
function foo(){
	'use strict';

	x = 10; 
	//ReferenceError : x is not defined
}
foo();
// console.log(x)
/**
 *       x = 10; 
          ^

	ReferenceError: x is not defined
	at foo (/Users/sanghyeon/Downloads/dev/React/do-it-example/src/00javascript/08strictMode/strictMode.js:55:4)


	'user strict'; 를 선두에 두지 않으면 strict mode가 되지 않는다. 
	또한 전역에 적용한 strict mode는 스크립트 단위로 적용된다. 

	<script> 
		'use strict';
	</script>
	<script>
			//여기는 strict mode가 아니다 .
	</script>

	추가로, 서드파티 라이브러리가  non-strict mode인 경우도 있기 때문에 전역에 strict mode를 적용하는 것은 바람직하지 ㅇ낳다.

	차라리 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다. 
*/
	(function (){
		'use strict';
		
		//~~~~
	}())
/*

	그러나 strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 ㅇ낳으면 이또한 문제가 생길 수 있다 .
 */

	(function (){
		var let = 10; // 에러 없음
		 
		function foo(){
			'use strict';
			// let = 20; // SyntaxError : Unexpected strict mode reserved word
		}

		foo()
	}())
/*
	따라서 strict mode를 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다. 


	
	
	
	
	***  strict mode가 발생시키는 에러

		1. 암묵적 전역 : 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다. 

			ex)
				(function (){
					'use strict';

					x = 1; 
					
					console.log(x); // ReferenceError : x is not defined
				}());


		2. 변수, 함수, 매개변수의 삭제 : delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다. 
			
			ex)
				(function(){
					'use strict';

					var x = 1;
					delete x; //SyntaxError : Delete of an unqualifed identifier in strict mode.

					function foo(a){
						delete a; //SyntaxError : Delete of an unqualifed identifier in strict mode.
					}

					delete foo; //SyntaxError : Delete of an unqualifed identifier in strict mode.
				}())

		
		3. 매개변수 이름의 중복

			ex)
				(function () {
					'use strict';

					//SyntaxError : Duplicate parameter name not allowed in this context
					function foo(x,x){
						return x+x;
					}
					console.log(foo(1,2))
				}())


		4. with문의 사용 *with문은 전달된 객체를 스코프 체인에 추가한다. with 문은 동일한 객체의 프로퍼티를 반복해서 사용할 떄 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만 성능과 가독성이 나빠진다. 

			ex)
				(function () {
					'use strict';
					
					//SyntaxError: Strict mode code may not include a with statement
					with({x:1}){
						console.log(x);
					}
				}());

*/




// strict mode 적용에 의한 변화
/**
 *  1. this
 * 	: strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. (생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 떄문이다. )
 * 	   ex)
 * 		(function (){
 * 			'use strict';
 * 		
 * 			function foo() {
 * 				console.log(this); //undefined	
 * 			}
 * 			foo();
 * 
 * 			function Foo() {
 * 				console.log(this); //FOO
 * 			}
 * 			new Foo();
 * 		
 * 		}())
 * 
 *  
 *  2. arguments 
 * 	: 객체 strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다. 
 * 	   ex)
 * 		(function (a){
 * 			'use strict';
 * 			//매개변수에 전달된 인수를 재할당하여 변경
 * 			
 * 			a = 2;
 * 
 * 			// 변경된 인수가 arguments 객체에 반영되지 않는다.
 * 			console.log(arguments)
 * 		}(1)) 
 */
