//캡슐화와 정보 은닉
/**
 * 캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메소드를 하나로 묶는 것을 말한다. 
 * 캡슐화는 객체의 특정 프로퍼티나 메소드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라고 한다.
 * 
 * 정보 은닉은 외부에 공개할 필요가 없는 구현의 일부를 외부에 공개되지 않도록 감추어 적절치 못한 접근으로부터 객체의 상태가 변경되는 것을 방지해 정보를 보호하고, 
 * 객체 간의 상호 의존성, 즉 결합도를 낮추는 효과가 있다.
 * 
 * JS는 기본적으로 모두 Public이다. 즉, 객체의 모든 프로퍼티와 메소드는 기본적으로 공개되어 있다.
 * 
 * @param {string} name 이름
 * @param  {number} age 나이
 *
 * 
 */
function Personz(name, age){
	this.name = name; //pu9blic
	let _age = age;//private

	//인스턴스 메소드
	this.sayHi = function(){
		console.log(`Hi! My name is ${this.name}. I am ${_age} years old.`);
	}
};

let me = new Personz('Lee',20);
me.sayHi(); //Hi! My name is Lee. I am 20 years old.
console.log(me.name); //Lee
console.log(me._age); //undefined

let you = new Personz('Kim', 30);
you.sayHi();//Hi! My name is Kim. I am 30 years old.
console.log(you.name); //Kim
console.log(you._age); //undefined

//_age변수는 Person 생성자 함수의 지역 변수이므로 Person생성자 함수 외부에서 참조하거나 변경할 수 없다. 
/**
 * 그러나 sayHi메소드는 인스턴스 메소드이므로 Person 객체가 생성될 때마다 중복 생성된다. 이를 프로토 타입 메소드로 변경하여 중복 생성을 막을 수 있다.
 */

 console.log("\n\n")
function Person(name, age){
	this.name = name;//public
	let _age = age; //private

}
Person.prototype.sayHi = function(){
	// Person 생성자 함수의 지역변수 _age를 참조할 수 없다.
	console.log(`Hi! My name is ${this.name}. I am ${_age} years old.`);
}

//이를 해결하기 위해서


console.log("\n\n")
let Persons = (function(){
	let _age = 0; //private

	function Person(name, age){
		this.name = name;
		_age = age;
	}

	Person.prototype.sayHi=function(){
		console.log(`Hi! My name is ${this.name}. I am ${_age} years old.`);	
	}

	//생성자 함수를 반환
	return Person;
}());

me = new Persons("lee",20);
me.sayHi()
console.log(me.name)
// console.log(me_age)

you = new Persons("kim", 30);
you.sayHi(); 
console.log(you.name)
// console.log(you_age)


//이 코드도 문제가 있다. Person 생성자 함수가 여러 개의 인스턴스를 생성할 경우 _age의 변수 상태가 유지되지 않는다. 클로저가 가진 _age를 공유한다.

console.log("\n\n")
const exam1 = new Persons("Choi",20);
exam1.sayHi()
const exam2 = new Persons("Lee", 23);
exam2.sayHi();
console.log("\nerror")
exam1.sayHi()

/**
 * 이는 Persons.prototype.sayHi 메소드가 단 한 번 생성되는 클로저이기 떄문에 발생하는 현상이다. 
 * Persons.prototype.sayHi메소드는 즉시 실행 함수가 호출될 때 생성된다. 이때 Persons.prototype.sayHi 메소드는
 * 자신의 상위 스코프인 즉시 실행 함수의 실행 컨텍스트의 렉시컬 환경의 참조를 [[Environment]] 에 저장하여 기억한다.
 * 따라서 Persons 생성자 함수의 모든 인스턴스가 상속을 통해 호출할 수 있는 Persons.prototype.sayHi메소드의 상위 스코프는 어떤 인스턴스를 호출하더라도
 *  하나의 동일한 상위 스코프를 사용하게 된다.
 * 
 * 
 * 이와 같이 JS는 정보 은닉을 완전하게 지원하지 않는다. 인스턴스 메소드를 사용한다면 자유변수를 통해 private를 흉내 낼 수 있지만 프로토타입 메소드를 사용하면 이마저도 불가능해진다.
 * 
 */













