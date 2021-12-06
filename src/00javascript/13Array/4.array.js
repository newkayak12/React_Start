//Array

// >> Array.prototype.some
/**
 * some 메소드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다.
 * 이때 some 메소드는 콜백 함수의 반환값이 단 한 번이라도 참이면 true, 모두 거짓이면 false를 반환한다.
 * 즉, 배열의 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 하나라도 있으면 그 결과를 Boolean으로 반환한다.
 * 단, some메소드를 호출한 배열이 빈 배열이라면 false를 반환한다.
 * 
 * forEach, map, filter 메소드와 마찬가지로 some메소드의 콜백함수는 some 메소드를 호출한 요소값과 인덱스, 
 * some을 호출한 배열 자체 (this)를 순차적으로 전달 받을 수 있다. 
 */

[5,10,15].some(item=>item>10);
['apple','banana','mango'].some(item => item ==='banana');
[].some(item => item>3);

/**
 * forEach, map, filter메소드와 마찬가지로 some 메소드의 두 번째 인수로 some메소드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
 * 더 나은 방법은 화살표 함수를 사용하는 것이다. 
 */



//  >> Array.prototype.every
/**
 *   every 메소드 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출한다.
 * 이 때 every 메소드는 콜백 함수의 반환ㄱ밧이 모두 참이면 true, 단 한 번이라도 거짓이면 false를 반환한다.
 * 즉, 배열의 모든 요소가 콜백 함수를 통해 정의한 조건을 모두 만족하는지 확인하여 그 결과를 불리언 타입으로 반환한다.
 * every 메소드를 호ㅜㄹ한 배열이 빈 배열인 경우 언제나 true를 반환한다.
 * 
 * forEach, map, filter 메소드와 마찬가지 every 메소드 콜백 함수는 every 메소드를 호출한 요소 값과 인덱스, every 메소드를 호출한 배열 자체(this)를 받을 수 있다.
 */

[5,10,15].every(item => item >3);//true
[5,10,15].every(item => item>10); //false
[].every(item => item>3);//true




// >> Array.prototype.find
/**
 * ES6에서 도입된 find 메소드는 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환한다.
 * 콜백 함수의 반환값이 true인 요소가 존재하지 않는다면 undefined를 반환한다.
 * forEach, map, filter 메소드와 마찬가지로 find메소드의 콜백 함수는 find 메소드를 호출한 요소값과 인덱스, find 메소드를 호출한 배열 자체, 즉 this를 순차적으로 전달받을 수 있다.
 * 
 * forEach, map, filter 메소드와 마찬가지로 find메소드를 호출한 요소값과 인덱스, find메소드를 호출한 배열 자체, 즉(this)를 순차적으로 전달 받을 수 있다.
 */

const users = [
	{
		id:1,
		name:'Lee'
	},
	{
		id:2,
		name:'Kim'
	},
	{
		id:3,
		name:'Choi'
	},
	{
		id:4,
		name:'Park'
	},
	
]
console.log(users.find(user => user.id === 2));


// >> Array.prototype.findIndex
/**
 * ES6에서 도입된 findIndex 메소드는 자신을 호출한 배열의 요소를 순회하면서 전달된 콜백함수를 호출하여 반환값이 true인 첫 번째 요소 인덱스를 반환한다.
 * 콜백 함수의 반환 값이 true인 요소가 존재하지 않는다면 -1을 반환한다.
 * 
 * forEach, map, filter메소드와 마찬가지로 findIndex메소드의 콜백 함수는 findIndex 메소드를 호출한 요소 값과 인덱스, findIndex 메소드를 호출한 배열 자체 즉, this를 순차적으로 전달 받을 수 있다.
 * 
 */
console.log(users.findIndex(user=>user.id === 3));


//위와 같이 키와 프로퍼티 값으로 요소의 인덱스를 구하는 경우 콜백 함수를 추상화할 수 있다.
function predicate(key, value){
	//key와 value를 기억하는 클로저를 반환
	return item => item[key] === value;
}

console.log(users.findIndex(predicate('id',2))); //1
console.log(users.findIndex(predicate('name','Park'))); //1

//forEach, map, filter 메소드와 마찬가지로 findIndex 메소드 두 번째 인수로 findIndex 메소드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.
//더 나은 방법은 화살표 함수를 사용하는 것이다.



// >> Array.prototype.flatMap
/**
 * ES10에서 도입된 flatMap 메소드는 map 메소드를 통해 생성된 새로운 배열을 평탄화한다.
 * 즉, map메소드와 flat메소드를 순차적으로 실행하는 효과가 있다.
 */

const flatMapTest = ['hello', 'javascript'];

//map과 flat을 순차적으로 실행
console.log(flatMapTest.map(x => x.split('')).flat())

console.log(flatMapTest.flatMap(x => x.split('')));
/*
[ 'h', 'e', 'l', 'l', 'o', 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't' ]
*/


// 단, flatMap은 flat처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없고 1단계만 평단화한다.
// map메소드를 통해 생성된 중첩 배열의 평탄화 깊이를 지정해야하면 flatMap말고 flat과 map을 각각 호출한다.

console.log(flatMapTest.flatMap((str,index) => [index, [str, str.length]])); //[ 0, [ 'hello', 5 ], 1, [ 'javascript', 10 ] ]
console.log(flatMapTest.map((str,index)=>[index, [str,str.length]]).flat(2)); //[ 0, 'hello', 5, 1, 'javascript', 10 ]

