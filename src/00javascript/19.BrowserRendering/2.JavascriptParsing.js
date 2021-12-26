//자바스크립트 파싱과 실행
/**
 * 
 * HTML 문서를 파싱한 결과물로서 생성된 DOM은 HTML 문서의 구조와 정보뿐만 아니라 HTML의 요소와 스타일 등을 변경할 수 있는 프로그래밍 언어로서 DOM API를 제공한다.
 * 즉, JS 코드에서 DOM API를 사용하면 이미 생성된 DOM을 동적으로 조작할 수 있다. 
 * 
 * CSS 파싱과 마ㅏㄴ가지로 렌더링 엔진은 HTML을 한 줄씩 순차적으로 파싱하여 DOM을 새엇ㅇ해 나가다가 자바스크립트 파일을 로드하는 script 태그나 자바스크립트 코드를 콘텐츠로 담는 script 태그를 만나면 DOM 생성을 일시 중단한다. 
 * 
 * 그리고 script 태그의 src 어트리뷰트에 정의된 자바스크립트 파일을 서버에 요청하여 로드한 자바스크립트 파일이나 script 태그 내의 자바스크립트 코드를 파싱하기 위해 자바스크립트 엔진에 제어권을 넘긴다.
 * 이후 자바스크립트 파싱과 실해잉 종료되면 렌더링 엔진으로 다시 제어권을 넘겨 HTML 파싱이 중단된 지점부터 다시 HTML 파싱을 시작하여 DOM 생성을 재개한다. 
 * 
 * 자바스크립트 파싱과 실행은 브라우저의 렝더링 엔진이 아닌 자바스크립트 엔진이 처리한다. 자바스크립트 엔진은 자바스크립트 코드를 파싱하여 CPU가 이해할 수 있는 row-level 언어로 변환하고 실행하는 역할을 한다.
 * 렝더링 엔진으로부터 제어권을 넘겨받은 자바스크립트 엔진은 자바스크립트 코드를 파싱하기 시작한다. 렌더링 엔진이 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하듯이 자바스크립트 엔진은 자바스크립트를 해석하여 AST(Abstract Syntax Tree) _ 추상적 구문 트리를 생성한다. 그리고 AST를 기반으로 인터프리터가 실행할 수 있는 중간 코드인 바이트 코드를 생성하여 실행한다.
 * 
 *  1. 토크나이징 
 *      단순한 문자열인 자바스크립트 소스코드 어휘 분석하여 문법적 의미를 갖느 코드의 최소 단위인 토큰들로 분해한다. 이 과정을 렉싱이라고 부르기도 하지만 토크나이징과 미묘한 차이가 있다.
 * 
 *   2. 파싱
 *      토큰들의 집합을 구문 분석이나 AST를 생성한다. AST는 토큰에 문법적 의미와 구조를 반영한 트리 구조의 자료구조이다. AST는 인터프리터나 컴파일러만이 사용하는 것은 아니다. AST를 사용하면 TypeScript, Babel Prettier 같은 트랜스 파일러를 구현할 수도 있다.
 * 
 *   3. 바이트코드 생성과 실행
 *      파싱의 결과물로서 생성된 AST는 인터프리터가 실행할 수 있는 중간 코드인 바이트 코드로 변환되고 인터프리터에 의해 실행된다. 참고로 V8엔진의 경우 자주 사용되는 코드는 터보팬이라고 불리는 컴파일러에 의해 최적화된 머신 코드로 컴파일 되어 성능을 최적화 한다. 만약 코드의 사용 빈도가 적어지면 디옵티마이징을 하기도 한다. 
 */


// 리플로우와 리페인트
/**
 *  만약 자바스크립트 코드에 DOM 이나 CSSOM을 변경하는 DOM API가 사용중인 경우 DOM 이나 CSSOM이 변경된다. 이떄 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합되고 변경된 렌더 트리를 기반으로 레이아웃과 페인트 과정을 거쳐 브라우저 화면에 다시 렌더링한다. 이를 리플로우, 리페인트라고 한다. 
 * 
 *  > 리플로우 : 레이아웃 계산을 다시 하는 것을 말하며, 노드 추가/삭제, 요소의 크기/위치 변경, 윈도우 리사이징 등 레이아웃에 영향을 주는 변경이 발생한 경우에 한하여 실행된다.
 * 
 *  > 리페인트는 재결합된 렌더 트리를 기반으로 다시 페인트를 하는 것을 말한다. 
 * 
 * 따라서 리플로우와 리페인트가 반드시 순차적으로 동시에 실행되는 것은 아니다. 레이아웃에 영햐잉 없는 변경은 리플로우 없이 리페인트만 실행된다. 
 */


