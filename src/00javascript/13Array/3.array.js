//Array

// >> 배열 고차 함수
/**
 * 
 * 고차차 함수 (Higher-Order Function, HOF)는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다.
 * JS의 함수는 일급 객체이므로 함수를 값처럼 인수로 전달할 수 있으며, 반환할 수도 있다. 
 * 고차 함수는 외부 상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있다.
 * 
 * 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태의 변경을 피하려는 프로그래밍 패러다임이다.
 * 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성으 ㄹ해치고, 변수는 누군가에 의해 언제든지 변경할 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문이다
 * 함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라고 할 수 있다.
 * 자바스크립트는 고차함수를 다수 지원한다. 특히 배열은 매우 유용한 고차 함수를 제공한다. 
 */


// Array.prototype.sort
/**
 * sortㅔㅁ소드는 배열의 요소를 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.
 * sort메소드는 기본적으로 오름차운으로 요소를 정렬한다.
 */
const fruits = ['Banana', 'Orange', 'Apple'];

// 오름차순 (한글도 된다)
fruits.sort();

//sort 메소드는 기본적으로 오름차순으로 요소를 정렬한다.
// 따라서 내림차순으로 요소를 정렬하려면 sort에 reverse 메소드를 사용해서 내림차순으로 정렬할 수 있다.
console.log("ASC")
console.log(fruits)

fruits.reverse()
console.log("DESC")
console.log(fruits)

//단, 숫자로 이뤄진 배열을 정렬할 때 주의가 필요하다.
/**
 * sort 메소드의 기본 정렬은 유니코드 포인트의 순서를 따른다. 배열의 요소가 숫자타입이라고 할지라도 배열의 요소를 일시적으로 문자열로 변환한 후 유니코드 코드 포인트의 순서 기준으로 정렬한다.
 * 따라서 숫자 요소를 정렬할 때에는 sort메소드에 정렬 순서를 정의하는 비교 함수를 인수로 전달해야한다.
 * 비교 함수는 양수/ 음수/ 0을 반환해야한다. 
 * 반환 값이 0 보다 작으면 비교 함수의 첫 번째 인수를 우선하여 정렬하고 
 * 0은 그대로
 * 음수는 두 번째 인수를 우선하여 정렬한다.
 */

let number = [40,100,1,5,2,25,10];
console.log(number.sort()); //[1, 10, 100, 2, 25, 40, 5]


number = [40,100,1,5,2,25,10];
console.log(number.sort((a,b)=> a-b)); //[ 1, 2, 5, 10, 25, 40, 100] 
//오름차순

//숫자 배열에서 최소/최대값 취득
// 최소
console.log(number[0])

//최소
console.log(number[number.length-1]);


number = [40,100,1,5,2,25,10];
console.log(number.sort((a,b)=>b-a));
//내림차순


//객체를 요소로 갖는 배열을 정렬

const todos = [
	{id:4, content:'JAVASCRIPT'},
	{id:1, content:'HTML'},
	{id:2, content:'CSS'},
]

function compare(key){
	//프로퍼티 값이 문자열인 경우  '-' 산술 연산으로 비교하면 NaN이 되므로 비교 연산을 이용한다.
	// 비교 함수는 양/음/0을 반환하면 되므로 '-' 산술 연산 대신 비교 연산을 사용할 수 있다.
	return (a,b)=>(a[key] > b[key]? 1 : (a[key] < b[key] ? -1 : 0))
}

// id를 기준으로 오름차순 정렬
console.log(todos.sort(compare('id')));
/*
[
	{ id: 1, content: 'HTML' },
	{ id: 2, content: 'CSS' },
	{ id: 4, content: 'JAVASCRIPT' }
]
*/

//content 기준으로 오름차순
console.log(todos.sort(compare('content')));
/*
[
  { id: 2, content: 'CSS' },
  { id: 1, content: 'HTML' },
  { id: 4, content: 'JAVASCRIPT' }
]
*/
// sort 알고리즘이 quicksort알고리즘에서 timsort로 바뀌었다.
//quicksort는 동일한 ㄱ밧의 요소가 중복되어 있을 때 초기 순서와 변경될 수 있는 불안정한 정렬 알고리즘이기에 바뀌었다.





