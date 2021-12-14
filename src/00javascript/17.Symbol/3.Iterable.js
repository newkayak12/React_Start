//이터러블을 생성하는 함수
/**
 * 앞에서 살펴본 fibonacci 이터러블은 내부에 수열의 최대값을 가지고 있다. 이 수열의 최대값은 고정된 값으로 외부에서 전달한 값으로 변경할 방법이 없다는 아쉬움이 있다.
 * 수열의 최대값을 외부에서 전달할 수 있도록 수정해보자
 */
//피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
//수열의 최대값을 인수로 전달받는다.
let fibonacciFunc = function(max){
	let[pre,cur] = [0,1]

	//Symbol.iterator메소드를 구현한 이터러블을 반환
	return{
		[Symbol.iterator](){
			return {
				next(){
					[pre, cur] = [cur, pre+cur];
					return {value:cur, done: cur>=max};
				}
			}
		}
	}
}

//이터러블을 반환하는 함수에 수열의 최대값을 인수로 전달하면서 호출한다.
//fibonacciFunc(10)은 이터러블을 반환하다.
for(const num of fibonacciFunc(15)){
	console.log(num) // 1, 2, 3, 5, 8, 13
}


//이터러블이면서 이터레이터인 객체를 생성하는 함수
/*
	앞서 살펴본 fibonacciFunc은 이터러블을 반환한다. 만약 이터레이터를 생헝하려면 이터러블의 Symbol.iterator를 호출해야한다. 
*/

//fibonacciFunc은 이터러블을 반환한다.
let iterable = fibonacciFunc(5);
//이터러블의 Symbol.iterator 메소드는 이터레이터를 반환한다.
let iterator = iterable[Symbol.iterator]();
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: 5, done: true }
console.log(iterator.next()) // { value: 8, done: true }

/*
	이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator메소드를 호출하지 않아도 된다. 다음 객체는 Symbol.iterator메소드와 next메소드를 소유한 이터러블이면서 이터레이터이다.ㅣ
	Symbol.iterator 메소드는 this를 반환하므로 next 메소드를 갖는 이터레이터를 반환한다.
 */


//이터러블이면서 이터레이터인 객체
//이터레이터를 반환하는 Symbol.iterator 메소드와 이터레이션 리절트 객체를 반환하는 next메소드를 소유한다.
// {
// 	[Symbol.iterator](){return this;},
// 	next(){
// 		return{value:any, done:boolean}
// 	}
// }

//앞에서 본 fibonacciFunc함수를 이터러블이면서 이터레이터인 객체를 생성하여 반환하는 함수로 변경해보자

//이터러블이면서 이터레이터인 객체를 반환하는 함수
let fibonacciFuncs = function(max){
	let[pre, cur]= [0,1]
	//Symbol.liteator 메소드와 next 메소드를 소유한 이터러블이면서 이터레이터인 객체를 반환
	return{
		[Symbol.iterator](){return this},
		//next 메소드는 이터레이터 리절트 객체르 반환
		next(){
			[pre, cur] = [cur, pre+cur];
			return {value:cur, done:cur>=max}
		}
	}
}
//iter은 이터러블이면서 이터레이터이다.
let iter = fibonacciFuncs(10);
//iter은 이터러블이므로 for...of문으로 순회할 수 있다.
for(const num of iter){
	console.log(num)
}

//iter는 이터러블이면서 이터레이터이다.
iter = fibonacciFuncs(10);

//iter는 이터레이터이므로 이터레이션 리절트 객체를 반환하는 next 메소드를 소유한다.
console.log(iter.next()) // { value: 1, done: false }
console.log(iter.next()) // { value: 2, done: false }
console.log(iter.next()) // { value: 3, done: false }
console.log(iter.next()) // { value: 5, done: false }
console.log(iter.next()) // { value: 8, done: false }
console.log(iter.next()) // { value: 13, done: true }
console.log(iter.next()) // { value: 21, done: true }








