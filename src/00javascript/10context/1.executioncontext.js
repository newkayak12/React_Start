/**
 *  실행 컨텍스트는 자바스크립트의 동작 원리를 담고 있는 핵심 개념이다. 
 * 실행 컨텍스트를 바르게 이해하면 자바스크립트가 스코프를 기반으로 식별자와 식별자에 바인딩된 값(식별자 바인딩)을 관리하는 방식과 호이스팅이 
 * 발생하는 이유, 클로저의 동작방식 그리고 태스크 큐오하 함께 동작하는 이벤트 핸들러와 비동기 처리의 동작방식을 이해할 수 있다 .
 * 
 * 
 * 전역 코드  /  전역에 존재하는 소스코드를 말한다. 전역에 정의된 함수, 클래스 등의 내부 코드는 포함되지 않는다.
 * 함수 코드  / 함수 내부에 존재하는 소스코드를 말한다 .함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함되지 않는다. 
 * eval 코드 / 빌트인 전역 함수인  eval 함수에 인수로 전달되어 실행되는 소스코드를 말한다.
 * 모듈 코드  / 모듈 내부에 존재하는 소스코드를 말한다 .모듈 내부의 함수, 클래스 등의 내부 코드는 포함되지 않는다. 
 * 
 * 
 * 	1. 전역코드 : 전역 코드는 전역 변수를 관리하기 위해 최상위 스코프인 전역 스코프를 생성해야한다. 그리고 var키워드로 선언ㅈ된 전역 변수와 함수 선언문으로
 * 		정의된 전역 함수를 전역 객체의 프로퍼티와 메소드로 바인딩하고 참조하기 위해 전역 객체와 연결되어야 한다. 이를 위해 전역 코드가 평가되면 전역 실행 컨텍스트가 생성된다. 
 * 	
 * 	2. 함수 코드 : 함수 코드는 지역 스코프를 생성하고 지역 변수, 매개변수, arguments 객체를 관리해야한다. 그리고 생성한 지역 스코프를 전역 스코프에서 시작하는
 * 		스코프 체인의 일원으로 연결해야한다. 이를 위해 함수 코드가 평가되면 함수 실행 컨텍스트가 생성된다. 
 * 
 * 	3. eval 코드 : eval 코드는 strict mode에서 자신만의 프코프를 생성한다. 이를 위해 eval코드가 평가되면 eval 실행 컨텍스트가 생성된다. 
 * 
 * 	4. 모듈 코드 : 모듈 코드는 모듈별로 독립적이 ㄴ모듈 스코프를 생성한다. 이를 위해 모듈 코드가 평가되면 모듈 실행 컨텍스트가 생성된다. 
 * 
 * 		 소스 코드 >>  코드 평가 >> 실행 컨텍스트
 * 		------------------------------------
 * 		전역 코드 >> 코드 평가 >> 전역 실행 컨텍스트
 * 		함수 코드 >> 코드 평가 >>  함수 실행 컨텍스트
 * 		eval 코드 >> 코드 평가 >>  eval 실행 컨텍스트
 * 		모듈 코드 >> 코드 평가 >>  모듈 실행 컨텍스트
 * 
 * 
 * 	JS 엔진은 소스코드를 "소스코드 평가"와 "소스코드의 실행"으로 나누어 처리한다. 
 * 	
 * 	소스 코드 평가는 실행 컨텍스트를 생성하고 변수, 함수 등의 선언문만 먼저 실행하여 생성된 변수나 함수 식별자를 키로 실행 컨텍스트가 관리하는 스코프(렉시컬 환경의 환경 레코드)에 등록한다.
 * 	
 * 	소스 코드 평가가 끝나면 선언문을 제외한 소스코드가 순차적으로 실행되기 시작한다. (즉, 런타임에 돌입한다. ) 이때 소스 코드 실행에 필요한 정보, 즉 변수나 함수의 참조를 실행 컨텍스트가 관리하는 스코프에서 검색하여 취득한다. 
 * 
 * 
 * 	:: 1. 소스코드의 평가(선언문) > 실행컨텍스트에 주입
 * 	:: 2. 실행 컨텍스트에서 필요한 정보 취득 > 선언문 이외의 문(소스 코드) 실행 > 실행 결과 실행 컨텍스트에 반환
 */








