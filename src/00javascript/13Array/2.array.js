//array2
//배열 생성
//  > 배열 리터럴 
/**
 * 객체와 마찬가지로 배열도 다양한 생성 방식이 있다. 가장 일반적이고 간편한 배열 생성 방식은 배열 리터럴을 사용한다.
 *  const arr1 = [1,2,3];
 */



// > Array 생성자 함수
	/**
	 * Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다.
	 * Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.
	 * 
	 * - 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성한다.
	 * 
	 *  const arr2 = new Array(10);
	 *  console.log(arr2); //[ <10 empty items> ]
	 *  console.log(arr2.length); //10
	 * 
	 * 이때 생성된 배열은 희소 배열이다. length프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.
	 * 
	 * 
	 *  - 전달된 인수가 없는 경우 빈 배열을 생성한다. 즉, 배열 리터럴 []과 같다.
	 * 
	 *  new Array(); // []
	 * 
	 * 
	 *  - 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
	 *  new Array(1,2,3,4); //[1,2,3,4]
	 * 
	 *  - 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
	 *  new Array({}); // [{}]
	 * 
	 * 	> Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도
	 * 
	 */
	





	// > Array.of
	/**
	 * ES6에서 도입된 Array.of 메소드는 전달된 인수를 요소로 갖는 배열을 생성한다. Array.of는 Array 생성자 함수와 다르게 
	 * 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다. 
	 * 
	 * //전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
	 * Array.of(1);//[1]
	 * Array.of(1,2,3); //[1,2,3]
	 * Array.of('string'); //['string']
	 */

	// > Array.from
	/**
	 * ES6에서 도입된 Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.
	 *  Array.from({length:2, 0:'a', 1:'b'}); //['a','b'];
	 *  Array.from("Hello"); //['H','e','l','l','o']
	 * 
	 * Array.from을 사용하면 두 번쨰 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다. 
	 * Array.from 메소드는 두 번째 인수로 전달한 콜백 함수에 첫 번 째 인수에 의해 생성된 배열의 요소 값과 인덱스를 순차적으로 전달하면서 호춣하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다. 
	 */

	let result1 = Array.from({length:3}); 
	result1.forEach((v,i)=>console.log(v));
	// length만 존재하는 유사 배열 객체를 전달하면 undefined로 요소를 채운다.

	let result2 = Array.from({length:3},(_,i)=>{
		return i;
	})
	result2.forEach((v,i)=> console.log(v));
	// 두번 째 인수로 전달한 콜백 함수의 반환밗으로 구성된 배열을 반환한다. 



	/**
	 * 유사 배열 객체와 이터러블 객체
	 * 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.
	 * 유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다. 
	 */
	const arrayLike = {
		'0':'apple',
		'1':'banana',
		'2':'orange',
		length:3
	};

	//유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다.
	for(let i = 0; i<arrayLike.length; i++){
		console.log(arrayLike[i]);
	}
	/**
	 *  이터러블 객체는 Symbol.iterable 메소드를 구현하여 for...of문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있는 객체를 말한다.
	 * (ES6에서 제공하는 빌트인 이터러블은 Array, String, Map, Set, DOM(NodeList, HTMLCollection), arguments 등이 있다.)
	 */



//>배열 요소의 참조
	/**
	 * 배열의 요소를 참조할 때에는 대괄호([]) 표기법을 사용한다. 대괄호 안에는 인덱스가 와야한다. 정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다.
	 * const arr = [1,2];
	 * console.log(arr[0]);
	 * 존재하지 않는 요소에 접근하면 undefined가 반환된다.
	 * 배열은 사실 인덱스를 나타내는 문자열을 프로퍼티 키로 갖는 객체이다. 따라서 존재하지 않는 프로퍼티 키로 객체의 프로퍼티에 접근했을 때 undefined를 반환하는 것처럼 
	 * 배열도 존재하지 않는 요소를 참조하면 undefined를 반환한다.
	 */
	//희소 배열
	const arrTest1 = [1,,3];
	//베열 arrTest1에는 인덱스가 1인 요소가 없다.
	console.log(Object.getOwnPropertyDescriptors(arrTest1));
	// {
	// 	'0': { value: 1, writable: true, enumerable: true, configurable: true },
	// 	'2': { value: 3, writable: true, enumerable: true, configurable: true },
	// 	length: { value: 3, writable: true, enumerable: false, configurable: false }
	// }



//>배열 요소의 추가와 갱신
	/**
	 * 객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다.
	 * 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다.
	 * 이때 length의 값은 자동 갱신된다.
 	 */
	 const arrTest2 = [1,2];
	 arrTest2[100] = 100;
	 console.log(arrTest2); //[ 1, 2, <98 empty items>, 100 ]
	 console.log(arrTest2.length) //101
	 /**
	  * 이미 있는 인덱스에 값을 할당하면 값이 갱신된다.
	  * 또한 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.
	  */
//> 배열 요소의 삭제
	// 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제 하기 위해 delete 연산자를 사용할 수 있다.
	const arrTest3 = [1,2,3];
	//배열 요소 삭제
	delete arrTest3[1];

	console.log(arrTest3); // [1,empty,3]

	//length에 영향을 주지 않는, 희소 배열이 된다.
	console.log(arrTest3.length);


	/**
	 * delete연산자는 객체의 프로퍼티를 삭제한다. 이때 배열은 희소 배열이 되며, length프로퍼티 값은 변하지 않는다. 따라서 희소 배열을 만드는 delete연산자는 사용하지 않는 것이 좋다. 
	 * 희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 Array.prototype.splice 메소드를 사용해야 한다.
	 */

