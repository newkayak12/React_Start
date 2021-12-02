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