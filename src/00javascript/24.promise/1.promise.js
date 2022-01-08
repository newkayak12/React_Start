// PROMISE
/**
 * 	자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백함수를 사용한다.
 * 하지만 전통적인 콜백 패턴은 콜백헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하여 여러 개의 비동기 처리를 한 번에 처리하는 데도 한계가 있다.
 * ES6에서 비동기 처리르 ㄹ위한 또 다른 패턴으로 프로미스를 도입했다. 프로미스는 전통적인 콜백 패터닝 가진 단점을 보완하여 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다. 
 */


// 비동기 처리를 위한 콜백 패턴의 단점

/**
 * //> 콜백 헬
 */
//Get 요청을 위한 비동기 함수
const get = url => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url)
	xhr.send();
	
	xhr.onload = () =>{
		if(xhr.status === 200){
			//서버의 응답을 콘솔로 출력
			console.log(JSON.parse(xhr.response))
		} else {
			console.error(`${xhr.status} ${xhr.statusText}`)
		}
	}
}

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1')

/**
 * 	위 예제의 get 함수는 서버의 응답 결과를 콘솔에 출력한다. get함수가 서버의 응답 결과를 반환하게 하려면 어떻게 하면 될까?
 * get 함수는 비동기 함수이다. 비동기 함수란 함수 내부의 비동기로 동작하는 코드를 포함한 함수를 말한다. 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다고 해도 기다리지 않고 즉시 종료된다.
 * 즉, 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다. 따라서 비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다. 
 * 
 * 	예를 들어, setTimeout 함수는 비동기 함수다. setTImeout 함수가 비동기 함수인 이유는 콜백함수의 호출이 비동기로 동작하기 떄문이다. setTimeout 함수를 호출하면 콜백함수를 호출 스케줄링한 다음, 타이머 id를 반환하고 즉시 종료된다.
 * 즉, 비동기 함수인 setTimeout ㅎ마수의 콜백함수는 setTimeout 함수가 종료된 이후에 호출된다. 따라서 setTimeout 함수 내부의 콜백 함수에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다.
 * setTimeout 함수의 콜백 함수에서 상위 스코프의 변수에 값을 할당해 보자 setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 d를 반환하므로 콜백 함수에서 값을 반환하는 것은 무의미 하다.
 */

let g = 0
//비동기 함수인 setTimeout 함수는 함수의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하지 못한다. 
setTimeout(()=>{g=100},0);
console.log(g) //0

/**
 * GET 요청을 전송하고 서버의 응답을 전달받은 get 함수도 비동기 함수이다. get 함수가 비동기 함수인 이유는 get 함수 내부의 onload 이벤트 핸들러가 비동기로 동작하기 때문이다. 
 * get 함수를 호출하면 GET 요청을 전송하고 onload 이벤트 핸들러를 등록한 다음 undefined를 반환하고 즉시 종료된다. 즉, 비동기 함수인 get 함수 내부의 onload 이벤트 핸들러는 
 * get 함수가 종료된 이후에 실행된다. 따라서 get 함수의 onload 이벤트 핸들러에서 서버의 응답 결과를 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다.
 */

 const modifiedGet = url => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url)
	xhr.send();
	
	xhr.onload = () =>{
		if(xhr.status === 200){
			//서버의 응답을 반환
			return JSON.parse(xhr.response)
		} else {
			console.error(`${xhr.status} ${xhr.statusText}`)
		}
	}
}

// id가 1인 post를 취득
const res = modifiedGet('https://jsonplaceholder.typicode.com/posts/1')
console.log(res)

/**
 * 	get 함수가 호출되면 XMLHttpRequest 객체를 생성하고, HTTP 요청을 초기화한 후, HTTP 요청을 전송한다.
 * xhr.onload 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩하고 종료한다. 이때 get 함수에 명시적인 반환문이 없으므로 get함수는 undefined를 반환한다. 
 * 
 *   xhr.onload 이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러의 반환문은 get함수의 반화문이 아니다. get함수는 반환문이 생략되었으므로 암묵적으로 undefined를 반환한다.
 * 함수의 반환값은 명식적으로 호출한 다음 캐치할 수 있으므로 onload 이벤트 핸들러를 get 함수가 호출한 수 있다면 이벤트 핸들러의 반환 값을 get함수가 캐치하여 다시 반환할 수도 있겠지만 
 * onload 이벤트 핸들러는 get함수가 호출하지 않기 떄문에 그럴 수도 없다. 따라서 onload 이벤트 핸들러의 반환값을 캐치할 수 없다. 
 */

// 그렇다면 서버의 응답을 상위 스코프의 변수에 할당하면 어떨까?

let todos;
const modifiedGet2 = url => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url)
	xhr.send();
	
	xhr.onload = () =>{
		if(xhr.status === 200){
			//서버의 응답을 콘솔로 출력
			todos = JSON.parse(xhr.response)
		} else {
			console.error(`${xhr.status} ${xhr.statusText}`)
		}
	}
}

// id가 1인 post를 취득
modifiedGet2('https://jsonplaceholder.typicode.com/posts/1')
console.log(todos)//undefined

/**
 *  이 또한 기대대로 동작하지 않는다. xhr.onload 이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러는 언제나 console.log()가 종료한 후 호출된다. 따라서 
 * console.log가 호출 되는 시점에는 아직 전역 변수 todos에 서버의 응답 결과가 할당되기 이전이다. 다시 말해, xhr.onload 이벤트 핸들러에서 서버의 응답을 상위 스코프의 변수에
 * 할당하면 처리 순서가 보장되지 않는다.
 * 
 * 	비동기 함수 get이 호출되면 함수 코드를 평가하는 과정에서 get함수의 실행 컨텍스트가 생성되고 실행 컨텍스트 스택(콜스텍)에 푸시된다. 이후 함수 실행 과정에서 xhr.onload 이벤트 핸들러 프로퍼티에
 * 이벤트 핸들러가 바인딩 된다.
 * 
 * 	get 함수가 종료하면 get 함수의 실행 컨텍스트가 콜 스택에서 팝되고, 곧바로 consol.log가 호출된다. 이떄 console.log의 실행 컨텍스트가 생성되어 실행 컨텍스트 스택에 푸시된다.
 * 만약 console.log가 호출되기 직전에 load이벤트가 발생했더라도 xhr.onlaod이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러는 결코 console.log보다 먼저 실행되지 않는다.
 * 
 * 	서버로부터 응답이 도착하면 xhr 객체에서 load 이벤트가 발생한다. 이떄 xhr.onload 핸들러 프로퍼티에 바인당한 이벤트 핸들러가 즉시 실행되는 것이 아니다. xhr.onload 이벤트가 발생하면
 * 일단 태스크 큐에 저장되어 대기하다가, 콜스택이 비면 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다. 이벤트 핸들러도 함수이므로 이벤트 핸들러의 평가 -> 이벤트 핸들러의 실행 컨텍스트 생성 -> 콜 스택에 푸시 -> 이벤트 핸들러 실행 과정을 거친다.
 * 
 * 
 */