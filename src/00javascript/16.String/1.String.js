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
console.log(str.endsWith('lo',5))


// String.prototype.charAt
// charAt메소드는 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다.
str = 'String.prototype.charAt'
for(let i = 0; i<str.length; i++){
  console.log(str.charAt(i));
}


//String.prototype.substring
//substring 메소드는 댓강 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지 부분 문자열을 반환한다.
str = 'Hello World'
console.log(str.substring(1,4))
/**
 * substring 메소드의 첫 번째 인수는 두 번째 인수보다 작은 정수여야 정상이다. 하지만 다음과 같이 인수를 전달해도 정상 동작한다.
 * 1. 첫번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
 * 2. 인수 < 0 또는 NaN이면 0으로 취급
 * 3. 인수 > 문자열 길이인 경우 인수는 문자열 길이로 취급된다.
 */

 // 1. 첫번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
 console.log(str.substring(4,1))
 // 2. 인수 < 0 또는 NaN이면 0으로 취급
 console.log(str.substring(-2))
 // 3. 인수 > 문자열 길이인 경우 인수는 문자열 길이로 취급된다.
 console.log(str.substring(1, Infinity))
 console.log(str.substring(20))

 //String.prototype.indexOf와 함께 사용하면 활용도가 높아진다.
 console.log(str.substring(0,str.indexOf(' ')))
 console.log(str.substring(str.indexOf(' '),str.length))



 //String.prototype.slice
 /**
  * slice 메소드는 substric 메소드와 동일하게 동작한다. 단, slice는 음수인 인수를 전달할 수 있다. 이렇게 하면 뒤에서부터 시작한다.
  */
 console.log(str.slice(0,5))
 console.log(str.substring(0,5))

 console.log(str.slice(2))
 console.log(str.substring(2))

 console.log(str.slice(-5)) //0으로 취급
 console.log(str.substring(-5))


 //String.prototype.toUpperCase , String.prototype.toLowerCase
 console.log(str.toUpperCase())
 console.log(str.toLowerCase())



 //String.prototype.trim 
 //앞,뒤 공백을 제거한 문자열을 반환한다.
str = '                    looo          '
console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.trim())

//정규 표현식으로 비슷하게 할 수 있다.
console.log(str.replace(/\s/g,'').replace(/^\s+/g,'').replace(/\s+$/g,''))


//String.prototype.repeat
/**
 * ES6에 도입된  repeat 메소드는 대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다.
 * 인수가 0이면 빈 문자열, 음수면 RangeError를 반환한다.
 */
str = 'abc'
console.log(str.repeat())
console.log(str.repeat(1))
console.log(str.repeat(2))
console.log(str.repeat(2.5))
// console.log(str.repeat(-1)) //RangeError


//String.prototype.replace
//replace는 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번쨰 인수로 전달한 문자열로 치환한 문자열을 반환한다
str = "Hello World!"
console.log(str.replace('World','Lee'));
//검색된 문자열이 여럿 존재하면 첫 번째 검색된 것을 바꾼다.

//추가적으로 $&와 같은 특수 교체 패턴을 사용할 수 있다. $&은 검색된 문자열을 의미한다.
console.log(str.replace('world','<strong>$&</strong>'));

//정규표현식으로 전역으로 검색할 수도 있다.
str = 'Hello Hello';
console.log(str.replace(/hello/gi,'Hi!'));

//카멜 케이스를 스네이크 케이스로 변환하는 함수
function camelToSnake(camelCase){
  //  /.[A-Z]/g는 임의의 한 문자와 대문자로 이루어진 문자열에 매치한다.
  //  치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
  return camelCase.replace(/.[A-Z]/g, match=>{
    console.log(match);
    return match[0] + '_' +match[1].toLowerCase()
  })
}

const camelCase = 'helloWorld';
console.log( camelToSnake(camelCase) ); //hello_world




//스네이크 케이스 카멜 케이스로 변환하는 함수
function snakeToCamel(snakeCase){
  // /_[a-z]/g는 _와 소문자로 이루어진 문자열에 매치한다.
  // 치환 함수의 인수로 매치 결과가 전달되고, 치환 함수가 반환한 결과와 매치 결과를 치환한다.
  return snakeCase.replace(/_[a-z]/g, match=> {
    console.log(match)
    return match[1].toUpperCase();
  })
}
const snakeCase = 'hello_world';
console.log(snakeToCamel(snakeCase))//helloWorld



// String.protype.split
// split 메서드 대상 문자열에서 첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자여을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.
//인수로 빈 문자열을 전달하면 각 문자를 모두 분리하고 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
str = 'How are you doing?'
//' '으로 분리
console.log(str.split(' '))
//\s 정규표현 식으로 스페이스, 탭으로 끊기
console.log(str.split(/\s/))
// 빈문자열로 문자별 끊기
console.log(str.split(''))
// 생략해서 전체 반환
console.log(str.split())

//split 메소드는 배열을 반환한다. 따라서 Array.prototype.reverse, Array.prototype.join과 함꼐 사용하면 문자열을 뒤집을 수 있다.
function reverseString(str){
  return str.split('').reverse().join('');
}

console.log(reverseString(str))