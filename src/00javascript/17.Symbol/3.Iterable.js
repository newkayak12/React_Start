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

//배열 디스트럭처링 할당으로 무한 이터러블에서 3개의 요소만 취득
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



// >>>>>>>> 스프레드 문법 
/**
 * 
 * ES6에서 도입된 스프레드 문법 ... 은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐 개별적인 값들의 목록으로 만든다. 
 * 스프레드 문법을 사용할 수 있는 대상은 Array, String, map, Set, DOM 컬렉션(NodeList HTMLCollection), arguments와 같이 for...of 문으로 순회할 수 있는 이터러블에 한정된다.
 */

//...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다. 
 		console.log(...[1,2,3]); //1 2 3 
		
//문자열은 이터러블이다.
		console.log(... 'Hello');

//Map과 Set은 이터러블이다. 
		console.log(... new Map([['a', '1'], ['b', '2']])); //['a', '1'] ['b', '2']
		console.log(... new Set([1,2,3])); //1 2 3 

//이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다. 
		// console.log(...{a:1, b:2}) //TypeError: Found non-callable @@iterator

/**
 *  ...[1,2,3]은 이터러블인 배열을 펼쳐서 요소들을 개별적인 값들의 목록 1 2 3으로 만든다. 
 * 이때 1 2 3 은 값이 아니라 값들의 목록이다. 즉, 스프레드 문법의 결과는 값이 아니다. 이는 스프레드 문법 ...이 피연산자를 연산하여 값을 생성하는 연산자가 아님을 의미한다.
 * 따라서 스프레드 문법의 결과는 변수에 할당할 수 없다. 
 */


//스프레드 문법의 결과는 값이 아니다.
// const list = ...[1,2,3] // SyntaxError : Unexpected token ...
/**
 * 이처럼 스프레드 문법의 결과물은 값으로 사용할 수 없고, 다음과 같이 쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다.
 * 
 * 
 * 
 * 1. 함수 호출문의 인수 목록
 * 2. 배열 리터럴의 요소 목록
 * 3. 객체 리터럴의 프로퍼티 목록
 */
  

//1. 함수 호출문의 인수 목록에서 사용하는 경우 
			/**
			 *  요소들의 집합인 배열을 펼쳐서 개별적인 값들의 목록으로 만든 후, 이를 함수의 인수 목록으로 전달해야하는 경우가 있다.
			 */ 

			let arr = [1,2,3];

			//배열 arr요소 중에서 최대 값을 구하기 위해 Math.max를 사용한다.
			let max = Math.max(arr);
			// Math.max메소드는 매개변수 개수를 확장할 수 없는 가변 인자 함수이다. 다음과 같이 개수가 정해져 있지 않은 여러 개의 숫자를 인수로 전달받아 인수 중에서 최대값을 반환한다.
			Math.max(1)
			Math.max(1, 2)
			Math.max(1, 2, 3)
			Math.max() //Infinity

			//만약 Math.max메소드에 숫자가 아닌 배열을 인수로 전달하면 최대값을 구할 수 없으므로 NaN을 반환한다.
			Math.max([1,2,3])

			//이와 같은 문제를 해결하기 위해서 배열을 펼쳐서 요소들을 개별적인 값들의 목록으로 만든 후 Math.max메소드의 인수로 전달해야 한다. 
			//즉, [1,2,3]을 1,2,3으로 펼쳐서 Math.max 메소드의 인수로 전달해야한다. 
			//스프레드 문법이 제공되기 이정에느 ㄴ배열을 펼쳐서 요소들의 목록을 함수의 인수로 전달하고 싶은 경우 Function.prototype.apply를 사용했다. 

			arr = [1,2,3];
			//apply 함수의 2번쨰 인수는 apply 함수가 호출하는 함수의 인수 목록이다.
			//따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.
			max = Math.max.apply(null, arr);
			//스프레드 문법을 사용하면 더 간결하고 가독성이 좋다. 
			max = Math.max(...arr);


			/**
			 * 여기서 스프레드 문법은 Rest파라미터와 혼동할 수 있다.
			 * Rest파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 ...를 붙이는 것이다. 
			 * 스프레드 문법은 여러 개의 값이 하나로 뭉쳐있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것이다. 
			 * 
			 * 따라서 Rest 파라미터와 스프레드 문법은 서로 반대 개념이다. 
			 */

			function foo(...rest){
				console.log(rest)
			}
			foo(...[1,2,3,4,5,6]); //[ 1, 2, 3, 4, 5, 6 ]




