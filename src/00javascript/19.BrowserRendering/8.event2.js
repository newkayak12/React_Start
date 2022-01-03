//이벤트 객체
/**
 * 이벤트가 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다. 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다. 
 */
//<body>
//	<p>클릭하세요</p>
//	<em class="message"></em>
//</body>
/**
 * const $msg = document.querySelector('.message')
 * //클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫 번쨰 인수로 전달된다.
 * function showCoords(e){
 * 	$msg.textContent = `clientX: ${e.clientX}, clinetY : ${e.clientY}`
 * }
 * 
 * document.onclick = showCoords
 * 
 * 
 * 클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫 번쨰 인수로 전달되어 매개변수 e에 암묵적으로 할당된다. 이는 브라우저가 이벤트 핸들러를 호출할 때 이벤트 객체를 인수로 전달하기 때문이다.
 * 따라서 이벤트 객체를 전달받으려면 이벤트 핸들러를 정의할 때 이벤트 객체를 전달받을 매개변수를 명시적으로 선언해야한다.  
 * 
 * 이벤트 핸들러 어트리뷰트 방식으로 이벤트 핸들러를 등록했다면 아래와 같이 event를 통해 이벤트 객체를 전달 받을 수 있다.
 */

//<style>
//	html, body {
//		height:100%;
//	}
//</style>
// <body onclick = "showCoords(event)">
//	<p>클릭하세요</p>
//	<em class="message"></em>

/**
 * const $msg = document.querySelector('.message');
 * //클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸드럴의 첫 번쨰 인수로 전달된다. 
 * function showCoords(e){
 * 	$msg.textContent = `clientX: ${e.clientX}, clinetY : ${e.clientY}`
 * }
 * 
 * 이벤트 핸들러 어트리뷰트 방식의 경우 이벤트 객체를 전달받으려면 이벤트 핸들러의 첫 번째 매개변수 이름이 반드시 event 이어야한다. 
 * 만약 event 가 아닌 다른 이름으로 매개변수를 선언하면 이벤트 객체를 전달받지 못한다. 그 이유는 이벤트 핸들러 어트리뷰트 값은 사실 암묵적으로 생성되는 이벤트 핸들러의 함수 몸체를 의미하기 때문이다.
 * 즉, onclick = "showCoords(event)" 어트리뷰트는 파싱되어 아래와 같이 onclick 이벤트 핸들러 프로퍼티에 할당한다.
 * 
 * function(event){
 * 	showCoords(event)
 * }
 * 
 * 이때 암묵적으로 생성된 onclick 이벤트 핸들러의 첫 번쨰 매개변수의 이름이 event로 암묵적으로 명명되기 때문에 event가 아닌 다른 이름으로는 이벤트 객체를 전달받지 못한다. 
 * 
 * 
 * >> 이벤트 객체의 상속 구조
 * 
 * 이벤트가 발생하면 이벤트 타입에 따라 다양한 타입의 이벤트 객체가 생성된다. 
 * 이벤트 객체는 아래와 같은 상속 구조를 가진다. 
 * 
 * object - event - AnimationEvent   
 * 			   - UIEvent (FocusEvent / MouseEvent  (DragEvent, WheelEvent) / keyboardEvent / InputEvent / TouchEvent)
 * 			   - ClipboardEvent    
 * 			   - ...
 * 
 * 
 * Event, UIEvent, MouseEvent 등 모두는 생성자 함수이다. 따라서 다음과 같이 생성자 함수를 호출하여 이벤트 객체를 생성할 수 있다. 
 * 
 * //Event 생성자 함수를 호출하여 foo 이벤트 타입의 Event 객체를 생성한다. 
 * let e = new Event('foo');
 * console.log(e);
 * // Event {isTrusted: false, type: 'foo', target:null, ...}
 * 
 * console.log(e.type); //foo
 * console.log(e instanceof Event); //true
 * console.log(e instanceof Object); //true
 * 
 * //FocusEvent 생성자 함수를 호출하여 focus 이벤트 타입의 FocusEvent 객체를 생성한다. 
 * e = new FocusEvent('focus');
 * console.log(e)
 * //FocusEvent { isTrusted : false, relatedTarget : null, view :null };
 * 
 * //MouseEvent 생성자 함수를 호출하여 click 이벤트 타입의 MouseEvent 객체를 생성한다. 
 * e = new MouseEvent('click')
 * console.log(e)
 * //MouseEvent { isTrusted:false, screenX:0, screenY:0, clientX : 0, ...}
 * 
 * //KeyboardEvent 생성자 함수를 호출하여 keyup 이벤트 타입의 KeyboardEvent 객체를 생성한다. 
 * e = new KeyboardEvent('keyup')
 * console.log(e)
 * //keyboardEvent {isTrusted : false, key : "", code : "", ctrlKey : false, ...}
 * 
 * InputEvent 생성자 함수를 호출하여 chnage 이벤트 타입의 InputEvent 객체를 생성한다. 
 * e = new InputEvent('change')
 * console.log(e)
 * //InputEvent { isTrusted : false, data : null, inputType : '', ...}
 * 
 * 이처럼 이벤트가 발생하면 암묵적으로 생성되는 이벤트 객체도 생성자 함수에 의해 생성된다. 그리고 생성된 이벤트 객체는 생성자 함수와 더불어 생성되는 프로토타입3으로 구성된 프로토타입 체인의 일원이 된다. 
 * 예를 들어, click 이벤트가 발생하면 암묵적으로 생성되는 MouseEvent 타입의 이벤트 객체는 다음과 같은 프로토타입 체인의 일원이 된다. 
 * 
 * Event 인터페이스는 DOM 내에서 발생한 이벤트에 의해 생성되는 이벤트 객체를 나타낸다. 
 * Event 인터페이스에는 모든 이벤트 객체의 공통 프로퍼티가 정의되어 있고 FocusEvent, MouseEvent, KeyboardEvent, WheelEvent 같은 하위 인터페이스에는 이벤트 타입에 따라 고유한 프로퍼티가 정의되어 있다. 
 */

