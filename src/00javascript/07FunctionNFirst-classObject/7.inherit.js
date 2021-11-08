//직접 상속

/*
	Object.create 메소드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다. > 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate를 호출한다.

	Object.create메소드의 첫번째 매개변수에는 생성할 객체의 프로토 타입으로 지정할 객체를 전달한다. 
	두번째 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 개겣를 전달한다. 
*/


//프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
//obj .. null

let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null ); //true
//Object.prototype을 상속받지 못한다. 
// console.log(obj.toString()); //TypeError : obj.toString is not a function

//obj -> Object.prototype -> null
//obj -> {};와 동일 
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true


//obj -> Object.prototype -> null
//obj - {x:1}; 와 동일
obj = Object.create(Object.prototype, {
	x:{value:1, writable:true, enumerable:true, configurable:true}
});

/*
	위 코드는 아래와 동일하다.
	obj = Object.create(Object.prototype);
	obj.x = 1;
*/

console.log(obj.x); //1
console.log(Object.getPrototypeOf(obj) === Object.prototype);//true

const myProto = {x:10};
//임의의 객체를 직접 상속받는다. 
//obj -> myProto -> Obejct.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); //10
console.log(Object.getPrototypeOf(obj) === myProto ); //true



//생성자 함수
function Person(name){
	this.name = name;
}

//obj-> Person.prototype ->Object.prototype -> null
//obj-> new Person('lee')와 동일

obj = Object.create(Person.prototype);
obj.name = 'lee';
console.log(obj.name);//lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); //true


/*
	이와 같이 Object.create메소드는 첫 번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성한다. 즉, 객체를 생성하면서 직접적으로 상속을 구현하는 것이다. 


	new 연산자가 없어도 객체를 생성할 수 있다.
	프로토타입을 지정하면서 객체를 생성할 수 있다
	객체 리터럴에 의해 생성된 객체도 상속받을 수 있다. 


	> 참고로 Objet.prototype의 빌트인 메소드인 Object.prototype.hasOwnProperty, Obejct.prototype.isPrototypeOf, Obejct.prototype.propertyIsEnumerable 등은
	모든 객체의 프로토타입 체인의 종점, 즉 Object.prototype의 메소드이므로 모든 객체가 상속받아 호출할 수 있다. 


	단, Object.create 메소드로 프로토타입의 체인의 종점에 위치하는 객체를 생성할 수 있기 떄문에 ESLint에서는 이를 권장하지 않는다.
	프로토타입 체인의 종점에 위치하는 객체는 Object.prototype의 빌트인 메소드를 사용할 수 없다. 
*/

	// 프로토타입이 null인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성한다.
	const obj1 = Object.create(null);
	obj1.a = 1;

	console.log(Object.getPrototypeOf(obj1)===null);//true

	//obj는 Objet.prototype의 빌트인 메소드를 사용할 수 없다.
	// console.log(obj.hasOwnPropety('a'));
	//typeError: obj.hasOwnProperty is not a function 

	//Object.prototype의 빌트인 메소드는 객체로 직접 호출하지 않는다.
	console.log(Object.prototype.hasOwnProperty.call(obj1,'a'));


	//>>  객체 리터럴 내부에서 __proto__에 의한 직접 상속
	/*
		Object.create 메소드에 의한 직접 상속은 여러 장점이 있다. 하지만 두 번째 인자로 프로퍼티를 정의하는 것은 번거롭다.
		ES6에서는 객체 리터럴 내부에서 __proto__ 접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다. 
	*/

	const myProtos = {x:10};
	

	//객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
	const objs  = {
		y:20,
		//객체를 직접 상속 받는다. 
		//objs -> myProto -> Object.prototype -> null
		__proto__ : myProtos
	};

	/*
		위 코드는
		const obj = Object.create(myProto, {
			y:{ value :20, writable : true, enumerable: true, configurable:true}
		});
	*/

	console.log(objs.x, objs.y); //10, 20
	console.log(Object.getPrototypeOf(obj) === myProtos); //true







	//>>  정적 프로퍼티/ 메소드
/*
		정적 프로퍼티/ 메소드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메소드를 말한다.
*/

//생성자 함수

function Tk(version){
	this.version = version;
}

//프로토타입 메소드
Tk.prototype.version = function(){
	console.log(`Version is ${version}`);
};

//정적 프로퍼티
Tk.staticProp = 'staticProp!';

Tk.apply.staticMethod = function(){
	console.log('staticMethod');
};

const gms = new Tk(7);

//생성자 함수에 추가한 정적프로퍼티/ 메소드는 생성자 함수로 참조/호출한다.
// Tk.staticMethod() // staticMethod

//정적 플오퍼티/메소드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다. 
//인스턴스로 참조/호출할 수 있는 프로퍼티/메소드는 프로토타입 체인 상에 존재해야한다. 
// gms.staticMethod(); //TypeError: me.staticMethod is not a functions

/*
	인스턴스/프로토타입 메소드 내에 this를 사용하지 않는다면 그 메소드는 정적 메소더르 변경할 수 있다. 
	인스턴스가 호출한 인스턴스/프로토타입 메소드 내에 this는  인스턴스를 가리킨다. 
	메소드 내에서 인스턴스를 참조할 필요가 ㅇ벗다면 정적 메소드로 변경하여도 동작한다. 
*/


function Foo () {

}

//프로토타입 메소드 
// this를 참조하지 않는 프로토타입 메소드는 정적 메소드로 변경하여도 동일한 효과를 얻을 수 있다.
Foo.prototype.x = function(){
	console.log('x')
};

const foo = new Foo();
//프로토타입 메소드를 호출하려면 인스턴스를 생성해야한다.
foo.x(); //x


