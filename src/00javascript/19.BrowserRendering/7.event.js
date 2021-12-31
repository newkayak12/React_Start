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
 * //////[ 값 변경 이벤트 ]//////
 * input : input(text, checkbox, radio), select, textarea 요소의 값이 입력/변경 되었을 때
 * change :  change 이벤트는 input 이벤트와는 달리 HTML 요소가 포커스를 잃었을 때 사용자 입력이 종료 되었다고 인식하여 발생한다. 즉, 사용자가 입력을 하고 있을 떄는 input 이벤트가 발생하고 사용자 입력이 종료되어 값이 변경되면 change 이벤트가 발생한다. 
 * readystatechange : HTML 문서의 로드와 파싱 상태를 나타내는 documnet.readyState 프로퍼티 값('loading', 'interact)
 * //////////////////////////
 */