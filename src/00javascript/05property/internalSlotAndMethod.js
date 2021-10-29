// 내부 슬롯과 내부 메소드
/*
	Property Attribute를 이해하기 위해서는 내부 슬롯(internal Slot)과 내부 메소드(internal Method)의 개념을 알아야한다. 
	이 둘은 JS 엔진의 구현 알고리즘을 설멍하기 위해서 ECMA Script 사양에서 사용하는 의사 프로퍼티(Pseudo property)와 의사 메소드(Pseudo method)이다. 
	내부 슬롯과 메소드는 JS 엔진에서 실제 동작하지만 갭라자가 직접 접근할 수 있도록 외부로 공개된 객체의 프로퍼티는 아니다. 단, 일부 내부 슬롯과 내부 메소드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다. 

	예를 들어, 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. 내부 슬롯은 JS 엔진 내부 로직이므로 원칙적으로 접근이 불가하지만 [[Property]]내부 슬롯의 경우, __proto__를 통해서 간접적으로 접근할 수 있다. 

*/
	const o = {};
	//내부 슬롯은 JS 엔진 내부 로직이므로 직접 접근이 불가하다.
	// o.[[Prototype]]  // Uncaught SyntaxError : Unexpected Token '['

	o.__proto__ //Object.prototype






//프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
/*
	JS엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본 값으로 자동 정의한다. 프로퍼티의 상태란 프로퍼티의 값, 갱신 가능 여부, 열거 가능 여부, 정의 가능 여부를 말한다. 
	프로퍼티 어트리뷰트는 JS 엔진이 관리하는 내부 상태 값(meta-property)인 내부 슬롯 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]이다. 
	따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메소드를 이용하여 간접적으로 확인할 수 있다. 

	ex)
*/
	const person = {
		name : "LEE"
	};

	// property attribut 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다. 
	console.log(Object.getOwnPropertyDescriptor(person,'name'));
	// { value: 'LEE', writable: true, enumerable: true, configurable: true }

	person.age = 20;

	console.log(Object.getOwnPropertyDescriptors(person));
	// ES8에 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다. 
	/*
		{
			name: {value: 'LEE', writable: true, enumerable: true, configurable: true},
			age: { value: 20, writable: true, enumerable: true, configurable: true }
		}

	*/