//정적 메소드
Foo.x = function(){
	console.log('x');
};

//정적 메소드는 인스턴스를 생성하지 않아도 호출할 수 있다. 
Foo.x(); // x










// 프로퍼티 존재 확인

/*
	in 연산자
	in 연산자는 객체 내의 특정 프로퍼티가 존재하는지 여부를 확인한다.


	>key: 프로퍼티 키를 나타내는 문자열
	>object: 객체로 평가되는 표현식
*/

const test = {
	name : "LEE",
	address:"Seoul"
};

//test 객체에 name 프로퍼티가 존재한다.
console.log("name" in test); //true
//test 객체에 address 프로퍼티가 존재한다. 
console.log("address" in test); // true
//test 객체에 age 프로퍼티가 존재하지 ㅇ낳는다.
console.log('age' in test); //false

/**
 * 
 * in 연산자는 확인 대상 객체의 프로퍼티뿐만 아니라 확인 대상 객체가 상속받는 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요하다. 
 * 
 * ES6에서 Reflect.has메소드를 사용할 수도 있다.
 */

console.log(Reflect.has(test,"name"));//true
console.log(Reflect.has(test, "age")); //false


//Object.prototype.hasOwnProperty메소드
/**
 * Object.prototype.hasOwnProperty메소드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.
 */
console.log(test.hasOwnProperty('name')); //true
console.log(test.hasOwnProperty('age')); //false
















//프로퍼티 열거
/**
 * for... in문
 * 객체의 모든 프로퍼티를 순회하여 열거하려면 for...in문을 사용한다. 
 * 
 * 
 * 
 * 	for(변수 선언문  in 객체  ){...}
 */


//for... in 문의 변수 prop에 test객체의 프로퍼티 키가 할당된다.
for(const key in test){
	console.log(key + " : "+ test[key]);
}

/**
 * name : lee
 * address : seoul
 * 
 * 
 * for ... in 문은 in 연산자처럼 순회 대상 객체의 프로퍼티뿐만 아니라 상속받은 프로토타입의 프로퍼티까지 열거한다. 
 * 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다. 
 */
// 	in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in test); //true


// for ... in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
// 하지만 toString 과 같은 Object.prototype의 프로퍼티가 열거되지 ㅇ낳는다. 
for(const key in test){
	console.log(key+ " : "+ test[key]);
}

/**
 * 이는 toString 메소드가 열거할 수 없도록 정의되어 있는 프로퍼티이기 떄문이다. Object.prototype.string 프로퍼티의 atttribute [[Enumerable]]의 값이 false이기 때문이다.
 * 
 * Object.getOwnProrpertyDescriptor 메소드는 프로퍼티 디스크립터 객체를 반환한다. 
 * 프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체이다. 
 */
	console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
// {value : f, writable:true, enumerable: false, configurable:true}

/**
 *  for.. in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이  true인 프로퍼티를 순회하며 열거한다. 
 */

const sym = Symbol();
const obj2 = {
	a:1,
	[sym]:10
};
//for...in문은 프로퍼티 키가 심볼인 프로퍼티는 열거하지 않는다. 
for(const key in obj2){
	console.log(`${key} : ${obj2[key]}`);
}
//a:1

/**
 * 
 * 상속받은 프로퍼티를 제외하고 객체 자신의 프로퍼티만 열거하려면  Object.prototype.hasOwnProperty 메소드를 사용하여 객체 자신의 프로퍼티인지 확인해야한다. 
 */

 
const People = {
	name:'LEE',
	address:'Seoul',
	__proto__:{age:20}
};

for(const key in People){
	//객체 자신의 프로퍼티인지 확인한다.
	if(!People.hasOwnProperty(key)) continue;
	console.log(`${key} : ${People[key]}`);
}
/**
 * 객체의 프로퍼티가 정의된 순서대로 열거되었다. for...in 문은 프로퍼티를 열거할 때 순서를 보장하지 않으므로 주의해야한다.
 * 대부분의 브라우저는 숫자인 프로퍼티 키에 대해서 정렬을 실시한다. 
 * 
 * 
 * 
 * 
 * 배열에는 for...in문보다는 for문이나 for...of문, Array.prototype.forEach메소드가 낫다. 
 */
const arr = [1,2,3,4];
arr.x = 10; //배열도 객체이므로 프로퍼티를 가질 수 있다.

for(const i in arr){
	//프로퍼티 x도 출력된다.
	console.log(arr[i]);//1,2,3,4,10
};

//arr.length는 4이다.
for(let i = 0; i<arr.length; i++){
	console.log(arr[i]); // 1,2,3,4
};

//forEach 메소드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(v=>{
	console.log(v);//1,2,3,4
})

//for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다. 
for(const value of arr){
	console.log(value); //1,2,3,4
}

//Object.keys / values / entreis 메소드
/**
 * for ... in 은 객체 자신의 고유 프로퍼티뿐 아니라 상속받은 프로퍼티도 열거한다. >> Object.prototype.hasOwnProperty 메소드를 사용해서 자신의 프로퍼티인지 처리할 필요가 있을 수도 있다. 
 * 
 * 따라서 객체 자신의 고유 프로퍼티만 열거하려면 for...in 문보다는 Object.keys/values/entries 메소드 사용하는 것이 바람직하다. 
 * 
 * Object.keys 메소드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다. 
 */

console.log(Object.keys(People)); // [ 'name', 'address' ]
console.log(Object.values(People)); //[ 'LEE', 'Seoul' ]
Object.entries(People).forEach(([key,value]) => console.log(`[${key}]  : ${value}`)) 
/**
 * [name]  : LEE
 * [address]  : Seoul
 */