// >> Array.prototype.forEach
/**
 * 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다.
 * forEach는 for문을 대체할 수 있는 고차 함수이다. forEach 메소드는 자신의 내부에서 반복문을 실행한다.
 * 즉, forEach메소드는 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야할 처리를 콜백 함수로 전달받아 반복 호출한다.
 */
const num = [1,2,3,4,5];
const pow = [];

num.forEach(item => pow.push(item**2));
console.log(pow); //[ 1, 4, 9, 16, 25 ]

num.forEach((item, index, arr)=>{
	//v, i, arr
	console.log(`요소값 : ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`);
})
// forEach 메소드의 반환값은 언제나 undefined이다.
//forEach 메소드의 두 번쨰 인수로 forEach 메소드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다.

class Numbers {
	numberArray = [];
	multiply (arr) {
		arr.forEach(function (item){
			//TypeError
			this.numberArray.push(item*item);
			
			//forEach  메소드의 콜백 함수는 일반 함수로 호출되므로 콜백 함수 내부의 this는  undefined를 가리킨다.
			//this가 전역 객체가 아닌 undefined를 가리키는 이유는 클래스 내부의 모든 코드에 암묵적으로 strict mode가 적용된다
			// forEach 메소드의 콜백 함수 내부의 this와 multiply 메소드 내부의 this를 일치시키려면 forEach 메소드의 두 번째 인수로 forEach 메소드의 콜백 함수 내부에서 this로 사용할 객체를 전달한다.
		}, this); //forEach 메소드의 콜백 함수 내부에서 this로 사용할 객체를 전달
	}

	pow(arr){
		arr.forEach((item)=>{
			this.numberArray.push(item**2);
			//화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
		})
	}
}

const numbers = new Numbers();
console.log(numbers.multiply([1,2,3]))
console.log(numbers.pow([1,2,3]))

// 더 나은 방법은 ES6의 화살표 함수를 이용하는 것이다. 화살표 함수는 this바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프, multiply 메소드 내부의 this를 그대로 참조한다.



//forEach 메소드의 동작을 이해하기 위해서  forEach 메소드의 폴리필을 살펴볼 필요가 있다.
// 만약 Array.prototype에 forEach 메소드가 존재하지 않으면 메소드의 폴리필을 추가한다.
if(!Array.prototype.forEach){
	Array.prototype.forEach = function(callback, thisArg){
		//첫 번째 인수가 함수가 아닌면 typeError를 발생시킨다.
		if(typeof callback !=='function'){
			throw new TypeError(callback + ' is not a function');
		}

		//this로 사용할 두 번째 인수를 전달 받지 못하면 전역 객체를 this로 사용한다.
		thisArg = thisArg||window;

		//for 문으로 배열을 순회하면서 콜백함수를 호출한다.
		for(var i = 0; i< this.length; i++){
			//call 메소드를 통해 thisArg를 전달하면서 콜백 함수를 호출한다.
			//이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다
			callback.call(thisArg, this[i], i, this);
		}
	}
}
/**
 * 이처럼 forEach메소드도 내부에서는 for를 쓰지만 for을 내부로 은닉하여 로직의 흐름을 이해하기 쉽게하고 복잡성을 해결한다.
 * forEach는 for와 달리 break;, continue;를 사용할 수 없다. 즉, 배열의 모든 요소를 모두 순회하며 중간에 순회를 중단할 수 없다. 
 */

[1,2,3].forEach(item => {
	console.log(item);
	// if(item > 1) break; // SyntaxError
	// if(item > 1) continue;//SyntaxError
})


// 희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외된다. 
// Map, filter, reduce도 마찬가지이다.


//희소 배열 
const arrTest1  = [1,,3];
//for문으로 희소 배열을 순회한다.
for(let i = 0; i<arrTest1.length; i++){
	console.log(arrTest1[i]); // 1, undefinewd, 3
}

