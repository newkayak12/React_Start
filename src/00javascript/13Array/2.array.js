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
		 * 	spice에서 두 번쨰 파라미터에 0을 넣으면 지우지 않고 새로운 요소들을 삽입한다.  / 만약 생략하면 첫 번쨰 인수로 전달된 시작 인덱스부터 모든 요소를 제거한다.
		 * 	spice 세 번째 인수에 아무 것도 넣지 않으면 제거만 한다.
		 * 
		 * 	배열에서 특정 요소를 제거하려면 indexOf를 사용해서 특정 요소의 인덱스를 알아낸 후 splice로 제거한다.
		 * 
		 */



		// >> Array.prototype.slice
		/**
		 * slice메소드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다. 원본 배열은 변경되지 않는다.
		 * 
		 * 	.splice(start, end)
		 * 	
		 * 	- start : 복사를 시작할 인덱스이다. 음수인 경우 배열의 끝에서 인덱스를 나타낸다. 예를 들어, slice(-2)는 배열의 마지막 두 개의 요소를 복사하여 배열로 반환한다.
		 * 	
		 * 	- end : 복사를 종료할 인덱스이다. 이 인덱스에 해당하는 요소는 복사되지 않는다. end는 생략 가능하며 생략 시 기본 값은 length프로퍼티 값이다.
		 */
		const arrTest9 = [1,2,3];

		console.log(arrTest9.slice(0,1));
		console.log(arrTest9.slice(1,2));

		console.log(arrTest9);
		//원본은 변경되지 않는다. 배열을 복사해서 반환한다. 

		//인수를 모두 생략하면 원보 ㄴ배열의 복사본을 생성해서 반환한다.
		let tmp = arrTest9.slice()
		//이 때 생성된 복사본은 얕은 복사를 통해서 생성된다.

		const todos = [
			{id:1, content:'HTML', completed:false},
			{id:2, content:'CSS', completed:true},
			{id:3, content:'JavaScript', completed:false},
		]

		const _todos = todos.slice();
		console.log(_todos===todos); //false
		//참조값이 다른 별개의 객체이다.
		console.log(_todos[0]===todos[0]);//true
		//배열 요소의 참조 값이 같다. 즉, 얕은 복사되었다.\
		/**
		 * 
		 * deepClone은 Lodash라이브러리의 cloneDeep 메소드를 사용하는 것이 편하다.
		 */
		// slice 메소드가 복사본을 생성하는 것을 이용하여 arguments, HTMLCollection, NodeList 같은 유사 배열 객체를 배열로 변환할 수 있다.

		function sum(){
			//유사 배열 객체를 배열로 반환(ES5)
			var arr = Array.prototype.slice.call(arguments);
			console.log(arr);

			return arr.reduce(function(pre,cur){
				return pre+cur;
			},0)
		}
		console.log(sum(1,2,3)); //6
		
		//Array.from 메소드르 사용하면 더욱 간단하게 유사 배열 객체를 배열로 변환할 수 있다.
		//Array.from  메소드는 유사 배열 객체 또는 이터러블 객체를 배열로 변환한다.

		function sum2(){
			const arr = Array.from(arguments);
			console.log(arr);
			return arr.reduce((pre,cur)=>pre+cur, 0);
		}

		//스프레드 문법으로 배열 변환

		function sum3(){
			//이터러블을 배열로 변환 (ES6스프레드 문법)
			const arr = [...arguments];
			console.log(arr);//[1,2,3]
			return arr.reduce((pre,cur)=> pre+cur,0)
		}
		console.log(sum(1,2,3,4,5));//15





		// >> Array.prototype.join
		/**
		 * join 메소드는 원본 배열의 모든 요소를 문자열로 변환 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다.
		 * 구분자는 생략 가능하며 기본 구분자는 (',')이다.
		 * 기본 구분자는 콤마이다.
		 */

		const arrJoin = [1,2,5,2,3,1,4,12,2,3,3,4,12,4];
		console.log(arrJoin.join())
		console.log(arrJoin.join(''))
		console.log(arrJoin.join(':'))




		// >> Array.prototype.reverse
		/**
		 * reverse 메소드는 원본 배열의 순서를 반대로 뒤집는다. 이떄 원본 배열이 변경된다. 반환 값은 변경된 배열이다.
		 */
		
		const arrReverse = [1,2,3,4,5,1,2,3];
		console.log(arrReverse.reverse());


		// >> Array.prototype.fill
		/**
		 * ES6에서 도입된 fill메소드는 인수로 전달 받은 값을 배열의 처음부터 끝가지 요소로 채운다. 이떄 원본 배열이 변경된다. 
		 */
		let arrFill = [1,2,3,4];
		//인수로 전달 받은 값 0 을 배열의 처음부터 끝까지 요소로 채운다.

		arrFill.fill(0);
		console.log(arrFill);

		//두 번쨰 요소로 채우기 시작할 인덱스를 전달할 수 있다.
		arrFill = [1,2,3,4];
		arrFill.fill(0,1);
		//fill 메소드는 원본 배열을 직접 변경한다.
		console.log(arrFill); //[1,0,0,0]


		//세 번쨰 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.
		arrFill = [1,2,3,4,5];
		arrFill.fill(0,1,4);
		console.log(arrFill)
		/**
		 * fill 메소드로 요소를 채울 경우 모든 요소를 하나의 값만으로 채울 수 밖에 없다는 단점이 있다. 하지만 Array.from메소드를 사용하면
		 * 두 번째 인수로 전달한 콜백 함수를 통해 요소 값을 만들면서 배열을 채울 수 있다.
		 * Array.from 메소드는 두번 쨰 인수로 전달한 콜백 함수에 첫 번째 인수에 의해 생성된 배열의 요소 값과 인덱스를 순차적으로 전달하면서
		 * 호출하고, 콜백 함수의 반환값으로 구성된 배열을 반환한다. 
		 */
		//인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면서 요소를 채운다.
		const sequnces = (length = 0 ) => Array.from({length}, (_, i)=>i);
		// const sequnces = (length = 0 ) => Array.from(new Array(length), (_, i)=>i);
		console.log(sequnces(3))


		// >> Array.prototype.includes
		/**
		 * ES7에 도입된 includes 메소드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다. 
		 * 첫 번째 인수로 검색할 대상을 지정한다.
		 */

		const arrTest10 = [1,2,3,5,3,2,5,6,2,3,1,2,3,4,2,34,4,23374,734,2,3,5,2,6,7,67,867,86,534,5,4,4234,345,345345];
		arrTest10.includes(2); //true
		arrTest10.includes(0); //false

		/**
		 * 두 번째 인수로 검색을 시작할 인덱스를 전달할 수 있다. 두 번째 인수를 생략할 경우 기본값으로 0을 설정한다.
		 * 만약 두 번째 인수에 음수를 전달하면 length 프로퍼티 값과 음수 인덱스를 합산하여(length+index) 검색 시작 인덱스를 설정한다.
		 */

		arrTest10.includes(2, 3);
		arrTest10.includes(4,-1); //(arrTest10.length - 1) 부터 시작한다.

		/** 
		 * 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환하는 indexOf 메소드를 사용하여 배열 내의 특정 요소가 포함 되어있는지 확인할 수 있다.
		 * 하지만 indexOf 메소드를 사용하면 반환 값이 -1인지 확인해 보아야하고 NaN이 포함되어 있는지 확인할 수 없다는 문제가 있다.
		 */

		console.log([NaN].indexOf(NaN))
		console.log([NaN].includes(NaN))



		// >> Array.prototype.flat
		/**
		 * ES10에서 도입된 flat은 인수로 전달한 깊이 만큼 재귀적으로 배열을 평탄화 한다 (??)
		 * [1,[2,3,4,5],6].flat(); //[1,2,3,4,5,6]
		 * 
		 * 중첩 배열을 평탄화할 깊이를 인수로 전달할 수 있다. 인수를 생략하면 기본 값은 1이다. 인수로 Infinity를 전달하면 중첩 배열을 모두 평탄화한다.
		 * 
		 */

		