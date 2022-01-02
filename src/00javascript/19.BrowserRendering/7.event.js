
//이벤트
/**
 *  // 이벤트 드리븐 프로그래밍
 * 브라우저는 처리해야할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생시킨다. 예를 들어 클릭, 키보드 입력, 마우스 이동 등이 일어나면 브라우저는 이를 감지하여 특정한 타입의 이벤트를 발생시킨다. 
 * 
 *  만약 애플리케이션이 특정 타입의 이벤트에 대해 반응하여 어떤 일을 하고 싶다면 해당하는 타입의 이벤트가 발생했을 대 호룰될 함수를 브라우저에게 알려 호출을 위임한다. 이떄 이벤트가 발생했을 떄 호출될 함수를 이벤트 핸들러라고 하고, 이벤트가 발생 했을 때 브라우저에게 이벤트 핸들러의 호룰을 위임하는 것을 이벤트 핸들러 등록이라고 한다.
 * 
 *  예를 들어, 사용자가 버튼을 클릭했을 떄 함수를 호출하여 어떤 처리를 하고 싶다고 가정해보자. 이때 문제는 "언제 함수를 호출해야 하는가"다. 사용자가 언제 버튼을 클릭할지 알 수 없으므로 언제 함수를 호출해야할 지 알 수 없기 떄문이다. 
 * 
 *  다행히 브라우저는 사용자의 버튼 클릭을 감지하여 클릭 이벤트를 발생시킬 수 있다. 그리고 특정 버튼 요소에서 클릭 이벤트가 발생하면 특정함수(이벤트 핸들러)를 호출하도록 브라우저에게 위임( 이벤트 핸들러 등록 )할수 있다. 즉, 함수를 언제 호출할 수 알 수 없으므로 개발자가 명시적으로 함수를 호출하는 것이 아니라 브라우저에게 함수 호출을 위임하는 것이다. 
 */

//<button>
//   click me
//</button>
/**
 * const $button = document.querySelector('button')
 * $button.onclick = () => { alert('button click') }
 * 
 *  위 예제를 살펴보면 버튼 요소 $button의 onclick 프로퍼티에 함수를 할당했다. window, Document, HTMLElement 타입의 객체는 onclick과 같이 특정 이벤트에 대응하는 다양한 이벤트 핸들러 프로퍼티를 가지고 있다. 이 이벤트 핸들러 프로퍼티에 함수를 할당하면 해당 이벤트가 발생했을 떄 할당한 함수가 브라우저에 의해 호출된다.
 * 
 *   이처럼 이벤트와 그에 대응하는 함수(이벤트 핸들러)를 통해 사용자와 애플리케이션은 상호작용을 할 수 있다. 이와 같이 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐 프로그래밍이라고 한다. 
 */



