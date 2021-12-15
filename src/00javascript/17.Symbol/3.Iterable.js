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










// 무한 이터러블과 지연 평가
let infiniteFunc = function(){
	let [pre, cur] = [0,1]
	return {
		[Symbol.iterator]() {return this;},
		next(){
			[pre,cur] = [cur,pre+cur];
			//무한을 구현해야하므로 done 프로퍼티를 생략한다.
			return { value: cur}
		}
	}
}

//무한 이터러블 생성
for(const num of infiniteFunc()){
	if(num>1000) break;
	console.log(num)
}

//배열 디스트럭처링 할당으로 무한 이터러블에서 3개의 요소마 ㄴ취득
let [f1,f2,f3] = infiniteFunc();
console.log(f1,f2,f3)
/**
 * 이터러블은 데이터 공급하지의 역하을 한다. 배열이나 문등은 모든 데이터를 메모리에 미리 확보한 다음 데이터를 공급한다.
 * 하지만 위 예제의 이터러블은 지연 평가를 통해 데이터를 생성한다. 지연 평가는 데이터가 필요한 시점 이전까지는 미리 데이터를 생성하지 않다가 데이터가 필요한 시점이 되면 그때서야 비로소 데이터를 생헝하는 기법이다. 
 * 즉, 평가가 필요할 떄까지 평가를 늦추는 기법이 지연평가이다. 
 * 
 * 위의 예제는 무한 이터러블을 생성한다. 하지만 이 무한 이터러블은 데이터를 공급하는 메커니즘을 구현한 것으로 데이터 소비자인 for ...of문이나 배열 디스트럭처링
 * 할당 등이 실행되기 이전까지 데이터를 생성하지 않는다. for...of문의 경우 이터러블을 순회할 때 내부에서 이터레이터의 next메소드를 호출하는데 
 * 바로 이떄 데이터가 생성된다. next 메소드가 호출되기 이전까지는 데이터를 생성하지 않는다. 즉, 데이터가 필요한 때까지 데이터의 생성을 지연하다가 
 * 데이터가 필요한 순간 데이터를 생성한다.
 * 
 * 이처럼 지연 평가를 사용하면 불필요한 데이터를 미리 생성하지 않고 필요한 데이터를 필요한 순간에 생성하므로 빠른 실행 속도를 기대할 수 있고
 * 불필요한 메모리를 소비하지 않으며 무한도 표현할 수 있다는 장점이 있다. 
 */