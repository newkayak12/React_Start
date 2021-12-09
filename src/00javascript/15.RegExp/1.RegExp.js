//RegExp 정규 표현식
/**
 * 정규 표현식(regular Expression)은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어이다.
 * 정규표현식은 문자열을 대상으로 패턴 매칭 기능을 제공한다. 패턴 매칭 기능이란 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능을 말한다.
 * 
 */
const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}%/;
console.log(regExp.test(tel))
/**
 * 정규 표현식을 사용하면 반복문과 조건문 없이 패턴을 정의하고 테스트하는 것으로 간단히 체크할 수 있다. 
 * 다만 정규 표현식은 주석이나 공백을 허용하지 않고 여러 가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다.
 */


/**
 * 정규 표현식 객체르 ㄹ생성하기 위해서는 정규 표현식 리터럴과 RegExp생성자 함수를 사용할 수 있다.
 * 일반적인 방법은 정규 표현식 리터럴을 사용하는 것이다.
 * 
 *			/(시작) regexp(패턴) /(종료) i(플래스)
 *
 * 이처럼 정규 표현식 리터럴은 패턴과 플래그로 구성된다. 정규 표현식 리터럴을 사용하여 간단한 정규 표현식 객체를 생성해 보자.
 */

 const target = "Is this all there is?"
 //패턴 : is
 //플래그 : i => 대소문자를 구별하지 않고 검색한다.
 let regexp = /is/i

 //test 메소드는 target 문자열에 대해 정규 표현식 regExp패턴을 검색하여 매칭 결과를 불리언값으로 반환한다.
 console.log(regexp.test(target)); 

 //regexp 생성자 함수를 사용하여 regExp객체를 생썽할 수도 있다.
 /**
  * pattern: 정규 표현식의 패턴
  * flags: 정규 표현식의 플래그(g, i, m, u, y)
  * 
  * new RegExp(pattern[, flags])
  */

  regexp = new RegExp(/is/i); //ES6
  console.log(regexp.test(target));


  //RegExp 메소드
  /**
   * 정규 표현식을 사용하는 메소드는
   * RegExp.prototype.exec,
   * RegExp.prototype.test
   * String.prototype.match
   * String.prototype.replace
   * String.prototype.search
   * String.prototype.split 등이 있다.
   */


// RegExp.prototype.exec
/**
 * exec 메소드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. 매칭 결과가 없는 경우 null반환
 */
let targets = 'Is this all there is?'
regexp= /is/;
console.log(regexp.exec(targets)) //[ 'is', index: 5, input: 'IS this all there is?', groups: undefined ]
/**
 * exec 메소드 문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫 번째 매칭 결과만 반환하므로 주의해야 한다.
 */



//RegExp.prototype.test
/**
 * test 메소드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
 */
console.log(regexp.test(targets));


//String.prototype.match
/**
 * String 표준 빌트인 객체가 제공하는 match 메소드는 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다.
 */
console.log(targets.match(regexp));
// exec 메소드는 문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫 번쨰 결과만 반환한다. 
// 하지만 String.prototype.match 메소드는 g 플래그가 지정되면 모든 매칭 결과를 배열로 반환한다.
regexp = /is/g;
console.log(targets.match(regexp));




// >> 플래그
/**
 * 플래그       의미            설명
 *   i     ignore case    대소문자를 구별하지 않고 패턴을 검색한다.
 *   g     global         대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검사한다.
 *   m     Multi line     문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
 **/

//플래그는 옵션이므로 선택적으로 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수도 있다.
//어떠한 플래그를 사용하지 않은 경우 대소문자를 구별해서 패턴을 검색한다. 그리고 문자열에 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번쨰 매칭한 대상만 검색하고 종료한다.
console.log(targets.match(/is/));  //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
console.log(targets.match(/is/i)); //['Is', index: 0, input: 'Is this all there is?', groups: undefined ]
console.log(targets.match(/is/g)); //[ 'is', 'is' ]
console.log(targets.match(/is/ig));//[ 'Is', 'is', 'is' ]