//이벤트 타입
/**
 * 이벤트 타입은 이벤트의 종류를 나타내는 문자열이다. 예를 들어, 이벤트 타입 'click'은 사용자가 마우스 버튼을 클릭했을 때 발생하는 이벤트를 나타낸다. 이벤트 타입은 약 200가지가 있다. 
 * 
 * 
 * //////[ 마우스 이벤트 ]//////
 * click : 마우스 클릭
 * dbclick : 더블 클릭
 * mousedown : 마우스 버튼 눌렀을 떄
 * mousemove : 커서 움직였을 때
 * mouseenter : 마우스 커스를 HTML 요소 안으로 이동했을 떄(버블링 없음)
 * mouseover : 마우스 커서를 HTML 요소 안으로 이동했을 때 (버블링 있음)
 * mouseleave : 마우스 커서를 HTML 요소 밖으로 이동했을 떄(버블링 없음)
 * mouseout : 마우스 커서를 HTML 요소 밖으로 이동했을 때(버블링 있음)
 * //////////////////////////
 * 
 * //////[ 키보드 이벤트 ]//////
 * keydown : 모든 키를 눌렀을 떄 발생 (control, option, shift, tab, delete, enter, 방향키와 문자, 숫자, 특수 문자를 누르면 발생 
 * 단, 문자, 숫자, 특수문자 enter 키를 눌렀을 떄는 연속적으로 발생하지만 그 외의 키를 눌렀을 떄는 한 번만 발생 )
 * keypress : control, option, shift, tab, delete, 방향 키 등을 눌렀을 떄 발생하지 않고 문자, 숫자, 특수문자, enter키를 눌렀을 떄만 발생 - deprecated - 
 * keyup : keydown 이벤트와 마찬가지로 control, option, shift, tab, delete, enter, 방향 키와 문자, 숫자, 특수 문자 키를 놓았을 떄 발생 
 * //////////////////////////
 * 
 * 
 * //////[ 포커스 이벤트 ]//////
 * focus : HTML 요소가 포커스를 받았을 떄 (버블링 없음)
 * blur : HTML 요소가 포커스를 잃었을 때 (버블링 없음)
 * focusin : HTML 요소가 포커스를 받았을 때 (버블링 있음)
 * focusout : HTML 요소가 포커스를 잃었을 때 (버블링 있음)
 * //////////////////////////
 * 
 * 
 * //////[ 폼 이벤트 ]//////
 * submit : form 요소 내의 submit 버튼을 클릭했을 떄
 * reset : form 요소 내의 reset 버튼을 클릭했을 떄(최근에 사용 안 함)
 * //////////////////////////
 * 
 * 
 * //////[ 값  변경 이벤트 ]//////
 * input : input(text, checkbox, radio), select,textarea 요소의 값이 입력되었을 때
 * change : input(text, checkbox, radio), select,textarea 요소의 값이 변경되었을 때
 *          change 이벤트는 input 이벤트와는 달리 HTML 요소가 포커스를 잃었을 때 사용자 입력이 종료되었다고 인식하여 발생한다. 
 * 즉, 사용자가 입력을 하고 있을 떄는 input 이벤트가 발생하고 사용자 입력이 종료되어 값이 변경되면 change 이벤트가 발생한다.
 * readystatechange : HTML 문서의 로드와 파싱 상태를 나타내는 document.readtyState 프로퍼티('loading', 'interactive', 'complete')이 변경될 떄
 * ////////////////////////////
 * 
 * 
 * //////[ DOM 뮤테이션 이벤트 ]//////
 * DOMContentLoaded : HTML 문서의 로드와 파싱이 완료되어 DOM 생성이 완료되었을 떄
 * ///////////////////////////////
 * 
 * 
 * //////[ 뷰 이벤트 ]//////
 * resize : 브라우저 윈도우(window) 크기를 리사이즈할 떄 연속적으로 발생한다.(오직 windows 객체에서만 발생)
 * scroll :  웹페이지(document) 또는 HTML 요소를 스크롤할 때 연속적으로 발생한다.
 * //////////////////////
 * 
 * 
 * //////[ 리소스 이벤트 ]//////
 * load : DOMContentLoaded 이벤트가 발생한 이후, 모든 리소스(이미지, 폰트 등)의 로딩이 완료되었을 떄(주로 window 객체에서 발생)
 * unload : 리소스가 언로드될 때 (주로 새로운 웹페이지를 요청한 경우)
 * abort : 리소스 로딩이 중단되었을 때
 * error : 리소스 로디잉 실패했을 때
 * ///////////////////////////
 * 
 * 
 * 
 * 
 * >> 이벤트 핸들러 등록 
 *  이벤트 핸들러(리스너)는 이벤트가 발생했을 떄 브라우저 호출을 위임한 함수다. 다시 말해, 이벤트가 발생하면 브라우저에 의해 호출될 함수가 이벤트 핸들러이다.
 * 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라고 한다. 
 * 
 * 
 *     1. 이벤트 핸들러 어트리뷰트 방식
 *  : HTML 요소의 어트리뷰트 중에는 이벤트에 대응하는 이벤트 핸들러 어트리뷰트가 있다. 이벤트 핸들러 어트리뷰트의 이름은 onclick과 같이 on 접두사와 이벤트 종류를 나타내는 이벤트 타입으로 이루어져 있다. 이벤트 핸들러 어트리뷰트 값으로 함수 호출문 등의 문을 할당하면 이벤트 핸들러가 등록된다. 
 * 
 */

