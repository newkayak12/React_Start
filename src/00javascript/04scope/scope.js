/*

>>>> 변수는 자신이 선언된 위치에 의해 자신이 유효한 범위, 즉 다른 코드가 변수 자신을 참조할 수 있는 범위가 결정된다.
이는 변수뿐만 아니라 모든 식별자가 그렇다. 다시 말해, 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신ㅁ이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
이를 스코프라고 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다. 

	자바스크립트의 스코프는 다른 언어의 스코프와 구별되는 특징이 있다.
	var, let, const키워드로 선언한 변수의 스코프도 다르게 동작한다.

	ex1) 함수의 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다. 이는 매개변수를 참조할 수 있는 유효범위, 즉 매개변수의 스코프가 함수 몸체 내부로 한정되기 떄문이다.

*/


function add (x,y){
	console.log(x,y);
	return x+y;
}

console.log(add(2,5));

// console.log(x,y); // ReferenceError: x is not defined 


/*

	ex2) 변수는 코드의 가장 바깥 영역뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언할 수 있다. 이떄 코드 블록이나 함수는 중첩될 수 있다.
*/

	var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수
	if(true){
		var var2 = 2; // 코드 블록 내에서 선언한 변수
		if(true){
			var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
		}
	}

	function foo(){
		var var4 = 4; //함수 내에서 선언한 변수
		function  bar(){
			var var5 = 5; //중첩된 함수 내에서 선언환 변수 
		}
	}


	console.log(var1); // 1
	console.log(var2); // 2
	console.log(var3); // 3
	// console.log(var4); // ReferenceError : var4 is not defined
	// console.log(var5); // ReferenceError : var5 is not defined



	//스코프 동작 예상하기 

	var x = 'global';

	function fooo(){
		var x= 'local';
		console.log(x);
	}
	fooo();
	console.log(x);
//  자바스크립트 엔진은 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정해야한다. 이를 식별자 결정이라고 한다. 
// 여기서 스코프는 자바스크립트 엔진이 식별자를 검색할 떄 사용하는 규칙이라고도 할 수 있다. 자바스크립트 엔진은 코드를 실행할 때 코드의 문맥(context)를 고려한다. 
// 스코프는 마치 파일의 디렉토리와 같다. 즉, 스코프는 네임스페이스이다. 

/*
 "코드가 어디서 실행되며, 어떤 코드가 있는지"를 렉시컬 환경(Lexical Environment)이라고 부른다. 즉, 코드의 문맥(context)은 렉시컬 환경으로 이뤄진다.
 이를 구현한 것이 "실행 컨텍스트(Execution context)"이며, 모든 코드는 실행 컨텍스트에서 평가되고 실행된다. 스코프는 실행 컨텍스트와 깊은 관련이 있다. 


 lexical | ˈleksək(ə)l | adjective
	relating to the words or vocabulary of a language: lexical analysis.
	• relating to or of the nature of a lexicon or dictionary: a lexical entry.






	!!!!!!!!!!! 단 var로 선언한 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수의 값이 재할당되어 변경되는 부작용을 발생시킨다. 
*/

function scope1(){
	var x = 1;
	//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다. 
	// 아래 변수 선언문은 자바스크립트 엔진에 의해서 var 키워드가 없는 것처럼 동작한다.
	var x = 2;
	console.log(x);
}

scope1();


function scope2(){
	let x = 1;
	// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 ㅇ낳는다.
	// let x = 2;  // SyntaxError : Identifier 'x' has already been declared
}
scope2();


// 스코프의 종류 
/*
	구분		설명		스코프		변수
	전역	코드의 가장 바깥 영역 	    전역 스코프	    전역 변수	
	지역	함수 몸체 내부            지역 스코프	  지역 변수
*/


