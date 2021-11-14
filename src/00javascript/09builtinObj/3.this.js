//This

/**
 * 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메소드를 하나의 논리적으로 묶은 복합적인 자료구조이다.
 * 동작을 나타내는 메소드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야한다. 
 * 이때 메소드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야한다.
 */
const circle = {
	//프로퍼티 : 객체 고유의 상태 데이터
	radius : 5,
	
	//메소드 :  상태 덷이터를 참조하고 조작하는 동작
	getDiameter(){
		// 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면
		// 자신이 속한 객체인 circle을 참조할 수 있어야한다. 
		
		return 2*circle.radius;
		//자신이 속한 객체를 가리키는 식별자 circle을 참조하고 있다. 
		//getDiameter 메소드가 호출되는 시점에는 이미 객체 리터럴의 평가가 완료되어 객체가 생성되었고
		//circle 식별자에 생성된 객체가 할당된 이후이다.
		//따라서 메소드 내부에서 circle식별자를 참조할 수 있다. 
	}
};

console.log(circle.getDiameter()); //10

/**
 * 	function Circle(radius){
 * 		//이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
 * 		???.radius = radius;
 * 	}
 * 
 * 	Circle.prototype.getDiameter = function(){
 * 		//이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
 * 		return 2 * ???.radius;
 * 	}
 * 
 * 	//생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
 * 	const circle = new Circle(5);
 * 
 * 
 * 	생성자 함수 내부에서는 프로퍼티 또는 메소드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다.
 * 생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후 new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다. >> 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야한다. 
 * 
 * 
 * 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이다. 따라서 생성자 함수가 생성할 인스턴스를 가리키는 특수한 실별자가 필요하다. 이를 위해 JS는 this를 제공한다. 
 * 
 * 
 * 
 * 
 * ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * 
 * this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다. this를 통해 자신이 속한 객체 또는 생성할 인스턴스의 프로퍼티나 메소드를 참조할 수 있다. 
 * 
 * this는 JS엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다. 
 * 
 * 함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달된다. 함수 내부에서 arguments객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할 수 있다...
 * 
 * 단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다. 
 */

	// THIS 바인딩
	//바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수 선언은 변수 이름(식별자)과 학보된 메모리 공간의 주소를 바인딩하는 것이다.
	//this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다.)와 this가 가리킬 객체를 바인딩하는 것이다.

const circle2 = {
	radius:5,
	getDiameter(){
		//this는 메소드를 호출한 객체를 가리킨다.
		return 2 * this.radius;
	}
};

console.log(circle.getDiameter()); //10

//생성자 함수 
function Circle3(radius){
	//this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	this.radius = radius;
}

Circle3.prototype.getDiameter = function (){
	//this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	return 2 * this.radius;
}

//인스턴스 생성
const cir = new Circle3(5);
console.log(cir.getDiameter()); //10


//생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.>> this는 상황에 따라 가리키는 대상이 다르다. 


/**
 * 자바나 C++등의 클래스 기반 언어에서 this는 클래스가 생성하는 인스턴스를 가리킨다.
 * 
 * JS this는 함수가 호출되는 방식에 따라 this에 바인딩될 값이 동적으로 결정된다. ++ strict mode도 this 바인딩에 영향을 준다. 
 */

//this는 어디에서든지 참조가 가능하다.
//전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); //Window {Infinity: Infinity, window: Window, NaN: NaN, undefined: undefined, document: #document, …}

function square(number){
	// 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
	console.log(this)//window
	return number*number;

}
square(2)




const person = {
	name:'lee',
	getName(){
		//메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
		console.log(this); // {name: 'lee', getName: f}
		return this.name;
	}
}

console.log(person.getName()); //lee

function Persons(name){
	this.name = name;
	//생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	console.log(this); // Person{name:"lee"}

}
const me = new Persons('lee');










//>> 함수 호출 방식과 this 바인딩
//this 바인딩(this에 바인딩 될 값)은 함수 호춣 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.