//실행 컨텍스트의 역할
// 아래의 코드를 JS엔진이 어떻게 평가하고 실행할까?

//전역 변수 선언
const x = 1;
const y = 2; 

//함수 정의
function jav(a){
	//지역 변수 선언
	const x = 10;
	const y = 20;

	console.log(a+x+y);
};

// 함수 호출
jav(100);

//메소드 호출
console.log(x+y);//3

/**
 * 1. 전역 코드 평가 : 전역 코드 평가 과정을 거치며 전역 코드를 실행하기 위한 준비를 한다. 
 * 	소스 코드 평가 과정에서는 선언문만 먼저 실행한다. 따라서 전역 코드의 변수 선언문과 함수 선언문이 먼저 실행되고 
 * 	그 결과 생성된 전역변수와 전역 함수가 실행 컨텍스트가 관리하는 전역 스코프에 등록한다.
 * 	이때 var키워드로 선언된 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 객체의 프로퍼티와 메소드가 된다. 
 * 
 * 2. 전역 코드 실행 : 전역 코드 평가 과정이 끝나면 런타임이 시작되어 전역 코드가 순차적으로 실행되기 시작한다.
 * 	이때 전역 변수에 값이 할당되고 함수가 호출된다. 함수가 호출되면 순차적으로 실행되던 전역 코드의 실행을 일시 중단 하고 코드 실행순서를 변경하여 함수 내부로 진입한다. 
 * 
 * 3. 함수 코드 평가 : 함수 호출에 의해 코드 실행 순서가 변경되어 함수 내부로 진입하면 함수 내부의 문들을 실행하기에 앞서 함수 코드 평가 과정을 거치며
 * 	함수 코드를 실행하기 위한 준비를 한다. 이때 매개변수와 지역 변수 선언문이 먼저 실행되고, 그 겨로가 생성된 매개 변수와 지역 변수가 실행 컨텍스트가 관리하는 지역 스코프에 등록된다.
 * 	또한 함수 내부에서 지역 변수처럼 사용할 수 있는 arguments 객체가 생성되어 지역 스코프에 등록되고 this 바인딩도 결정된다. 
 * 
 * 4. 함수 코드 실행 : 함수 코드 평가가 끝나면 런타임이 시작되어 함수 코드가 순차적으로 실행되기 시작한다. 이때 매개변수와 지역 변수에 값이 할당되고 console.log() 메소드가 호출된다.
 * 	console.log()를 호출하기 위해서 식별자인 console을 스코프 체인을 통해 검색한다. 이를 위해 함수 코드의 지역 스코프는 상위 스코프인 전역 스코프와 연결되어야 한다. 
 * 	console 식별자는 전역 객체에 프로퍼티로 존재한다. 이는 전역 객체의 프로퍼티가 마치 전역 변수처럼 전역 스코프를 통해 검색 가능해야한다는 것을 의미한다. 
 * 	이후 a,x,y를 평가한다. 해당 식별자는 스코프 체인을 통해 검색한다. console.log가 종료되면 함수 코드 실행 과정이 종료되고 함수 호출 이전으로 돌아가 전역 코드 실행을 계속한다. 
 * 
 * 
 * ~~~~~~~~~~~~~~~
 * 	이처럼 코드가 실행되려면 스코프를 구분하여 식별자와 바인딩된 값이 관리되어야 한다. 그리고 중첩 관계에 의해 스코프 체인을 형성하여 식별자를 검색할 수 있어야하고, 전역 객체의 프로퍼티도 전역 변수처럼 검색할 수 있어야 한다. 
 * 	또한 함수 호출이 종료되면 함수 호출 이전으로 되돌아가기 위해 현재 실행중인 코드와 이전에 실행하던 코드를 구분하여 관리해야한다. 
 * 	이처럼 코드가 실행되려면 스코프, 식별자, 코드 실행 순서등의 관리가 필요하다.
 * 	
 * 	1. 선언에 의해 생성된 모든 식별자 (변수, 함수, 클래스 등)를 스코프로 구분하여 등록하고 상태 변화(식별자에 바인딩된 값의 변화)를 지속적으로 관리할 수 있어야 한다.
 * 	2. 스코프는 중첩 관계에 의해 스코프 체인을 형성해야한다. 즉, 스코프 체인을 통해 상위 스코프로 이동하여 식별자를 검색할 수 있어야한다.
 * 	3. 현재 실행 중인 코드의 실행 순서를 변경(예를 들어, 함수 호출에 의한 실행 순서 변경) 할 수 있어야 하며 다시 되돌아갈 수도 있어야 한다. 
 * 
 * 
 * 	> 이 모든 것을 관리하는 것이 바로 실행 컨텍스트이다. 실행 컨텍스트는 소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다.
 * 	구체적으로 말하면 실행 컨텍스트는 식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다.
 * 
 * 	식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고   /
 * 						     /	코드 실행 순서는 실행 컨텍스트 스택으로 관리한다. 
 * ~~~~~~~~~~~~~~~~~~~~~
 * 
 * 
 * 
 * 
 */





