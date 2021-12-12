//Symbol
/**
 * JS는 문자열, 숫자, 불리언, undefined, null, Object 타입이 있다. 
 * ES6에서 도입된 7번째 데이터 타입으로 변경 불가한 원시타입 Symbol이 추가되었다.
 * 심벌은 다른 값과 중복되지 않는 유일무이한 값이다. 따라서 주로 충돌 위험이 없는 프로퍼티 키를 만들기 위해서 사용한다.
 */


/**
 * Symbol 함수
 * 심벌 값은 Symbol 함수를 호출하여 생성한다. 다른 원시값, 즉 문자열, 숫자, 불리언, undefined,  null 타입의 값은 리터럴 표기법을 통해 값을 생성할 수 있지만 심벌 값은  Symbol 함수를 호출하여 생성해야 한다.
 * 이때 생성된 심벌 값은 외부로 노출되지 않아 확인할 수 없으며, 다른 값과 절대 중복되지 않는 유일무이한 값이다. 
 */
//Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
let mySymbol = Symbol();
console.log(typeof mySymbol); //symbol
//심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol) //Symbol()

//언뜻 보면 생성자 함수로 객체를 생성하는 것처럼 보이지만 Symbol함수는 String, Number, Boolean 생성자 함수와 달리 new 연산자와 함께 호출하지 않는다.
//new 연산자와 함께 생성자 함수 또는 클래스를 호출하면 객체(인스턴스)가 생성되지만 심벌 값은 변경 불가능한 원시 값이다.

// new Symbol(); //Symbol is not a constructor
//Symbol 함수에는 선택적으로 문자열을 인수로 전달할 수 있다. 이 문자열은 생성된 심벌 값에 대한 설명으로 디버깅 용도로만 사용되며, 심벌 값 생성에 어떠한 영향도 주지 않는다. 
// 즉,  심벌 값에 대한 설명이 같더라도 생성된 심벌 값은 유일무이한 값이다.


// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol')
const mySymbol2 = Symbol('mySymbol')
console.log(mySymbol1 === mySymbol2)



//심벌 값도 문자열, 숫자, 불리언 같이 객체처럼 접근하면 암묵저그올 래퍼 객체르 ㄹ생성한다.
//다음 예제의  description 프로퍼티와 toString 메소드는 Symbol.prototype의 프로퍼티이다.

mySymbol = Symbol('mySymbol')
//심벌도 래퍼 객체를 생성한다.
console.log(mySymbol.description)
console.log(mySymbol.toString())



//심벌 값 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다. 
mySymbol = Symbol();
// console.log(mySymbol+'') //TypeError
// console.log(+mySymbol)//TypeError

//단 불리언 타입으로느ㅜㄴ 암묵적으로 타입 변환된다. 이를 통해 if문 등에서 존재 확인이 가능하다.
console.log(!!mySymbol)
//if문에서 존재 확인이 가능하다.
if(mySymbol) {
	console.log('mySymbol is not empty')
}

//Symbol.for, Symbol.keyFor
//Symbol.for 메소드는 인수로 전달받은 문자열을 키로 사용하여 키와 심벌 값의 쌍들이 저장되어있는 전역 심벌 레지스트리(global symbol registry)에서 해당 키와 일치하는 심벌 값을 검색한다.
/**
 * - 검색에 성공하면 새로운 심벌 값을 생성하지 않고 검색된 심벌 값을 반환한다.
 * - 검색에 실패하면 새로운 심벌값을 생성하여 Symbol.for 메소드의 인수로 전달된 키로 전역 심벌 레지스트리에 저장한 후, 생성된 심벌 값을 반환한다.
 */

//전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
let s1 = Symbol.for('mySymbol')
//전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해달 심벌 값을 반환
let s2 = Symbol.for('mySymbol')

console.log(s1===s2)

/**
 * Symbol 함수는 호출될 때마다 유일무이한 심벌 값을 생성한다. 이때 자바 스크립틔 엔진이 관리하는 심벌 값 저장소인 전역 심벌 레지스트리에서 심벌 값을 검색할 수 있는 키를 지정ㄷ할 수 없으므로
 * 전역 심벌 레지스트리에 등록되어 관리되지 않는다. 하지만 Symbol.for 메소드를 사용하면 애플리케이션 전역에서 중복되지 않는 상수인 심벌 값을 단 하나만 생성하여 전역 심벌 레지스트리를 통해 공유할 수 있다.
 * 
 * Symbol.keyFor 메소드를 사용하면 전역 심볼 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.
 */

//전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
s1 = Symbol.for('mySymbol')
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
console.log(Symbol.keyFor(s1))

//Symbol 함수를 호출하여 생성된 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다. 
s2 = Symbol('foo')
//전역 심볼 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s2)












// 심벌과 상수 
// 위, 아래, 왼, 오를 나타내는 상수를 정의한다.
// 이때 값 1, 2, 3, 4에는 특별한 의미가 없고 상수 이름에 의미가 있다.
let Direction = {
	UP:1,
	DOWN:2,
	LEFT:3,
	RIGHT:4
};

