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
 * 
 */