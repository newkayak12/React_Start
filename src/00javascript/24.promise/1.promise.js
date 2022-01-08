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
 * 	따라서 xhr.onload 이벤트 핸들러가 실행되는 시점에는 콜 스택이 빈 상태여야 하므로 console.log는 이미 종료된 이후이다. 만약 get 함수 이후에 console.log가 100번 호출된다고 해도 xhr.onload는 모든 console.log가 종료된 이후에 실행된다. 
 * 즉, xhr.onload 이벹느 핸들러에서 상위 스코프 변수에 서버의 응답 결과를 할당하기 이전에 console.log가 먼저 호출되어 undefined가 출력된다. 
 * 	
 * 	이처럼 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수도 없다. 따라서 비동기 함수의 처리 결과(서버의 응답 등)에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다.
 * 이때 비동기 함수의 처리 결과(서버의 응 등)에 대한 후속 처리는 비동기 함수 내뷍서 수행해야 한다. 이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는 것이 일반적이다.
 * 필요에 따라 비동기 처리가 성공하면 호출될 콜백 함수와 비동기 처리가 실패하면 호출될 콜백 함수를 전달할 수 있다. 
 * 
 */

 const modifiedGet3 = (url, successCallback, failureCallback) => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url)
	xhr.send();
	
	xhr.onload = () =>{
		if(xhr.status === 200){
			//서버의 응답을 콘솔로 출력
			successCallback(JSON.parse(xhr.response))
		} else {
			failureCallback(xhr.status)
		}
	}
}

