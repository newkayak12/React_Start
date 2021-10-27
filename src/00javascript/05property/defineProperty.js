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