//<button onclick='sayHi("lee")'>clickme!</button>

/**
 * function sayHi(name){
 *      console.log( `hi! ${name}` )
 * }
 * 
 * 주의할 점은 이벤트 핸들러 어트리뷰트 값으로 함수 참조가 아닌 함수 호출문 드으이 문을 할당한다는 것이다. 
 * 이벤트 핸들러 등록이란 함수 호출을 브라우저에게 위임하는 것이라고 했다. 따라서 이벤트 핸들러를 등록할 떄 콜맥 함수와 마찬가지로 함수 참조를 등록해야 브라우저가 이벤트 핸들러를 호출할 수 있다.
 *  만약 함수 참조가 아니라 함수 호출문을 등록하면 함수 호출문의 평가 결과가 이벤트 핸들러로 등록된다. 
 * 함수를 반환하는 고차 함수는 호출문을 이벤트 핸들러로 등록한다면 문제가 없겠지만 함수가 아닌 값을 반환하는 함수 호출 문을 이벤트 핸들러로 등록하면 브라우저가 이벤트 핸들러를 호출할 수 없다.
 * 
 * 하지만 위 예제에서는 이벤트 핸들러 어트리뷰트 값으로 함수 호출문을 할당했다. 이떄 이벤트 핸들러 어트리뷰트 값은 사실 암묵적으로 생성될 이벤트 핸드럴의 함수 몸체를 의미한다. 
 * 즉, onclick='sayHi("lee")' 어트리뷰트는 파싱되어 다음과 같은 함수를 암묵적으로 생성하고, 이벤트 핸들러 어트리뷰트 이름과 동일한 키 onclick 이벤트 핸들러 프로퍼티에 할당한다. 
 * 
 * 결국 이벤트 핸들러 어트리뷰트 값으로 할당한 문자열은 암묵적으로 생성되는 이벤트 핸들러의 함수 몸체이다. 따라서 이벤트 핸들러 어트리뷰트 값으로 다음과 같이 여러 개의 문을 할당할 수 있다.
 * 
 */

//<button onclick='console.log("HI!"); console.log("LEE")'>clickme!</button>