//실행 컨텍스트 스택
const x2 = 1;
function loo2 (){
	const y2 = 2;
	
	function lar2(){
		const z2 =3;
		console.log(x2+y2+z2);
	}

	lar2()
}
loo2(); //6
/**
 * 소스코드의 타입으로 분류하면 전역 코드와 함수 코드로 이루어져 있다. JS엔진은 먼저 전역 코드를 평가하여 전역 실행 컨텍스트를 생성한다. 
 * 그리고 함수가 호출되면 함수 코드를 평가하여 함수 실행 컨텍스트를 생성한다.
 * 
 * 이때 생성된 실행 컨텍스트는 스택 자료 구조로 관리된다. 이를 실행 컨텍스트 스택이라고 부른다. 
 * 
							  [내부 함수 실행 컨텍스트] 							
 * 			      [외부 함수 실행 컨텍스트]        [외부 함수 실행 컨텍스트]        [외부 함수 실행 컨텍스트]	
 * 	[전역 실행 컨텍스트]	    [전역 실행 컨텍스트]	    [전역 실행 컨텍스트]	    [전역 실행 컨텍스트]	    [전역 실행 컨텍스트]
 * 
 * 	--------------------------------------------------------> 진행 ----------------------------------------------------------->
 * 
 * 
 * 	1. 전역 코드의 평가와 실행
 * 		JS엔진 먼저 전역 코드를 평가하여 전역 실행 컨텍스트를 생성하고 실행 컨텍스트 스택에 푸시한다. 이때 전역 변수 x2와 전역 함수 loo2는 전역 실행 컨텍스트에 등록한다.
 * 		이후 전역 코드가 실행되기 시작하여 전역 변수 x2에 ㄱ밧을 할당되고 전역 함수 loo2가 호출된다. 
 * 
 * 	2. loo2 함수 코드의 평가와 실행
 * 		전역 함수 loo2가 호출되면 전역 코드의 실행은 일시 중단되고 코드의 제어권이 loo2 함수 내부로 이동한다. 
 * 		JS 엔진은 loo2 함수 내부의 함수 코드를 평가하여 loo2함수 실행 컨텍스트를 생성하고 실행 컨텍스트 스택에 푸시한다. 
 * 		loo2 함수의 지역 변수 y와 중첩 함수 lar가 loo2 함수 실행 컨텍스트에 등록된다. 이후 loo2함수 코드가 실행되기 시작하여 지역 변수 y2 에 값이 할당되고 중첩함수 lar2가 호출된다.
 * 
 * 	3. lar2 함수 코드 평가와 실행
 * 		중첩 함수 lar2가 호출되면 loo2 함수 코드의 실행은 일시 중단되고 코드의 제어권이 lar2 함수 내부로 이동한다. 자바스크립트 엔진은 lar2 함수 내부의 함수 코드를 평가하여 lar2함수 실행 컨텍스트를 생성하고
 * 		실행 컨텍스트 스택에 푸시한다. 이때 lar2 함수의 지역 변수 z2가 lar2함수 실행 컨텍스트에 등록된다. 이후, lar2 함수 코드가 실행되기 시작하여 지역 변수 z2에 값이 할당되고
 * 		console.log 메소드를 호출한 이후 lar2함수는 종료된다.
 * 
 * 	4. loo2 함수 코드로 복귀 
 * 		이때 JS 엔진은 lar2함수 실행 컨텍스트를 실행 컨텍스트 스택에서 팝하여 제거한다. 이후 loo2 함수는 더 이상 실행할 코드가 없으므로 종료된다. 
 * 
 * 	5. 전역 코드로 복귀 
 * 		loo2 함수가 종료되면 코드 제어권은 전역으로 이동한다. loo2 함수 실행 컨텍스트를 실행 컨텍스트 스택에서 팝하여 제거한다. 그리고 더 이상 실행할 전역 코드가 남아있지 않으므로 
 * 		전역 실행 컨텍스트도 실행 컨텍스트 스택에서 팝되어 실행 컨텍스트 스택에는 아무것도 남아있지 않게 된다. 
 * 
 * 		이처럼 실행 컨텍스트 스택은 코드의 실행 순서를 관리한다. 소스 코드가 평가되면 실행 컨텍스트가 생성되고 실행 컨텍스트 스택의 최상위에 쌓인다. 
 * 		실행 컨텍스트 스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드 실행 컨텍스이다. 따라서 실행 컨텍스트 스택의 최상위에 존재하는 실행 컨텍스트를 실행 중인 실행 컨텍스트라고 부른다. 
 */