//변수에 상수 할당
let myDirection = Direction.UP
if(myDirection === Direction.UP){
	console.log('You`re going Up')
}
/**
 * 위와 같이 값은 의미가 없고 상수 이름 자치에 의미가 있는 경우가 있다.
 * 이때 문제는 상수 값 1, 2, 3, 4는 변경될 수 있으며, 다른 변수와 값이 중복될 수도 있다는 것이다.
 * 이러한 경우 변경/중복될 가능성이 있는 무의미한 상수 대신 중복될 가능성이 없는 유일무이한 심벌 값을 사용할 수 있다.
 */

Direction={
	UP:Symbol('up'),
	DOWN:Symbol('down'),
	LEFT:Symbol('left'),
	RIGHT:Symbol('right')
};

myDirection = Direction.UP
if(myDirection===Direction.UP){
	console.log("You`re going UP with Symbol")
}

/**
 * Enum은 명명된 숫자 상수의 집합으로 열거형이라고 부른다. 
 * 자바스크립트는 enum을 지원하지 않는다. 만일 흉내내서 사용하려면 
 * 객체의 변경을 방지하기 위해 객체를 동결하는 Object.freeze메소드와 심벌 값을 사용한다.
 */
//Javascript enum
//Direction 객체는 불변 객체이며 값은 유일무이한 값이다.

Direction = Object.freeze({
	UP:Symbol('up'),
	DOWN:Symbol('down'),
	LEFT:Symbol('left'),
	RIGHT:Symbol('right')
})

myDirection = Direction.UP;
if(myDirection===Direction.UP){
	console.log('You`re going UP.')
}


//심벌가 프로퍼티 키
/**
 * 객체의 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열 또는 심벌 값으로 만들 수 있으며, 동적으로 생성할 수도 있다.
 * 심벌 값으로 프로퍼티 키를 동적 생성하여 프로퍼티를 만들어 보자. 심벌 값을 프로퍼티 키로 사용하려면 프로퍼티 키로 사용할 심벌 ㄱ밧에 대괄호를 사용해야한다. 
 * 프로퍼티ㄹ에 접근할 때에도 마찬가지로 대괄호를 사용해야한다.
 */

let obj = {
	[Symbol.for('mySymbol')] :1
}

console.log(obj[Symbol.for('mySymbol')]);

//심벌 값은 유일무이한 값으로 심벌 값으로 프로퍼티 키를 만들면 다른 프로퍼티 키와 절대 충돌하지 않는다.
//기존 프로퍼티 키와 충돌하지 않는 것은 물론, 미래에 추가될 어떤 프로퍼티 키와도 충돌할 위험이 없다.

//심벌과 프로퍼티 은닉
/**
 * 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for...in문이나 Object.keys, Object.getOwnpropertyNames메소드로 찾을 수 없다.
 * 이처럼 심벌 값을 프로퍼티 키로 사용하여 프로퍼티를 생성하면 외부에 노출할 필요가 없는 프로퍼티를 은닉할 수 있다.
 */

obj = {
	[Symbol.for('mySymbol')] :1
}

for(const key in obj){
	console.log(key)//아무것도 출력되지 않는다. 
}
console.log(Object.keys(obj)) // []
console.log(Object.getOwnPropertyNames(obj)) // []

//하지만 프로퍼티를 완전하게 숨길수 있는 것은 아니다. ES6에서 도입된 Object.getOwnPropertySymbols 메소드를 사용하면 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티를 찾을 수 있다. 

obj = {
	[Symbol.for('mySymbol')] :1
}
//getOwnPropertySymbols 메소드는 인수로 전달한 객체의 심벌 프로퍼티 키를 배열로 반환한다.
console.log(Object.getOwnPropertySymbols(obj)) //[ Symbol(mySymbol) ]

//getOwnPropertySymbols 메소드로 심벌 값도 찾을 수 있다.
let symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1])



//심벌과 표준 빌트인 객체 확장
//일반적으로 표준 빌트인 객체에 사용자 정의 메소드를 직접 추가하여 확장하는 것은 권장하지 않는다. 표준 빌트인 객체는 읽기 전용으로 사용하는 것이 좋다.

Array.prototype.sum = function() {
	return this.reduce((acc,cur)=>acc+cur,0)
};
//  Array prototype is read only, properties should not be added.eslintno-extend-native
console.log([1,2].sum())

/**
 * 그 이유는 개발자가 직접 추가한 메소드와 미래의 표준 사양으로 추가되 메소드의 이름이 중복될 수 있기 때문이다.
 * 예를 들어, Array.prototype.find 메소드가 ES6에서 도입되기 이전에 Arrays.prototype 에 사용자 장의 find를 추가하면 
 * ES6에 도입되면서 중복이 되어 사용자 정의 find를 덮어쓴다.
 * 
 * 하지만 중복될 가능 성이 없는 심벌 값으로 프로퍼티 키를 생성하여 표준 빌트인 객체를 확장하면 표준 빌트인 객체의 기존 프로퍼티키와 충돌하지 않는 것은 물론, 
 * 표준 사양의 버전이 올라감에 따라 추가될지 모르는 어떤 프로퍼티 키와도 충돌할 위험이 없어 안전파게 표준 빌트인 객체를 확장할 수 있다.
 * 
 */
