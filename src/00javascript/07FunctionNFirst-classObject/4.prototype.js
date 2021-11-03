//>> 객체 리터럴에  의해 생성된 객체의 프로토티입
/*
     자바스크립트 엔진은 객체 리터럴을 평가하여 객체를 생성할 때 추상 연산 OrdinaryObjectCreate를 호출한다. 
     이떄 추상연산 OrdinaryObjectCreate에 전달되는 프로토 타입은 Object.prototype이다. 즉, 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prorotype이다. 
*/

const obj = {x:1};

/*
	위 객체 리털럴에 평가되면 추상 연산 OrdinaryObejctCreate에 의해 Object 생성자 함수와 Object.prototype과 생성된 객체 사이 연결이 만들어진다. 
	객체 리터럴에 의해 생성된 obj객체는 Object.prototype을 프로토타입으로 갖게 되며, 이로써 Object.prototype을 상속받는다. 
	obj객체는 constructor 프로퍼티와 hasOwnProperty 메소드등을 소유하지는 않지만 자신의 프로토타입인 Obeject.prototype의 constructor 프로퍼티와 hasOwnProperty메소드를 자신의 자산인 것처럼 자유롭게 사용할 수 있다.
	이는 Obj객체가 자신의 프로토타입인 Objet.prototype객체르 상속받았기 때문이다.
*/

//객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x')); //true






//>> Object 생성자 함수에 의해 생성된 객체의 프로토타입
/*
	Object 생성ㅅ가 함수를 인수 없이 호출하면 빈 객체가 생성된다. Object 생성자 함수를 호출하면 객체 리터럴과  마찬가지로 추상 연산 OrdinaryObejctCreate가 호출된다. 
	이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다. 
	즉, Object 생성자 함수에 의해 생성되는 객체의 프로토 타입은 Object.prototyupe이다.
*/