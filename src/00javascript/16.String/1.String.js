//String
/**
 * 표준 빌트인 객체인 String 객체는 생성자 함수 객체이다. 따라서 new 연산자와 함께 호출하여 String 인스턴스를 생성할 수 있다.
 * String 생성자 함수에 인수를 전달하지 않고 new 연산자와 함계 호출하면 [[StringData]] 내부 슬롯에 빈 문자열을 할당한 String 래퍼 객체를 생성한다.
 */

let strObj = new String();
console.log(strObj) //[String: '']
		    /**
		     * String {''}
		     * length: 0
		     * [[Prototype]]: String
		     * [[PrimitiveValue]]: ""
		     */

 strObj = new String('Lee');
 console.log(strObj)
			/*
				String {'Lee'}
				0: "L"
				1: "e"
				2: "e"
				length: 3
				[[Prototype]]: String
				[[PrimitiveValue]]: "Lee"
			*/

/**
 * String 래퍼 객체는 배여로가 마찬가지로 length 프로퍼티와 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.
 * 따라서 배열과 유사하게 인덱스를 사용하여 각 문자에 접근할 수 있다.
 */

console.log(strObj[0])
//단 문자열은 원시 값으로 변경할 수 없다. + 에러가 발생하지 않는다.

strObj = new String(null)
console.log(strObj) //String {'null'}0: "n"1: "u"2: "l"3: "l"length: 4[[Prototype]]: String[[PrimitiveValue]]: "null"


// new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 String 인스턴스가 아닌 문자열을 반환한다.
// 숫자  -> 문자열
console.log(String(1))		// "1"
console.log(String(NaN))	// "NaN"
console.log(String(Infinity))	// "Infinity"

// 불리언  ->  문자열
console.log(String(true)) 	// "true"
console.log(String(false))	// "false"


//length 프로퍼티
console.log('Hello'.length)
console.log('안녕하세요!'.length)


//String 메소드
/**
 * 배열에는 원본 배열을 직접 변경하는 메소드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메소드가 있다.
 * 하지만 String 객체에는 원본 String 래퍼 객체를 직접 변경하는 메소드는 존재하지 않는다. 즉, String 객체의 메소드는 언제나 새로운 문자열을 반환한다.
 * 무자열은 변경 불가능한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다.
 */

console.log(Object.getOwnPropertyDescriptors(new String('Lee')))
/*
{
  '0': {
    value: 'L',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '1': {
    value: 'e',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '2': {
    value: 'e',
    writable: false,
    enumerable: true,
    configurable: false
  },
  length: { value: 3, writable: false, enumerable: false, configurable: false }
}


	만약 String 래퍼 객체가 읽기 전용 객체가 아니라면 변경된 String 래퍼 객체를 문자열로 되돌릴 때 문자열이 변경된다.
	따라서 String 객체의 모든 메소드는 String 래퍼 객체를 직접 변경할 수 없고, String 객체의 메소드는 언제나 새로운 문자열을 생성하여 반환한다.
*/


// String.prototype.indexOf
/**
 * indexOf 메소드는 대상 문자열에서 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
 */
let str = 'Hello World';
console.log(str.indexOf('l'));
//indexOf는 대상 문자열에 특정 문자열이 존재하는지 확인할 때 유용하다.
//ES6에서 도입된 String.prototype.includes메소드를 사용하면 가독성이 좋다.
console.log(str.includes('Hello'))



//String.prototype.search
/**
 * search 메소드는 대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
 */
console.log(str.search(/o/))
console.log(str.search(/x/))


//String.prototype.includes
/**
 * ES6에서 도입된 includes메소드는 대상 문자열에 ㅇ니수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 true또는 false로 반환한다.
 */
console.log(str.includes('x'));

//메소드의 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
console.log(str.includes('l',3))


//String.prototype.startsWith
/**
 * ES6에서 도입된 startsWith 메소드는 대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true, false로 반환한다.
 */
//He로 시작하는지 검사
console.log(str.startsWith('He'))
//x로 시작하는지 검사
console.log(str.startsWith('x'))
//' ' 인덱스 5부터 문자열이 ' '로 시작하는지 검사
console.log(str.startsWith(' ',5))



//String.prototype.endsWith


//ld로 끝나는지 검사
console.log(str.endsWith('ld'))
//x로 끝나는지 검사
console.log(str.endsWith('x'))
//처음부터 5자리가 lo로 끝나는지 검사
console.log(str.startsWith('lo',5))