/**
 *  >>  렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.
 * 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 사우이 스코프를 결정한다.
 * 
 * this바인딩은 함수 호출 시점에 결정된다. 
 * 1. 일반 함수 호출
 * 2. 메소드 호출
 * 3. 생성자 호출
 * 4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
 */



//this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다. 
const zul = function(){
	console.dir(this);
};

//동일한 함수도 다양한 방식으로 호출할 수 있다. 


//1. 일반 함수 호출 
// zul함수를 일반적인 방식으로 호출
// zul함수 내부의 this는 전역 객체 window를 가리킨다.
zul(); //window

//2. 메소드 호출
//zul 함수를 프로퍼티 값으로 할당하여 호출
//zul 함수 내부의 this는 메소드를 호출한 객체 objz를 가리킨다. 
const objz = {zul};
objz.zul(); //objz

//3. 생성자 함수 호출
//zul 함수를 new 연산자와 함께 생성자 함수로 호출
//zul 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다. 
new zul(); // zoo{}

//4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출 
// zul 함수 내부의 this는 인수에 의해 결정된다. 
const vvar = {name : 'bar'};

zul.call(bar); //bar
zul.apply(bar); //bar
zul.bind(bar)(); //bar



// 2.1 일반 함수 호출
// this에는 전역 객체가 바인딩된다.

function zol(){
	console.log(`zol's this : ${this}`); //window

	function zar(){
		console.log(`zar's this : ${this}`); //window
	}
	zar()
}
zol();
//중첩 함수를 일반함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다.
//strict mode에서는 undefined


// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티
var balue = 1;
//const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
const dalue = 1;

const obz = {
	balue : 100,
	poo(){
		console.log("foo's this : ", this); // {balue:100, poo:f}
		console.log("foos' this.balue", this.balue); //100

		//메소드 내에서 정의한 중첩 함수
		function par(){
			console.log("par 's this : ", this); //window
			console.log("par's this.value:", this.balue)// window.balue / 1
		}
		par()

		setTimeout(function(){
			console.log("callback's this:", this); //window
			console.log("callback's this.value:", this.balue);//window.balue//1
			// 위와 같이 콜백 함수가 가리키는 this가 window가 된다. 만약 외부 함수가 가리키는 객체를 바인하고 싶다면 어떠헥 해야하는가?
			/*
			>>>>>>>>>>>>>>>> this 변수를 that에 할당하고 해당 식별자를 사용한다.

				 const that = this;

				하고 이를 콜백함수에서 that을 통해서 사용한다. 
			*/
		},100)
	}
};
obz.poo();
//콜백 함수가 일반 함수로 호출된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩된다. (어떠한 함수라도 일반 함수로 호출되면 this전역객체가 바인딩된다. )
//이처럼 일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의  this에는 전역 객체가 바인딩된다. 
// 하지만 메드 내서 정의한 중첩 함수 또는 메소드에게 전달한 콟백함수가 일반 함수로 호출될 때 메소드 내의 중첩 함수 또는 콜백 함수의 this가 전역 객체를 바인딩하는 문제가 있다 .
// 이러한 문제는 콜백 함수의 this가 일치하지 않는 다는 것은 중첩 함수 또는 콜백 함수를 헬퍼 함수로 동작하기 어렵게 만든다. 
// 따라서 이를 해결하기 위해서 외부 함수에서 this를 변수로 할당하여, 내부 함수에서 사용하는 방법이있다. 


/**
 * 혹은 Function.prototype.apply, Function.prototype.call, Function.prorotype.bind메소드를 사용해서 this 바인딩을 일치시킬 수 있다. 
 * 
 * 또는! 화살표 함수로 상위 스코프의 this를 가져다 쓸 수도 있다.
 */

// bind
var values = 1;
const objec = {
	values:100,
	fool(){
		//콜백 함수에 명시적으로 this를 바인딩한다.
		setTimeout(function(){
			 console.log(this.values);
		}.bind(this), 100)
	}
}
objec.fool()

