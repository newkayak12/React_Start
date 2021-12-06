//Number
/**
 * 표준 빌트인 객체인 Number는 원사 타입인 숫자를 다룰 때 유용한 프로퍼티와 메소드를 제공한다.
 * 
 * 표준 빌트인 객체인 Number객체는 생성자 함수 객체이다. 따라서 new 연산자와 함께 호출하여 Number인스턴스를 생성할 수 있다.
 * 
 * Number 생성자 함수에 인수를 전달하지 않고 new연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에  '0'을 할당한 Number 래퍼 객체를 생성한다.
 * 
 */

	const numObj = new Number();
	console.log(numObj); // Number {[[PrimitiveValue]] : 0}  >> ES6 [[NumberData]] 
	//[Number: 0]

//  생성자 함수의 인수로 숫자가 아닌 값을 전달하면 인수를 숫자로 강제 변환 후, [[NumberData]] 내부 슬롯 변환된 숫자를 할당한 Number 래퍼 객체를 생성한다.
//  인수를 숫자로 변환할 수 없다면 NaN을 [[NumberData]] 내부 슬로셍 할당한 Number 래퍼 객체를 생성한다.


	let numObj1 = new Number('10');
	console.log(numObj1); //[Number: 10]

	numObj1 = new Number('HELLO');
 	console.log(numObj1); //[Number: NaN]

	//new 연산자를 사용하지 않고 Number 생성자 함수를 호출하면 Number인스턴스가 아닌 숫자를 반환한다.
	// 문자열 => 숫자
	console.log(Number('0')); //0
	console.log(Number('-1')); //-1
	console.log(Number('12.42')); //12.42

	// 불리언 => 숫자
	console.log(Number(true)); //1
	console.log(Number(false)); //0





