//프로퍼티 정의

/*
	프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다. 예를 들어,
	프로퍼티 값을 갱신 가능하도록 할 것인지 프로퍼티 열거를 가능하도록 할 것ㅇ니지, 프로퍼티를 재정의 가능하도록 할 것인지 정의할 수 있다. 이를 통해 객체의 프로퍼티가 어떻게 동작해야하는지 
	명확히 정의할 수 있다.

	Obejct.defineProperty메소드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다. 
*/

const person = {
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

Object.defineProperty(person,"firstName", {
	value : 'Ungmo',
	writable : true,
	enumerable : true,
	configurable: true
});

Object.defineProperty(person,"lastName", {
	value: "kim",
	enumerable:false,
	writable:false,
	configurable : false
});


let descriptor = Object.getOwnPropertyDescriptor(person,"firstName");
console.log("firstName\n", descriptor);
/*
firstName {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다. 
descriptor = Object.getOwnPropertyDescriptor(person,"lastName");

console.log("\nlastName\n", descriptor);
//lastName { value: 'kim', writable: true, enumerable: true, configurable: true }


//[[Enuerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Obejct.keys 등으로 열거할 수 없다.
//lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거가 되지 않는다.
console.log("\nEnumerable\n",Object.keys(person));


//[[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다. 
//lastName 프로퍼티는 [[Writable]]의 값이 false이므로 변경할 수 없다.
//이떄 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = "park";


//[[configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
//lastName 프로퍼티 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
//이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;


//[[configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다. 
//Object.defineProperty(person, 'lastName', {enumerable : true});
//Uncaught TypeError : Cannot redefine Property : lastName

descriptor = Object.getOwnPropertyDescriptor(person,"lastName");
console.log("\nlastName\n", descriptor);
/*
lastName
 {
  value: 'kim',
  writable: false,
  enumerable: false,
  configurable: false
}
*/

Object.defineProperty(person,"fullname",{
	get(){
		return `${this.firstName} ${this.lastName}`
	},
	set(name){
		[this.firstName, this.lastName] = name.split(" ");
	},
	enumerable: true,
	configurable:true
});




descriptor = Object.getOwnPropertyDescriptor(person,"fullname");
console.log("\nfullName\n",descriptor);
/*
fullName
 {
  get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true
}
*/

person.fullname = "heegun Lee";
console.log(person)
//{ firstName: 'heegun', fullname: [Getter/Setter] }
console.log(person.lastName)


//Object.defineProperty메소드는 한 번에 하나의 프로퍼티를 정의하는데 Object.defineProperties메소드는 여러 개의 프로퍼티를 한 번에 정의할 수 있다. 


const album = {};
Object.defineProperties(album,{
	title : {
		value : "bskbsk",
		writable : true,
		enumerable : true,
		configurable : true
	},
	artsit : {
		value : "bsk1",
		writable : true,
		enumerable : true,
		configurable : true
	},
	allTitle : {
		get(){
			return `${this.title} - ${this.artsit}`;
		},
		set(album){
			[this.title, this.artsit] = album.split(" ");
		},
		enumerable : true,
		configurable : true
	}
});

album.allTitle = 'bsk bskbsk1';
console.log(album);


//객체 변경 방지 

/*
구분		메소드				프로퍼티 추가	프로퍼티 삭제	프로퍼티 값 읽기	프로퍼티 값 쓰기	프로퍼티 어트리뷰트 재정의
객체 확장 금지 	Object.preventExtensions	    X		 O		 O		 O			 O
객체 밀봉 	Object.seal			   X		X		O		O			X
객체 동결	Object.freeze			   X		X		O		X			X
*/

//객체 확장 금지 
// 객체 확장 금지란 프로퍼티 추가 금지를 의미한다. 즉, 확장이 금지된 객체는 프로퍼티 추가가 금지된다. 
console.log("\n객체 확장금지\n")
const people = {name : 'Kim'};
//people 객체는 확장이 금지된 객체가 아니다. 
console.log(Object.isExtensible(people));
//people 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(people);
//people객체는 확장이 금지된 객체이다.
console.log(Object.isExtensible(people));

//프로퍼티 추가가 금지된다.
people.age = 20; // 무시. strict mode에서는 에러가 난다.
console.log(people); //{}

//프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
// Object.defineProperty(people, 'age', {value:20});
//TypeError:Cannot define property age, object is not extensible



//객체밀봉
console.log("\nseal\n")
//객체 밀봉이란 프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지를 의미한다. => 밀봉된 객체는 읽기와 쓰기만 가능하다. 
const people2 = {name:'Lee'};

//person 객체는 밀봉된 객체가 아니다.
console.log(Object.isSealed(people2)); //false

// person객체를 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(people2);

// person객체는 밀봉된 객체이다.
console.log(Object.isSealed(people2))//true

//밀봉된 객체는 configurable이 false이다.
console.log(Object.getOwnPropertyDescriptors(people2));

/*
{
  name: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: false
  }
}
*/

//프로퍼티 추가가 금지된다.
people2.age = 20; //무시
console.log(people2);

//프로퍼티 삭제가 금지된다. 
delete people2.name; //무시
console.log(people2);

people2.name = "kim";
console.log(people2);

// Object.defineProperty(people2, 'name', {configurable :true});
//TypeError : Cannot redefine property : name


//객체 동결 

console.log("\nfreeze\n")
const people3 = {name:"lee"};
//person 객체는 동결된 객체가 아니다.
console.log(Object.isFrozen(people3));
//person 객체를 동결하여 프로퍼티 추가, 삭제, 재정의, 쓰기 금지한다. 
Object.freeze(people3);
//person 객체는 동결된 객체이다. 
console.log(Object.isFrozen(people3));
//동결된 객체는 writable configurable이 false
console.log(Object.getOwnPropertyDescriptors(people3))
/*
{
  name: {
    value: 'lee',
    writable: false,
    enumerable: true,
    configurable: false
  }
}
*/

//프로퍼티 추가가 금지된다.
people3.age=20; //무시
console.log(people3);

//프로퍼티 삭제가 금지된다. 
delete people3.name;//무시
console.log(people3 )

people3.name="kim";//무시
console.log(people3);

//프로퍼티 어트리뷰트 재정의가 금지된다.
// Object.defineProperty(people3, 'name', {configurable:true});
//TypeError : Cannot redefine property : name









//불변 객체
console.log("Immutal Object")
//변경방지 메소드들은 변경방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체에는 영향이 없다. 

const pepl = {
	name : "Lee",
	address : {city:"Seoul"}
};

//얕은 객체 동결
Object.freeze(pepl);

//직속 프로퍼티만 동결한다. 
console.log(Object.isFrozen(pepl)); //true

//중첩 객체까지 동결하지는 못한다.
console.log(Object.isFrozen(pepl.address))//false

pepl.address.city='busan';
console.log(pepl);

function deepFreeze(target){
	//객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않는 객체만 동결한다. 

	if(target && typeof target === 'object' && !Object.isFrozen(target)){
		Object.freeze(target);
		/*
			모든 프로퍼티를 순회하며 재귀적으로 동결한다. 
			Object.keys 메소드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
			forEach 메소드 배열을 순회하며 배열의 각 요소에 대해서 콜백 함수를 실행한다. 
		*/
		Object.keys(target).forEach(key=>deepFreeze(target[key]));
	}

	return target;
};

const pepl2 = {
	name :'Lee',
	address:{city:"Seoul"}
};
//깊은 객체 동결
deepFreeze(pepl2);

console.log(Object.isFrozen(pepl2))//true
// 중첩 객체까지 동결
console.log(Object.isFrozen(pepl2.address)); //true

pepl2.address.city="Busan";
console.log(pepl2)