modifiedGet3('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error)

/**
 * 이처럼 콜백 함수를 통 해비동기 처리 결과에 대한 후속 처리를 수행하는 비동기 함수가 
 * 비동기 처리 결과를 가지고 또다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생하는데, 이를 콜백 핼이라고 한다.
 */


// 콜백 헬 예시 
modifiedGet3(`${url}/posts/1`, ({userId})=>{
	console.log(userId)
}, modifiedGet3(`${url}/users/${userInfo}`), userId => {
	console.log(userId)
})
/**
 * 위 예제를 보면 GET 요청을 통해 서버로부터 응답을 취득사고 이 데이터를 사용하여 또다시 GET 요청을 한다. 콜백 헬은 가독성을 나쁘게 하며 실수를 유발하는 ㅜ언인이 된다. 다음은 콜백헬이 발생하는 전형적 사례이다.
 */

const g = modifiedGet3;

g('/step1', a => {
	g(`/step2/${a}`, b => {
		g(`/step3/${b}` c => {
			g(`/step4/${c}`, d => {
				console.log(d)
			})	
		})
	})
})

/**
 * // 에러 처리의 한계 
 * 비동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 심각한 것은 에러 처리가 곤란하다는 것이다.
 */

try{
	setTimeout(()=>{
		throw new Error('error!')
	}, 1000)
} catch(e){
	console.log(e)
	//에러를 캐치하지 못한다. 
}


/**
 * 	try 코드 블록 내에서 호출한 setTimeout 함수는 1초 후에 콜백 함수가 실행되도록 타이머를 설정하고, 이후 콜백함수는 에러를 발생시킨다. 하지만 이 에러는 catch 코드 블록에서 캐치되지 않는다.
 * 
 *	 비동기 함수인 setTimeout이 호출되면 setTImeout 함수의 실행 컨텍스트가 생성되어 콜 스택에 푸시되어 실행된다. setTImeout은 비동기 함수이므로 콜백 함수가 호출되는 것을 기다리지 않고 즉시 종료 되어 콜 스택에서 제거된다.
 *이후 타이머가 만료되면 setTimeout 함수의 콜백 함수는 태스크 큐로 푸시되고 콜 스택이 비어졌을 떄 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다.
 *
 *setTimeout 함수의 콜백 함수가 실행될 때 setTimeout 함수는 이미 콜 스택에서 제거된 상태이다. 이것은 setTimeout 함수의 콜백 함수가 호출한 것이 setTImeout가 아니라는 것을 의미한다.
 * setTimeout 함수의 콜백 함수의 호출자가 setTImeout 함수라면 콜 스택의 현재 실행 중인 실행 컨텍스트가 콜백 함수의 실행 컨텍스트일 때 현재 실행 중인 실행 컨텍스트의 하위 실행 컨텍스트가 setTimeout 함수여야 한다.
 * 
 * 에러는 호출자 방향으로 전파된다. 즉, 콜스택의 아래 방향(실행중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨텍스트 방향)으로 전파된다. 하지만 앞에서 살펴본 바와 같이 setTimeout 함수의 콜백 함수를 호출한 것은 setTimeout 함수가 아니다. 따라서 setTimeout 함수의 콜백 함수가 발생시킨 에러는 catch블록에서 캐치되지 않는다.
 * 
 * 
 * 이를 위해서 ES6에서 프로미스가 도입되었다. 
 */



 // 프로미스의 생성

 /**
  * 
  * Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스(Promise 객체)를 생성한다. ES6에서 도입된 Promise는 호스트 객체가 아닌 ECMAscript 사양의 표준 객체이다.
  * 
  * Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백함수는 resolve와 reject 함수를 인수로 전달 받는다.
  */

 //프로미스 생성
 let promise = new Promise((resolve, reject)=>{
	//  Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
	if(/* 비동기 처리 성공*/ 1===1){
			resolve("result")
	} else {
		/*비동기 처리 실패 */
		 reject('fail')
	}
 })
/**
 * Promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 비동기 처리를 수행한다. 이때 비동기 처리가 성공하면 콜백 함수의 인수로 전달받은 resolve 함수를 호출하고, 비동기 처리가 실패하면 reject 함수를 호출한다.
 */

const promisedGet( url ) => {
	return new Promise((resolve, reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.send()

		xhr.onload = () =>{
			if(xhr.status === 200){
				//성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
				resolve(JSON.parse(xhr.response))
			} else {
				//에러 처리를 위해 reject 함수를 호출한다.
				reject(new Error(xhr.status))
			}
		}
	})
}

//promiseGet 함수는 프로미스를 반환한다.
promisedGet('https://jsonplaceholder.typicode.com/posts/1');

/** 
 * 비동기 함수인 promisedGet은 함수 내부에서 프로미스를 생성하고 반환한다 비동기 처리는 Promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 수행한다. 만약 비동기 처리가 성공하면 비동기 처리 결과를 resolve 함수에 인수로 전달하면서 호출하고, 비동기 처리가 실패하면 에러를 reject 함수에 인수로 전달하면서 호출한다.
 * 
 * --------------------------------------------------------------------------
 * 프로미스 상태 정보 		의미 							상태 변경 조건
 * --------------------------------------------------------------------------
 * pending			비동기 처리가 아직 수행되지 않은 상태	프로미스가 생성된 직후 기본 상태
 * fulfilled 		비동기 처리가 수행된 상태(성공)		   resolve 함수 호출 
 * rejected			비동기 처리가 수행된 상태(실패)			reject 함수 호출 
 * ---------------------------------------------------------------------------
 * 
 * 생성된 직후의 프로미스는 기본적으로 pending 상태이다. 이후 비동기 처리가 수행되면 비동기 처리 결과에 따라 다음과 같이 프로미스의 상태가 변한다.
 * 
 * 	> 비동기 처리 성공 : resolve 함수를 호출해 프로미스를 fulfilled 상태로 변경한다.
 *  > 비동기 처리 실패 : reject 함수를 호출해 프로미스를 rejected 상태로 변경한다.
 * 
 * 이처럼 프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정된다.
 * 
 * 
 * fulfilled 또는 reject 상태를 settled 상태라고 한다. settled 상태는 fulfilled 또는 reject 상태와 상관없이 pending 상태에서 fulfilled 또는 rejected 상태, 즉 settled 상태로 변화할 수 있다. 하지만  settled  상태가 되면 더는 다른 상태로 변화할 수 없다.
 * 
 * 프로미스는 비동기 처리 상태와 더불어 비동기 처리 결과도 상태로 갖는다. 
 * 
 * 
 Promise {<fulfilled>: 1}
	> [[Prototype]]: Promise
	> catch: ƒ catch()
	> constructor: ƒ Promise()
	> finally: ƒ finally()
	> then: ƒ then()
	> Symbol(Symbol.toStringTag): "Promise"
	> [[Prototype]]: Object
	> [[PromiseState]]: "fulfilled"
 *
 * 비동기 처리가 성공하면 프로미스는 pending 상태에서 fulfilled 상태로 변화한다. 그리고 비동기 처리 결과인 1을 값으로 갖는다.
 * 
 * 비동기 처리가 실패하면 프로미스는 pending 상태에서 rejected 상태로 변화한다. 그리고 비동기 처리 결과인  Error 객체를 값으로 갖는다. 즉, 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체이다. 
 * 
 * 
 * // 프로미스의 후속 처리 메소드
 * 프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야한다. 예를 들어, 프로미스가 fulfilled 상태가 되면 프로미스의 처리 결과를 무언가를 해야 하고, 프로미스가 rejected  상태가 되면  프로미스의 처리 결과(에러)를 가지고 에러 처리를 해야한다. 이를 위해 프로미스는 후속 메소드 then, catch, finally를 제공한다.
 * 
 * 프로미스의 비동기 처리 상태가 변화하면 후속 처리 메소드에 인수로 전달한 콜백 함수가 선택적으로 호출된다.
 * 이떄 후속 처리 메소드의 콜백 함수의 프로미스의 처리 결과가 인수로 전달된다.
 * 모든 후속 처리 메소드는 프로미스를 반환하며, 비동기로 동작한다. 프로미스의 후속 처리 메소드는 아래와 같다.
 * 
 */ 



 // Promise.prototype.then
 /* then은 두 개의 콜백 함수를 인수로 전달 받는다. 
 * 	1. 첫 번쨰 콜백 함수는 프로미스가 fulfilled상태(resolve 함수가 호출된 상태)가 되면 호출된다. 이떄 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.
 * 2. 두 번쨰 콜백 함수는 프로미스가 rejected상태 (reject 함수가 호출된 상태)가 되면 호출된다. 이떄 콜백 함수는 프로미스의 에러를 인수로 전달받는다.
 * 
 * 
 * 즉, 첫 번쨰 콜백 함수는 비동기 처리가 성공했을 떄호출되는 성공 처리 콜백함수이며, 두번쨰 콜백함수는 비동기 처리가 실패했을 떄 호출되는 실패 처리 콜백이다.
 */ 

	//fulfilled
	new Promise(resolve => resolve('fulfilled'))
	.then(v=console.log(v), e=>console.error(e));

	//rejected
	new Promise((_, reject) => reject(new Error('rejected')))
	.then( v => console.log(v), e => console.error(e));

	/**
	 * then 메소드는 언제나 프로미스를 반화한다. 만약 then 메소드의 콜백 함수가 프로미스를 반환하면 그 프로미스를 그대로 반환하고, 콜백 함수가 프로미스가 아닌 값을 반환하면 그 값을 암묵적으로 resolve또는 reject하여 프로미스를 생성해 반환한다.
	 */


	//Promise.prototype.catch
	/**
	 * catch 메소드는 한 개의 콜백 함수를 인수로 전달받는다. catch 메소드의 콜백 함수는 프로미스가 rejected 상태인 경우만 호출된다. 
	 */

	//rejected
	new Promise((_, reject) => reject(new Error('rejected')))
	.catch(e => console.log(e));

	//catch 메소드는 then(undefined, onRejected)과 동일하게 동작한다. 따라서 then메소드와 마찬가지로 언제나 프로미스를 반환한다.

	//rejected
	new Promise((_,reject) => reject(new Error('rejected')))
	.then(undefined, e=>console.log(e))


	//Promise.prototype.finally
	/**
	 * finally 메소드는 한 개의 콜백 함수를 인수로 받는다. finally메소드의 콜백 함수는 프로미스의 성공(fulfilled) 또는 실패(rejected)와 상관 없이 무조건 한 번 호출된다. 
	 * finally 메소드는 프로미스의 상태와 상관 없이 공통적으로 수행해야할 처리 내용이 있을 떄 유용하다. finally 메소드도 then/catch 메소드와 마찬가지로 언제나 프로미스를 반환한다.
	 */
	new Promise(()=>{}).finally(()=>console.log('finally'))

	//이를 적용하면 아래와 같다.
	const promisedGet( url ) => {
		return new Promise((resolve, reject)=>{
			const xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.send()
	
			xhr.onload = () =>{
				if(xhr.status === 200){
					//성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
					resolve(JSON.parse(xhr.response))
				} else {
					//에러 처리를 위해 reject 함수를 호출한다.
					reject(new Error(xhr.status))
				}
			}
		})
	}
	
	//promiseGet 함수는 프로미스를 반환한다.
	promisedGet('https://jsonplaceholder.typicode.com/posts/1')
	.then(res=> console.log(res))
	.catch(err=>console.error(err))
	.finally(()=> console.log('bye!'));