/**
 *   이벤트 핸들러 어트리뷰트 방식은 오래된 코드에서 혹 이 방식을 사용한 것이 있기 때문에 알아둘 필요는 있지만 더는 사용하지 않는 것이 좋다. HTML과 JS는 관심사가 다르므로 혼재하는 것보다 분리하는 것이 좋다.  물론 모든 JS 에서는 이벤트 핸들러 어트리뷰트 방식으로 사용하는 경우가 있다. CBD 방식 프레임 워크가 그 예이다. 
 * 
 * 
 * 
 * 
 * 
 * >> 이벤트 핸들러 프로퍼티 방식
 * window객체와 Document, HTMLElement 타입의 DOM 노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있다. 
 * 이벤트 핸들러 프로퍼티의  키는 이벤트 핸들러 어트리뷰트와 아마찬가지로 onclick 과 같이 on 접두사와 이벤트의 종류를 나타내는 이벤트타입으로 이뤄져 있다. 
 * 이벤트 핸들러 프로퍼티에 함수를 바인딩하면 에빈트 핸들러가 등록된다. 
 * 이벤트 핸들러를 등록하기 위해서는 이벤트를 발생시킬 객체인 이벤트 타깃과 이벤트 종류를 나타내는 문자열인 이벤트 타입 그리고 이벤트 핸들러를 지정할 필요가 있다.
 * 예를 들어, 버튼 요소가 클릭되면 handleClick 함수를 호출하도록 이벤트 핸들러를 등록하느 ㄴ경우 이벤트 타깃은 버튼 요소이고 이벤트 타입은 'click'이며 이벤트 핸들러는 handleClick 함수이다. 
 * 
 * 
 *  $button(이벤트 타깃).onclick(on+이벤트 타입) = function (이벤트 핸들러) () {
 *          console.log('btnClick')
 *  }
 * 
 * 이벤트 핸들러는 대부분 이벤트를 발생시킬 이벤트 타깃에 바인딩한다. 하지만 반드시 이벤트 타기셍 이벤트 핸들러를 바인딩해야하는 것은 아니다. 
 * 이벤트 핸들러는 이벤트 타깃 또는 전파된 이벤트를 캐치할 DOM 노드 객체에 바인딩한다. 
 * 
 * 앞서 살펴본 '이벤트 핸드럴 어트리뷰트 방식'도 결국 DOM 노드 객체의 이벤트 핸들러 프로퍼티로 변환 되므로 결과적으로 이벤트 핸들러 프로퍼티 방식과 동일하다고 할 수 있다. 
 * '이벤트 핸들러 프로퍼티 방식'은 '이벤트 핸들러 어트리뷰트 방식'의 HTML과 자바스크립트가 뒤섞이는 문제를 해결할 수 있다. 
 * 하지만 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다. 
 * 
 * 
 * >>addEventListener 메소드 방식
 * DOM Level 2에서 도입된 EventTarget.prototype.addEventListener 메소드를 사용하여 이벤트 핸들러르 ㄹ등록할 수 있다. 앞서 살펴본 '이벤트 핸들러 어트리뷰트 방식'과 '이벤트 핸들러 프로퍼티 방식'은 DOM Level 0부터 제공되던 방식이다.
 * 
 *  EventTarget(이벤트 타깃).addEventListener(이벤트 타입, 이벤트 핸들러, capture 사용 여부)
 * 
 * > capture 사용 여부 
 * - true : capturing
 * = false : bullbing (기본값)
 * 
 * 
 * addEventListne 메소드의 첫 번째 매개변수에는 이벤트 종류를 나타내는 문자열인 이벤트 타입을 전달한다. 이때 이벤트 핸들러 프로퍼티 방식과는 달리 on 접두사를 붙이지 않는다.
 *  두 번째 매개변수에는 이벤트 핸들러를 전달한다. 마지막 매개변수에는 이벤트를 캐치할 이벤트 전파 단계(캘처링 또는 버블링)를 지정한다. 생략하거나 false를 지정하면 버블링 단계에서 이벤트를 캐치하고,  true를 지정하면  캡처링 단계에서 이벤트를 캐치한다. 
 */
//<button> click me </button>
/**
 * const $btn = document.querySelector('button')
 * 
 * //이벤트 핸들러 프로퍼티 방식
 * $btn.onclick = function(){
 *  console.log('btnclick)
 * }
 * 
 * //addEventListener 메소드 방식
 * $btn.addEventListener('click', function(){
 *          console.log('btnClick')
 * })
 * 
 * 이벤트 핸들러 프로퍼티 방식은 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩하지만 addEventListener 메소드에는 이벤트 핸들러를 인수로 전달한다.
 * 만약 동일한 HTML 요소에서 발생한 동일한 이벤트에 대해 이벤트 핸들러 프로퍼티 방식과 addEventListener 메소드 방식을 모두 사용하여 이벤트 핸들러를 등록하면 어떻게 될까
 * 
 */ 

//<button> click! </button>

/** 
  * const $btn = document.querySelector('button')
 * 
 * //이벤트 핸들러 프로퍼티 방식
 * $btn.onclick = function(){
 *  console.log('btnclick)
 * }
 * 
 * //addEventListener 메소드 방식
 * $btn.addEventListener('click', function(){
 *          console.log('btnClick')
 * })
 * 
 * addEventListener 메소드 방식은 이벤트 핸들러 프로퍼티에 바인딩된 이벤트 핸들러에 아무런 영향을 주지 않는다. 따라서 버튼 요소에서 클릭 이벤트가 발생하면 2개의 이벤트 핸들러가 모두 호출된다. 
 * 동일한 HTML 요소에서 발생한 동일한 이벤트에 대해 이벤트 핸들러 프로퍼티 방식은 하나 이사으이 이벤트 핸들러를 등록할 수 없지만 addEventListener 메소드는 하나 이상의 이벤트 핸들러를 등록하 ㄹ수 있다.
 * 이때 이벤트 핸들러는 등록된 순서대로 호출된다. 
 */

