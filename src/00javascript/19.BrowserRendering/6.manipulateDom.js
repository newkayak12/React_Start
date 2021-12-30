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

//insertAdjacentHTML 메소드
/**
 * Elemnet.prototype.insertAdjacentHTML(position, DOMString)  메소드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다. 
 * insertAdjacnetHTML 메서드는 두 번쨰 인수로 전달한 HTML 마크업 문자열(DOMString)을 파싱하고 그 결과로 생성된 노드를 첫 번째 인수로 전달한 위치(position)에 삽입하여 DOM에 반영한다. 
 * 첫 번째 인수로 전달할 수 있는 문자열은 'beforebegin', 'afterbegin', 'beforeend', 'afterend'의 4가지이다. 
 *        
 *[ (beforebegin) <div div id='foo'> (afterbegin) text (beforeend) </div> (afterend) ]
 * 
 * insertAdjacentHTML 메소드는 기존 요소에는 영향을 주지 않고 새롭게 삽입될 요소만을 파싱하여 자식 요소로 추가하므로 기존의 자식 노드를 모두 제거하고 다시 처음부터 새롭게 자식 노드를 생성하여 자식 요소로 추가하는 innerHTML 프로퍼티보다 효율적이고 빠르다. 
 * 단, innerHTML 프로퍼티와 마찬가지로 insertAdjacentHTML 메소드는 HTML 마크업 문자열을 파싱하므로 크로스 사이트 스크립팅 공격에 취약하다는 점은 동일하다.
 */

 // 노드 생성과 추가
 /**
  * innerHTML 프로퍼티와 insertAdjacentHTML 메소드 HTML 마크업 문자열을 파싱하여 노드를 생성하고 DOM에 반영한다.
  * DOM은 노드를 직접 생성/삽입/삭제/치환하는 메소드도 제공한다. 
  * 
  *     const $fruits = document.getElementyById('fruits');
  * 
  * //1. 요소 노드 생성
  * const $li = document.createElement("li")
  * 
  * //2. 텍스트 노드 생성
  * const textNode = document.createTextNode('banana')
  * 
  * //3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
  * $li.appendChild(textNode)
  * 
  * //4. $li 요소 노드를 #fruits 요소 노드 마지막 자식 노드로 추가
  * $fruits.appendChile($li)
  * 
  * 
  * ////////////////////////////
  *     >> 요소 노드 생성
  * Document.prototype.createElement(tageName) 메소드는 요소 노드를 생성하여 반환한다.
  * createElement 메소드의 매개변수 tageName에는 태그 이름을 나타내는 문자열을 인수로 전달한다. 
  * 
  * //1. 요소 노드 생성
  * const $div = document.createElement('div')
  * 
  * 이렇게 생성된 요소 노드는 DOM에 추가 되어있지 않은 상태이다. 따라서 이후에 생성된 노드를 DOM에 추가하는 처리가 별도로 필요하다. 
  * 그리고 createElement 메소드로 생성한 요소 노드는 아무런 자식 노드를 가지고 있지 않다. 따라서 요소 노드의 자식 노드인 텍스트 노드도 없는 상태이다. 
  * 
  * //2. 텍스트 노드 생성 
  * const textNode = document.createTextNode('banana')
  * 텍스트 노드는 요소 노드의 자식 노드이다. 하지만 createTextNode 메소드로 생성한 텍스트 노드는 요소 노드의 자식 노드로 추가되지 않고 홀로 존재하는 상태이다. 따라서 만들어 놓은 요소 노드에 추가하는 작업이 필요하다.
  * 
  * //3. 텍스트 노드를 요소 노드의 자식 노드로 추가
  * Node.prototype.appendChild(childNode) 메소드는 매개변수 childNode에게 인수로 전달한 노드를 appendChild 메소드를 호출한 노드의 마지막 자식 노드로 추가한다.
  * appendChild 메소드의 인수로 createTextNode 메소드로 생성한 텍스트 노드를 전달하면 appendChild메소드를 호출한 노드의 마지막 자식 노드로 텍스트 노드가 추가된다.
  * 이 상태 역시 기존 DOM에는 추가되지 않은 상태이다. 
  * (조금 더 간단한 방법은 만들어놓은 요소 노드의 .textContent로 textContent프로퍼티를 사용하는 것이다. )
  * 
  * //4. 요소 노드를 DOM에 추가 
  * Node.prototype.appendChild 메소드를 사용하여 텍스트 노드와 부자 관계로 연결한 요소 노드를  기존 노드의 자식으로 추가한다. 
  * 
  * 이렇게 DOM에 요소 노드를 추가하면 리플로우와 리페인트가 된다.
  * 
  * 
  * 
  * 
  * >> 여러 개의 노드를 추가하려면 forEach로 여러 번 추가할 수 있다. 하지만 DOM에 추가할 때마다 리플로우와 리페인트가 된다.
  *  이를 막기 위해서는 상위의 요소를 만들고 다중 요소를 이 안에 집어 넣어 한 번에 DOM에 추가하면 된다. 물론 이러면 상위 요소라는 불필요한 컨테이너 요소가 DOM에 추가된다. 
  * 
  * 이러한 문제는 DocumnetFragment 노드를 통해 해결할 수 있다. DocumentFragment 노드는 문서, 요소, 어트리뷰트, 텍스트 노드와 같은 노드 객체의 일종으로 부모 노드가 없어서 기존 DOM과는 별도로 존재한다는 특징이 있다. 
  * DocumentFragment 노드는 컨테이너 요소와 같이 자식 노드들의 부모 노드로서 별도의 서브 DOM을 구성하여 기존 DOM에 추가하기 위한 용도로 사용한다. 
  * DocumentFragment 노드는 기존 DOM과는 별도로 존재하므로 DocumentFragment 노드에 자식 노드를 추가하여도 기존 DOM 에는 어떠한 변경도 발생하지 않는다. 또한, DocumentFragment 노드를 DOM에 추가하면 자신은 제거되고 자신의 자식 노드만 DOM에 추가된다.
  * 
  * Document.prototype.createDocumentFragment 메소드는 비어있는 DocumentFragment 노드를 생성하여 반환한다.
  * 
  */ 
  
        // 노드 삽입
  /* 
  * // 마지막 노드로 추가
  * Node.prototype.appendChild 메소드는 인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가한다. 이때 노드를 추가할 위치를 지정할 수 없고 언제나 마지막 자식 노드로 추가한다. 
  * 
  * //지정한 위치에 노드 삽입
  * Node.prototype.insertBefore(newNode, childNode) 메소드는 첫 번쨰 인수로 전달받은 노드를 두 번쨰 인수로 전달받은 노드 앞에 삽입한다.
  * 두 번째 인수로 전달받은 노드는 반드시 insertBefore 메소드를 호출한 노드의 자식 노드이어야한다. 그렇지 않으면 DOMException 에러가 발생한다. 
  * 두 번쨰 인수로 전달받은 노드가 null이면 첫 번째 인수로 전달받은 노드를 insertBefore 메소드를 호출한 노드의 마지막 자식 노드로 추가된다. 즉, appendChild 메소드처럼 동작한다. 
  */ 

      //노드 이동
  /**
   * DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메소드를 사용하여 DOM에 다시 추가하면 현재 위치에서 노드를 제거하고 새로운 위치에 노드를 추가한다. 즉, 노드가 이동한다. 
   */
  //<ul id = 'fruits'>
  // <li>APPLE</li>
  // <li>BANANA</li>
  // <li>ORANGE</li>
  //</ul>
  /**
   * const $fruits = document.getElementById('fruits')
   * //이미 존재하는 요소 노드를 취득
   * const [ $apple, $banana ] = $fruits.children;
   * 
   * //이미 존재하는 $apple 노드를 #fruits 노드의 마지막 노드로 이동
   * $fruits.appendChild($apple)
   * 
   * //이미 존재한 $banana 노드를 #fruits 요소의 마지막 자식 노드 앞으로 이동
   * $fruits.insertBefore($banana, $fruits.lasElementChild)
   */ 


        //노드 복사
   /**
    * Node.prototype.cloneNode([deep:true | false]) 메소드는 노드의 사본을 생성하여 반환한다. 매개변수 deep에 true를 인수로 전달하면 노드를 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성하고
    * false를 인수로 전달하거나 생략하면 얕은 복사 하여 노드 자신만의 사본을 생성한다. 얕은 복사로 생성된 요소 노드는 자손 노드를 복사하지 않으므로 텍스트 노드도 없다. 
    */

   

        // 노드 교체
    /**
     * Node.prototype.replaceChild(newChild, oldChild) 메소드는 자신을 호출한 노드의 자식 노드를 다른 노드로 교체한다. 첫 번쨰 매개변수 newChild에는 교체할 새로운 노드를 인수로 전달하고, 두 번쨰 매개변수 oldChild에는 이미 존재하는 교체될 노드를 인수로 전달한다. 
     * oldChild 매개변수에 인수로 전달한 노드는 replaceChild 메소드는 자신을 호출한 노드의 자식 노드이어야 한다.
     * 즉, replaceChild 메소드는 자신을 호출한 노드의 자식 노드인 oldChild 노드를 newChild 노드로 교체한다. 이때 oldChild 노드는 DOM에서 제거된다. 
     */
            
        //<ul id = 'fruits'>
        // <li>APPLE</li>
        // <li>BANANA</li>
        // <li>ORANGE</li>
        //</ul>

    /**
     * const $fruits = document.getElementById('fruits')
     * 
     * //기존 노드와 교체할 요소 노드 생성
     * const $newChild = document.createElement('li')
     * $newChild.textContent = 'banana'
     * 
     * //#fruits 요소 노드의 첫 번쨰 요소 노드를 $newChild 요소 노드로 교체
     * $fruits.replaceChild($newChild, $fruits.firstElementChild)
     */

            //노드 삭제
    /**
     * Node.prototype.removeChild(child) 메소드는 child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다. 인수로 전달한 노드는 removeChild 메소드를 호출한 노드의 자식 노드이어야 한다. 
     */




    //어트리뷰트
    /**
     * >> 어트리뷰트 노드와 attribute 프로퍼티
     * HTML 문서의 구성 요소인 HTML 요소는 여러 개의 어트리뷰트를 가질 수 있다. HTML 요소의 동작을 제어하기 위한 추가적인 제공하는 HTML 어트리뷰트는 HTML 요소의 시작 태그에 어트리뷰트 이름 = '어트리뷰트 값' 형식으로 정의한다. 
     * 
     * //<input id='user' type='text' value='ungmo2'>
     * 
     * 글로벌 어트리뷰트(id, class, style, title, lang, tabindex, draggable, hidden 등)와 
     * 이벤트 핸들러 어트리뷰트 (onclick, onchange, onfocus, onblur, oninput, onkeypress, onkeydown, onkeyup, onmouseover, onsubmit, onload 등)는 모든 HTML요소에서 공통적으로 사용할 수 있지만 특정 HTML 요소에만 한정적으로 사용 가능한 어트리뷰트도 있다.
     * 예를 들어, id, class, style 어트리뷰트는 모든 HTML 요소에 사용할 수 있지만 type, value, checked 어트리뷰트는 input요소에만 사용할 수 있다. 
     * 
     * HTML 문서가 파싱될 때 HTML 요소의 어트리뷰트(HTML 어트리뷰트)는 어트리뷰트 노드로 변환되어 요소 노드와 연결된다. 이때 HTML 어트리뷰트 당 하나의 어트리뷰트 노드가 생성된다.
     * 즉, 위 input 요소는 3개의 어트리뷰트가 있으므로 3개의 어트리뷰트 노드가 생성된다. 
     *
     * 이때 모든 어트리뷰트 노드의 참조는 유사 패열 객체이자 이터러블인 NamedNodeMap 객체에 담겨서 요소 노드의 attribute 프로퍼티에 저장된다.  
     * 따라서 요소 노드의 모든 어트리뷰트 노드는 요소 노드의 Element.prototype.attributes 프로퍼티로 취득할 수 있다. 
     * attributes 프로퍼티는 getter만 존재하는 읽기 전용 접근자 프로퍼티이며, 요소 노드의 모든 어트리뷰트 노드의 참조가 담긴 NamedNodeMap 객체를 반환한다. 
     * 
     * 
     * >> HTML 어트리뷰트 조작
     * 앞에서 살펴본 바와 같이 요소 노드의 attribute 프로퍼티는 getter만 존재하는 읽기 전용 접근자 프로퍼티이므로 HTML어트리뷰트 값을 취득할 수 있지만 변경할 수는 없다. 또한 attribute.id.value와 같이 attributes 프로퍼티를 통해야만 HTML 어트리뷰트 값을 취득할 수 있기 때문에 불편하다.
     * 
     * Element.prototype.getAttribute/setAttribute 메소드를 사용하면 attribute 프로퍼티를 통하지 않고 요소 노드에서 메소드를 통해 직접 HTML 어트리뷰트 값을 취득하거나 변경할 수 있어 편리하다. 
     * HTML 어트리뷰트 값을 참조하려면 Element.prototype.getAttribute(attributeName)메소드를 사용하고, HTML어트리뷰트 값을 변경하려면  Element.prototype.setAttribute(attributeName, attributeValue)메소드를 사용한다. 
     */

    // <input id="user" type="text" value="ungmo2">


    /**
     * const $input = document.getElementById('user');
     * 
     * //value 어트리뷰트 값을 취득
     * const inputValue = $input.getAttribute('value');
     * console.log(inputValue); //ungmo2
     * 
     * //value 어트리뷰트 값을 변경
     * $input.setAttribute('value', 'foo');
     * console.log($input.getAttribute('value')) //foo
     * 
     * 특정 HTML 어트리뷰트가 존재하는지 확인하려면 Element.prototype.hasAttribute(attributeName) 메소드를 사용하고, 특정 HTML어트리뷰트를 삭제하려면 Element.prototype.removeAttribute(attributeName) 메소드를 사용한다. 
     * 
     * 
     *  const $input = document.getElementById('user');
     * //value 어트리뷰트의 존재 확인 
     * $input.hasAttribute('value')
     * //value 어트리뷰트 삭제
     * $input.removeAttribute('value')
     * 
     */



    // HTML어트리뷰트 VS. DOM 프로퍼티
    /**
     * 요소 노드 객체에는 HTML 어트리뷰트에 대응하는 프로퍼티(이하 DOM 프로퍼티)가 존재한다. 이 DOM 프로퍼티들은 HTML 어트리뷰트 값을 초기값으로 갖고 있다. 
     * 예를들어, <input id="user" type="text" value="ungmo2"> 요소가 파싱되어 생성된 요소 노드 객체에는 id, type, value 어트리뷰트에 대응하는 id, type, value 프로퍼티가 존재하며, 
     *이 DOM 프로퍼티들은 HTML 어트리뷰트의 값을 초기값으로 가지고 있다. 
     * 
     * DOM 프로퍼티는 setter와 getter 모두 존재하는 접ㅈ근자 프로퍼티이다. 따라서 DOM 프로퍼티는 참조화 변경이 가능하다. 
     */

     // <input id="user" type="text" value="ungmo2">

     /**
      * const $input = document.getElementById('user');
      * //요소 노드의 value프로퍼티 값을 변경
      * $input.value = 'YJ'
      * 
      * //요소 노드의 value 프로퍼티 값을 참조
      * console.log($input.value); //YJ
      * 
      * 이처럼 HTML 어트리뷰트는 다음과 같이 DOM 에서 중복 관리 되고 있는 것처럼 보인다.
      *  1. 요소 노드의 attributes 프로퍼티에서 관리하는 어트리뷰트 노드
      *  2. HTML 어트리뷰트에 대응하는 요소 노드의 프로퍼티(DOM 프로퍼티)
      * 
      * 과연 HTML 어트리뷰트는 DOM에서 중복 관리되고 있을까? 그렇지 않다. 우선 HTML 어트리뷰트의 역할을 살펴보자
      * 
      * HTML 어트리뷰트의 역할 HTML 요소의 초기 상태를 지정하는 것이다. 즉, HTML 어트리뷰트 값은 HTML요소의 초기 상태를 의미하며 이는 변하지 않는다. 
      * 
      * 예를 들어, <input id="user" type="text" value="ungmo2"> 요소의 value 어트리뷰트는 input 요소가 렌더링될 때 입력 필드에 표시할 초기값을 지정한다.
      *  즉, input 요소가 렌더링 되면 입력 필드에 초기값으로 지정한 value 어트리뷰트 값 "ungmo2"가 표시된다. 
      * 이떄 input 요소의 value 어트리뷰트 노드로 변환되어 요소 노드의 attributes 프로퍼티에 저장된다. 
      * 이와는 별도로 value 어트리뷰트의 값은 요소 노드의 value 프로퍼티에 할당된다. 따라서 input 요소의 요소 노드가 생성되어 첫 렌더링이 끝난 시점까지 어트리뷰트 노드의 어트리뷰트 값과 요소 노드의 value 프로퍼티에 할당된 값은 HTML 어트리뷰트 값과 동일하다. 
      * 
      * 
      * 첫 렌더링 이후 input에 입력을 하면 상황이 달라진다. 요소 노드는 상태를 가지고 있다. 예를 들어 사용자가 입력한 값을 상태로 가지고 있으며, checkbox 요소는 체크 상태 여부를 가지고 있다. 
      * 이때 input 요소 노드는 사용자 입력에 의해 변경된 최신 상태와 초기 상태도 관리해야한다. 초기 상태를 관리 하지 않으면 새로고침할 때 초기 상태를 표시할 수 없다. 
      * 
      * 이처럼 요소 노드는 2개의 상태, 즉 초기 상태와 최신 상태를 관리해야한다. 요소 노드의 초기 상태는 어트리뷰트 노드가 관리하며 요소 노드의 최신 상태는 DOM 프로퍼티가 관리한다.
      */


     //어트리뷰트 노드
      /**
       *  HTML어트리뷰트로 지정한 HTML 요소로 초기 상태는 어트리뷰트 노드에서 관리한다. 
       * 어트리뷰트 노드에서 관리하는 어트리뷰트 값은 사용자 입력에 의해 상태가 변경되어도 변하지 않고 HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태를 그대로 유지한다.
       * 어트리뷰트 노드 관리하는 초기 상태 취득하거나 변경하려면 getAttribute/setAttribute 메소드를 사용한다.
       * getAttribute 메소드 취득한 값은 어트리뷰트 노드에서 관리하는 HTML 요소의 지정한 어트리뷰트 값, 초기 상태 값이다.
       * HTML 요소에 지정한 어트리뷰트 값은 사용자의 입력에 의해 변하지 않으므로 결과는 언제나 동일하다. 단 setAttribute 메소드는 어트리뷰트 노드에서 관리하는 초기 상태 값을 변경한다.
       * 
       */
      //DOM프로퍼티
      /**
       * 사용자가 입력한 최신 상태는 HTML 어트리뷰트에 대응하는 요소 노드의 DOM 프로퍼티가 관리한다.
       * DOM 프로퍼티는 사용자 입력에 의한 상태 변화에 반응하여 언제나 최신 상태를 유지한다. 
       * DOM 프로퍼티로 취득한 값은 HTML 요소의 최신 상태 값을 의미한다. 이 최신 상태 값은 사용자 입력에 의해 언제든지 동적으로 변경되어 최신 상태를 유지한다. 
       * 이에 반해 getAttribute 메소드로 취득한 HTML 어트리뷰트 값, 즉 초기 상태 값은 변하지 않고 유지된다.  
       * DOM 프로퍼티에 값을 할당하는 것은 HTML요소의 최신 상태 값을 변경하는 것을 의미한다. 즉, 사용자가 상태를 변경하는 행위와 같다. 이때 HTML 요소에 지정한 어트리뷰트 값에는 어떠한 영향도 주지 않는다. 
       * 
       * 이처럼 HTML 어트리뷰트는 HTML 요소의 초기 상태 값을 관리하고 DOM 프로퍼티는 사용자의 입력에 의해 변경되는 최신 상태를 관리한다. 단, 모든 DOM 프로퍼티가 사용자의 입력에 의해 변경되 최신 상태를 관리하는 것은 아니다.
       * 예를 들어 id 프로퍼티는 사용자의 입력과 아무런 관계가 없다.  따라서 사용자 입력에 의한 상태 변화와 관계없는 id 어트리뷰트와 id 프로퍼티는 사용자 입력과 관계없이 항상한 동일한 값을 유지한다.
       * 이처럼 사용자 입력에 의한 상태 변화와 관계있는 DOM 프로퍼티만 최신 상태 값을 관리한다. 그 외의 사용자 입력에 의한 상태 변화와 관계없는 어트리뷰트와 DOM 프로퍼티는 항상 동일한 값으로 연동한다. 
       */

      // HTML 어트리뷰트와 DOM 프로퍼티의 대응 관계
      /**
       * 대부분의 HTML 어트리뷰트는 HTML 어트리뷰트 이름과 동일한 DOM 프로퍼티와 1:1로 대응한다. 
       * 단, 다름과 같이 HTML 어트리뷰트와 DOM 프로퍼티가 언제나 1:1로 대응하는 것은 아니며, HTML 어트리뷰트 이름과 DOM 프로퍼티 키가 반드시 일치하는 것도 아니다.
       * 
       *    1. id 어트리뷰트와 id 프로퍼티 1:1 대응하며, 동일한 값으로 연동한다.
       *    2. input 요소의 value어트리뷰트는 value 프로퍼티와 1:1 대응한다. 하지만 value 어트리뷰트는 초기 상태를 value 프로퍼티는 최산 상태 값을 갖는다.
       *    3. class 어트리뷰트 className, classList 프로퍼티와 대응한다.
       *    4. for 어트리뷰트는 htmlFor 프로퍼티와 1:1대응한다.
       *    5. td 요소의 colspan 어트리뷰트는 대응하는 프로퍼티가 존재하지 않느다.
       *    6. textContent 프로퍼티는 대응하는 어트리뷰트가 존재하지 않는다. 
       *    7. 어트리뷰트 이름은 대소문자를 구별하지 않지만 대응하는 프로퍼티 키는 카멜 케이스를 따른다. 
       */
      //DOM 프로퍼티 값의 타입 
      /**
       * getAttribute 메소드로 취득한 어트리뷰트 값은 언제나 문자열이다 하지만 DOM 프로퍼티로 취득한 최신 상태 값은 문자열이 아닐 수도 있다. 예를 들어 checkBox요소의 checked 어트리뷰트 값은 문자열이지만 checked 프로퍼티 값은  boolean 타입아다.
       * 
       */

      //data어트리뷰트와 dataset 프로퍼티
      /**
       * data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 잡2ㅏ스크립트 간의 데이터를 교환할 수 있다. 
       * data 어트리뷰트는 data-user-id, data-role과 같이 data- 접ㅈ두사 다음에 임의의 이름을 붙여서 사용한다.
       */
// <ul class = "users">
//   <li id ='1' data-user-id='7621' data-role='admin'> lee <li>
//   <li id ='2' data-user-id='9524' data-role='subscriber'> kim <li>
// </ul>
       /**
        * data 어트리뷰트 값은 HTMLElement.dataset 프로퍼티로 취득할 수 있다. dataset프로퍼티는 HTML요소의 모든 data 어트리뷰트의 정보를 제공하는 DOMStringMap객체를 반환한다. 
        * DOMStringMap 객체는 data어트리뷰트의 data- 접두사 다음에 붙인 임의의 이름을 카멜케이스로 변환한 프로퍼티를 가지고 있다. 이 프로퍼티로 data어트리보트의 값을 취득하거나 변경할 수 있다.
        */