// 전역스코프
var x1 = 'globalX';
var y1 = 'globalY';

	function outer(){ //지역스코프
		var z1 = "outer's local Z";
		console.log("\n outer")
		console.log(x1);
		console.log(y1);
		console.log(z1);

		function inner(){ //지역 스코프
			var x1 = "inner's local X"
			console.log("\n inner")
			console.log(x1);
			console.log(y1);
			console.log(z1);
		}
		
		inner();
	}
	
	outer();

	console.log("\n global")
	console.log(x1);
	console.log(y1);
	// console.log(z1); // Reference : z1 is not defined

	/*
		지역이란 함수 몸체 내부를 말한다. 지역은 지역 스코프를 만든다. 지역에 변수를 선언하면 지역 스코프를 갖는 지역변수가 된다. 지역변수는 자신이 선언된 지역과 하위 지역(중첩함수)에서만 참조할 수 있다.
		다시 말해, 지역변수는 자신의 지역스코프와 하위지역 스코프에서 유효하다. 
	*/


	// 스코프 체인
	// >> 함수는 전역에서 정의할 수도 있고 함수 몸체 내부에서도 정의할 수 있다. 이를 중첩함수라고 한다.
	// 마찬가지로 지역 스코프도 중첩될 수 있다. 스코프가 함수의 중첩에 의해 계층적인 구조를 갖는다는 것을 의미힌다. 
	// 다시 말해 중첩 함수의 지역 스코프는 중첩 함수를 포함하는 외부 함수의 지역 스코프와 계층적 구조를 갖는다. 이떄 외부 함수의 지역 스코프를 중첩 함수의 상위 스코프라고 한다. 
	// 결과적으로 모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역의 스코프의 최상위 스코프는 전역스코프이다. 이렇게 스코프가 계층적으로 연결된 것을 스코프 체인(SCOPE CHAIN이라고 한다. )
	/*
		최상위 스코프를 전역 스코프, 함수의 지역 스코프, 함수 내부에서 선언된 함수의 지역스코프 등으로 나뉜다.
		변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 사우이 스코프 방향으로 이동하며, 선언된 변수를 검색핸다. 
		
		
		>> 자기 자신에서 그 위 계층으로 이동하기 때문에 상위 계층에서 하위로 참조가 안되는 식 >> 스코프 체인은 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결한 것이다. 
		== 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유효한 변수를 상위 스코프에서 차조할 수 없다. 
	*/

	// 13-06 
	//전역 함수
console.log("\ntest\n")
	function gfunction(){
		console.log('global function');
	}

	function nfunction(){
		//중첩 함수 
		function gfunction(){
			console.log('local function');
		}
		gfunction();
	}

	nfunction(); // > 내부의 함수 실행하는게 당연


	/*
		JS는 다른 언어가 if, for, while, try/catch 등이 함수들과 같이 지역 스코프를 만드는 블록 레벨 스코프인 반면 var로 선언된 변수는 오로지 함수 코드 블록만을 지역 스코프로 인정한다는 특징을 가지고 있다. 
		이를 함수 레벨 스코프라고 ㅎㄴ다. 
	*/

	var xi = 1;
	if(true){
		/*
			var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
			함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다고 할지라도 모두 전역 변수이다.
			따라서 X는 전역 변수이다. 이미 선언된 전역 변수 X가 있으므로 변수 X는 중복 선언된다.
			이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
		*/
			var xi = 2; 
	}
	console.log(`var은 함수 코드 블록만을 지역 스코프로 인정한다. 이에 따라서 변수 xi(${xi})는 1이 아닌 2가 출력된다.`)


	var i = 10;
	for( var i = 0; i<5; i++){
		console.log(i)
	}
	console.log(`의도치 않게 변수의 값이 변경되었다. 원래 10이었던 i가 ${i}가 되었다.`)
	console.log(`JS는 블록 레벨 스코프를 인정하지 않으며(if,while,for,try/catch) 오로지 지역변수로 인정하는 것은 함수 레벨 스코프이다. `)