//패턴
/**
 * 정규 표현식은 "일정한 규칙(패턴)을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어"이다.
 * 정규표현식은 패턴과 플래그로 구성된다. 정규 표현식의 패턴은 문자열의 일정한 규칙을 표현하기 위해 사용하며, 정규표현식의 플래그는 정규 표현식의 검색 방식을 설정하기 위해 사용된다.
 * 
 * 패턴은 /로 열고 닫으며 문자열의 따옴표는 생략한다. 따옴표를 포함하면 따옴표까지도 패턴에 포함되어 검색된다.
 * 또한 패턴은 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다.
 * 어떤 문자열 내에 패턴과 일치하는 문자열이 존재할 때 '정규표현식과 매치 한다'고 표현한다.
 */

// >> 문자열 검색
/**
 * 정규표현식의 패턴에 문자 또는 문자열을 지정하면 검색 대상 문자열에서 패턴으로 지정한 문자 또는 문자열을 검색한다. 물론 정규 표현식을 생성하는 것만으로 검색이 수행되지는 않는다.
 * 앞서 살펴본 regExp 메소드를 사용하여 검색 대상 문자열과 정규 표현식의 매칭 결과를 구하면 검색이 수행된다.
 * 검색 대상 문자열과 플래그를 생략한 정규 표현식의 매칭 결과를 구하면 대소문자를 구별하여 정규 표현식과 매치한 첫번째 결과만 반환한다.
 */

console.log(/is/.test(targets))
console.log(targets.match(/is/))
console.log(targets.match(/is/i))
console.log(targets.match(/is/ig))


// >> 임의의 문자열 검색
/**
 * 
 * ' . '은 임의의 문자 한 개를 의미한다. 문자의 내용은 무엇이든 상관 ㅇ벗다. 다음 예제의 경우 ' . '을 3개 연속하여 패턴을 생성했으므로 문자의 내용과 상관없이 3자리 문자열과 매치한다.
 */
console.log(targets.match(/.../g));

// >> 반복 검색
/**
 * {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미한다. 콤마 뒤에 공배깅 있으면 정상작동하지 않는다.
 * 
 */
targets = 'A AA B BB Aa Bb AAA';
regexp = /A{1,2}/g; //1~2번
console.log(targets.match(regexp)); //[ 'A', 'AA', 'A', 'AA', 'A' ]
regexp = /A{2}/g //2번
console.log(targets.match(regexp)); //[ 'AA', 'AA' ]
regexp = /A{2,}/g; //최소 2번 이상
console.log(targets.match(regexp)); //[ 'AA', 'AAA' ]

//+은 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의마한다. {1,}과 같다.
//A+은 A가 최소 한 번 이상 반복되는 A, AA, AAA등과 매치한다.
regexp = /A+/g;
console.log(targets.match(regexp))  //[ 'A', 'AA', 'A', 'AAA' ]

//?은 앞선 패턴이 최대 한 번 반복되는 문자열을 의미한다. ?은 {0,1}과 같다.
// /colou?r/는 colo다음 u가 최대 한 번 반복되고(0번 포함)r이 이어지는 문자열과 매치한다.
targets = 'color colour colouur'
regexp = /colou?r/g
console.log(targets.match(regexp))  //[ 'color', 'colour' ]

//|은 or의 의미를 갖는다. 
// /A|B/는  A또는 B를 검색한다.
targets = 'A AA  B BB aa Bb';
regexp = /A|B/g
console.log(targets.match(regexp))  //['A', 'A', 'A', 'B', 'B', 'B', 'B']


//+은 분해되지 않은 단어 레벨로 검색하기 위해서 사용한다.
// A또는 B가 한 번 이상 반복되는 문자열을 전역 검색한다.
// A, AA, AAA, B, BB, BBB

regexp = /A+|B+/g;
console.log(targets.match(regexp))  //[ 'A', 'AA', 'B', 'BB', 'B' ]

targets = 'A AA AAA AAAB AAABA B BB aa Bb';
regexp = /A+A/g;
console.log(targets.match(regexp))  //[ 'AA', 'AAA', 'AAA', 'AAA' ]

//[]내의 문자는 or로 동작한다. 그 뒤에 +를 사용하면 앞선 패턴을 한 번 이상 반복한다.
targets = 'A AA B BB Aa Bb'
regexp = /[AB]+/g
console.log(targets.match(regexp))  // [ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