//2 배열 리터럴 내부에서 사용하는 경우
			/**
			 * 스프레드 문법을 배열 리터럴에서 사용하면 ES5에서 사용하던 기존의 방식보다 더욱 간결하고 가독성 좋게 표현할 수 있다. 
			 */

				// > concat
				//ES5에서 2개의 배열을 1개의 배열로 결합하고 싶은 경우 배열 리터럴만으로 해결할 수 없고 concat 메소드를 사용해야한다.
				
				//ES5
				arr = [1,2].concat([3,4])
				console.log(arr); //[1, 2, 3, 4]

				//스프레드 문법을 사용하면 별도 메소드를 사용하지 않고 배열 리터럴만으로 2개의 배열을 1개의 배열로 결합할 수 있다.
				//ES6
				arr = [...[1,2], ...[3,4]]
				console.log(arr)


				// > splice
				//어떤 중간에 다른 배열의 요소들을 추가하거나 제거하려면 splice 메소드를 사용한다.
				// 이때 splice 메소드의 세 번쨰 인수로 배열을 전달하면 배열 자체가 추가된다. 
				//ES5
				var arr1 = [1,4];
				var arr2 = [2,3];

				//세 번째 인수 arr2를 해체하여 전달해야한다.
				// 그렇지 않으면 arr1, arr2 배열 자체가 추가된다.
				arr1.splice(1,0,arr2)
				// 기대한 결과는 [1,[2,3],4]가 아니라 [1,2,3,4]이다.
				console.log(arr1) //[ 1, [ 2, 3 ], 4 ]

				/**
				 * 위 예제의 경우 splice메소드의 세번째 인수 [2,3]을 2,3으로 해체하여 전달해야한다.
				 * 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다. 따라서 이러한 경우 Function.prototype.apply메소드를 사용해서
				 * splice를 호출해야하낟. apply 메소드의 두 번째 인수는 apply메소드가 호출하는 함수에 해체되어 전달된다.
				 */
				
				arr1 = [1,4]
				arr2 = [2,3]
				/**
				 * apply 메소드의 2번째 인수는 apply메소드가 호출한 aplice메소드의 인수 목록이다. 
				 * apply 메소드의 2번째 인수 [1,0].concat(arr2)는 [1,0,2,3]으로 평가된다.
				 * 따라서 splice 메소드에 apply메소드의 2번째 인수 [1,0,2,3]이 해체되어 전달된다. 
				 * 즉, arr1[1]부터 0개의 요소를 제거하고 그 자리(arr1[1])에 새로운 요소 (2,3)를 삽입한다. 
				 */
				Array.prototype.splice.apply(arr1, [1, 0 ].concat(arr2));
				console.log(arr1); // [1,2,3,4]

				// 스프레드 문법을 사용하면 다음과 같이 더욱 간결하고 가독성 좋게 표현할 수 있다. 

				// > 배열 복사 
				//배열을 복사하려면 ES5에서 slice를 사용한다. 
				//ES5
				var origin = [1,2]
				var copy = origin.slice();

				console.log(copy)
				console.log(copy === origin) //false

				//스프레드 문법을 사용하면 다음과 같이 더욱 간결하고 가독성 좋게 표현할 수 있다. 
				//이떄 원본 배열의 각 요소를 얕은 복사 하여 새로운 복사본을 생성한다. 이는 slice메소드도 마찬가지이다.

				// > 이터러블을 배열로 변환
				/**
				 * ES5에서 이터러블을 배열로 변환하려면 Function.prototype.apply또는 Function.prototype.call 메소드를
				 * 사용하여 slice 메소드를 호출해야한다. 
				 */

				function sum() {
					// 이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
					var args = Array.prototype.slice.call(arguments);

					return args.reduce(function (pre, cur){
						return pre + cur;
					}, 0)
				}

				console.log(sum(1,2,3))
				//이 방법은 이터러블뿐만 아니라 이터러블이 아닌 유사 배열 객체도 배열로 변환할 수 있다. 
				//이터러블이 아닌 유사 배열 객체

				let arrayLike = {
					0:1,
					1:2,
					2:3,
					length:3
				}
				arr = Array.prototype.slice.call(arrayLike);
				console.log(Array.isArray(arr));//true

				/**
				 * 스프레드 문법을 사용하면 좀 더 간편하게 이터러블을 배열로 변환할 수 있다. 
				 * arguments객체는 이터러블이면서 유사 배열 객체이다. 따라서 스프레드 문법의 대상이 될 수 있다. 
				 */
				
				function sum(){
					//이터러블이면서 유사 배열 객체인 arguments를 배열로 변환
					return [...arguments].reduce((pre, cur)=> pre+cur, 0);
				}
				console.log(sum(1,2,3));

				// 위 예제보다 나은 방법은 Rest파라미터를 사용하는 것이다

				sum = (...args) => args.reduce((pre,cur)=> pre+cur,0);
				console.log(sum(1,2,3));

				//단 이터러블이 아닌 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다. 
				arrayLike = {
					0:1,
					1:2,
					2:3,
					length:3
				}
				// arr = [...arrayLike]; //TypeError: Object is not iterable
				/**
				 * 이터러블이 아닌 유사 배열 객체를 배열로 변경하려면 ES6에서 도입된 Array.from 메소들르 사용한다.
				 * Array.from 메소드는 유사 배열 객체 또는 이터러블을 인수로 전달받아 배여롤 변환하여 반환한다. 
				 */
				Array.from(arrayLike)



