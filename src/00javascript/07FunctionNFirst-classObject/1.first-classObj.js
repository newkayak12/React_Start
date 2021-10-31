/*

다음과 같은 조건을 만족하는 객체를 일급 객체라고 한다. 



1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다. 


JS는 아래의 예제와 같이 모든 조건을 만족하므로 일급 객체이다.

*/

//1. 함수는 무명의 리터럴로 생성할 수 있다. 
//2. 함수는 변수에 저장할 수 있다. 
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function(num){
	return ++num;
};

const decrease = function(num){
	return --num;
};

//2. 함수는 객체에 저장할 수 있다.
const predicates = {increase, decrease};

//3. 함수는 매개변수에게 함수를 전달할 수 있다.
//4. 함수의 반환값으로 사용할 수 있다. 
function makeCounter(predicate){
	let num = 0;

	return function(){
		num = predicate(num);
		return num;
	}
}

//3.함수는 매개변수에게 함수를 전달할 수 있다. 
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

//3. 함수는 매개변수에게 함수를 전달할 수 있다. 
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

//함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다. 객체는 값이므로 함수는 ㄱ밧과 동일하게 취급할 수 있다. 따라서 
//함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디든지 리터럴로 정의할 수 있으며, 런타임(runtime)에 함수 객체로 평가된다.
// 일급객체로서 함수가 가지는 가장 큰 특징은 일반 개겣와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수도 있다는 것이다. 이는 함수형 프로그래밍을 가능케하는 자바스크립트의 장점 중 하나이다.
//추가적으로 함수 객체는 일반객체에는 없는 함수 고유 프로퍼티를 소유한다. 