//Number Property
	//Number.EPSILON
	/**
	 * Number.EPSILON은 1과 1보다 큰 숫자 중에서 가장 작은 숫자와 같다.
	 * Number.EPSILON은 부동소수점으로 인해 발생하는 오차를 해결하기 위해서 사용한다.
	 * 아래의 예시는 Number.EPSILON을 사용해서 부동 소수점을 비교하는 함수이다.
	 */

	function isEqual(a,b){
		return Math.abs(a-b)<Number.EPSILON
	}
	console.log((0.1+0.2) === 0.3); //false
	console.log(isEqual(0.1+0.2, 0.3)); // true





	//Number.MAX_VALUE
	/**
	 * 자바스크립트에서 표현할 수 있는 가장 큰 양수의 값을 반환한다. 
	 * Number.MAX_VALUE보다 크면 Infinity이다.
	 */
	console.log(Infinity > Number.MAX_VALUE) //true

	//Number.MIN_VALUE
	/**
	 * 자바스크립트에서 표현할 수 있는 가장 작은 양수의 값을 반환한다.
	 * Number.MIN_VALUE보다 작은 값은 0이다.
	 */
	console.log(Number.MIN_VALUE > 0); //true

	//Number.MAX_SAFE_INTEGER
	// 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값이다.
	console.log(Number.MAX_SAFE_INTEGER) //9007199254740991

	//Number.MIN_SAFE_INTEGER
	//자바스크립스에서 안전하게 표현할 수 있는 가장 작은 정수값이다. 
	console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991

	//Number.POSITIVE_INFINITY
	//양의 무한대를 나타내는 Infinity와 같다.
	console.log(Number.POSITIVE_INFINITY === Infinity); //true

	//Number.NEGATIVE_INFINITY
	//음의 무한대를 나타내는 -Infinity와 같다.
	console.log(Number.NEGATIVE_INFINITY === -Infinity); //true

	//Number.NaN
	//숫자가 아님(Not-a-Number)을 나타내는 숫자값이다. window.NaN과 같다.(?????)
	console.log(Number.NaN === global.NaN); //false


	//Number.isFinite
	// ES6에서 도입된 Number.isFinite 정적 메소드는 인수로 전달된 숫자값이 정상적인 유한수, 즉 Infinity 또는 -Infinity가 아닌지 검사하여 그 겶과를 불리언 값으로 반환한다.
	
	//인수가 정상적인 유한수이면 true
	console.log(Number.isFinite(0)) 
	console.log(Number.isFinite(Number.MAX_VALUE)) 
	console.log(Number.isFinite(Number.MIN_VALUE)) 

	//인수가 무한수 이면 false
	console.log(Number.isFinite(Infinity)) 	
	console.log(Number.isFinite(-Infinity)) 	

	//NaN이면 false
	console.log(Number.isFinite(NaN)) 	

	/** 
	 * Number.isFinite과 전역 함수 isFinite은 차이가 있다.
	 * 전역 빌트인 함수는 전달 받은 인수를 숫자로 암묵적 타입 변환하여 검사하지만
	 * Number.isFinite은 전달받은 인수를 숫자로 암묵적 타입변환하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false이다.
	 */

	console.log(Number.isFinite(null))



	//Number.isInteger
	//ES6에 도입된 Number.isInteger 정적 메소드는 인수로 전달된 숫자값이 정수인지 검사하여 그 결과를 불리언 값으로 반환한다. 검사하기 전에 인수를 숫자로 암묵적 타입 변환하지 않는다.

	//인수가 정수이면  true
	console.log(Number.isInteger(0))
	console.log(Number.isInteger(123))
	console.log(Number.isInteger(-123))

	//인수가 정수가 아니면 false
	console.log(Number.isInteger(0.5))
	//암묵적 타입 변환 하지 않는다.
	console.log(Number.isInteger('1234'))
	console.log(Number.isInteger(false))
	// Infinity / -Infinity 
	console.log(Number.isInteger(Infinity))
	console.log(Number.isInteger(-Infinity))



	//Number.isNaN
	//ES6에서 도입된 Number.isNaN정적 메소드는 인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언 값으로 반환한다.

	//인수가 NaN이면 true를 반환한다.
	console.log(Number.isNaN(NaN)); //true

	/**
	 * Number.isNaN 메소드는 빌트인 전역 함수 isNaN과 차이가 있다. 
	 * 빌트인 전역 함수 isNaN은 전달받은 인수를 숫자를 암묵적으로 타입 변환하여 검사를 수행하지만 
	 * Number.isNaN 메소드는 전달받은 인수를 숫자로 암묵적 타입 변환하지 않는다. 따라서 숫자가 아닌 인수가 주어지면 false이다.
	 */

	//Number.isNaN은 인수를 숫자로 암묵적 타입변환하지 않는다.
	console.log(Number.isNaN(undefined)); //false
	
	//전역 isNaN은 인수를 숫자로 암묵적 타입변환한다.
	console.log(isNaN(undefined)); //true



	//Number.isSafeInteger
	/**
	 * ES6에서 도입된 Number.isSafeInteger 정적 메소드는 인수로 전달된 숫자값이 안전한 정수인지 검사하여 그 결과를 boolean 값으로 반환한다.
	 * 안전한 정수는 -(253-1)과 (253-1) 사이 정수값이다. 인수를 숫자로 암묵적 타입 변환하지 않는다.
	 */

	//0은 안전한 정수
	console.log(Number.isSafeInteger(0));//true
	console.log(Number.isSafeInteger(9000000000000000));//true
	console.log(Number.isSafeInteger(10000000000000001));//false
	console.log(Number.isSafeInteger(0.5));//false
	console.log(Number.isSafeInteger('123'));//false
	// 암묵적 타입변환 안 함
	console.log(Number.isSafeInteger(false));//false
	console.log(Number.isSafeInteger(Infinity));//false



	//Number.prototyupe.toExponential
	/**
	 * toExponential메소드는 숫자를 지수 표기법으로 변환하여 문자열로 반환한다.
	 * 인수로 소수점 이하로 표현할 자릿수를 전달할 수 있다.
	 */
	console.log((88.1234).toExponential()); //8.81234e+1
	console.log((88.1234).toExponential(4)); //8.8123e+1
	console.log((88.1234).toExponential(2)); //8.81e+1

	// 77.toExponential(); 
	//SyntaxError
	/**
	 * 숫자 뒤의 .은 의미가 모호하다. 부동 소수점 숫자의 소수 구분 기호일 수도 있고 객체 프로퍼티에 접근하기 위한 프로퍼티 접근 연산자일 수도 있다.
	 * 자바스크립트 엔진은 숫자 뒤의 .을 부동 소수점 숫자의 소수 구분 기호로 해석한다.
	 * 그러나 77.toExponential()에서 77은 Number 래퍼 객체이다. 따라서 77 뒤의 .을 소수 구분 기호로 해석하면 뒤에 이어지는 toExponential을 프로퍼티로 해석할 수 없으므로 에러가 할생한다.
	 * 
	 * 만약 77.1234.toExponential()은 두 번째 .를 접근 연산자로 해석한다.
	 * ex) 77.1234.toExponential()
	 * 
	 * 혹은 공백으로 .을 프로퍼티 접근 연산자로 해석하게 할 수도 있다.
	 * ex) 77 .toExponential()
	 */


	//Number.prototype.toFixed
	/**
	 * toFixed 메소드는 숫자를 반올림하여 문자열로 반환한다. 반올림하는 소수점 이하 자릿수를 나타내는 0~20사이의 정수 값을 인수로 전달할 수 있다.
	 */
	// 소수점 이하 반올림 인수를 생략하면 0과 같다.
	console.log((1234.5678).toFixed());

	// 소수점 이하 2자릿수 유효, 나머지 반올림
	console.log((1234.5678).toFixed(2));


	//Number.prototype.toPrecision
	/**
	 * toPrecision 메소드 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.
	 * 인수로 전달받은 전체 자릿수로 표현할 수 없는 경우 지수법으로 결과를 반환한다.
	 * 전체 자릿수는 0~21이고 인수를 생략하면 0이다.
	 */

	console.log((12345.6789).toPrecision()); //123455.6789
	// 전체 1자릿수 유효 나머지 반올림
	console.log((12345.6789).toPrecision(1)); //1e+4



	//Number.prototype.toString
	/**
	 * toString 메소드는 숫자를 문자열로 변환하여 반환한다.
	 * 2~36사이의 정수값을 인수로 전달할 수 있다. 인수를 생략하면 10진법이다.
	 */

	console.log((10).toString()); // 	10;
	console.log((10).toString(2)); // 	1010
	console.log((10).toString(8)); // 	12
	console.log((10).toString(32)); //	a