// 3 객체 리터럴 내부에서 사용하는 경우
				/**
				 * Rest 프로퍼티와 함께 제안된 스프레드 프로퍼티를 사용하면 객체 리터럴의 프로퍼티 목록에서도 스프레드 문법을 사용할 수 있다.
				 * 스프레드 문법의 대상은 이터러블이어야 하지만 스프레드 프로퍼티 제안은 일반 객체를 대상으로도 스프레드 문법의 사용을 하용한다. 
				 */
				
				//스프레드 프로퍼티 
				// 객체 복사 (얕은 복사)
				let obj = {x:1, y:2}
				copy = {...obj};
				console.log(copy); // {x:1, Y:2}
				console.log(obj===copy);

				//객체 병합
				let merge = {x:1, y:2, ...{a:3, b:4}}
				console.log(merge);

				// 스프레드 프로퍼티가 제안되기 이전에는 ES6에서 도입된 Object.assign 메솓르르 사용하여 여러 개의 객체를 병합하거나 특정 프로퍼티를 변경 또는 추가했다.

				// 객체 병합. 프로퍼티가 중복되는 경우에 뒤에 위치한 프로퍼티가 우선권을 갖는다.
				merge = Object.assign({}, {x:1, y:2}, {y:10, z:3});
				console.log(merge);

				let change = Object.assign({},{x:1, y:2}, {y:100})
				console.log(change)

				//프로퍼티 추가
				let added = Object.assign({}, {x:1, y:2}, {z:0});
				console.log(added);

				//스프레드 프로퍼티는 Object.assign 메소드를 대체할 수 있는 간편한 문법이다. 


				//객체 병합, 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다. 
				merge = {...{x:1, y:2}, ...{y:10, z:3}};
				console.log(merge)

				// 특정 프로퍼티 변경
				change = { ...{x:1, y:2}, y:100}
				//change = {...{x:1, y:2}, ...{y:100}}
				console.log(change)


				//프로퍼티 추가
				added = {...{x:1, y:2}, z:0};
				//added = {... {x:1, y:2}, ...{z:0}}
				console.log(added)