//화살표 함수

var values = 1;
const  objecs = {
	values:100,
	fool(){
		//화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
		setTimeout(()=>{
			console.log(this.values); //100
		},100) 
	}

}
objecs.fool()




// 메소드 호출
/**
 * 메소드 내부의 this에는 메소드를 호출한 객체, 즉 메소드를 호출 할 때 메소드 이름 앞의 마침표 연산자 앞의 기술된 객체가 바인딩 된다. 
 *  Object.Methods() --> this는 object에 바인딩된다.
 * 
 *  주의할 것은 메소드 내부의 this는 메소드를 소유한 객체가 아닌 메소드를 호출한 객체에 바인딩된다.
 */

const peopleOne = {
	name:'Lee',
	getName(){
		//메소드 내부의 this는 메소드를 호출한 객체에 바인딩된다.
		return this.name;
	}
};

//메소드 getName을 호출한 객체는 person이다.
console.log(peopleOne.getName());// Lee

/**
 *  함수 객체는 peopleOne객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체이다.
 * getName 프로퍼티가 함수 객체를 가리키고 있을 뿐이다.
 * ( 메소드가 객체에 포함된 것이 아니라 독립적으로 해당 프로퍼티로 존재하는 것 )
 * 
 * 따라서  getName프로퍼티가 가리키는 함수 객체, 즉 getName메소드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메소드가 될 수 있고
 * 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.
 * 
 * 
 */

const anotherPerson = {
	name: "Kim"
}
//getName 메소드를 anotherPerson 객체의 메소드로 할당
anotherPerson.getName = peopleOne.getName;

//getName메소드를 호출한 객체는 anotherPerson
console.log(anotherPerson.getName());//Kim >> anotherPerson 객체가 호출했다. 


//getName메소드를 변수에 할당
const getName = peopleOne.getName;
//일반 함수로 호출
console.log(getName()); // '' >> this.name === global.name || window.name (브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 '')

// 이와 같이 메소드 내부의 this는 프로퍼티로 메소드를 가리키고 있는 관계가 없고 메소드를 호출한 객체에 바인딩된다.


function ZPerson(name){
	this.name = name;
}

ZPerson.prototype.getName = function(){
	return this.name;
}

const me = new ZPerson('lee');

//getName 메소드를 호출한 객체는 me이다.
console.log(me.getName()); // lee

ZPerson.prototype.name = "PARK"
//getName 메소드를 호출한 객체는 ZPerson.prototype이다.
console.log(ZPerson.prototype.getName()); // PARK













//>> 생성자 함수 호출
// 생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다. 

//생성자 함수
function Circles (radius){
	//생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다. 
	this.radius = radius;
	this.getDiameter = function(){
		return 2* this.radius
	}
};

const circles1 = new Circles(6);
const circles2 = new Circles(10);

console.log(circles1.getDiameter())
console.log(circles2.getDiameter())

// 생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수이다. 일반 함수와 동일한 방법으로 생성자 함수를 정의하고
// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다. 
// 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다. 

//new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. 즉, 일반적인 함수의 호출이다
const circlez = Circles(15);

//일반 함수로 호출된 circle에 반환문이 없으므로 암묵적으로 undefined로 반환
console.log(circlez);

//일반 함수로 호출된 circle 내부 this는 전역 객체를 가리킨다. 
console.log(radius)


//Function.prototype.apply/call/bind 메소드에 의한 간접 호출
//apply, call, bind 메소드는 Function.prototypez의 메소드이다. 이들 메소드는 모든 함수가 상속받아 사용할 수 있다.


function getThisBinding(){
	console.log(arguments);
	return this;
}

//this로 사용할 객체
const thisArg = {a:1};

console.log(getThisBinding());//window

//getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBiding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); //{a:1}

