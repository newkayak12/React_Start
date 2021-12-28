//HTMLCollection과 NodeList
/**
 * 
 * DOM 컬렉션 객체인 HTMLCollection과 NodeList는 DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체다. 
 * HTMLCollection과 NodeList는 모두 유사 배열 객체이면서 이터러블이다. 따라서 for...of문으로 순회할 수 있으며 스프레드 문법을 사용하여 간단히 배열로 변환할 수 있다. 
 * 
 * HTMLCollection 과 NodeList의 중요한 특징은 노드 객체의 상태 변화를 실시간으로 반영하는 살아있는 객체라는 것이다. HTMLCollection은 언제나 live 객체로 동작한다. 
 * 단, NodeList는 대부분의 경우 노드 객체의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작하지만 경우에 따라 lIVE 객체로 동작할 떄가 있다. 
 * 
 * 
 *  > HTMLCollection
 * : getElementsByTagName, getElementsByClassName 메소드가 반환하는 HTMLCollection 객체는 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 DOM 컬렉션 객체이다.
 * 따라서 HTMLCollection 객체를 살아 있는 객체라고 부르기도 한다. 
 */
//
//<li class='red'>apple</li>
//<li class='red'>banana</li>
//<li class='red'>orange</li>
//
 /**
  * //class가 red인 노드 탐색하여 HTMLCollection 객체에 담아 반환
  * const $elems = document.getElementsByClassName('red')
  * 
  * //이 시점에 HTMLCollection 객체에는 3개의 요소 노드가 담겨 있다. 
  * console.log($elems) // HTMLCollection(3) [li.red, li.red, li.red]
  * 
  * 
  * for(let i = 0; i<$elems.length; i++)}{
  *     $elems[i].className = 'blue'
  * }
  * 
  * //HTMLCollection 객체의 요소가 3개에서 1개로 변경되었다.
  * console.log($elems) // HTMLCollection(1) [li.red]
  * 
  * 실행해보면 모두 blue로 변경되지 않는다. 
  *     1. 첫 번쨰 반복 ( i===0 )
  *        : $elems[0]은 첫 번쨰 li 요소이다. 이 요소는 className 프로퍼티에 의해 class값이 
  * 'red'에서 'blue'로 변경된다. 이때 첫 번쨰 li요소는 class값이 'red'에서 'blue'로 변경되었으므로 getElementByClassName 메소드의 인자로 전달된 'red'와 더는 일치하지 않기 떄문에 $elems에서 실시간으로 제거된다.
  * HTMLCollection 객체는 실시간으로 노드 객체의 상태 변경을 반영하는 살아있는 DOM 컬렉션 객체에다. 
  * 
  * 
  *     2. 두 번째 반복 ( i===1 )
  *         : 첫 번쨰 반복에서 첫 번쨰 li 요소는 $elems에서 제거 되었다. 따라서 $elems[1]은 세 번쨰 li 요소이다. 이 세 번쨰 li요소의 class값도 blue로 변경되고 HTMLCollecion 객체인 $elems에서 실시간으로 제외된다. 
  * 
  * 
  *     3. 세 번째 반복 ( i===2 )
  *         :첫 번째, 두 번째 반복에서 첫 번째, 세 번째가 $elems에서 제거 되었다. 따라서 $elems는 두 번째 li 요소 노드만 남았다. 이때 $elems.length는 1이므로 for 문의 조건식 
  * i<$elems.length가 false가 되면서 반복이 종료된다. 이러한 과정으로 두 번쨰 li요소의 class값은 변경되지 않는다. 
  * 
  * 이러한 문제를 해결하는 방법으로 for 문을 역방향으로 순회하거나 while로 순회하는 방법이 있다. 더 간단한 방법은 이러한 부작용을 일으키는 HTMLCollection 객체를 사용하지 않는 것이다. 유사 배열 객체이면서 이터러블인 HTMLCollection 객체를 배열로 변환하면 부작용을 발생시키는 HTMLCollection을 사용할 필요가 없다. 더 나아가 forEach, map, filter, reduce 등의 고차함수를 사용할 수도 있다. 
  * 
  * 
  * [...$elems].forEach(elem=>elem.className = 'blue')
  * //유사 배열 객체이면서 이터러블인 HTMLCollection을 배열로 변환하여 순회
  */




 //NodeList
 /**
  * HTMLCollection의 부작용을 해결하기 위해서 getElementByTagName, getElementsByClassName 메소드 대신 querySelectorAll 메소드를 사용하는 방법도 있다. 
  * querySelectorAll 메소드는 DOM 컬렉션 객체인 NodeList 객체를 반환한다. 이때 NodeList는 실시간으로 노드 객체의 상태 변경을 반영하지 않는 객체이다.
  * querySelectorAll이 반환하는 NodeList객체는 NodeList.prototype.forEach 메소드를 상속받아 사용할 수 있다. NodeList.prototype.forEach 메소드는 Array.prototype.forEach 메소드와 사용 방법이 동일하다. 이회에서 item, entries, keys, value 메소드를 제공한다.
  * 
  * NodeList 객체는 대부분의 경우 노드 객체의 상태 변경을 실시간으로 반영하지 ㅇ낳고 과거의 정적 상태를 유지하는 non-live 객체로 동작한다.
  * 하지만 childNodes 프로퍼티가 반환하는 NodeList 객체는 HTMLCollecion 객체와 같이 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로 주의가 필요하다. 
  * 
  * 
  * 
  * 이처럼 HTMLCollection이나 NodeList 객체는 예상과 다르게 동작할 떄가 있어서 다루기 까다롭다. 
  * 노드 객체의 상태 변경과 상관없이 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것이 낫다.
  * HTMLCollection, NodeList 객체는 모두 유사 배열 객체이면서 이터러블이다. 따라서 스프레드 문법이나 Array.from 메소드를 사용하여 간단히 배열로 변환할 수 있다. 
  */

 //노드 탐색

 /**
  * 요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며 부모, 형제, 자식 노드 등을 탐색해야할 떄가 있다. DOM 트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티를 제공한다. 
  * 
  * parentNode, previousSibling, firstChild, childNoes 프로퍼티는 Node.prototype이 제공하고, 프로퍼티 키에 Element가 포함된 previousElementSibling, nextElementSibling과 children 프로퍼티는 Element.prototype이 제공한다. 
  * 
  * 노드 참색 프로퍼티는 모두 접근자 프로퍼티다. 단, 노드 탐색 프로퍼티는 sette없이 getter만 존재하며 참조만 가능한 읽기 전용 접근자 프로퍼티다. 읽기 전용 접근자 프로퍼티에 값을 할당하면 아무런 에러 없이 무시된다. 
  * 
  * 
  * ?__ 공백 텍스트 노드
  * HTML 요소 사이의 스페이스, 탭, 줄바꿈(개행) 등의 공백 문자는 텍스트 노드를 생성한다. 
  * 텍스트 에디터에서 HTML 문서에 스페이스, 탭, 엔터 키 등을 입력하면 공백 문자가 추가된다. 
  * 
  *     //<ul id='fruits'>
  *     //<li class='apple'>apple</li>
  *     //<li class='banana'>banana</li>
  *     //<li class='oragne'>orange</li>
  *     //</ul>
  * 
  * 위 HTML문서에도 공백 문자가 포함되어 있다. 위 HTML 문서는 파싱되어 공백 텍스트를 포함한 DOM을 생성한다. 노드를 탐색할 때는 공백 문자가 생성한 공백 텍스트 노드에 주의해야한다. 위의 예시에서 공백 문자를 제거하면 공백 텍스트 노드를 생성하지 않는다. 다만, 가독성에 좋지 않다.
  * 
  * 
  *     <ul id='fruits'><li
  *      class='apple'>apple</li><li 
  *      class='banana'>banana</li><li
  *      class='oragne'>orange</li></ul>
  * 
  */ 