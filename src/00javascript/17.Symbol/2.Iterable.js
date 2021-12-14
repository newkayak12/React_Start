//Iterable
/**
 * ES6에서 도입된 이터레이션 프로토콜은 순회 가능한 데이터 컬렉션을 만들기 휘해 EcmaScript사양에 정의하여 미리 약속한 규칙이다.
 * ES6이전의 순회 가능한 테이터 컬렉션, 즉 배열, 문자열, 유사 배열 객체, DOM 컬렉션 등은 통일된 규약 없이 각자 나름의 구조를 가지고 
 * for문, for...in문, forEach 메소드 등 다양한 방법으로 순회할 수 있었다.
 * 
 * ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문,
 * 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.
 * 
 * 이터레션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있다.
 * 
 *  - 이터러블 프로토콜(iterable protocol)
 * 	Well-known Symbol인 Symbol.iterator를 프로퍼티 키로 사용한 메소드를 직접 구현하거나 프로토타입 체인을 통해 상속 받은 Symbol.iterator메소드를 호출하면 이터레이터 
 * 	프로토콩을 준수한 이터레이터를 반환한다. 이러한 규약을 이터러블 프로토콜이라 하며, 이터러블 프로토콜을 준수한 객체를 이터러블이라고 한다. 이터러블은 for...of문으로 순회할 수 있으며
 * 	스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다. 
 * 
 * - 이터레이터 프로토콜(iterator protocol)
 * 	이터러블의 Symbol.iterator메소드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이터레이터는 next메소드를 소유하며 next메소드를 호출하면 이터러블을 순회하며
 * 	value와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다. 이러한 규약을 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체를 이터레이터라고 한다. 
 * 	이터레이터는 이터르블을 요소를 탐색하기 위한 포인터 역할을 한다. 
 */

/**
 * - 이터러블 : 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 즉, 이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메소드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체를 말한다.
 */

	let isIterable = v => v!== null && typeof v[Symbol.iterator] === 'function'
	isIterable([]);
	isIterable('');
	isIterable(new Map());
	isIterable(new Set());
	isIterable({});
/**
 * 예를 들어, 배열은 Array.protoype의 Symbol.iterator 메소드를 상속받는 이터러블이다. 
 * 이터러블은 for...of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할수 있다. 
 */

	let array = [1,2,3]
	//배열은 Array.prototype의 Symbol.iterator 메소드를 상속받는 이터러블이다.
	console.log(Symbol.iterator in array); //true

	// 이터러블인 배열은 for...of문으로 순회 가능하다. 
	for(const item of array){
		console.log(item) // 1,2,3
	}

	//이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
	console.log([...array]); // [1,2,3]

	// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
	let [a, ...rest] = array 
	console.log(a,rest) //1 [2,3]

/**
 *  Symbol.iterator 메소드를 직접 구현하지 않거나 상속받지 않은 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다. 
 *  따라서 일반 객체는 for..of문으로 순회할 수 없으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 없다. 
 */
	let obj = {a:1, b:2}
/**
 * 일반 객체는 Symbol.iterator메소드를 구현하거나 상속받지 않는다.
 * 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.
 */
	console.log(Symbol.iterator in obj);//false


// 이터러블이 아닌 일반 객체 for...of 문으로 순호할 수 없다.
	// // for(const item of obj){ // TypeError: obj is not iterable
	// 	console.log(item)
	// }

// 이터블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
// let [b,c] = obj; //TypeError: obj is not iterable

//stage4(Finished)단계에 제안되어 있는 스프레드 프로퍼티 제안은 일반 객체에 스프레드 문법의 사용을 허용한다.
obj = {a:1, b:2};
//스프레드 프로퍼티 제안(Stage4)은 객체 리터럴 내부에서 스프레드 문법의 사용을 허용한다.
console.log({...obj});
//하지만 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다. 


