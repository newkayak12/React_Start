//자식 노드 탐색 
/**
 * 
 * Node.prototype.childNodes : 자식 노드를 모두 탐색하여 DOM 컬렉션 객체인 NodeList에 담아 반환한다.
 * childNodes 프로퍼티가 반환한 NodeList에는 요소 노드 뿐만 아니라 텍스트 노드도 포함되어 있을 수 있다.
 * 
 * Element.prototype.children : 자식 노드 중에서 요소 노드만 모두 탐색하여 DOM 컬렉션 객체인 HTMLCollecion에 담아 반환한다. 
 * children 프로퍼티가 반환한 HTMLCollection에는 텍스트 노드가 포함되지 않는다.
 * 
 * Node.prototype.firstChild : 첫 번쨰 자식 노드를 반환한다. firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드이다.
 * 
 * Node.prototype.lastChild : 마지막 자식 노드를 반환한다. lastChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드이다. 
 * 
 * Element.prototype.firstElementChild : 첫 번째 자식 요소 노드를 반환한다. firstElementChild 프로퍼티는 요소 노드만 반환한다.
 * 
 * Element.prototype.lastElementChild : 마지막 자식 요소 노드를 반환한다. lastElementChild 프로퍼티는 요소 노드만 반환한다. 
 * 
 * 
 */


//자식 노드 존재 확인
/**
 * 자식 노드가 존재하는지 확인하려면  Node.prototype.hasChildNodes 메소드를 사용한다. hasChildNoes메소드는 자식 노드가 존재하면 true, 없으면 false를 반환한다.
 * 단, hasChildNodes 메소드는 childNodes 프로퍼티와 마찬가지로 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다. 
 * 
 * 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인하려면 hasChildNodes 메소드 대신 child.length 또는 Element 인터페이스의 childElementCount 프로퍼티를 사용한다. 
 * 
 * 
 * // hasChildNodes 메소드는 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다.
 * const $fruits = document.getElementById('fruits')
 * console.log($fruits.hasChildNodes())
 * 
 * //자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인
 * console.log(!!$fruits.children.length) // >> 0 == false
 * console.log(!!$fruits.childElementCount) // >> 0 ==false
 */

// 요소 노드의 텍스트 노드 탐색
/**
 * 요소 노드의 텍스트 노드는 요소 노드의 자식 노드다. 따라서 요소 노드의 텍스트 노드는 firstChild 프로퍼티로 접근할 수 있다. firstChild 프로퍼티는 첫 번쨰 자식 노드를 반환한다. firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다. 
 */

//부모 노드 탐색
/**
 * 부모 노드를 탐색하려면 Node.prototype.parentNode 프로퍼티를 사용한다. 텍스트 노드는 DOM 트리의 최종단 노드인 리프 노드 이므로 부모 노드가 텍스트 노드인 경우는 없다.
 */

//형제 노드 탐색
/**
 * 부모 노드가 같은 형제 노드를 탐색하려면 다음과 같은 노드 탐색 프로퍼티를 사용한다. 단, 어트리뷰트 노드는 요소 노드와 연결되어 있지만 부모 노드가 같은 형제 노드가 아니기 때문에 반환되지 않는다.
 * 
 *  Node.prototype.previousSibling : 부모 노드가 같은 형제 노드 중에서 자신의 이전 형제 노드를 탐색하여 반환한다. previousSibling 프로퍼티가 반환하는 형제 노드는 요소 노드뿐만 아니라 텍스트 노드일 수도 있다. 
 *  
 *  Node.prototype.nextSibling : 부모 노드가 같은 형제 노드 중에서 자신의 다음 형제 노드를 탐색하여 반환한다. nextSibling 프로퍼티가 반환하는 형제 노드는 요소 노드 뿐만 아니라 텍스크 노드일 수도 있다. 
 * 
 *  Element.prototype.previousElementSibling : 부모 노드가 같은 형제 요소 노드 중에서 자신의 이전 형제 요소 노드를 탐색하여 반환한다. previousElementSibling 프로퍼티는 요소 노드만 반환한다.
 * 
 *  Element.prototype.nextElementSibling : 부모 노드가 같은 형제 요소 노드 중에서 자신의 다음 형제 요소 노드를 탐색하여 반환한다. nextElementSibling 프로퍼티는 요소 노드만 반환한다. 
 */

// 노드 정보 취득
/**
 * Node.prototype.nodeType : 노드 객체의 종류, 즉 노드 타입을 나타내는 상수를 반환한다. 노드 타입 상수는 Node에 정의되어 있다. 
 *                      - Node.ELEMENT_NODE : 요소 노드 타입을 나타내는 상수 1을 반환
 *                      - Node.TEXT_NODE : 텍스트 노드 타입을 나타내느 상수 3을 반환
 *                      - Node.DOCUMENT_NODE : 문서 노드 타입을 나타내는 상수 9를 반환
 * 
 * 
 * Node.prototype.nodeName : 노드 이름을 문자열로 반환한다. 
 *                      - 요소 노드 : 대문자 문자열로 태그 이름('UL', 'LI' 등)을 반환
 *                      - 텍스트 노드 : 문자열 '#text'를 반환
 *                      - 문서 노드 : 문자열 '#document'를 반환
 */