// <input type = "text">
// <input type="checkbox">

/**
 *  const $input = document.querySelector('input[type=text]');
 *  const $checkbox = document.querySelector('input[type=checkbox]')
 *  const $btn = document.querySelector('button')
 * 
 * //load 이벤트가 발생하면 Event 타입의 이벤트 객체가 생성된다.
 * window.onload = console.log
 * 
 * //change 이벤트가 발생하면 Event 타입의 이벤트 객체가 생성된다.
 * $checkbox.onchange = console.log
 * 
 * //focus 이벤트가 발생하면 FocusEvent 타입의 이벤트 객체가 생성된다.
 * $input.onfocus = console.log
 * 
 * //input 이벤트가 발생하면 InputEvent타입의 이벤트 객체가 생성된다. 
 * $input.oninput = console.log
 * 
 * //keyup 이벤트가 발생하면 KeyboardEvent 타입의 이벤트 객체가 생성된다. 
 * $input.onkeyup= console.log
 * //click 이벤트가 발생하면 MouseEvent 타입의 이벤트 객체가 생성된다. 
 * $btn.onclick = console.log
 */


//이벤트 객체의 공통 프로퍼티
/**
 * Event 인터페이스 즉, Event.prototype에 정의되어 있는 이벤트 관련 프로퍼티는 UIEvent, CustomEvent, MouseEvent 등 모든 파생 이벤트 객체에 상속된다. 즉, Event 인터페이스 이벤트 관련 프로퍼티는 모든 이벤트 객체가 상속받는 공통 프로퍼티다. 
 * 
 * 공통 프로퍼티 			  	설명							 타입
 * 	type					이벤트 타입 		  			   String
 *   target     		이벤트를 발생시킨 DOM 요소    			 DOM 요소 노드
 * currentTarget      이벤트 핸들러가 바인딩된 DOM 요소 			  DOM 요소 노드
 * eventPhase			이벤트 전파 단계                           number
 * 				0:이벤트 없음, 1:캡처링 단계, 2:타깃단계 3:버블링 단계
 * 
 * bubbles 		이벤트를 버블링으로 전파하는지 여부 다음 이벤트는 	  boolean
 * 				bubbles:false로 버블링하지 않는다. 
 * 				포커스 focus/blur
 * 				리소스 load/unload/abort/error
 * 				마우스 이벤트 mouseenter/mouseleave
 * 
 * cancelable		preventDefault 메소드를 호출하여 이벤트의 기본	 boolean
 * 				동작을 취소할 수 있는지 여부.
 * 				다음 이벤트는 cancelable:false로 취소할 수 없다.
 * 				포커스 : focus/blur
 * 				리소스 : load/unload/abort/error
 * 				마우스 : dbclick/mouseenter/mouseleave
 * 
 * defaultPrevented preventDefault 메소드를 호출하여 이벤트를 취소했는지 여부 	boolean
 * isTrusted		사용자의 행위에 의해 발생한 이벤트인지 여부.				boolean
 * 				예를 들어, click 메소드 또는 dispathEvent 메소드를 
 * 				통해 인위적으로 발생시킨 에빈트인 경우 
 * 				isTrusted는 false이다. 
 * timeStamp		이벤트가 발생한 시각(1970/01/01/00:00:0부터 경과한 밀리초)  number
 * 
 */