//forEach 메소드는 희소 배열의 존재하지 않는 요소를 순회 대상에서 제외한다.
arrTest1.forEach(v => console.log(v)); //1,3

/**
 * forEach는 for에 비해 성능이 좋지는 않지만 가독성이 좋다. 인수러 전달받은 콜백 함수를 반복 호출한다. 
 * 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다. 
 */





// >> Array.prototype.map
/**
 * map메소드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
 * 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다. 
 * 
 */ 
	const roots = [1,4,9].map(item => Math.sqrt(item));
	console.log(roots);
/**
 * 	map은 새로운 배열을 반환한다.
 * forEach메소드와 map의 공통점은 자신을 호출한 배열의 모든 요소를 수노히하면서 인수로 전달받은 콜백 함수를 반복 호출한다는 것이다.
 * forEach메소드는 언제나 undefined르 반환하고 map 메소드는 콜백함수의 반환값들로 구성된 새로운 배열을 반환하는 차이점이 있다.
 * 즉,  forEach 메소드는 단순히 반복문을 대체가히 위한 고차 함수이고
 * map메소드는 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수이다bundleRenderer.renderToStream
 * 
 * map 메소드가 생성하여 반환하는 새로운 배열의 length 프로퍼티 값은  map 메소드를 호출한 배열의 length 프로퍼티 값과 반드시 일치한다.
 * 즉, map 메소드를 호출한 배열과 map 메소드가 생성하여 반환한 배열은 1:1 메핑한다. 
 * 
 * 
 * map 메소드의 콜백 함수는 map 메소드를 호출한 배열의 요소 값과 인덱스, mapㅁ 메소드를 호출한 배열 자체, 즉 this를 순차적으로 전달받을 수 있다.
 * 다시 말해,  map 메소드는 콜백함수를 호출할 때 3개의 인수, 즉 map 메소드를 호출한 배열의 요소 값과 인덱스 그리고 map메소드를 호출한 배열 (this)를 순차적으로 전달한다.
 */

	[1,2,4,1,2,3,4,123].map((item, index, arr)=>{
		console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
	})

/**
 * forEach 메소드와 마찬가지로 map메소드의 두 번째 인수로 map메소드의 콜백 함수 내부에서 this로 사용할 객체를 전달할 수 있다. 
 */
class Prefixer{
	constructor(prefix){
		this.prefix = prefix
	}
	add(arr){
		return arr.map(function(item){
			//외부에서 this를 전달하지 않으면 this는 undefined를 가리킨다.
			return this.prefix+item;
		},this);
	}
	add2(arr){
		return arr.map(item => this.prefix+item);
	}
}

const prefixer = new Prefixer(`-webkit-`);
console.log(prefixer.add(['transition', 'user-select']));
console.log(prefixer.add2(['transition', 'user-select']));
//더 나은 방법은 ES6의 화살표 사용이다. 


// >> Array.prototype.filter
/**
 * filter 메소드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다.
 *  그리고 콜백함수의 반환 값이 true인 요소로만 구성된 새로운 배열을 반환한다.
 */

const numberz = [1,2,3,4,5];
/**
 * filter메소드는 numbers 배열의 모든 요소를 수노히하면서 콜백 함수를 반복 호출한다.
 * 그리고 콜백 함수의 반환 값이 true인 요소로만 구성된 새로운 배열을 반환한다.
 * 다음의 경우 numbers 배열에서 홀수인 요소로만 필터링한다
 */

const odds = numberz.filter(item=>item%2);
console.log(odds);

