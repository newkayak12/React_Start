/* 
	
	기존 자바스크립트에서는 함수를 생성자 형태로 선언한 다음 상속이 필요한 변수나 함수를 prototype객체에 할당하는 방법을 사용하였다.
	prototype객체는 new 연산자로 생성ㄷ괴는 객체 안에서 this 연산자의 함수 및 변수 선언 위치를 참조할 수 있는 요소이다. 
	다음은 이와 같은 특징을 이용한 것이다. 

*/

function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

Shape.create = function (x, y) {
  return new Shape(x, y);
};
// static 함수를 선언하는 예제 == 함수 스코프 바깥으로 나와서 전역으로 js에 영향을 끼침

Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
// 인스턴스 함수를 선언하는 예제

Shape.prototype.area = function () {
  return 0;
};
//혹은
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};

var s = new Shape(0, 0);
console.log(`\n===function으로 클래스 구성 ===`);
console.log(`s.name : ${s.name}`);
console.log(`s.move : ${s.move}`);
console.log(`s.area() : ${s.area()}`);

//Circle함수를 만드는 방법으로 자식클래스 생성

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}

Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

var c = new Circle(0, 0, 10);
console.log(`\n === assign으로 상속받음 _ Circle === `);
console.log(`c.area() : ${c.area()}`);

/* 
	Circle은 내장함수 call()을 통해 부모의 생성자를 호출하여 초깃값 상속을 받는다. (자바의 super()를 이용한 것과 같다. )\
	상속은 assign()함수를 이용해서 되었다. 
*/

// ES6 클래스 사용

class Shape2 {
  static create(x, y) {
    return new Shape2(x, y);
  }

  name = 'Shape';
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var shape2 = new Shape2(0, 0);
console.log(`\n ===== class 이용 =====`);
console.log(`shape2.area() : ${shape2.area()}`);

class Circle2 extends Shape2 {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  area() {
    if (this.radius === 0) {
      return super.area();
    } else {
      return this.radius * this.radius;
    }
  }
}
var cir2 = new Circle2(0, 0, 10);
console.log(`\n=== class로 상속 ===`);
console.log(`cir2 : ${cir2.area()}`);

/* 
	단 자바와 다르게 다중상속이나 인터페이스는 지원하지 않음
*/
