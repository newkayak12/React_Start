// 클로저
/**
 * 클로저는 JS의 고유 개념이 아니다. 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어(Haskell, Lisp, Erlang, Scala)에서 사용되는 중요한 특성이다.
 * 클로저는 JS의 고유 개념이 아니므로 클로저의 정의가 ECMAScript 사양에 등장하지 않는다.
 * 
 * MDN에서 정의는 아래와 같다.
 * 	"A closure is the combination of a function and the lexical environment within which that fucntion was declared."
 *			 		클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합이다. 
 *
 * 
 */

		const x = 1;
		function outerFunc(){
			//outerFunc의 상위 스코프는 전역
			const x = 10;
			function innerFunc(){
				//innerFunc의 상위 스코프는 outerFunc
				// inner는 inner 내부 변수와 스코프와 outer 변수에 접근할 수 있다. 
				//만약 outer안에 inner가 있는게 아니라면, outer 안에서 inner를 호출했더라도 outer 변수에 접근할 수 없다. 
				console.log(x);//10
			}
			innerFunc();
		}
		outerFunc();
/**
 * 	이러한 현상이 발생한느 것은 자바스크립트가 렉시컬 스코프를 따르는 프로그래밍 언어이기 떄문이다. 
 */



//////// 렉시컬 스코프
/**
 * JS 엔진은 함수를 어디서 호출했느지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다. > 이를 렉시컬 스코프(정적 스코프)라고 한다.
 * 즉, 어디서 호출하는 지는 함수의 상위 스코프 결정에 어떠한 영향도 주지 못한다. (함수의 상위스코프는 함수를 정의한 위치에 의해 정적으로 결정되고 변하지 않는다.)
 * 
 * ++
 * 스코프의 실체는 실행 컨텍스트의 렉시컬 환경이다. 이 렉시컬 환경은 외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)를 통해 상위 렉시컬 환경과 연결한다. 이것이 '스코프 체인'이다.
 * 따라서 "함수의 상위 스코프를 결정한다" 는 것은 "렉시컬 환경의 외부 렉시컬 환경에 대한 참조에 저장할 참조값을 결정하는 것"과 같다. '외부 렉시컬 환경에 대한 참조'에 저장할 참조 값이 바로 상위 렉시컬 환경에 대한 참조이며, 이것이 상위 스코프이기 때문이다. 
 * 
 * 
 * 정리하면 렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다. 이것이 바로 렉시컬 스코프이다. 
 */




// 함수 객체의 내부 슬롯 [[Environment]]
/**
 * 함수가 정의된 환경(위치)과 호출되는 환경(위치)은 다를 수 있다. 따라서 렉시컬 스코프가 가능하려면 함수는 자신이 정의 된 환경(상위 스코프(함수 정의가 위치하는 스코프 == 상위 스코프))를 기억해야한다.
 * 이를 위해 함수는 자신의 내부 슬롯[[Environment]]에 자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다. 
 * 
 * 	> 전역에서 정의 됐다면 함수 객체의 내부 슬롯 [[Environment]]에는 함수 정의가 평가되는 시점, 전역 코드 평가 시점에 실행 중인 실행 컨텍스트의 환경인 전역 렉시컬 환경의 참조가 저장된다.
 * 
 * 	> 외부 함수 코드가 실행되는 시점에 평가되어 함수 객체를 생성한다. 이 때 생성된 함수 객체의 내부 슬롯 [[Environment]]에는 함수 정의가 평가되는 시점, 즉 외부 함수 코드 실행 시점에
 * 	실행 중인 실행 컨텍스트의 렉시컬 환경인 외부 함수 렉시컬 환경의 참조가 저장된다. 
 * 
 * 
 * 함수 객체는 내부 슬롯 [[Environment]]에 저장한 렉시컬 환경의 참조, 즉 상위 스코프를 자신이 존재하는 한 기억한다. 
 * ex)
 */
	const bx = 1;
	function foox(){
		const x = 10;
		//상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
		// 함수 호출 위치와 상위 스코프는 아무런 관계가 없다. 

		barx();
	}

	//함수 barx는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
	function barx(){
		console.log(x)
	}

	foox(); //1
	barx(); //1






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>.클로저와 렉시컬 환경
const xxx = 1;

