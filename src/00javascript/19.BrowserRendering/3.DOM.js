//DOM
/*DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메소드를 제공하는 트리 자료구조다. 

        > NODE
       1.  HTML요소와 노드 객체 

        <div class='greeting'> hello </div>
    
        <div : 시작 태그
        class : 어트리뷰트 이름
        ='greeting' : 어트리뷰트 값
        hello : 콘텐츠
        </div> : 끝 태그

        HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM 을 구성하는 요소 노드 객체로 변환된다.
        이때 HTML 요소의 어트리뷰트는 어트리뷰트 노드로, HTML 요소의 텍스트 콘텐츠는 텍스트 노트로 변환된다. 
        HTML 문서는 HTML 요소들의 집합으로 이뤄지며, HTML 요소는 중첩관계를 갖는다.
        즉, HTML요소의 콘텐츠 영역(시작~종료 태그)에는 텍스트뿐만 아니라 다른 HTML요소도 포함할 수 있다.
        이때 HTML 요소 간에는 중첩 관계에 의해 계층적인 부자 관계가 형성된다. 이러한 HTML 요소 간의 부자 관계를 반영하여 HTML문서의 구성 요소인 HTML요소를 객체화한 모든 노드 객체들을 트리 자료 구조로 구성한다.


        2. 트리 자료구조

        트리 자료 구조는 노드들의 계층 구조로 이뤄진다. 즉, 트리 자료구조는 부모 노드와 자식 노드로 구성되어 노드 간의 계층적 구조를 표현하는 비선형 자료구조를 말한다. 트리 자료구조는 하나의 최상위 노드에서 시작한다. 최상위 노드는 부모 노드가 없으며, 루트 노드라고 한다. 루트 노드는 0개 이상의 자식 노드를 갖는다. 자식 노드가 없는 노드를 리프 노드라고 한다.

        노드 객체들로 구성된 트리 자료 구조를 DOM 이라고 한다. 노드 객체의 트리로 구조화되어 있기 때문에 DOM을 DOM 트리라고 부르기도 한다.


        3. 노드 객체의 타입
        DOM은 노드 객체의 계층적인 구조로 구성된다. 노드 객체는 종류가 있고 상속 구조를 갖느다. 노드 객체는 총 12개의 노드 종류(노드 타입)가 있다. 이 중에서 중요한 노드 타입은 4가지 이다.

            3-1 문서 노드
                : 문서 노드는 DOM 트리 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다. 
                 document객체는 브라우저가 렌더링한 HTML문서 전체를 가리키는 객체로서 전역 객체 window의 document프로퍼티에 바인딩되어 있다.
                 따라서 문서 노드는 window.document 또는 document로 참조할 수 있다.

                브라우저 환경의 모든 자바스크립트 코드는 script 태그에 의해 분리되어 있어도 하나의 전역 객체 window를 공유한다. 
                따라서 모든 자바스크립트 코드는 전역 객체 window의 document 프로퍼티에 바인딩되어 있는 하나의 document 객체를 바라본다.
                즉, HTML 문서당 document 객체는 유일하다.

                문서 노드, 즉 document 객체는 DOM 트리의 루트 노드이므로 DOM 트리의 노드들에 접근하기 위한 진입점 역할을 담당한다.
                즉, 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야한다. 

            3-2 요소 노드
                : 요소 노드는 HTML 요소를 가리키는 객체이다. 요소 노드는 HTML 요소 간의 중첩에 의해 부자 관계를 가지며, 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 표현하낟고 할 수 있다. 

            3-3 어트리뷰트 노드
                : 어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다. 어트리뷰트 노드는 어트리뷰트가 지정된 HTML 요소의 요소 노드와 연결되어 있다. 단, 요소 노드는 부모 노드와 연결되어 있지만 어트리뷰트 노드는 부모 노드와 연결되어 있지 안혹 요소 노드에만 연결되어 있다. 
                
                즉, 어트리뷰트 노드는 부모 노드가 없으므로 요소 노드의 형제 노드는 아니다. 따라서 어트리뷰트 노드에 접근하여 어트리뷰트를 참조하거나 변경하려면 먼저 요소 노드에 접근해야한다. 

            3-4 텍스트 노드
                : 텍스트 노드는 HTML 요소의 텍스트를 가리키는 객체이다. 요소 노드가 문서의 구조를 표현한다면 텍스트 노드는 문서의 정보를 표현한다고 할 수 있다. 
                텍스트 노드는 요소 노드의 자식 노드이며, 자식 노드를 가질 수 없는 리프 노드이다. 즉, 텍스트 노드는 DOM 트리의 최종단이다.
                따라서 텍스트 노드에 접근하려면 먼저 부모 노드인 요소 노드에 접근해야 한다.

            위 4가지 노드 타입 외에도 주석을 위한 comment 노드, doctype을 위한 documentType노드, 복수의 노드를 생성하여 추가할 때 사용하는 
            documentFragment 노드 등 총 12개의 노드 타입이 있다. 

*/  