/**
 * foreach나 map 메소드와 마찬가지로 filter는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 
 * foreach 메소드는 언제나 undefined를 반환하고 map 메소드는 콜백 함수의 반환 값들로 구성된 새로운 배열을 반환하지만 filter 메소드는 
 * 콜백 함수의 반환값이 truee인 요소만 추출한 새로운 배열을 반환한다.
 * 
 * filter 메소드는 자신을 호출한 배열에서 필터링 조건을 만족하는 특정 요소만 추출하여 새로운 배열을 만들고 싶을 떄 사용한다.
 * filter 메소드가 생성하여 반환한 새로운 배열의 length 프로퍼티 값은 filter메소드를 호출한 배열의 length 프로퍼티 값과 같거나 작다. 
 * 
 * 
 * forEach, map 메소드와 마찬가지로 filter도 요소값/ 인덱스/ 호출한 배열 자체(this)를 전달받을 수 있다. 
 * 다시 말해 filter메소드는 콜백 함수를 호출할 때 3개의 인수, 즉 filter 메소드를 호출한 배열의 열소값과 인덱스, filter메소드를 호출한 배열(this)를 순자적으로 전달한다.
 */

[1,2,3,4].filter((item, index, arr)=>{
	console.log(`요소값 : ${item}, 인덱스 : ${index}, this : ${JSON.stringify(arr)}`);
	return item%2;
})


/**
 * forEach, map 메소드와 마찬가지로 filter메소드의 두번 째 인수로 filter 메소드의 콜백 함수 내부에서  this로 사용할 객체를 전달할 수 있다.
 * map 메소드에서 살펴보았듯 더 나은 방법은 화살표 함수를 사용하는 것이다. 
 * 
 * filter 메소드는 자신을 호출한 배열의 특정 용소를 제거 하기 위해 사용할 수도 있다.
 * 
 * 
 */

class User{
	constructor(){
		this.users = [
			{
				id : 1,
				name:'LEE'
			},
			{
				id : 2,
				name:'KIM'
			}
		]
	}
	findById(id){
		//id가 일치하는 사용자만 반환한다.
		return this.users.filter(user=>user.id ===id);
	}


	remove(id){
		this.users =this.users.filter(user =>user.id !==id);
	}
}
const users = new User();

let user =users.findById(1);
console.log(user);
/**
 * filter메서드를 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어 있다면 중복된 요소가 모두 제거된다.
 * 특정요소를 하나만 제거하려면 indexOf 메소드를 통해 특정요소의 인덱스를 취득한 다음 spliceㅇ메소들 사용한다. 
 */


// >> Array.prototype.reduce
/**
 * reduce 메소드는 자신을 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출한다.
 * 그리고 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과 값을 만들어 반환한다.
 * 원본은 변경되지 않는다.
 * 
 * 
 * reduce메소드는 첫 번째 인수로 콜백 함수, 두번 쨰인수로 초기값을 전달받는다. reduce메소드의 콜백 함수에는 4개의 인수, 초기값 또는 콜백 함수의 이전 반환값, reduce 메소드를 호출한 배열의 요소값과 인덱스, 
 * reduce메소드를 호출한 배열 자체 즉, this가 전달된다. 
 * 
 * reduce메소드는 첫 번째 인수로 콜백 함수, 두 번째 인수로 초기값을 전달받는다.
 * reduce 메소드의 콜백 함수에는 4개의 인수, 초기값 또는 콜백 함수의 이전 반환값, reduce 메소드를 호출한 배열의 요소 값과 인덱스, reduce메소드를 호출한 배열 자체, 즉 this가 전달된다.
 */