// 렉시컬 환경 
/**
 * 렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트다. 
 * 실행 컨텍스트 스택이 코드의 실행 순서를 관리한다면 렉시컬 환경은 스코프와 식별자를 관리한다. 
 * 
 * 렉시컬 환경은 키와 값을 갖는 객체 형태의 스코프(전역, 함수, 블록 스코프)를 생성하여 식별자를 키로 등록하고 식별자에 바인딩된 값을 관리한다.
 * 즉, 렉시컬 환경은 스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할을 하는 렉시컬 스코프의 실체이다.
 * 
 * >> 실행 컨텍스트는 LexicalEnvironment 컴포넌트와 VariableEnvironment 컴포넌트로 구성된다. 
 * 
 * 생성 초기에 LexicalEnvironment 컴포넌트와 VariableEnvironment 컴포넌트는 하나의 동일한 렉시컬 활경을 참조한다.
 * 
 * 		LexicalEnvironment는 두 개의 컴포넌트로 구성된다.
 * 			1. 환경 레코드(Environment Record) :  스코프에 포함된 식별자를 등록하고 등록된 식별자에 바인딩된 값을 관리하는 저장소이다. 환경 레코드는 소스코드의 타입에 따라 관리하는 내용에 차이가 있다.
 * 			2. 외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference) : 외부 렉시컬 환경에 대한 참조는 상위 스코프를 가리킨다. 이때 상위 스코프란 외부 렉시컬 환경, 
 * 			즉 해당 실행 컨텍스트를 생성한 소스코드를 포함하는 상위 코드의 렉시컬 환경을 말한다. 외부 렉시컬 환경에 대한 참조를 통해 단방향 링크드 리스트인 스코프 체인을 구현한다. 
 */