// 노드 객체의 상속 구조 
/**
 *  DOM은 HTML 문서의 계층적 구조와 정보를 표현하며, 이를 제어할 수 있는 API, 즉 프로퍼티와 메소드를 제공하는 트리 자료구조이다. DOM을 구성하는 노드 객체는 자신의 구조와 정보를 제어할 수 있는 DOM API를 사용할 수 있다.
 * 이를 통해 노드 객체는 자신의 부모, 형제, 자식을 탐색할 수 있으며, 자신의 어트리뷰트와 텍스트를 조작할 수도 있다. 
 * 
 * DOM을 구성하는 노드 객체는 ECMAScript 사양에 정의된 표준 빌트인 객체가 아니라 브라우저 환경에서 추가적으로 제공하는 호스트 객체이다.
 * 하지만 노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다. 노드 객체의 상속 구조는 아래와 같다. 
 * 
 * 
 * 
 * 
 * 
 * Object > eventTarget > node > 1 document > HTMLDocument
 *                             > 2 Element > HTMLElement >  [아래에 정리]
 *                             > 3 Attr
 *                             > 4 CharacterData > Text
 *                                               > comment
 * 
 * 
 * HTMLElement
 * [HTMLhtmlElement, HTMLHeadElement, HTMLMetaElement, HTMLLinkElement, HTMLScriptElement, HTMLBodyElement, HTMLUListElement, HTMLLIElement ...]
 * 
 * 
 * 위와 같이 모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다. 추가적으로 문서 노드는 Document, HTMLDocument 인터페이스를 상속 받고 어트리뷰트 노드는 Attr, 텍스트 노드는 CharacterData 인터페이스를 각각 상속 받는다. 
 * 
 * 요소 노드는 Element 인터페이스를 상속받는다. 또한 요소 노드는 추가적으로 HTMLElement와 태그의 종류별로 세분화된 
 * HTMLElement, HTMLHeadElement, HTMLBodyElement, HTMLUListElement 드으이 인터페이스를 상속 받는다.
 * 
 * 이른 프로토타입 체인 관점에서 살펴보면 input요소를 파싱하여 객체화한 input 요소 노드 객체는 HTMLInputElement, HTMLElement, ELement, Node, EventTarget, Object의 prototype에 바인딩되어 있는 프로토타입 객체를 상속받는다. 
 * 즉, input 요소 노드 객체는 프로토타입 체인에 있는 모든 프로토타입의 프로퍼티나 메소드를 상속받아 사용할 수 있다. 
 */

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text">
// </body>
// </html> 

    //input 요소 노드 객체를 선택
    const $input = document.querySelector('input');
    // console.log(
    //     Object.getPrototypeOf($input)===HTMLInputElement.prototype,
    //     Object.getPrototypeOf(HTMLInputElement.prototype)===HTMLELement.prototype,
    //     Object.getPrototypeOf(HTMLELement.prototype)===Element.prototype,
    //     Object.getPrototypeOf(Element.prototype)===Node.prototype,
    //     Object.getPrototypeOf(Node.prototype)===EventTarget.prototype,
    //     Object.getPrototypeOf(EventTarget.prototype) === Object.prototype
    // )
    //모두 true


    /**
     * 배열이 객체인 동시에 배열인 것처럼 input 요소 노드 객체도 다음과 같이 다양한 특성을 갖는 객체이며, 이러한 특성을 나타내는 기능들을 상속을 통해 제공받는다. 
     * 
     * ---------------------------------------------------------------------   
     *  input 요소 노드 객체의 특성                         프로토타입을 제공하는 객체
     * 
     *  객체                                                Object
     *  이벤트를 발생시키는 객체                                 EventTarget
     *  트리 자료구조의 노드 객체                                Node
     * 
     *  브라우저가 렌더링할 수 있는 웹 문서의 요소
     *  (HTML, XML, SVG)를 표현하는 객체                       Element
     * 
     *  웹 문서의 요소 중에서 HTML 요소를 표현하는 객체              HTMLElement
     *  HTML 요소 중에서 input 요소를 표현하는 객체                HTMLInputElement
     * ----------------------------------------------------------------------
     * 
     *  노드 객체에는 노드 객체의 종류, 즉 노드 타입에 상관없이 모든 노드 객체가 공통으로 갖는 기능도 있고, 노드 타입에 따라 고유한 기능도 있다. 예를 들어, 모든 노드 객체는 이벤트를 발생시킬 수 있다.
     * 이벤트에 관련된 기능(EventTarget.addEventListener, EventTarget.removeEventListner 등) 은 EvnetTarget 인터페이스가 제공한다. 
     * 또한 모든 노드 객체는 트리 자료구조의 노드로서 공통적으로 트리 탐색 기능(Node.parentNode, Node.childNodes, Node.previousSibling, node.nextSibling 등)이나 노드 정보 제공 기능 (Node.nodeType, Node.nodeName 등)이 필요하다. 이 같은 노드 관련 기능은 Node 인터페이스가 제공한다.
     * 
     * HTML 요소가 객체ㅗ하된 요소 노드 객체는 HTML 요소가 갖는 공통적인 기능이 있다. 예를 들어, input 요소 노드 객체와 div 요소 노드 객체는 모두 HTML 요소의 스타일을 나타내는 프로퍼티가 있다. 
     * 이처럼 HTML 요소가 갖는 공통적인 기능은 HTMLElement 인터페이스가 제공한다.
     * 
     * 하지만 요소 노드 객체는 HTML 요소의 종류에 따라 고유한 기능도 있다. 예를들어 input 요소 노드 객체는 value 프로퍼티가 필요하지만 div요소 노드 객체는 value 프로퍼티가 필요하지 않다. 따라서 필요한 기능을 제공하는 인터페이스(HTMLInputElement, HTMLDivElement 등)이 HTML 요소의 종류에 따라 각각 다르다. 
     * 
     * 이처럼 노드 객체는 공통된 기능일수록 프로토타입 체인 상위에, 개별적인 고유 기능일수록 프로토타입 체인 하위에 프로토타입 체인을 구축하여 노드 객체에 필요하 ㄴ기능, 즉 프로퍼티와 메소드를 제공하는 상속 구조를 갖는다.
     * 
     * 지금까지 살펴본 바와 같이 DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론, 노드 객체의 종류, 즉 노드 타입에 따라 필효나 기능을 프로퍼티와 메소드의 집합인 DOM API로 제공한다. 이 DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.
     * 
     *
     * 
     *  1. id를 이용한 요소 노드 취득
     *      : id는 HTML 문서 내의 유일한 값이어야 하며, Class 어트리뷰트와는 달리 공백 문자로 구분하여 여러 개의 값을 가질 수 없다. 단, HTML 문서 내에 중복된 id값을 갖는 HTML 요소가 여러 개 존재하더라도 어떠한 에러도 발생하지 않는다. 따라서 HTML 문서 내의 중복된 id를 갖는 요소가 여러 개 존재할 가능성이 있다. 
     * 이러한 경우 getElementById 메소드는 인수로 전달된 id값을 갖는 첫 번째 요소 노드만 반환한다.  만약 인수로 전달된 id 값을 갖는 HTML요소가 존재하지 않는 경우 getElementById 메소드는 null을 반환한다.
     * HTML 요소에 id 어트리뷰트를 부여하면 id값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 개게가 할당되는 부수 효과가 있다. 단, id 값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 이 전역 변수에 노드 객체가 재할당 되지 않는다.
     * 
     * 
     * 
     *   2. 태그 이름을 이용한 요소 노드 취득
     *      : Document.prototype/Element.prorotype.getElementByTagName 메소드는 인수로 전달하 ㄴ태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다. 
     *  메소드 이름에 포함된 Elements가 복수형인 것에서 알 수 있듯이 getElementByTagName 메소드는 여러 개의 요소 노드 객체를 갖는 DOM컬렉션 객체인 HTMLCollection 객체를 반환한다.
     * 
     * 함수는 하나의 값만 만환할 수 있으므로 여러 개의 값을 반환하려면 객체나 배열과 같은 자료 구조에 담아 반환해야한다. getElementByTagName메소드가 반환하는 DOM 컬렉션 객체인 HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다. 
     * HTML 문서의 모든 요소 노드를 취득하려면 getElementByTagName메소드의 인수로 '*'를 전달한다.
     * 
     * getElementByTagName 메소드는 Document.prototype에 정의된 메소드와 Element.prototype에 정의된 메소드가 있다. Document.prototype.getEleementsByTagName 메소드는 DOM루트 노드인 문서 노드, 즉 document를 통해 호출하며 
     * DOM 전체 요소 노드를 탐색하여 반환한다. 하지만 Element.prototype.getElementsByTagName 메소드는 특정 요소 노드를 통해 호출하며, 특정 요소 노드의 자식 노드 중에서 요소 노드를 탐색하여 반환한다. 
     * 
     * 
     * ex)
     *  //    DOM 전체에서 이름이 li인 요소 노드 모두 탐색
     *      > document.getElementsByTagName('li');
     *          : HTMLCollection(4) [li,li,li,li]
     *      
     *  //    ul#fruits 요소의 자손 노드 중에서 태그 이름이 li인 요소 노드 모두 탐색
     *      > const $fruits = document.getElementById('fruits');
     *      > const $listElement = $fruits.getElementByTageName('li')
     *          : HTMLCollection(3) [li,li,li]
     * 
     * ** 만약 인수로 전달된 태그 이름을 갖는 요소가 존재하지 않을 경우 getEleementByTagName 메소드는 빈 HTMLCollection 객체를 반환한다.
     * 
     * 
     * 
     * 
     *      3.class를 이용한 요소 노드 취득
     * 
     *          :Document.prototype/Element.prototype.getElementsByClassName 메소드는 인수로 전달한 class어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환한다.
     * 인수로 전달할 class값은 공백으로 구분하여 여러 개의 class를 지정할 수 있다. getElementByTagName 메소드와 마찬가지로 getElementsByClassName 메소드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.
     * 
     *  getElementsByTagName 메소드와 마찬가지로 getElementsByClassName 메소드는 Document.prototype에 정의된 메소드와 Elment.prototype에 정의된 메소드가 있다.
     * Document.prototype.getElementsByClassName 메소드는 DOM의 루트 노드인 문서 노드, 즉, document를 통해 호출하며 DOM 전체에서 요소 노드를 탐색하여 반환하고
     * Element.prototype.getElementsByClassName 메소드는 특정 요소 노드를 통해 호출하며 특정 요소 노드의 자손 노드 중에서 요소 노드를 탐색하여 반환한다.
     * 
     *   만약 인수로 전달된 class값을 갖는 요소가 존재하지 않는 경우 getElementsByClassName 메소드는 HTMLCollection 객체를 반환한다.
     * 
     * 
     *      4.CSS 선택자를 이용한 요소 노드 취득
     * 
     *          : CSS 선택자는 스타일을 적용하고자 하는 HTML 요소를 특정할 떄 사용하는 문법이다.
     * 
     *  [전체 선택자 : 모든 요소를 선택]
     *   > *{...}
     *  
     *  [태그 선택자 : 모든 p태그 요소를 모두 선택]
     *  > p{...}
     * 
     *  [id 선택자 : id 값이 'foo'인 요소를 모두 선택]
     *  > #foo{...}
     * 
     *  [class 선택자 : class값이 'foo'인 요소를 모두 선택]
     *  > .foo{...}
     * 
     *  [어트리뷰트 선택자 : input 요소 중에 type어트리뷰트 값이 'text'인 요소를 모두 선택]
     *  >input[type=text] {...}
     * 
     *  [후손 선택자 : div요소의 후손 요소 중 p 요소를 모두 선택]
     *  > div p {...}
     * 
     *  [자식 선택자 : div요소의 자식 요소 중 p 요소를 모두 선택]
     *  > div > p {...}
     * 
     *  [인접 형제 선택자 : p 요소 형제 요소 중에 p 요소 바로 뒤에 위치하는 ul요소를 선택]
     *  > div+ul{...}
     * 
     *  [일반 형제 선택자 : p요소의 형제 요소 중에 p 요소 뒤에 위치하는 ul요소를 모두 선택]
     *  > p ~ ul {...}
     * 
     *  [가상 클래스 선택자 : hover 상태인 a요소를 모두 선택]
     *  > a:hover {...}
     * 
     *  [가상 요소 선택자 : p 요소 콘텐츠 앞에 위치하는 공간을 선택, 일반적으로 content 프로퍼티와 함께 사용]
     *  > p::before{...}
     * 
     * 
     * ::::Document.prototype/Element.prototype.querySelector 메소드는 인수로 전달한 css 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다. 
     * 
     *  - 인수로 전달한 css 선택자를 만족시키는 요소 노드가 여러 개인 경우 첫 번째 요소 노드만 반환한다.
     *  - 인수로 전달된 css 선택자를 만족시키는 요소 노드가 존재하지 않는 경우  null을 반환한다. 
     * 
     *  - 인수로 전달한 css 선택자가 문법에 맞지 않는 경우 DOMException 에러가 발생한다. 
     * 
     * 
     * 
     * ::::Document.prototype/Element.prototype.querySelectorAll 메소드는 인수로 전달한 css 선택자를 만족 시키는 모든 요소 노드를 탐색하여 반환한다.
     * querySelectorAll 메소드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList객체를 반환한다. NodeListx 객체는 유사 배열 객체이면서 이터러블이다 .
     * 
     *  - 인수로 전달된 css 선택자를 만족시키는 요소가 존재하지 않는 경우 빈 NodeList 객체를 반환한다.
     * 
     *  - 인수로 전달한 css 선택자를 문법에 맞지 않는 경우 DOMException 에러가 발색한다. 
     * 
     * 
     * HTML 문서의 모든 요소 노드를 취득하려면 querySelectorAll메소드의 인수로 전체 선택자 '*'를 전달한다. 
     * getElementsByTagName, getElementsByClassName 메소드와 마찬가지로 querySelector, querySelectorAll 메소드는 Document.prototype에 정의된 메소드와 Element.prototype에 정의된 메소드가 있다. 
     * Document.prototype에 정의된 메소드는 DOM의 루트 노드인 문서 노드, 즉 document를 통해 호출하며, DOM 전체에서 요소 노드를 탐색하여 반환한다. 
     * 
     * CSS 선택자 문법을 사용하는 querySelector, querySelectorAll 메소드는 getElementById, getElementBy*** 메소드보다 다소 느리다. 하지만 css선택자 문법을 사용하여 좀 더 구체적인 조건으로 요소 노드를 취득할 수 있고 일관된 방식으로 요소 노드를 취득할 수 있다는 장점이 있다. 
     * 따라서 id  어트리뷰트가 있는 요소 노드를 취득하는 경우에는 getElementById 메소드를 사용하고 그 외으 경우에는 querySelector, querySelectorAll 메소드를 사용하는 것을 권장한다. 
     */



// 특정 요소 노드를 취득할 수 있는지 확인
    /**
     *  Element.prototype.matches 메소드는 인수로 전달한 css 선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인한다. 
     */ 

//<ul id='fruits'>
//    <li class='apple'>apple</li>
//    <li class='banana'>banana</li>
//    <li class='orange'>orange</li>
//</ul>

    /**
     * const $apple = document.querySelector('.apple');
     * 
     * $apple 노드는 #fruits>li.apple로 취득할 수 있다.
     * console.log($apple.matches('#fruits>li.apple'));
     * 
     * $apple 노드는 #fruits>li.banana로 취득할 수 없다.
     * console.log($apple.matches('#fruits>li.banana'));
     * 
     * Element.prototype.matches 메소드는 이벤트 위임을 사용할 떄 유용하다.
     */





    