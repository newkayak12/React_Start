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

  