// >>>>>>>> 디스트럭처링 할당 
				/**
				 * 디스트럭처링 할당 (구조 분해 할당)은 구조화된 배여로가 같은 이터러블 또는 객체를
				 * destructuring(비구조화, 구조 파괴)하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다.
				 * 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다. 
				 */

				//배열 디스트럭처링 할당 
				//ES5
				arr = [1,2,3];

				let one = arr[0];
				let two = arr[1];
				let three = arr[2];
				console.log(one, two, three)

				//ES6배열 디스트럭처링 할당은 배열의 각 요소를 배열로부터 추출하려 1개 이상의 변수에 할당한다.
				// 이때 배열 디스트럭처링 할당의 대상(할당문의 우변)은 이터러블이어야 하며, 할당 기준의 배열의 인덱스이다. (순서대로 할당된다.)

				arr = [1,2,3];
				//ES6 배열 디스트럭처링 할당
				//변수 one, two, three를 선언하고 배열 arr을 디스트럭처링 하여 할당한다.
				//이때 할당 기준은 배열의 인덱스이다.
				[one, two, three] = arr;
				console.log(one, two, three);

				//배열 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 값을 할당받을 변수를 선언해야한다. 이떄 변수를 배열 리터럴 형태로 선언한다. 
				// 이때 우변에 이터러블을 할당하지 않으면 에러가 발생한다. 
				// const [x,y]; //SyntaxError : Missing initializer in destructuring declariation
				// const [a,b] = {} ; //TypeError: {} is not iterable


				/**
				 * 배열 디스트럭처링 할당의 변수 선언문은 다음처럼 선언과 할당을 분리할 수도 있다. 
				 * 단, 이 경우 const 키워드로 변수를 선언할 수 없으므로 권하지 않는다.
				 */

				let x,y;
				[x,y] = [1,2]

				/**
				 * 배열 디스트럭처링 할당의 기준은 배열의 인덱스이다. 즉, 순서대로 할당한다. 
				 * 이때 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다. 
				 */
				
				let [a,b] = [1,2];
				console.log(a,b)

				let [c,d] = [1]
				console.log(c,d) //1, undefined

				let [e,f] = [1,2,3]
				console.log(e,f) //1,2

				let [g,,h] = [1,2,3];
				console.log(g,h); // 1 3

				//배열 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.

				//기본값 
				 [a,b,c = 3] = [1,2];
				 console.log(a,b,c);// 1 2 3

				 //기본값보다 할당된 값이 우선한다.
				 [e,f=10, g=3] = [1, 2]
				 console.log(e,f,g); //1 2 3 

				 /**
				  * 배열 디스트럭처링 할당은 배열과 같은 이터러블에서 필요한 요소만 추출하여 변수에 할당하고 싶을 때 유용하다.
				  * 다음 예제는 URL을 파싱하여 protocol, host, path프로퍼티를 갖는 객체를 생성해 반환한다.
				  */

				 function parseURL(url = ''){
					 // ':/'앞 문자열(protocol)과 '/' 이전의 '/'로 시작하지 않는 문자열(host와) '/' 이후 문자열(path)를 검색한다.
					 const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
					 console.log(parsedURL)
					/*
					[
						'https://developer.mozilla.org/ko/docs/Web/Javascript',
						'https',
						'developer.mozilla.org',
						'ko/docs/Web/Javascript',
						index: 0,
						input: 'https://developer.mozilla.org/ko/docs/Web/Javascript',
						groups: undefined
					]
					*/
					 if(!parsedURL) return {};
					 //배열 디스트럭처링 할당을 통해서 이터러블에서 필요한 요소만 추출한다.
					 const [, protocol, host, path] = parsedURL;
					 return {protocol, host, path}
				 }

				 console.log(parseURL('https://developer.mozilla.org/ko/docs/Web/Javascript'))
				 /**
					{
						protocol: 'https',
						host: 'developer.mozilla.org',
						path: 'ko/docs/Web/Javascript'
					}
				  */


				
				// 객체 디스트럭처링 할당
				//ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야 한다. 

				var user = {firstName: 'Ungmo', lastName: 'lee'};
				var firstName = user.firstName;
				var lastName = user.lastName;

				/**
				 *  ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다.
				 * 이떄 객체 디스트럭처링 할당의 대상(할당문의 우변)은 객체이어야 하며, 할당 기준은 프로퍼티 키다. 즉, 순서는 의미가 없으며, 선언된 변수 이름과 프로퍼티 키가 일치하면 할당한다.
				 */

				let user1 = {firstName : "YJ", lastName : "kim"};
				let {lastName, firstName} = user2;
				console.log(firstName, lastName);


				/**
				 * 배열 디스트럭처링 할당과 마찬가지로 객체 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 프로퍼티 값을 할당 받을 변수를 선언해야한다.
				 * 
				 * 이때 변수를 객체 리터럴 형태로 선언한다.
				 */

				let {lastName, firstName} = {firstName:"yj", lastName:"kim"};

				//이때 우변에 객체 또는 객체로 평가될 수 있는 표현식(문자열 , 숫자, 배열 등)을 할당하지 않으면 에러가 발생한다.

				// let {lastName, firstName};
				// SyntaxError: Missing initializer in destructuring declaration

				// let {lastName, firstName} = null;
				// TypeError : Cannot destructure property 'lastName' of 'null' as it is null
				// 위 예제에서 객체 리터럴 형태로 선언한 변수는 lastName, firstName이다. 이는 프로퍼티 축약 표현을 통해 선언한 것이다.
				

				let { lastName, firstName } = user3;
				let {lastName:lastName, firstName:firstName} = user4;
				//위의 두 개는 동치이다. 
				