// [1]
function outerxxx(){

	const xxx = 10;
	const innerxxx = function(){
		console.log(xxx);
	}; //[2]

	return innerxxx;
};

// outerxxx 함수를 호출하면 중첩 함수 innerxxx를 반환한다.
// 그리고 outerxxx 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다. 
const innerFunc = outerxxx(); //[3]
innerFunc(); //[4]
/**
 * outerxxx 함수를 호출하면 outerxxx함수는 중첩 함수 innerxxx를 반환하고 생명 주기를 마감
 * outerxxx 함수의 실행이 종료되면 outerxxx 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거된다.  _ 이때 outerxxx함수의 지역변수 xxx와 변수 값 10을 저장하고 있던 outerxxx함수의 실행 컨텍스트가 제거되었으므로 
 * outerxxx 함수의 지역 변수 xxx 또한 생명 주기를 마감한다.  이렇게 되면 outerxxx함수의 xxx는 유효하지 않아 접근할 수 없어 보인다. 
 * 
 * 
 * 그러나 결과는 outerxxx의 지역변수 xxx값인 10이다. 이미 생명 주기가 종료된 실행 컨텍스트 스택에서 제거된 outerxx함수의 지역 변수 xxx가 동작하고 있다. 
 * 
 * 
 * 이처럼 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라고 부른다. 
 * (
 * 	외부 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거되지만 외부 함수의 렉시컬 환경까지 소멸하는 것이 아니다. 
 * 	내부 함수의 [[Environment]] 내부 슬롯에 의해 참조되고 있기 때문에 가비지 컬렉션의 대상이 되지 않는다. 
 * 	이렇게 생존한 상위 스코프는 식별자를 참조할 수도 있고 식별자의 값을 변경할 수도 있다. 
 * )
 * 
 *      
 * 
 * 
 * ///////클로저가 아닌 예    
 * 
 * 	function foo(){
 *  		const x = 1;
 *   		const y = 2;
 *   			
 * 			// 일반적으로 클로저라고 하지 않는다.
 *   		function bar(){
 *      		 const z = 3;
 *      	 	debugger;
 * 			// 상위 스코프 식별자를 참조하지 않는다.
 *      		console.log(z)
 *   		}
 *   
 *   
 *   		return bar;
 *	}
 * 
 * 
 * 
 * [ 
 * 	> local
 * 		z = 3
 * 		Local
 *	 	 this: Window
 *	   	  z: 3
 *		Script
 *	  	 bar: ƒ bar()
 *		Window
 * 	> Callstack
 * 		bar
 * ]
 * ----------------------------------------
 * 
 * 
 * 
 * 
 *	function foo(){
 *		const x = 1;
 *
 *
 *		//bar 함수는 클로저였지만 곧바로 소멸한다.
 *		//이러한 함수는 일반적으로 클로저라고 하지 않는다.
 *
 *		function bar(){
 *			debugger;
 *			//상위 스코프의 식별자를 참조한다.
 *			console.log(x)
 *		}
 *
 *		bar();
 * 
 *	}
 *	
 *	foo() 
 *
 * [	Local
 *	this: Window
 *	z: 3
 *     Script
 *     bar: ƒ bar() 
 * ]
 * 
 * 
 * 
 * 
 * 
 * >>  클로저는 중첩 함수가 상우 ㅣ스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 겨웅에 한정하는 것이 일반적이다. 
 * >> 일반적으로 모던 브라우저는 최적화를 통해 상위 스코프의 식별자 중에서 클로저가 참조하고 잇는 식별자만을 기억한다.
 * 클로저에 의해 참조되는 상위 스코프의 변수를 자유 변수라고 부른다. (클로저란 "함수가 자유 변수에 대해 닫혀있다라는 의미이다. ")
 * 
 * */







 