//클로 저를 사용할 때 자주 발생하는 실수
console.log("\n ERROR")
var funcs = [];
for(var i = 0; i<3; i++){
	funcs[i] = function(){return i;}// [1]
}
for(var j = 0; j<funcs.length; j++){
	console.log(funcs[j]()); //[2]
}
/**
 * 첫 번째 for 문의 코드 블록 내에서 함수가 funcs 배열의 요소로 추가된다.
 * 두 번째 for문의 코드 블록 내에서 funcs 배열의 요소로 추가된 함수를 순차적으로 호출한다. 
 * 이때 funcs의 0,1,2를 반환할 것으로 예상되지만 아니다.
 * 
 * var로 선언한 i는 전역 변수이다. 따라서 전역변수 i를 참조하여 3이 출력된다. 
 */

console.log("\n closure")
funcs = [];
for(var z = 0; z<3; z++){
	funcs[z] = (function (id){ //[1]
		return function(){
			return id;
		}
	}(z))
}

for(var x = 0; x<funcs.length; x++){
	console.log(funcs[x]());
}
/**
 * [1]에서 즉시 실행 함수는 전역 변수 z에 현재 할당되어 있는 값을 ㅇ니수로 전달받아 매개변수 id에 할당한 후 중첩 함수를 반환하고 종료된다. 
 * 즉시 실행함수가 반환한 함수는 funcs 배열에 순차적으로 저작된다.
 * 
 * 이떄 즉시 실행 함수의 매개변수 id는 즉시 실행함수가 반환한 중첩 함수의 상위 스코프에 존재한다.
 * 즉시 실행 함수가 반환한 중첩 함수는 자신의 상위 스코프를 기억하는 클로저이고, 매개변수 id는 즉시 실행함수가 반환한 중첩 함수에 묶여있는 자유 변수가 되어 그 값이 유지된다. 
 */




//위의 예시에서 가장 치명적인 부분은 var로 선언한 부분이 전역 변수가 된다는 것에 있다. let을 쓰면 위와 같은 번거로움이 사라진다.
console.log("\n")
funcs = [];
for(let i = 0; i < 3; i++){
	funcs[i] = function (){return i;}
}
for(let i = 0; i<funcs.length; i++){
	console.log(funcs[i]()); //0 1 2
}
/**
 * let키워드로 선언한 초기화 변수를 사용한 for문이 평가되면 먼저 새로운 렉시컬 환경(Loop Lexical Environment)을 생성하고 초기화 변수 식별자와 값을 등록한다.
 * 그리고 새롭게 생성된 렉시컬 환경을 현재 실행 중인 실행 컨텍스트의 렉시컬 환경으로 교체한다. 
 * 
 * for문의 코드 블록이 반복 실행되기 시작되면 새로운 렉시컬환경(PER-ITERATATION Lexical Environment)을 생성하고 for문 코드 블록 내의
 * 식별자와 값(증감문 반영 이전을 등록한다. 
 * 그리고 새롭게 생성된 렉시컬 환경을 현재 실행 중인 실행 컨텍스트의 렉시컬 환경으로 교체한다. 
 * 
 * for문이 종료되면 (코드 블록의 반복 실행) for문이 실행되기 이전의 렉시컬 환경을 실행 중인 실행 컨텍스트의 렉시컬 환경으로 돌려 놓는다. 
 * 
 * 이와 같이 let/ const를 사용하는 반복문 (for문, for...in문, for...of문, while문 등)은 코드 블록을 반복 실행할 때마다
 * 새로운 렉시컬 환경을 생성하여 반복할 당시의 상태를 마치 스냅샷을 찍는 것처럼 저장한다. 
 * 단, 이는 반복문의 코드 블록 내부에서 함수를 정의할 때 의미가 있다. 반복문의 코드 블록 내부에 함수 정의가 없는 반복문이 생성하는 렉시컬 환경은
 * 반복 직후 참조가 없기에 가비지 컬렉션의 대상이 된다. 
 * 
 * (*****************8또 다른 방법으로 함수형 프로그래밍 기법인 고차 함수를 사용하는 방법이 있다.*******************)
 */
	//요소가 3개인 배열을 생성하고 배열의 인덱스를 반환하는 함수를 요소로 추가한다.
	// 배열의 요소로 추가된 함수들은 모두 클로저이다.
	console.log("\n")
	const functs = Array.from(new Array(3), (_,i)=>()=>i);
	console.log(functs)

	//배열의 요소로 추가된 함수들을 순차적으로 호출한다.
	functs.forEach(f=>console.log(f())); // 0  1  2