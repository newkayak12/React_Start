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