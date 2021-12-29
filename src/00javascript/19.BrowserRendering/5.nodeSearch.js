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

//요소 노드의 텍스트 조작
/**
 * nodeValue
 *  : 노드 탐색, 노드 정보 프로퍼티는 모두 읽기 전용 접근자 프로퍼티이다. Node.prototype.nodeValue는 setter, getter가 모두 존재하는 접근자 프로퍼티이다. 따라서 nodeValue 프로퍼티는 참조화 할당 모두 가능하다. 
 * 노드 객체의 nodeValue 프로퍼티를 참조하면 노드 객체의 값을 반환한다. 노드 객체의 값이란 텍스트 노드의 텍스트이다. 
 * 따라서 텍스트 노드가 아닌 노드, 즉 문서 노드나 요소 노드의 nodeValue 프로퍼티를 참조하면 null을 반환한다. 
 */

//<body>
//  <div id="foo"> hello </div>
//</body>

/**
 * 
 * //문서 노드의 nodeValue 프로퍼티를 참조한다.
 * console.log(document.nodeValue) // null
 * 
 * // 요소 노드의 nodeValue 프로퍼티를 참조한다.
 * const $foo = document.getElementById('foo')
 * console.log($foo.nodeValue)//null
 * 
 * //텍스트 노드의 nodeValue 프로퍼티를 참조한다.
 * const $textNode = $foo.firstChild;
 * console.log($textNode.nodeValue) //hello
 * 
 * 
 * 이처럼 텍스트 노드의 nodeValue 프로퍼티를 참조할 떄만 텍스트 노드의 값, 즉 텍스트를 반환한다. 
 * 텍스트 노드가 아닌 노드 객체의 nodeValue 프로퍼티를 참조하면 null을 반환하므로 의미가 없다.
 * 텍스트 노드의 nodeValue 프로퍼티에 값을 할당하면 텍스트 노드의 값, 즉 텍스트를 변경할 수 있다. 따라서 요소 노드의 텍스트를 변경하려면 아래와 같은 순서가 필요하다.
 * 
 *      1. 텍스트를 변경할 요소 노드를 취득한 다음, 취득한 요소 노드의 텍스트 노드를 탐색한다. 텍스트 노드는 요소 노드의 자식 노드이므로 firstChild를 사용해서 탐색한다.
 * 
 *      2. 탐색한 텍스트 노드의 nodeValue 프로퍼티를 사용하여 텍스트 노드의 값을 변경한다. 
 * 
 * 
 * 
 * textContent
 * Node.prototype.textContent 프로퍼티는 setter와 getter 모두 존재하는 접근다 프로퍼티로서 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다. 
 * 요소 노드의 textContent 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역(시작 태그와 종료 태그 사이) 내의 텍스트를 모두 반환한다. 
 * 다시 말해, 요소 노드의  childNodes 프로퍼티가 반환한 모든 노드들의 텍스트 노드의 값, 즉 텍스트를 모두 반환한다. 이때 HTML 마크업은 무시된다. 
 */
//<body>
//  <div id = 'foo'>hello <span> world!</span></div>
//</body>
/**
 * console.log(document.getElementById('foo').textContent); //hello world!
 * 
 * 앞서 살펴본 nodeValue 프로퍼티를 참조하여도 텍스트를 취득할 수 있었다. 단, 텍스트 노드가 아닌 노드의 nodeValue 프로퍼티는 null을 반환하므로 의미가 없고 텍스트 노드의 nodeValue 프로퍼티를 참조할 때만 텍스트 노드의 값, 즉 텍스트를 반환한다. 
 * 다만 nodeValue 프로퍼티를 사용하면  textContent 프로퍼티를 사용할 때와 비교하여 복잡하다. 
 * 
 * #foo 요소 노드는 텍스트 노드가 아니다. 
 * console.log(document.getElementById('foo').nodeValue) //null
 * 
 * #foo 요소 노드의 자식 노드인 텍스트 노드의 값을 취득한다. 
 * console.log(document.getElementById('foo').firstChild.nodeValue) // hello
 * 
 * span 요소 노드의 자식 노드인 텍스트 노드의 값을 취득한다.
 * console.log(document.getElementById('foo').lastChild.firstChild.nodeValue)//world
 * 
 * 만약 요소 노드의 콘텐츠 영역의 자식 요소 노드가 없고 텍스트만 존재한다면 firstChild.nodeValue와 textContent 프로퍼티는 같은 결과를 반환한다. 
 */
//<body>
//  <div id='foo'> hello </div>
//</body> 
 /**
  * const $foo = document.getElementById('foo');
  * //요소 노드의 콘텐츠 영역에 자식 요소 노드가 없고 텍스트만 존재한다. 
  * //firstChild.nodeValue와 textContent는 같은 결과를 반환한다. 
  * console.log($foo.textContent === $foo.firstChild.nodeValue); // true
  
  요소 노드의 textConternt 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가된다. 이때 할당한 문자열에 HTML 마크없이 포함되어 있더라도  문자열 그대로 인식되어 텍스트로 취급된다. 즉, HTML 마크업이 파싱되지 않는다. 
  */
 //<body>
 // <div id = 'foo'> hello <span> world!</span></div>
 //<body>
 /**
  * //#foo 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가된다. 
  * //이떄 HTML 마크업이 파싱되지 않는다.
  * document.getElementById('foo').textContent == 'hi<span>world!</span>'
  * 
  * 참고로 textContent 프로퍼티와 유사한 동작을 하는 innerText 프로퍼티가 있다. innerText 프로퍼티는 아래와 같은 이유에서 사용하지 않는 것이 좋다.
  * 
  *     1. innerText 프로퍼티는 css에 순종적이다. 예를 들어 innerText 프로퍼티는 css에 의해 비표시(visibility:hidden;)로 지정된 요소 노드의 텍스트를 반혼하지 않는다.
  * 
  *     2. innerText 프로퍼티는 css를 고려해야 하므로 textContent 프로퍼티보다 느리다. 
  */