// 자바스크립트 파싱에 의한 HTML 파싱 중단
/**
 * 브라우저는 동기적으로, 즉 위에서 아래 방향으로 순차적으로 HTML, CSS, 자바스크립트를 파싱하고 실행한다. 이것은 script 태그의 위치에 따라 HTML 파싱에 블로킹 되어 DOM 생성이 지연될 수 있다는 것을 의미한다. 따라서 script 태그의 위치는 중요한 의미를 갖는다. 
 */

    // <!DOCTYPE>
    // <html>
    //     <head>
    //         <meta charset = "UTF-8">
    //             <link rel='stylesheet' href='style.css'/>
    //             <script>
    //                 /* 
    //                     DOM API 인 document.getElementById는 DOM에서 id가 'apple'인 HTML요소를 취득하낟. 아래 DOM  API가 실행되는 시점에는 아직 Id가 'apple'인 HTML 요소를 파싱하지 않았기 때문에 DOM에는 id가 'apple'인 HTML이 포함되어 있지 않다. 따라서 아래 코드는 정상적으로 id가 'apple'인 HTML요소를 취득하지 못한다. 
    //                 */
    //                  const $apple = document.getElementById("apple");
    //                 /*
    //                     id가 'apple'인 html요소의 css color 프로퍼티 값을 변경한다.
    //                     이때 DOM 에는 id가 'apple'인 HTML 요소가 포함되어 있지 않기 때문에 에러가 발생한다.
    //                 */
    //                 $apple.style.color = 'red' //TypeError: Cannot read property 'style' of null
    //             </script>
    //         </meta>
    //     </head>
    //     <body>
    //         <ul>
    //             <li id='apple'>APPLE</li>
    //             <li id='banana'>BANANA</li>
    //             <li id='orange'>ORANGE</li>
    //         </ul>
    //     </body>
    // </html>

/**
 * DOM API 인 document.getElementById('apple)은 DOM 에서 id가 'apple'인 HTML 요소를 취득한다. 
 * 하지만 document.getElementyById('apple')을 실행하는 시점에는 아직 id가 'apple'인 HTML 요소를 파싱하지 않았기 때문에 DOM에느느 id가 'apple'인 HTML 요소가 포함되어 있지 않은 상태이다.
 * 따라서 정상적으로 동작하지 않는다. 
 * 
 * 이러한 문제를 회피하기 위해 body 최하단에 자바스크립트를 위치시키는 것도 좋다. 이유는 아래와 같다.
 *  1. DOM이 완성되지 않은 상태에서 자바스크립트 DOM을 조작하면 에러가 발생할 수 있다. 
 *  2. 자바스크립트 로딩/파싱/실행으로 인해 HTML 요소들의 렌더링에 지장받는 일이 발생하지 않아 로딩 시간이 단축된다.
 * 
 */




//SCRIPT 태그의 async/defer 어트리뷰트
/**
 * 자바스크립트 파싱에 의한 앞서 본 DOM 생성이 중단되는 문제를 근본적으로 해결하기 위해서 HTML5부터는 script 태그에 async와 defer 어트리뷰트가 추가되었다.
 * 
 * async와 defer 어트리뷰트는 아래와 가팅 src어트리뷰트를 통해 외부 자바스크립트 파일을 로드하는 경우에만 사용할 수 있다. 즉, src 어트리뷰트가 없는 인라인 자바스크립트에는 사용할 수 없다. 
 */
    
    // <script async src="extern1.js"></script> 
    // <script defer src="extern2.js"></script> 
/**
 * async와 defer 어트리뷰트를 사용하면 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 하지만 자바스크립트의 실행 시점에 차이가 있다.
 * 
 * 
 * 
 *      >> async 어트리뷰트 
 *   HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 단, 자바스크립트의 파싱과 실행은 자바스크립트 파일의 로드가 완료된 직후 진행되며, 이때 HTML 파싱이 중단된다. 
 * 여러 개의 script 태그에 async 어트리뷰트를 지정하면 script 태그의 순서와는 상관 없이 로드가 완료된다. 자바스크릅트부터 먼저 실행되므로 순서가 보장되지 않는다. 따라서 순서 보장이 필요한 script 태그에는 async 어트리뷰트를 지정하지 않아야한다. 
 * 
 * 
 *     >> defer 어트리뷰트
 *    async  어트리뷰트와 마찬가지로 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 단, 자바스크립트의 파싱은 HTML 파싱이 완료 된 직후, 즉, DOM 생성이 완료된 직후 (이때 DOM ContentLoaded 이벤트가 발생한다.) 진행된다. 따라서 DOM 생성이 완료된 이후 실행되어야 할 자바스크립트에 유용하다. 
 * 
 */