const sum = [1,2,3,4].reduce((accumulator, currentValue, index, array)=> accumulator+currentValue,0)
/** 총 4회 호출된다.
 * 	
 *	 	accumlator		currentValue		index		array		result
 *    1회	   0(초기값)			1		    0		 [1,2,3,4] 	    1
 *    2회	   1			      2			  1		    "		  3
 *    3회	   3			      3			  2 		    " 		  6
 *    4회	   6			      4			  3                 " 	          10
 */

 /**
  * 	이처럼 reduce 메소드는 초기값과 배열의 첫 번째 요소값을 콜백 함수에게 인수로 전달하면서 호출하고 다음 
  * 	순회에는 콜백 함수의 반환값 두 번째 요소 값을 콜백 함수의 인수로 전달하면서 호출한다.
  * 	이러한 과정을 반복하여 reduce메소드는 하나의 결과 값을 반환한다.
  */


 //Reduce의 다양한 활용법

 const values = [1,2,3,4,5];

 //1. 평균
 const avg =values.reduce((acc,cur,i,{length})=>{
	 //마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균 내기
	 return i = length - 1? (acc+cur) / length: acc+cur;
 },0)

 //2. 최대값 구하기  > 최대 값을 구할 때 Math.max가 있다.
 const max = values.reduce((acc,cur)=>(acc>cur ? acc:cur),0);

 //3. 요소의 중복 횟수 구하기 
 const fruitz = ['banana', 'apple', 'orange' , 'orange', 'apple'];
 const count = fruitz.reduce((acc,cur)=>{
	 //첫 번째 순회 시 acc값은 초기값{}이고 cur은 첫 번째 요소인 banana이다.
	 //초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소 개수를 프로퍼티 값으로 할당한다.
	 // 만약 프로퍼티 값이 undefined(처음 등장하는 요소 )이면 프로퍼티 값을 1로 초기화한다.
	 acc[cur] = (acc[cur] || 0 ) + 1;
	 return acc;
 },{})

 //4. 배열 평탄화
 const values2 = [1,[2,3],4,[5,6]];
 const flatten = values2.reduce((acc,cur)=>acc.concat(cur),[]);

 //5. 중복 요소 제거
 const values3 = [1,2,3,4,5,6,12,4,2,3,14,87,4,24,24,24,24,2,42,4,24];
 const result = values3.reduce((acc,cur,i,arr)=>{
	 //순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소
	 // 이 요소만 초기값으로 전달받은 배열에 담아 반환한다.
	 //순회중인 요소의 인덱스가 자신의 인덱스가 아니라면 중복 요소
	 if(arr.indexOf(cur)===i) acc.push(cur);
	 return acc;
 },[])
 console.log(result)
 
 
 // > 필터로 제거
 const resultWithFilter = values3.filter((v,i,arr)=> arr.indexOf(v)===i);
 console.log(resultWithFilter)

//  혹은 Set을 사용할 수 있다.

const resultWithSet = [...new Set(values3)];
console.log(resultWithSet)

//이와 같이 map, filter, some, every, find와 같은 모든 배열의 고차함수는 reduce로 구현할 수 있다.
/**
 * reduce 메소드의 두 번째 인수로 전달하느 ㄴ초긱밧은 첫 번째 순회에 콜백 함수의 첫 번째 인수로 전달한다.
 * 주의할 것은 두 번째 인수로 전달하는 초기값이 옵션이라는 것이다. 즉, reduce메소드의 두 번째 인수로 전달하는 초기값은 생략할 수 있다
 * 
 * 하지만, reduce 메소드를 호출할 때 언제나 초기값을 전달하는 것이 안전하다.
 */

// let reduceTest = [].reduce((acc,cur)=> acc+cur);
// //TypeError

let reduceTest = [].reduce((acc,cur)=> acc+cur, 0);
console.log(sum);


const products = [
	{
		id:1,
		price:100
	},
	{
		id:2,
		price:200
	},
	{
		id:3,
		price:300
	},
]
/**
 * 1순회 acc {id:1, price 100}, cur은 {id:2, price :200}
 * 2tnsghl acc 300, cur {id:3, price:300}이다. 
 * 2 번째 순회 시 acc에 함수 객체가 아닌 숫자값이 전달된다. 이때 acc.price는 undefined이다.
 */

const priceSum = products.reduce((acc,cur)=>acc.price+cur.price); 
console.log(priceSum); //NaN

// 이처럼 객체의 특정 프로퍼티 값을 합산하는 경우 반드시 초기 값을 전달해야한다.
const preciseSum = products.reduce((acc,cur)=>acc + cur.price,0);
console.log(preciseSum);]

//이와 같이 reduce메소드를 호출할 때 초기값을 생략하지 말고 언제나 전달하는 것이 안전하다.