//<input type = "checkbox">
//<em class = "message">off</em>

/**
 * const $chckbox = document.querySelector('inpu[type=checkbox]');
 * const $msg = document.querySelector('.message')
 * 
 * //change 이벤트가 발생하면 Event 타입의 이벤트 객체가 생성된다.
 * 
 * $chckbox.onchange = e =>{
 * 	console.log(Object.getPrototypeOf(e) === Event.prototype); //true
 * 
 * 	//e.target은 change 이벤트를 발생시킨 DOM  dyth $chckbox를 가리키고
 *   //e.target.checked는 체크박스 요소의 현재 체크 상태를 나타낸다.
 * 	$msg.textContent = e.target.checked ? 'on' : 'off' ;
 * }
 * 
 * 사용자의 입력에 의해 체크박스 요소의 체크 상태가 변경되면 checked 프로퍼티의 값이 변경되고 change 이벤트가 발생한다. 
 * 이때 Event 타입의 이벤트 객체가 생성된다. 이벤트 객체의 target 프로퍼티는 이벤트를 발생시킨 객체를 나타낸다. 
 * 따라서 target 프로퍼티가 가리키는 객체는 change이벤트를 발생시킨 DOM 요소 $chckbox이고 이 객체의 checked 프로퍼티는 현재의 체크 상태를 나타낸다. 
 * 
 * 이벤트 객체의 currentTarget 프로퍼티는 이벤트 핸들러가 바인딩된 DOM 요소를 가리킨다. 위의 예시의 경우 이벤트를 발생시킨 DOM 요소와 이벤트 핸들러가 바인딩된 DOM 요소는 모두 $chckbox이다. 
 * 따라서 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티는 동일한 객체 $chckbox를 가리킨다. 
 * 
 * 
 * $chckbox.onchange = e =>{
 * 	//e.target은 change 이벤트를 발생시킨 DOM 요소 $chckbox를 가리키고
 *   //e.currentTarget은 이벤트 핸들러가 바인딩된 DOM 요소 $chckbox를 가리킨다. 
 * 	
 * 	console.log(e.target === e.currentTarget); // true
 * 	
 * 	$msg.textContent = e.target.checked ? 'on':'off'
 * }
 * 
 * 이처럼 일반적으로 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티는 동일한 DOM 요소를 가리키지만 나중에 살펴볼 이벤트 위임에서는 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티가 서로 다른 DOM 요소를 가리킬 수 있다. 
 */