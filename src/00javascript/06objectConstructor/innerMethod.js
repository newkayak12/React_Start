// 내부 메소드[[Cal]]과 [[Construct]]
/*
	함수 선언문 또는 함수 표현식으로 정의한 함수는 일반적인 함수로서 호출할 수 있는 것은 물론 생성자 함수 (new연산자와 함께 호출해서 객체를 생성)로서 호출할 수 있다.
	함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. 함수는 일반 객체가 가지고 있는 내부 슬롯과 내부 메소드를 모두 가지고 있다. 
*/

//함수는 객체이다.
function foo(){}

//함수는 객체이므로 프로퍼티를 소유할 수 있다. 
foo.prop = 10;

//함수는 객체이므로 메소드를 소유할 수 있다.
foo.method = function(){
	console.log(this.prop);
}

foo.method(); //10



/*
	함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다. 

	>>함수는 일반객체가 가지는 내부 슬롯과 내부 메소드는 물론
		함수로서 동작하기 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], {Construct} 같은 내부 메소드를 추가로 갖고 있다.

*/

function func(){};

//일반적인 함수로서 호출 :[[Call]]이 호출된다.
func();

//생성자 함수로서 호출 : [[Construct]]가 호출된다.
new func();

/*
 내부메소드 [[Call]]을 갖는 함수 객체를 callable이라고 하며, 내부 메소드 [[Construct]]를 갖는 함수 객체를 constructor, [[Construc]]를 갖지 않는 함수 객체를 non-constructor라고 부른다.

 callable은 호출할 수 있는 객체, 함수를 말하며  >>>  호출할 수 없으면 함수가 아니므로 모든 함수 객체는 [[Call]]을 가지고 있다.
 constructor는 생성자 함수로서 호출할 수 있는 함수,  >> 하지만 모든 함수 객체가 [[Construct]]를 갖고 있는 것은 아니다.
 non-constructor는 객체를 생성자 함수로서 호출할 수 없는 함수를 의미한다.  >> 다시 말하면 함수 객체는 constructor일 수도 있고 non-constructor일 수도 있다. 

 Callable && non-Constructor : 일반 함수로서만 호출할 수 있는 객체
 Callable && Constructor : 일반 함수 또는 생성자 함수로서 호출할 수 있는 객체

*/


//constructor와 non-constructor의 구분
/*
	JS 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라라 함수를 constructor와 non-constructor로 구분한다.

	constructor : 함수 선언문, 함수 표현식, 클래스 (클래수도 함수이다.)
	non-constructor : 메소드(ES6 메소드 축약 표현), 화살표 함수  ** ES6메소드 범위가 일반적인 의미스 메소드보다 좁다. 

*/

//constructor
// 일반 함수 정의 : 함수 선언문, 함수 표현식
function statements(){}
const represents = function (){}


//프로퍼티 X의 값으로 할당 된 것은 일반 함수로 정의도 함수, 이는 메소드로 인정하지 않는다.
const vaz = {
	x : function(){}
};


new statements(); // -> statement{}
new represents(); // -> represents()
new vaz.x(); // x{}


//non-constructor
//화살표 함수 정의
const arrow = () =>{};

// new arrow(); // TypeError: arrow is not a constructor

//메소드 정의 : ES6 메소드 축약 표현만 메소드로 인정
const obj = {
	x(){

	}
}

// new obj.x(); // TypeError : obj.x is not a constructor



/*
 함수 정의 방식에 따라 constructor와 non-ceonstructor
 >> 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor이고
 >> ES6의 화살표 함수와 메소드 축약 표현으로 정의된 함수는 non-constructor이다. 

 함수를 일반 함수로서 호출하면 함수 객체의 내부 메소드 [[Call]]이 호출되고, new 연산자와 함께 생성자 함수로서 호출하면 내부 메소드 [[Construct]]가 호출된다.

 non-construct인 함수 객체는 내부 메소드[[Construct]]를 갖지 않는다. 
*/


function lily(){
}
//일반 함수로서 호출 
//[[Call]]이 호출된다. 모든 함수 객체는 [[Cal]]이 구현되어 있다.
lily();

//생성자 함수로서 호출
//[[Construct]]가 호출된다ㅣ. 이때 [[Construct]]를 갖지 않는다면 에러가 발생한다.
new lily();

// 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor이고 ES6의 화살표 함수와 메소드 축약 표현으로 정의된 함수는 non-constructor이다. 
/*
	함수를 일반 함수로서 호출하면 함수 객체의 내부 메소드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출하면 내부 메소드 [[Construct]]가 호출된다. 
	non-constructor인 함수 객체는 내부 메서드 [[Construct]]를 갖지 않는다. 따라서 non-constructor인 함수 객체를 새엇ㅇ자 호출하면 에러가 발생된다. 
*/










/// new 연산자 
// 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다.  >>  new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다. 

// 다시 말하면 함수 객체의 내부 메소드 [[Call]]이 호출되는 것이 아니라 [[Construct]]가 호출된다. 단, new  연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어 한다. 


//예제 _ 생성자 함수로서 정의하지 않은 일반 함수
function add (x,y){
	return x+y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();


//함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환된다. 
console.log(inst); // {}

//객체를 반환하는 일반 함수 
function createUser(name, role){
	return {name, role};
}

// 일반 함수를 ne연산자와 함께 호출
inst = new createUser('Lee', "admin");

//함수가 생성한 객체를 반환하다.
console.log(inst);  //{name:"LEE", role:"admin"}



// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다. 다시 말해, 함수 객체의 내부 메소드 [[construct]]가 호출되는 것이 아니라 [[Call]]이 호출된다. 

// 생성자 함수 
function Circle(radius){
	this.radius = radius;
	this.getDiameter = function(){
		return 2*this.radius;
	}
};

//new 연산자 없이 생성자 함수 호출하면 일반 함수로 호출된다.
const circle = Circle(5);
console.log(circle); // undefined


//일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius);
console.log(getDiameter()); //10

// circle.getDiameter();
//TypeError : Cannot read property 'getDiameter' of undefined