//범위를 지정하려면 []내에 -를 사용한다. 
//A~Z가 한 번 이상 반복되는 문자열을 전역 검색한다.
targets = 'A AA BB ZZ Aa Bb'
regexp = /[A-Z]+/g
console.log(targets.match(regexp)) //[ 'A', 'AA', 'BB', 'ZZ', 'A', 'B' ]


//대소문자 구별하지 않고 알파벳을 검색하려면
targets = 'A AA BB ZZ Aa Bb 12'
regexp = /[A-Za-z]+/g
console.log(targets.match(regexp)) //[ 'A', 'AA', 'BB', 'ZZ', 'Aa', 'Bb' ]


// 숫자를 검색하는 방법은 아래와 같다.
targets = 'AA BB 12,345345'
regexp = /[0-9]+/g
console.log(targets.match(regexp))  //[ '12', '345345' ]

//쉽표까지 포함하려면
targets = 'AA BB 12,13123123' 
regexp = /[0-9,]+/g
console.log(targets.match(regexp))  //[ '12,13123123' ]
// \d는 숫자를 의미하고 \D는 문자를 의미한다.

//숫자 \d
regexp = /[\d,]+/g
console.log(targets.match(regexp))  //[ '12,13123123' ]

//문자 \D
regexp = /[\D,]+/g
console.log(targets.match(regexp))  //[ 'AA BB ', ',' ]


// \w는 알파벳, 숫자, 언더스코어를 의미한다. \w는 [A-Za-z0-9_]와 같다. \W는 반대로 동작한다.
targets = 'Aa Bb 12,345 _!@#$'
regexp = /[\w,]+/g
console.log(targets.match(regexp)) //[ 'Aa', 'Bb', '12,345', '_' ]

regexp = /[\W,]+/g
console.log(targets.match(regexp)) //[ ' ', ' ', ',', ' ', '!@#$' ] //공백도 읽는다.


//NOT 검색 [...]안의 ^은 not을 의미한다.
//[^0-9]는 숫자를 제외한 문자라는 뜻이다.

targets = 'AA BB 12 Aa Bb'
regexp = /[^0-9]+/g;
console.log(targets.match(regexp)) //[ 'AA BB ', ' Aa Bb' ]


//시작 위치로 검색
//[...] 밖에서 ^은 문자열의 시작을 의미한다.
targets = 'https://www.apple.com'
regexp = /^https/;
console.log(regexp.test(targets)) //true


//마지막 위치로 검색
regexp = /com$/
console.log(regexp.test(targets))  //true


//특정 단어로 시작하는지 검사
regexp = /^https?:\/\//  //\은 이스케이핑
console.log(regexp.test(targets))  //true
regexp = /^(http|https:\/\/)/
console.log(regexp.test(targets))  //true


//특정 단어로 끝나는지 검사
targets = 'index.html'
regexp = /html$/
console.log(regexp.test(targets))  //true


//숫자로만 이루어진 문자열인지 검사
targets = '12345'
//숫자로만 이루어진 문자열인지 검사한다.
regexp = /^\d+$/
console.log(regexp.test(targets))

//하나 이상의 공백으로 시작하는지 검사
// \s는 여러 가지 공백 문자(스페이스, 탭 등)을 의미한다. \s는 [\t\r\n\v\f]와 같은 의미이다.
targets = ' Hi!';
console.log(/^[\s]+/.test(targets))



//*********************************************실제 예시
//아이디로 사용 가능한지 검사
targets = 'abc123'
regexp=/^[A-Za-z0-9]{4,10}$/
console.log(regexp.test(targets))
//이메일
targets = 'abc123@abc.com'
regexp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
console.log(regexp.test(targets))
//휴대폰 번호
targets = '010-1234-1234'
regexp = /^\d{3}-\d{3,4}-\d{4}$/
console.log(regexp.test(targets))
//특수 문자 포함 여부 검사
targets = 'abc#123'
regexp=(/[^A-Za-z0-9]/gi)
console.log(regexp.test(targets))
//특수문자 제거
console.log(targets.replace(regexp, ''));
