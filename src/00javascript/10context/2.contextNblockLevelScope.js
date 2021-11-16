// 실행 컨텍스트와 블록 레벨 스코프
/**
 * 
 * var 키워드로 선언한 변수는 오로지 함수 코드 블록만 지역 스코프로 인정하는 함수 레벨 스코프를 따른다. 
 * const, let은 모든 코드 블록(함수, if, for, while, try/catch)등 지역 스코프로 인정하는 블록 레빌 스코프를 따른다. 
 */

let x = 1;
if(true){
	let x = 10;
	console.log(x); //10
}
console.log(x);//1