// 실행 컨텍스트의 생성과 식별자 검색 과정
var x1 =1;
const y1 = 2; 

function loo(a){
	var x1 = 3;
	const y1 = 4;

	function lar (b){
		const z1 = 5;
		console.log(a+b+x1+y1+z1);
	}
	lar(10);
}
loo(20) //42





//전역 객체 생성
/** 
 * 전역 객체는 전역 코드가 평가되기 이전에 생성된다. 이때 전역 객체에는 빌트인 전역 프로퍼티와 빌트인 전역 함수, 그리고 표준 빌트인 객체가 추가되어 동작 환경에 따라 클라이언트 사이드 Web API 또는 특정 환경을 위한 호스트 객체를 포함한다. 
 * 전역 객체도 Object.prototype을 상속받는다. 즉, 전역 객체도 프로토타입 체인의 일원이다. 
 */


// Object.prototype.toString
// window.toString(); // "[object Window]"	
globalThis.toString()
// window.__proto__.__proto__.__proto__.__proto__ === Object.prototype; //true


//전역 코드 평가
/**
 * 1. 전역 실행 컨텍스트 생성
 * 2. 전역 렉시컬 환경 생성
 * 	2.1. 전역 환경 레코드 생성
 * 		2.1.1 객체 환경 레코드 생성
 * 		2.1.2 선언적 환경 레코드 생성
 * 	2.2 this 바인딩
 * 	2.3 외부 렉시컬 환경에 대한 참조 결정
 * 
 * 
 * 
 * 1. 전역 실행 컨텍스트 생성 : 전역 실행 컨텍스트를 생성하여 실행 컨텍스트 스택에 푸시한다. > 이때 전역 실행 컨텍스트는 실행 컨텍스트 스택의 최상위, 즉 실행 중인 실행 컨텍스트(running execution context)가 된다.
 * 
 * 2. 전역 렉시컬 환경 생성 : 전역 렉시컬 환경(Global Lexical Environment)을 생성하고 전역 실행 컨텍스트에 바인딩한다. (렉시컬 환경은 2개의 컴포넌트 Environment Record / Outer Lexical Environment Reference)로 구성된다.
 * 
 * 	2.1. 전역 환경 레코드 생성 : 전역 렉시컬 환경을 구성하는 컴포넌트인 전역 환경 레코드는 전역 변수를 관리하는 전역 변수를 관리하는 전역 스코프, 전역 객체의 빌트인 전역 프로퍼티와 삘트인 전역 함수, 표준 빌트인 객체를 제공한다. 
 * 			이처럼 기존의 var 키워드로 선언한 전역 변수와 ES6의 let, const 키워드로 선언한 전역 변수를 구분하여 관리하기 위해 전역 스코프 역할을 하는 전역 환경레코드는 '객체 환경 레코드' 와 '선언적 환경 레코드'로 구성되어있다.
 * 			
 * 			> '객체 환경 레코드'는 기존의 전역 객체가 관리하던 var 키워드로 선언한 전역 변수와 함수 선언문으로 정의한 전역 함수, 빌트인 전역 프로퍼티와 빌트인 전역 함수, 표준 빌트인 객체를 관리
 * 			>  '선언적 환경 레코드'는 let, const 키워드로 선언한 전역 변수를 관리한다. 
 * 
 * 		즉, 전역 환경 레코드의 객체 환경 레코드와 선언적 환경 레코드는 서로 협력하여 전역 스코프와 전역 객체( 전역 변수의 전역 객체 프로퍼티화 )를 관리한다. 
 *
 *		
		2.1.1. 객체 환경 레코드 생성	
			객체 환경 레코드는 BindingObject라고 부르는 객체와 연결된다. 
			전역 코드 평가 과정에서 var 키워드로 선언한 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 환경 레코드의 객체 환경 레코드에 BindingObject를 통해 전역 객체의 프로퍼티와 메소드가 된다.
			(
				이것이 var 키워드로 선언된 전역 변수와 함수 선언문으로 정의된 전역 함수가 전역 객체의 프로퍼티와 메소드가 되고 
				전역 객체를 가리키는 식별자(window) 없이 전역 객체의 프로퍼티를 참조(window.alert를 alert으로)할 수 있는 메커니즘이다. 
			)

			ex) var x = 1;
			 > var키워드로 선언한 변수이기 때문에 선언단계와 초기화 단계가 동시에 진행된다. 다시 말해, 전역 코드 평가 시점에 객체 환경 레코드에 바인딩된 BindingObject를 통해 전역 객체에 변수 식별자를 키로 등록하고 암묵적으로 undefined를 바인딩
			 따라서 var 키워드로 선언한 변수는 코드 실행 단계( 지금 단계는 코드 평가 단계이다. )에서 변수 선언문 이전에도 참조할 수 있다. 단, 언제나 이런 경우는 undefined이다.
			 var 키워드로 선언한 변수에 할당한 함수 표현식도 이와 동일하게 동작한다.

			 이것이 '변수 호이스팅'이 발생하는 원인이다. 


			 //

			 함수 선언문으로 정의한 함수가 평가되면 함수 이름과 동일한 이름의 식별자를 객체 환경 레코드에 바인딩된 BindingObject를 통해 전역 객체에 키로 등록하고 생성된 함수 객체를 즉시 할당한다. 
			이것이 변수 호이스팅과 함수 호이스팅의 차이이다. 


		2.1.2 선언적 환경 레코드 생성
			let, const 키워드로 선언한 전변수(let, const키워드로 선언한 변수에 할당한 함수 표현식 포함)는 선언적 환경 레코드에 등록되고 관리된다. 
			이는 전역 객체의 프로퍼티가 되지 않고 개념적인 블록 내에 존재하게 된다. 이 개념적 블록이 바로 전역 환경 레크드의 선언적 환경 레코드이다.
			따라서 let const 키워드로 선언한 변수는 전역 객체의 프로퍼티가 되지 않기 때문에 window.y와 같이 전역 객체의 프로퍼티로서 참조할 수 없다. 
			
			또한 const 키워드로 선언한 변수는 선언 단계와 초기화 단계가 분리되어 진행한다. 즉, 런타임에 실행 흐름에 변수 선언문에 도달하기 전까지 '일시적 사각지대(Temporal Dead zone; TDZ)'에 빠지게 된다. 
			<uninitialized>는 초기화 단계가 진행되지 않아 변수에 접근할 수 없음을 나타낸다. 실제로 바인딩된 것이 아니다. 

			~ let, const 키워드로 선언한 변수도 변수 호이스팅이 발생하는 것은 변함이 없지만 런타임에 컨트롤이 변수 선언문에 도달하기 전까지 일시적 사각지대에 빠지기 때문에 참조할 수 없다. 
 */

			let bow = 1;//전역 변수

			{
				// let, const 키워드로 선언한 변수가 호이스팅되지 않는다면 전역 변수를 참조해야한다.
				//하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 
				// ReferenceError가 발생한다.
				console.log(bow); //ReferenceError
				let bow = 2;//지역변수
			}