//> 배열 메소드 
	/**
	 * 자바스크립트는 배열을 다룰 떄 유용한 다양한 빌트인 메소드를 제공한다.
	 * Array 생성자 함수는 정적메소드를 제공하며, 배열 객체의 프로토타입인 Array.prototype은 프로토타입 메소드를 제공한다.
	 * 
	 * 배열 메소드는 결과물을 반환하는 패턴이 두 가지이므로 주의가 필요하다. 
	 * 배열에는 원본 배열(배열 메소드를 호출한 배열, 즉 배열 메소드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메소드 (mutator method)
	 * 원본 배열을 직접 변경하지 ㅇ낳고 새로운 배열을 생성하여 반환하는 메소드가 있다. 
	 */

		
		// >> Array.isArray : 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.
		//true
		Array.isArray([]);
		Array.isArray([1,2]);
		Array.isArray(new Array());

		//false
		Array.isArray();
		Array.isArray({});
		Array.isArray(null);
		Array.isArray(undefined);
		Array.isArray(1);
		Array.isArray('Array');
		Array.isArray(true);
		Array.isArray(false);
		Array.isArray({0:1, length:1});


		// >> Array.prototype.indexOf : 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다. 
		const arrTest4 = [1,2,2,4];
		console.log(arrTest4.indexOf(2)); //1
		//두 번쨰 인수는 검색을 시작할 인덱스이다.
		console.log(arrTest4.indexOf(2,2)); //2
		//존재 하지 않으면 -1을 반환한다.
		console.log(arrTest4.indexOf(99)); //-1

		//유사하게 Array.prototype.include를 사용하면 더 간단하게 사용할 수 있다.


		// >> Array.prototype.push
		/**
		 * push 메소드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length를 반환한다. 
		 */
		

		// >> Array.prototype.pop
		/**
		 *  pop 메소드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 
		 * 원본 배열이 빈 배열이면 undefined를 반환한다.
		 */
// STACK을 구성할 수 있다. push/ pop

		// >> Array.prototype.unshift
		/**
		 * unshift 메소드는 인수로 전달받은 모든 값을 원본 배열 선우에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.
		 * 원본 배열을 변경하기 때문에 unshift 보다는 ES6의 스프레드 문법을 사용하는 것이 좋다.
		 */
		const arrTest5 = [1,2,3,4];
		const newArr = [3, ...arrTest5];


		// >> Array.prototype.shift
		/**
		 * shift 메소드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
		 * 원본 배열이 빈 배열이면 undefined를 반환한다.
		 */

		const arrTest6 = [1,2];

		//원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
		let result = arrTest6.shift()
		console.log(result)
// que를 구성할 수 있다. push/ shift



		// >> Array.prototype.concat
		/**
		 * concat 메소드는 인수로 전달된 값들(배열 또는 원시 값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
		 * 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다. 
		 * 원본 배열은 변경되지 않는다.
		 */

		const arrTest7 = [1,2];
		const arrTest8 = [3,4];

		let result3 = arrTest7.concat(arrTest8);
		let result4 = arrTest7.concat("HELLO");

		console.log(result3); //[ 1, 2, 3, 4 ]
		console.log(result4); // [ 1, 2, 'HELLO' ]

		/**
		 * push와 unshift는 concat으로 대체할 수도 있다. 
		 * push와 unshift는 concat메소드와 유사하게 동작하지만 
		 * 
		 * 1. push와 unshift 메소드는 원본 배열을 직접 변경하지만 concat 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.
		 * 따라서 push와 unshift메소드를 사용할 경우 원본 배열을 반드시 변수에 저장해 두어야 하며 concat 메소드를 사용할 경우 
		 * 반환값을 반드시 변수에 할당받아야 한다. 
		 * 
		 * 
		 * 2. 인수로 전ㄷ라받은 값이 배열인 경우 push와 unshift 메소드는 배열을 구대로 원본 배열의 마지막/첫 번째 요소로 추가하지만 
		 * concat 메소드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다. ( 이 역시 ES6의 스프레드 문법으로 대체할 수 있다. )
		 */




		// >> Array.prototype.splice
		/**
		 * push, pop, unshift, shift 메소드는 모두 원본 배열을 직접 변경하는 메소드이며 원본 배열의 처음이나 마지막에 요소를 추가하거나 제거한다.
		 * 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice를 사용한다.
		 * splice 메소드는 3개의 매개변수가 있으며 원본 배열을 직접 변경한다. 
		 * 
		 * 	.splice(start, deleteCount, items);
		 * 
		 * 	start : 원본 배열의 요소를 제거하기 시작할 인덱스이다. start만 지정하면 원본 배열의 start부터 모든 요소를 제거한다.
		 * 		start가 음수인 경우 배열의 끝에서 인덱스를 나타낸다. 만약 start가 -1이면 마지막 요소를 가리키고
		 * 		-n이면 마지막에서 n번쨰 요소를 가리킨다.
		 * 
		 * 	deleteCount : 원본 배열의 요소를 제거하기 시작할 인덱스인 start부터 제거할 요소의 개수이다. deleteCount가 0인 경우 아무런 요소도 제거되지 않는다.(옵션)
		 * 	
		 * 	items : 제거한 위치에 삽입할 요소들의 목록이다. 생략항 경우 원본 배열에서 요소들을 제거하기만 한다.(옵션)
		 * 
		 */