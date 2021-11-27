//표준 빌트인 생성자 함수 확장 
/**
 * 동적 상속에서 살펴보았듯이 extends 키워드 다음에는 클래스뿐만 아니라 [[Construct]] 내부 메소드 갖는 함수 객체로 평가될 수 있는 모든 표현식을 사용할 수 있다. 
 * String, Number, Array같은 표준 빌트인 객체도 [[Construct]] 내부 메소드를 갖는 생성자 함수이므로 extends 키워드를 사용해서 확장할 수 있다.
 */

class MyArray extends Array{
	//중복된 배열 요소를 제거하고 반환
	uniq(){
		return this.filter((v,i,self)=> self.indexOf(v)===i);
	}

	//평균
	average(){
		return this.reduce((pre,cur) => pre+cur, 0)/this.length;
	}
}

const myArray = new MyArray(1,2,2,3);
console.log(myArray) //MyArray(4) [ 1, 2, 2, 3 ]
console.log(myArray.uniq()) //MyArray(3) [ 1, 2, 3 ]
console.log(myArray.average()); //2
/*
Array 생성자 함수를 상속받아 확장한 MyArray클래스가 생성한 인스턴스는 Array.prototype과 MyArray.prototype의 모든 메소드를 사용할 수 있다.
이때 Array.prototype의 메소드 중에서 map, filter등의 새로운 배열을 반환하는 메소드가 반환하는 것이 MyArray클래스의 인스턴스를 반환한다는 것이다.
*/

console.log("\n")
console.log(myArray.filter(v=>v%2) instanceof MyArray); //true
/*
만약 새로운 배열을 반환하는 메소드가 MyArray클래스의 인스턴스를 반환하지 않고 Array의 인스턴스를 반환하면 MyArray 클래스의 메소드와 메소드 체이닝이 불가능하다. 
*/
console.log(myArray.filter(v=>v%2).uniq().average())//2
/**
 * myArray.filter가 반환하는 인스턴스는 MyArray클래스가 생성한 인스턴스 즉, MyArray타입이다. 
 * 따라서 myArray.filter가 반환하는 인스턴스로 uniq메소드를 연이어 호출할 수 있다. 
 * 만약 MyArray클래스의 uniq 메소드가 MyArray 클래스가 생성한 인스턴스 아닌 Array가 생성한 인스턴스를 반환하게 하려면
 * 다음과 같이 Symbol.species를 사용하여 정적 접근자 프로퍼티를 추가한다. 
 */

class MyArrayPlusReturnArray extends Array{
	//모든 메소드가 Array타입의 인스턴스를 반환하도록 한다.
	static get [Symbol.species](){return Array;}

	uniq(){
		return this.filter((v,i,self)=>self.indexOf(v)===i);
	}
	average(){
		return this.reduce((pre,cur)=> pre+cur,0)/this.length;
	}
}

const myArray2 = new MyArrayPlusReturnArray(1,1,2,3);
console.log(myArray2.uniq() instanceof MyArrayPlusReturnArray); //false
console.log(myArray2.uniq() instanceof Array); //true

//메소드 체이닝
//uniq 메소드는 Array 인스턴스를 반환하므로 average 메소드를 호출할 수 없다. 
// console.log(myArray2.uniq().average());
// TypeError
