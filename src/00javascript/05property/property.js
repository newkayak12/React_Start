/*
	프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

	데이터 프로퍼티(data property) : 키와 값으로 구성된 일반적인 프로퍼티이다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티이다.
	접근자 프로퍼티(accessor prorperty) : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(access function)로 구성된 프로퍼티이다.               
	
	
		> 데이터 프로퍼티 : dataProperty는 아래와 같은 속성을 갖는다. 
	
	프로퍼티	프로퍼티 디스크립터					설명
	어트리뷰트	객체의 프로퍼티
	[[Value]]	value		프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값
					프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[value]]에 값을 재할당함 이때 프로퍼티가 없으면 동적으로 생성하고 값을 저장한다. 
	
	[[Writable]]	wriatble	프로퍼티 값의 변경 가능 여부를 나타내면 boolean 값을 갖는다. [[Writable]]의 값이 false인 경우에 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용이 된다. 

	[[Enumerable]]	enumerable	프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다. 
					[[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in문이나 Object.keys 메소드 등으로 열거할 수 없다. 

       [[Configurable]]	configurable	프로퍼티의 재정의 가능 여부를 나타내며 boolean 값을 갖는다. 
					[[configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다. 단, [[Writable]]이 true이면 [[value]]의 변경과 [[writable]]을 false로 변경하는 것은 허용된다. 
*/

	const person = {
		name : "lee"
	};
	person.age = 20;
	console.log(Object.getOwnPropertyDescriptors(person));
/*
	{
		name: {
		value: 'lee',
		writable: true,
		enumerable: true,
		configurable: true
		},
		age: { value: 20, writable: true, enumerable: true, configurable: true }
	}
*/



/*
		> 접근자 프로퍼티 : accessor property는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(accessor function)으로 구성된 프로퍼티이다. 
	접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 떄 사용하는 접근자 함수로 구성된 프로퍼티이다.
	접근자 프로퍼티는 아래와 같은 프로퍼티 속성을 갖는다. 


	프로퍼티	프로퍼티 디스크립터						설명
	어트리뷰트	객체의 프로퍼티

	[[Get]]		get		접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수이다. 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 어트리뷰트 [[Get]]의 값,
					즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다. 
	
	[[Set]]		set		접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수이다. 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값,
					즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다. 

    [[Enumerable]]	enumerable	데이터 프로퍼티의 [[Enumerable]]과 같다.

    [[Configurable]]	configurable	데이터 프로퍼티의 [[Configurable]]과 같다. 
*/

	const person2 = {
		firstName:"Ungmo",
		lastName:"Lee",

		//fullname은 접근자 함수로 구성된 접근자 프로퍼티이다.
		//getter함수
		get fullname(){
			return `${this.firstName} ${this.lastName}`;
		},
		//setter함수
		set fullname(name){
			//배열 디스트럭처링 할당 
			[this.firstName, this.lastName] = name.split(' ');
		}
	};

	//데이터 프로퍼티를 통한 프로퍼티 값의 참조
	console.log(person2.firstName + ' ' + person2.lastName); //Ungmo Lee

	//접근자 프로퍼티를 통한 프로퍼티 값의 저장
	//접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
	person2.fullname = 'Heegun Lee';
	console.log("\n"+person2) // {firstNmae : "Heegun", lastName : "Lee"}

	//접근자 프로퍼티를 통한 프로퍼티 값의 참조
	//접근자 프로퍼티 fullname에 접근하면 getter함수가 호출된다.
	console.log("\n"+person2.fullname) // Heegun Lee

	//firstName은 데이터 프로퍼티
	//데이터 프로퍼티는 [[value]], [[writable]], [[enumerable]], [[configurable]]
	//프로퍼티 어트리뷰트를 갖는다.

	let descriptor = Object.getOwnPropertyDescriptor(person2,"firstName");
	console.log("\n")
	console.log(descriptor);
	/*
		{
			value: 'Heegun',
			writable: true,
			enumerable: true,
			configurable: true
		}
	*/


	//fullname은 접근자 프로퍼티다.
	//접근자 프로퍼티는 [[get]], [[set]], [[enumerable]], [[configurable]]
	//프로퍼티 어트리뷰트를 갖는다.

	 descriptor = Object.getOwnPropertyDescriptor(person2,"fullname")
	 console.log("\n")
	 console.log(descriptor);

	 /*
		{
			get: [Function: get fullname],
			set: [Function: set fullname],
			enumerable: true,
			configurable: true
		}


		person2객체의 firstName, lastName 프로퍼티는 일반적인 데이터 프로퍼티이다. 메소드 앞에 get, set이 붙은 메소드는 getter/setter이고 각 함수의 이름 fullname이 접근 프로퍼티이다. 
		접근자 프로퍼티는 자체적으로 값([[value]])을 가지지 않으며 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여한다. 

		이를 내부 슬롯/메소드 관점에서 보면 접근자 프로퍼티 fullname으로 프로퍼티 값에 접근하면 내부적으로 [[Get]] 내부 메소드가 호출되어 다음과 같이 동작한다. 

			1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야한다. 프로퍼티 키 'fullname'은 문자열이므로 유효한 프로퍼티 키이다.
			2. 프로토타입 체인에서 프로퍼티를 검색한다. person 객체에 fullname프로퍼티가 존재한다.
			3. 검색된 fullname 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다. fullname 프로퍼티는 접근자 프로퍼티이다.
			4. 접근자 프로퍼티 fullname의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다. 프로퍼티 fullname의 프로퍼티 어트리뷰트 [[Get]]의 값은
			Object.getOwnPropertyDescriptor 메소드가 반환하는 프로퍼티 디스크립터(prorpertyDescriptor)객체의 get프로퍼티 값과 같다. 
	 */



			/*	프로토타입(Prototype)
				프로토 타입은 어떤 객체의 상위(부모) 객체 역할을 하는 객체이다. 프로토 타입은 하위(자식) 객체에게 자신의 프로퍼티와 메소드를 상속한다. 프로토타입 객체의 프롵퍼티나 메소드를 상속 받은 하위 객체는 자신의 프로퍼티 또는 
				메소드인 것처럼 자유롭게 사용할 수 있다.

				프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다. 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 프로토타입 체인을 따라
				프로토타입의 프로펕티나 메소드를 차례대로 검색한다. 
			*/

	//일반 객체의 __proto__는 접근자 프로퍼티이다.
	console.log("\n__proto__");
	console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
	/*
		{
			get: [Function: get __proto__],
			set: [Function: set __proto__],
			enumerable: false,
			configurable: true
		}
	*/

	console.log("\nprototype");
	console.log(Object.getOwnPropertyDescriptor(function(){}, "prototype"));
	//{ value: {}, writable: true, enumerable: false, configurable: false }

//접근자 프로퍼티와 데이터프로퍼티의 프로퍼티 디스크립터 객체의 프로퍼티가 다른 것을 알 수 있다. 