console.log(getThisBinding.call(thisArg));   //{a:1}

// apply/ call 메소드는 함수를 호출하면서 첫 번째 인수를 전달한 특정 객체를 호출한 함수의 this에 방인된다.
// apply과 call의 차이점은 인수 전달 방식에 있다.

console.log(getThisBinding.apply(thisArg,[1,2,3]));
//Arguments(3) [1,2,3, callee: f, Symbol(Symbol.iterator):f]
//> apply는 호출할 함수의 인수를 배열로 묶어서 전달한다.


console.log(getThisBinding.call(thisArg,1,2,3));
//Arguments(3) [1,2,3, callee: f, Symbol(Symbol.iterator):f]
//>call은 인자를 쉼표로 구분한 리스트 형식으로 전달한다. 


// apply, call은 인수를 전달하는 방식만 다를 뿐 this로 사용할 객체를 전달하면서 함수를 호출하는 것은 동일하다.
//apply, call 메소드의 대표적 용도는 arguments객체와 같은 유사배열 객체에 배열 메소드를 사용하는 경우이다. arguments객체는 배열이 아니기 때문에 Array.prototype.slice같은 배열 메소드를 사용할 수 없으나 apply/ call은 가능하다. 


function convertArgsToArray(){
	console.log(arguments);

	//arguments 객체를 배열로 변환
	//Array.prorotype.slice를 인수 업시 호출하면 배열의 복사본을 생성한다. 
	const arr = Array.prototype.slice.call(arguments);
	//const arr = Array.prototype.slice.apply(arguments);

	console.log(arr);

	return arr;
}

convertArgsToArray(1,2,3,4);//[1,2,3,4]



//Function.prototype.bind메소드는 함수를 호출하지 않고 this로 사용할 객체만 전달한다. 

function getThisBindgins(){
	return this;
}

//this로 사용할 객체
const thisArgs={a:1};

//bind메소드는 함수에 this로 사용할 객체를 전달한다.
// bind메소드는 함수를 호출하지 않는다.
console.log(getThisBindgins.bind(thisArgs)); //getThisBindings
// bind메소드는 함수를 호출하지는 않으므로 명시적으로 호출해야한다.
console.log(getThisBindgins.bind(thisArgs)()); // {a:1}

// bind메소드는 메소드의 this와  메소드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결 하기 위해 유용하게 사용된다. 


const yjIsLove = {
	name : 'YJ',
	isLove(callBack){
		// 여기까지는 this가 yjIsLove라는 객체를 가리키고 있다.
		setTimeout(callBack,100);
		// 이후로 this는 전역 객체를 가리킨다. (콜백 함수 내부에서 this.name은 window.name이 된다.)
		// 문제는 대부분은 콜백 함수가 헬퍼 함수로 역할을 하기 때문에 내부의 this와 콜백의 this가 다르면 문맥상 곤란한 상황이 연출된다. 
		// 이때 bind를 사용해서 일치시켜줄 수 있다.
		
		
		setTimeout(callBack.bind(this),100);
	}
};

yjIsLove.isLove(function() {
	console.log(`hi! my name is ${this.name}.`)// hi my name is YJ
	//일반 함수로 호출된 콜백 함수 내부의  this.name은 브라우저 환경에서 window.name과 같다.
	//브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이다. 
	// nodejs 는 undefined
})


/**
 * ------------------------------------------------------------------
 *  	함수 호출 방식 			/ 	this 바인딩
 * -----------------------------------------------------------------
 * 	일반 함수 호출			/ 	 전역 객체                       
 * 	메소드 호출     	       /	메소드가 호출한 객체
 * 	생성자 함수 호출 		/ 	생성자 함수가 (미래에) 생성할 인스턴스      
 *	Function.prorotype.apply    / 
 *	/call/ bind 		    /	   Function.prototype.apply/call/bind
 *	에 의한 간접 호출		/	메소드에 첫 번쨰 인수로 전달한 객체
 */