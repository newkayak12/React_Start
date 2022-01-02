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
 */