//<button>click me!</button>

/**
 * const $btn = document.querySelector('button')
 * 
 * 
 * //addEventListener 메소드는 동일한 요소에서 발생한 이벤트에 대해 
 * // 하나 이상의 이벤트 핸들러르 등록할 수 있다.
 * $btn.addEventListener('click', function(){
 * 		console.log('[1] event')
 * })
 * $btn.addEventListener('click', function(){
 * 		console.log('[2] event')
 * })
 * 
 * //단 addEventListener 메소드를 통해 참조가 동일한 이벤트 핸들러를 중복 등록하면 하나의 이벤트 핸들러만 등록된다. 
 * const handleClick = () => console.log('btn click')
 * 
 * $btn.addEventListener('click', handleClick)
 * $btn.addEventListener('click', handleClick)
 */



// 이벤트 핸들러 제거
/**
 *  addEventListener 메소드로 등록한 이벤트 핸들러를 제거하려면 EventTarget.prototype.removeEventListener 메소드를 사용한다. 
 * removeEventListener 메소드에 전달할 인수는 addEventListener 메소드와 동일하다. 
 * 단, addEventListener 메소드에 전달한 인수와 removeEventListener 메소드에 전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다. 
 */

//<button>click me</button>

/**
 * const $btn = document.querySelector('button')
 * 
 * const handleClick = () => console.log('btn click')
 * 
 * //이벤트 핸들러 등록
 * $btn.addEventListener('click', handleClick);
 * 
 * //이벤트 핸들러 제거 
 * //addEventListener 메소드에 전달한 인수와 removeEventListener 메소드에 
 * //전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다.
 * $btn.removeEventListener('click', handleClick, true)//실패
 * $btn.removeEventListener('click', handleClick)//성공 
 * 
 * removeEventListener메소드에 인수로 전달한 이벤트 핸들러는 addEventListener 메소드에 인수로 전달한 등록 이벤트 핸들러와 동일한 함수이어야 한다. 따라서 다음과 같이 무명 함수를 이벤트 핸들러로 등록한 경우 제거할 수 있다.
 * 이벤트 핸들러를 제거하려면 이벤트 핸들러의 참조를 변수나 자료구조에 저장하고 있어야한다. 
 * 
 * 
 * 
 * 단, 기명 이벤트 핸들러 내부에서 removeEventListener 메소드를 호출하여 이벤트 핸들러를 제거하는 것은 가능하다. 이때 이벤트 핸들러는 단 한 번만 호추로딘다. 
 * 
 * 
 * $btn.addEventListener('click', function foo(){
 * 		console.log('btn click')
 * 			
 * 		//이벤트 핸들러를 제거한다. 따라서 이벤트 핸들러는 단 한 번만 호출된다.
 * 		$btn.removeEventListener('click', foo)
 * 
 * 		//기명 함수를 이벤트 핸들러로 등록할 수 없다면 호출된 함수, 즉 함수 자신을 가리키는 argument.callee를 사용할 수도 있다.
 * 		$btn.removeEventListner('click', arguments.callee)
 * 		//argument.callee는 코드 최적화를 방해하므로 strict mode에서 사용이 금지된다. 따라서 가급적 이벤트 핸들러의 참조를 변수나 자료구조에 저장하여 제거하는 편이 좋다.
 * })
 * 
 * 
 * 
 * 
 * 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 removeEventListener메소드로 제거할 수 없다.
 * 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러를 제거하려면 이벤트 핸들러 프로퍼티에 null을 할당한다. 
 */
//<button>clickme</button>
/**
 * const $btn = document.querySelector('button')
 * 
 * //이벤트 핸들러 프로퍼티 방식으로 이벤트 핸들러 등록
 * $btn.click = handleClick;
 * 
 * //removeEventListener 메소드로 이벤트 핸들러를 제거할 수 없다. 
 * $btn.removeEventListener('click', handleClick)
 * 
 * //이벤트 핸들러 프로퍼티에 null을 할당하여 이벤트 핸들러를 제거한다.
 * $btn.onclick = null
 */
