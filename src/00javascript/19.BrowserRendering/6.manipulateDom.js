//DOM 조작 
/**
 * DOM조작은 새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는 것을 말한다.
 * DOM 조작에 의해 DOM에 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생하는 원인이 되므로 성능에 영향을 준다. 따라서 복잡한 콘텐츠를 다루는 DOM 조작은 성능 최적화를 위해 주의해서 다뤄야한다. 
 * 
 *  >> innerHTML
 * Element.prototype.innerHTML 프로퍼티는 setter, getter 모두 존재하는 접근자 프로퍼티로서 요소 노드의 HTML 마크업을 취득하거나 변경한다. 
 * 요소 노드의 innerHTML 프로퍼티를 참조하면 요소 노드의 콘텐츠 영역(시작~종료) 내의 포함된 모든 HTML마크업을 문자열로 반환한다. 
 */
//<body>
//  <div id='foo'>hello<span>world</span></div>
//</body>
/**
 * console.log(document.getElementById('foo').innerHTML);
 * //'hello <span>world!</span>'
 * 
 * 앞서 살펴본 textContent 프로퍼티를 참조하면 HTML마크업을 무시하고 텍스트만 반환하지만 innerHTML 프로퍼티는 HTML 마크업이 포함된 문자열을 그대로 반환한다.
 * 
 * 요소 노드의 InnerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.
 * 이처럼 innerHTML 프로퍼티를 사용하면 HTML 마크업 문자열로 간단히 DOM 조작이 가능하다.
 */
//<body>
//  <ul id='fruits'>
//      <li class='apple'>apple</li>
//  </ul>
//</body>
/**
 * const $fruits = document.getElementById("fruits")
 * 
 * //노드 추가
 * $fruits.innerHTML += '<li class='banana'>banana</li>
 * 
 * //노드 교체 
 * $fruits.innerHTML = '<li class='orange'>orange</li>'
 * 
 * //노드 삭제
 * $fruits.innerHTML = ''
 * 
 * 요소 노드의 innerHTML 프로퍼티에 할당한 HTML 마크업 문자열은 렌더링 엔진에 의해 파싱되어 요소 노드의 자식으로 DOM에 반영된다. 이때 사용자로부터 입력받은 데이터(untrusted input data)를 그대로 innerHTML 프로퍼티에 할당하는 것은
 * 크로스 사이트 스크립팅 공격(XXS)에 취약하므로 위험하다. HTML 마크업 내에 자바스크립트 악성 코드가 포함되어 있다면 파싱 과정에서 그대로 실행될 가능성이 있기 때문이다. 
 */
//<body>
//  <div id='foo'>hello</div>
//</body>
/**
 * !
 * //innerHTML 프로퍼티로 스크립트 태그를 삽인하여 자바스크립트가 실행되도록 한다.
 * //HTML5는 innerHTML 프로퍼티로 삽입된 script 요소 내의 자바스크립트 코드를 실행하지 않늗다.
 * document.getElementById('foo').innerHTML = '<script>alert(document.cookie)</script>
 * !
 * 
 * HTML5는 innerHTML 프로퍼티로 삽입된 script 요소 내의 자바스크립트 코드를 실행하지 않는다. 따라서 HTML5를 지원하는 브라우저에서 위 예제는 동작핮디 않는다.
 * 하지만 script요소 없이도 크로스 사이트 스크립팅 공격은 가능하다. 아래의 예시는 모던 브라우저에서도 동작한다.
 * 
 * !
 * document.getElementById('foo').innerHTML = `<img src='x' onerror='alert(document.cookie)'>
 * !
 *  
 * 이처럼 innerHTML프로퍼티를 사용한 DOM 조작은 구현이 간단하고 직관적이지만 크로스 사이트 스크립팅 공격에 취약하다. 
 * 
 * [ >HTML sanitization > 크로스 사이트 스크립팅 공격을 예방하기 위해 잠재적 위험을 제거하는 기능]
 * 
 * 
 * innerHTML 프로퍼티의 또 다른 단점은 요소 노드의 innerHTML 프로퍼티에 HTML마크업 문자를 할당하는 경우, 요소 노드의 모든 자식 노드를 제거하고 할당한 HTML 마크업 문자열을 파싱하여 DOM으로 변경한다.
 *  이 경우 기존에 유지할 필요가 있는 자식 노드까지 모두 제거하고 다시 처음부터 새롭게 자식 노드를 생성하여 DOM에 반영한다. 이는 효율적이지 않다.
 * 
 * 뿐만 아니라 innerHTML 프로퍼티는 새로운 요소를 삽입할 때 삽입될 위치를 지정할 수 없다는 단점도 있다.
 */
//<ul id='fruits'>
//  <li class'apple'>apple</li>
//  <li class'banana'>banana</li>
//</ul>
/**
 * 또한 위의 예시에서 li.apple 요소와 li.banana 사이에 요소를 삽입할 수 없다. 즉, 위치를 지정할 수 없다. 
 */