/**
 * 
 * 
 * 
 * 	2.2 this 바인딩
 * 		전역 환경 레코드의 [[GlobalThisValue]] 내부 슬롯에 this가 바인딩된다. (일반적으로 전역 코드에서 this는 전역 객체를 가리키므로 전역 환경 레코드의 [[GlobalThisValue]]) 내부 슬롯에는
 * 		전역 객체가 바인딩된다. 
 * 		* 참고로 전역 환경 레코드를 구성하는 객체 환경 레코드와 선언적 환경 레코드에는 this 바인딩이 없다. this 바인딩은 전역 환경 레코드와 함수 환경 레코드에만 존재한다. 
 * 
 * 
 * 	
 * 	2.3 외부 렉시컬 환경에 대한 참조 결정
 * 		외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)는 현재 평가 중인 소스코드를 포함하는 외부 소스코드의 렉시컬 환경, 즉 상위 스코프를 가리킨다. 
 */






//전역 코드 실행
/**
 * 	1. 식별자 결정 ( 변수 할당문 또는 함수 호출문 실행을 위해 변수 또는 함수 이름이 선언된 식별자인지 확인한다. __ (선언되지 않은 식별자는 참조할 수 없으므로 할당이나 호출도 할 수 없다.) 
 * 		   또한 식별자는 스코프가 다르면 같은 이름을 가질 수 있다. 즉, 동일한 이름의 식별자가 다른 스코프에 여러 개 존재할 수 있다. )
 * 
 * 		
 * 		식별자 결정을 위해 식별자를 검색할 때는 실행 중인 실행 컨텍스트에서 식별자를 검색하기 시작한다. (선언된 식별자는 실행 컨텍스트의 렉시컬 환경의 환경 레코드에 등록되어 있다.)
 * 		검색을 진행하면서 실행 중인 실행 컨텍스트의 렉시컬 환경에서 식별자를 검색할 수 없으면 외부 렉시컬 화녁ㅇ에 대한 참조가 가리키는 환경, 즉 상위 스코프로 이동하여 식별자를 검색한다. 
 * 
 * 		> 이것이 스코프 체인의 동작 원리이다. ( 하지만 전역 렉시컬 환경은 스코프 체인의 종점이므로 전역 렉시컬 환경에서 검색할 수 없는 식별자는 참조 에러(ReferenceError)를 발생시킨다. )
 * 
 * 	2. 함수 호출(직전)
 * 		
 * 		위의 단계를 거치면서 실행된다. {
 * 						1. 함수 실행 컨텍스트 생성 
* 								:>  함수 실행 컨텍스트를 생성한다. 
* 								 >  생성된 함수 실행 컨텍스트를 함수 렉시컬 환경이 만들어지고 실행 컨텍스트 스택에 푸시
								 >  해당 함수 실행 컨텍스트는 실행 컨택스트 스택의 최상위(실행 중인 실행 컨텍스트가 된다.)
 * 										
 * 						2. 함수 렉시컬 환경 생성
 * 								:>  함수 렉시컬 환경을 생성하고 함수 싥행 컨텍스트에 바인딩한다. ( 렉시컬 환경은 환경 레코드와 외부 렉시컬 환경에 대한 참조로 구성된다. )
 * 							2.1. 함수 환경 레코드 생성
 * 								:>  함수 환경 레코드는 매개변수, arguments 객체, 함수 내부에서 선언한 지역 변수와 중첩 함수를 등록하고 관리한다. 
 * 							2.2. this 바인딩
 * 								:>  함수 환경 레코드의 [[ThiValue]] 내부 슬롯에 this가 바인딩된다. (일반 함수로 호출되면 this는 전역 객체/ 생성자나 객체로 호출되면 this는 해당 함수나 객체를 지칭한다.)
 * 								:>  [[ThisValue]] 내부 슬롯에는 전역 객체가 바인딩된다. -- 함수 내부의 this를 참조하면 함수 환경 레코드의 [[ThisValue]] 내부 슬롯에 바인딩된 객체가 반환된다.
 * 							2.3. 외부 렉시컬 환경에 대한 참조 결정
 * 								:>  외부 렉시컬 환경에 대한 참조에 해당 함수 정의가 평가된 시점에 실행 중인 컨텍스트의 렉시컬 환경의 참조가 할당된다. (전역 함수의 경우 전역 코드 평가 시점에 평가되며, 해당 시점의 실행 중인 실행 컨텍스트는 전역 실행 컨텍스트이다. 
 * 																				따라서 외부 렉시컬 환경에 대한 참조에는 전역 렉시컬 환경의 참조가 할당된다. )
 * 					}
 * 		
 * 
 * 	[ 
 * 		JS는 함수를 어디서 호출했는지가 아니라 어디서 정의했는지에 따라 상위 스코프를 결정한다. > 함수 객체는 자신이 정의된 스코프, 즉 상위 스코프를 기억한다.
 * 		
 * 		JS엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 현재 실행 중인 실행 컨텍스트의 렉시컬 환경, 즉 함수의 상위 스코프를 함수 객체의 내부 슬롯 [[Environment]]에 저장한다. 
 * 		외부 렉시컬 환경에 대한 참조에 할당되는 것은 바로 함수의 상위 스코프를 가리키는 함수 객체의 내부 슬롯 [[Environment]]에 저장된 렉시컬 환경의 참조이다. 
 * 		즉, 함수 객체의 내부 슬롯 [[Environment]]가 렉시컬 스코프를 구현하는 메커니즘이다. 
 * 	]
 * 
 * 
 * 
 * 	3. 함수 코드 실행
 * 		식별자 결정을 위해 실행 중인 실행 컨텍스트의 렉시컬 환경에서 식별자를 검색하기 시작한다. 만약 실행 중인 컨텍스트의 렉시컬 환경에서 식별자를 검색할 수 없으면
 * 		외부 렉시컬 환경에 대한 참조가 가리키는 렉시컬 환경으로 이동하여 식별자를 검색한다. 
 * 
 * 
 * 		3-1. 내부 함수가 있다면(중첩)
 * 			내부 함수로 코드의 제어권이 이동한다. 그리고 해당 함수 코드를 평가하기 시작한다. 이후 과정은 위의 함수의 '실행 컨텍스트와 렉시컬 환경 생성 과정'과 동일하다. 
 * 		3-2. 내부 함수 코드 실행
 * 			런타임이 실행되며 내부 함수의 소스코드가 순차적으로 실행된다. 
 * 			
 * 
 * 			3-2-1. window 객체 함수의 식별자 검색(console)
 * 				> 'console'식별자르라 스코프 체인에서 검색한다. 스코프 체인은 현재 실행 중 ~ 외부 렉시컬 환경(정 없으면 전역 렉시컬 환경)에 대한 참조로 이어진다. 
 * 				> 전역 렉시컬 환경은 객체 환경 레코드와 선언적 환경 레코드로 구성되어 있다. > 'console'식별자는 객체 환경 레코드의 BindingObject를 통해 전역 객체에서 찾을 수 있다.
 * 			3-2-2. log 메소드 검색
 * 				> console 식별자에 바인딩된 객체, 즉 console 객체에서 log 메소드를 검색한다. 
 * 				> 이때 객체의 프로토타입 체인을 통해 메소드를 검색한다. 
 * 			3-3-3. 이외 표현식의 평가
 * 				> 표현식을 평가하기 위해 식별자를 검색한다. 식별잔븐 스코프 체인, 즉 실행 중인 실행 컨텍스트의 렉시컬 환겨엥서 바깥으로 연속 검색을 통해 참조한다. 
 * 			3-3-4. 메소드 호출
 * 		
 * 
 * 		3-3.  내부 함수 코드 실행 종료
 * 			실행 컨텍스트 스택에서 해당 내부 함수 실행 컨텍스트가 pop()되어 제거되고 외부 함수 실행 컨텍스트가 스택의 최상단에 위치한다. 
 * 			여기서 pop된 실행 컨텍스트가 바로 제거되는 것이 아니다. 모든 값은 참조되지 않을 때 가비지 컬렉터에 의해 메모리 공간에서 해제되어 소멸한다. 
 * 
 * 		3-4.  외부 함수 코드 실행 종료
 * 			pop되어 제거되고  전역 실행 컨텍스트가 실행 중인 컨텍스트가 된다. 
 * 	4. 전역 실행 코드 종료
 */	