// 이터레이터
/**
 * 이터러블의 Symbol.iterator메소드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
 * 이터러블의 Symbol.iterator 메소드가 반환한 이터레이터는 next메소드를 갖는다.
 */

	//배열은 이터러블 프로토콜을 준수한 이터러블이다. 
	 array = [1,2,3];
	
	//Symbol.iterator메소드는 이터레이터를 반환한다.
	let iterator = array[Symbol.iterator]();

	//Symbol.iterator메소드가 반환한 이터레이터는 next메소드를 갖는다.
	console.log('next' in iterator); //true

	//이터레이터의 next메소드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다.
	// 즉, nex메소드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하여 순회 결과를 나타내는 이터레이터 리절드 객체를 반환한다.

	// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
	array = [1,2,3];

	//Symbol.iterator메소드는 이터레이터를 반환한다. 이터레이터는 next메소드를 갖는다.
	iterator = array[Symbol.iterator]();

	//next 메소드를 호출하면 이터러블을 순회하며 순회 결과를 나타내느 ㄴ이터레이터 리절트 객체를 반환한다.
	// 이터레이터 리절트 객체는 value와 done 프로퍼티를 갖는다.
	console.log(iterator.next()) // { value: 1, done: false }
	console.log(iterator.next()) // { value: 2, done: false }
	console.log(iterator.next()) // { value: 3, done: false }
	console.log(iterator.next()) // { value: undefined, done: true }
	
	
	
	//> 빌트인 이터러블
	//자바스크립트 이터레이션 프로토콜을 준수한 객체인 빌트인 이터러블을 제공한다. 
	//	빌트인 이터러블 		Symbol.iterator메소드
	//	Array			Array.prototype[Symbol.iterator]
	//	String			String.prototype[Symbol.iterator]
	// 	Map			Map.prototype[Symbol.iterator]
	//	Set			Set.prototype[Symbol.iterator]
	//	TypedArray		TypedArray.prototype[Symbol.iterator]
	//	arguments		arguments[Symbol.iterator]
	//	DOM			NodeList.prorotype[Symbol.iterator]
	//	컬렉션			  HTMLCollection.prototype[Symbol.iterator]

	//for...of 문
	/**
	 * for...of 문은 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다. for...of문의 문법
	 * 
	 * 	for(변수선언문 of 이터러블) { ... }
	 * 
	 * for ... of 문은 for ... in 문의 형식과 매우 유사하다.
	 * 
	 * 	for(변수 선언문 in 객체 ) { ... }
	 * for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티 순회하며 열거한다. 
	 * 이떄 프로퍼티 키가 심벌인 프로퍼티 열거하지 않는다. 
	 * 
	 * for...of 문은 내부적으로 이터레이터의 next메소드를 호출하여 이터러블을 순회하며 next메소드가 반환한 이터레이터 리절트 객체의 value프로퍼티 값을 for...of 문의 변수에 할당한다.
	 * 그리고 이터레이터 리절트 객체의 done프로퍼티 값이 false이면 이터러블의 순회를 계속하고 true이면 이터러블 순회를 중단한다.
	 */ 

	for(const item of [1,2,3]){
		//item변수에 순차적으로 1,2,3이 할당된다.
		console.log(item)
	}
	//위 예제의 for...of문의 내부 동작을 for문으로 표현하면 아래와 같다.

	//이터러블
	let iteratble = [1,2,3];

	//이터러블의 Symbol.iterator 메소드를 호출하여 이터레이터를 생성한다.
	iterator = iteratble[Symbol.iterator]()

	for(;;){
		//이터레이터의 next메소드를 호출하여 이터러블을 순회한다.
		//이떄 next 메소드는 이터레이터 리절트 객체를 반환한다.
		const res = iterator.next();

		//next 메소드가 반환한 이터레이터 리절트 객체의 done프로퍼티 값이 true이면 이터러블의 순회를 중단한다.
		if(res.done) break;

		//이터레이터 리절트 객체의 value 프로퍼티의  값을 item변수에 할당한다.
		const item = res.value;
		console.log(item) //1,2,3
	}





	//이터러블과 유사 배열 객체
	/**
	 * 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할수 있고 length 프로퍼티를 갖는 객체를 말한다.
	 * 유사 배열 객체는 length픅로퍼티를 갖기 때문에 for문으로 순회할 수 있고, 
	 * 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로 가지므로 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
	 */

	//유사 배열 객체 
	let arrayLike ={
		0:1,
		1:2,
		2:3,
		length:3
	}

	// 유사배열 객체는 length 프로퍼티를 갖기 때문에 for문으로 순회할 수 있다. 
	for(let i = 0; i< arrayLike.length; i++){
		//유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
		console.log(arrayLike[i]);
	}
	/**
	 * 유사 배열객체는 이터러블이 아닌 일반 객체이다. 따라서 유사 배열 객체에는 Symbol.iterator메소드가 없기 때문에 for...of로 순회할 수 없다. 
	 */	
	// for(const item of arrayLike){
	// 	console.log(item)
	// } //TypeError :arrayLike is not iterable


	/**
	 * 단, argumetns, NodeList, HTMLCollection은 유사 배열 객체에면서 이터러블이다. 정확히 말하면 ES6에서 이터러블이 도입되면서 유사 배열 객체인
	 * arguments, NodeList, HTMLCollection 객체에 Symbol.iterator 메소드를 구현하여 이터러블이 되었다. 
	 * 하지만 이터러블이 된 이후에도 length프로퍼티를 가지며 인덱스로 접근할 수 있는 것에는 변함이 없므로 유사 배열 객체이면서 이터러블인 것이다.
	 * 
	 * 배열도 마찬가지로 ES6에서 이터러블이 도입되면서 Symbol.iterator 메소들르 구현하여 이터러블이 되었다. 
	 * 하지만 모든 유사 배열 객체가 이터러블인 것은 아니다. 위의 예제가 그러하다. 다만 ES6에서 도입한 Array.from 메소드를 사용하여 배열로 변환할 수 있다.
	 */
	let arr = Array.from(arrayLike)
	console.log(arr)





	// 이터레이션 프로토콜의 필요성
	/** 
	 * for...of문, 스프레드 문법, 배열 디스트럭처링 할당 등은 Array, String, Map, Set, TypedArray(Int8Array, Uint8Array, UintClampedArray, Int16Array, Int32Array, Uint32Array, Float32Array, Float64Array),
	 * DOM컬렉션(NodeList, HTMLCollection), arguments와 같이 다양한 데이터 소스를 사용할 수 있다. 위의 데이터 소스는 모두 이터레이션 프로토콜을 준수하는 이터러블이다. 
	 * 
	 * ES6이전의 순회 가능한 데이터 컬렉션, 즉 배열, 문자열, 유사 배열 객체, DOM컬렉션 등은 통일된 규약 없이 각자 나름의 구조를 가지고 for문, for...in문, forEach메소드 등 다양한 방법으로 순회할 수 있다.
	 * ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여, for...of문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다. 
	 * 
	 * 이터르블은 for...of문, 스프레드 문법, 배열 디스트럭처링 할당과 같은 데이터 소비자에 의해 사용되므로 데이터공급자의 역할을 한다고 할 수있다.
	 * 만약 다양한 데이터 공급자가 각자의 순회 방식을 갖는다면 데이터 소비자는 다양한 데이터 공급자의 순회 방식을 모두 지원해야한다. 이는 효율적이지 않다. 
	 * 하지만 다양한 데이터 공급자가 이터레이션 프로토콜을 준수하도록 규정하면 데이터 소비자는 이터레이션 프로토콜만 지원하도록 구현하면 된다. 
	 * 
	 * 즉, 이터러블을 지원하는 데이터 소비자는 내부에서 Symbol.iterator메소드를 호출해 이터레이터를 생성하고 이터레이터의 next메소드를 호출하여 이터러블을 순회하며 이터레이터 리절트 객체를 반환한다.
	 * 그리고 이터레이터 리절트 객체의 Value/done프로퍼티 값을 취득한다.
	 * 
	 * 이처름 이터레이션 프로토콜은 다양한 데이터 공급자 하나가 순회 방식을 갖도록 규정하여 데이터 소비자가 효육적으로 다양한 데이터 공급자를 사용할 수 있도록 데이터 소비자와 데이터 공급자를 연결하는 인터페이스 역할을 한다. 
	 * 
	 */

	

	//사용자 정의 이터러블
	//이터레이션 프로토콜을 준수하지 않는 일반 객체도 이터레이션 프로토콜을 준수하도록 구현하면 사용자 정의 이터러블이 된다.
	//피보나치 수열을 구현한 사용자 정의 이터러블
	let fibonacci = {
		//Symbol.iterator메소들르 구현하여 이터러블 프로토콜을 준수한다.
		[Symbol.iterator](){
			let [pre, cur] = [0,1];
			const max = 10; //수열의 최대값

			//Symbol.iterator 메소드는 next 메소들르 소유한 이터레이터를 반환해야하고
			//next 메소드는 이터레이터 리절트 객체를 반환해야한다.
			return {
				next(){
					[pre,cur] = [cur, pre+cur];
					//이터레이터 리절트 객체를 반환한다.
					return {value:cur, done:cur>=max};
				}
			}
		}
	}
	for(const num of fibonacci){
		console.log(num) // 1, 2, 3, 5, 8
	}
	/**
	 * 사용자 정의 이터러블은 이터레이션 프로토콜을 준수하도록 Symbol.iterator 메솓르르 구현하고 Symbol.iterator 메소드가 next 메소드를 갖는 이터레이터를 바노한하도록 한다.
	 * 그리고 이터레이터의 next메소드는 done과 value 프로퍼티를 가지는 이터레이터 리절트 객체를 반환하다. for...of 문은 doen프로퍼티가 true가 될 때까지 반복하며 done프로퍼티가 true가 되면 반복을 중지한다.
	 * 이터러블은 for...of문뿐만 아니라 스프레드 문법, 배열 디스트럭처링 할당에도 사용할 수 있다.
	 */
	//이터러블은 스프레드 문법의 대상이 될 수 있다.
	arr = [...fibonacci]; //[ 1, 2, 3, 5, 8 ]
	console.log(arr);
	//이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있다.
	const [first, second, ...rests] = fibonacci; //1 2 [ 3, 5, 8 ]
	console.log(first, second, rests)


	