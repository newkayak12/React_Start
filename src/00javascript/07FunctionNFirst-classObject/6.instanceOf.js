//instanceof 연산자


/*
	instanceof 요ㅕㄴ산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다.
	만약 우변의 피연산자가 함수가 아니면 TypeError가 발생한다.

	객체 instanceof  생성자 함수

	>> 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고, 그렇지 않은 경우에는 false가 된다.
*/
//생성자 함수
function Person(name){
	this.name = name;
}

const me = new Person('lee');

//Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true 반환
console.log(me instanceof Person); //true

//Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true 반환
console.log(me instanceof Object); //true



// instanceof 연산자 동작 원리 이해

const parent = {};
Object.setPrototypeOf(me, parent);

//Person 생성자 함수와 parent객체는 연결되어 있지 않다. 
console.log(Person.prototype === parent); //false
console.log(parent.constructor === Person); //false

//Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가
console.log(me instanceof Person) // false

//Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Obejct); // true

//me 객체는 프로토타입이 교체되어 프로토타입고 ㅏ생성자 함수 간의 연결이 파괴되었지만 Person 생성자 함수에 의해 생성된 인스턴스임에는 틀림이 없다.
/*
	그러나 me  instanceo Person은 false로 평가된다.

	이는 Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 떄문이다. 따라서 프로토타입으로 교체한 parent 객체를 Person 생성자 함수
	prototype 프로퍼티에 바인딩하면   ' me instanceof Person  '은 true가 될 것이다. 



	>> 여튼 instanceof는 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아닌

	생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다. 

	instanceof 연산자를 함수로 표현하면
*/

function isInstanceof(instance, constructor){
	//프로토타입 취득
	const prototype = Obejct.getPrototypeOf(instance);

	//재귀 탈출 조건
	// prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
	if(prototype === null) {
		return false;
	}


	//프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환
	//그렇지 않으면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
	return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me,Person)); // true
console.log(isInstanceof(me,Object)); // true
console.log(isInstanceof(me,Array)); //false
