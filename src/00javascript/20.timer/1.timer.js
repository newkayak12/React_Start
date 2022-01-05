//타이머 
/**
 * 함수를 명시적으로 호출하면 함수가 즉시 실행된다. 만약 함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면 타이머 함수를 사용한다. 
 * 이를 호출 스케쥴링이라고 한다.
 * 
 * >> 호출 스케쥴링
 * 
 * 자바스크립트는 타이머를 생성할 수 있는 타이머 함수 setTimeout, setInterval, 타이머를 제거할 수 있는 타이머 함수 clearTimeout, clearInterval을 제공한다.
 * 타이머 함수는 ECMA 사양에 정의된 빌트인 함수가 아니다. 하지만 브라우저 환경과 Node.js 환경에서 모두 전역 객체의 메소드로서 타이머 함수를 제공한다. 즉, 타이머 함수는 호스트 객체이다. 
 * 
 * 타이머 함수 setTimeout과 setInterval은 모두 일정 시간이 경과된 이후 콜백 함수가 호출되도록 타이머를 생성한다. 다시 말해, 타이머 함수 setTimeout과 setInterval이 생성한 타이머가 만료되면 콜백 함수가 호출된다. 
 * setTimeout 함수가 생성한 타이머는 단 한 번 동작하고, setInterval 함수가 생성한 타이머는 반복 동작한다. 즉, setTimeout 함수의 콜백 함수는 타이머가 만료되면 단 한 번 호출되고, setInterval 함수의 콜백 함수는 타이머가 만료될 때마다 반복 호출된다. 
 * 자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖기 때문에 두 가지 이상의 태스크를 동시에 실행할 수 없다. 즉, 자바스크립트 엔진은 싱글 스레드로 동작한다. 이런 이유로 타이머 함수와 setTimeout과 setInterval은 비동기 처리 방식으로 동작한다.
 * 
 * 
 * >> 타이머 함수
 * //setTimeout/clearTimeout
 * setTimeout 함수는 두 번쨰 인수로 전달받은 시간 ( ms, 1/1000초 )으로 단 한 번 동작하는 타이머를 생성한다. 이후 타이머가 만료되면 첫 번째 인수로 전달 받은 콜백 함수가 호출된다. 즉, setTimeout 함수의 콜백 함수는 두 번쨰 인수로 전달받은 시간 이후 단 한 번 실행되도록 호출 스케줄링 된다. 
 */ 

 	// const timeoutId = setTimeout(func | code[, delay, param1, param2, ...])

/** 
 * 		매개 변수 					설명
 * 		func 			타이머가 만료된 뒤 콜백 함수 : 콜백 함수 대신 코드를 문자열로 전달할 수 있다. 이때 코드 문자열은 타이머가 만료된 뒤 해석되고 실행된다. 이는 흡사 eval 함수와 유사하며 권장하지 않는다. 
 * 
 * 		delay			타이머 만료 시간(밀리초(ms)단위). setTimeout 함수는 delay 시간으로 단 한 번 동작하는 타이머를 생성한다. 인수 전달을 생략한 경우 기본값이 0이 지정된다.
 * 						delay 시간이 설정된 타이머가 만료되면 콜백 함수가 즉시 호출되는 것이 보장되지 않는다. delay 시간은 태스크 큐에 콜백 함수를 등록하는 시간을 지연할 뿐이다. 
 * 						delay가 4ms 이하인 경우 최소 지연 시간 4ms가 지정된다. 
 * 
 * 		param1, 			호출 스케줄링 된 콜백 함수에 전달해야 할 인수가 존재하는 경우 세 번째 이후의 인수로 전달할 수 있다.
 * 
 * 		param2, ... 		IE이하에서는 콜백함수에 인수를 전달할 수 없다. 
 * 
 * 
 */

//1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(()=>console.log('hi!'), 1000)

//1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(name => console.log(`hi ${name}`), 1000, 'lee')

//두 번쨰 인수(delay)를 생략하면 기본 값 0이 지정된다.
setTimeout(()=> console.log("HELLO!"))

/**
 * setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다. setTImeout 함수가 반환한 타이머 id는 브라우저 환경인 경우 숫자이며 Node.js 환경인 경우 객체이다.
 * setTImeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소할 수 있다. 즉, clearTimeout 함수는 호출 스케줄링으 ㄹ취소한다. 
 */

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다. 
// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다. 
const timerId = setTimeout(()=>console.log('hi'), 1000);

//setTImeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소한다. 
// 타이머가 취소되면 setTimeout 함수의 ㅋ놀백 함수가 실행되지 않는다.
clearTimeout(timerId)


/**
 * 
 * >setInterval/ claerInterval
 * setInterval 함수는 두 번째 인수로 받은 시간(ms, 1/1000초)으로 반복 동작하는 타이머를 생성한다.  이후 타이머가 만료될 때마다 첫 번쨰 인수로 전달받은 콜백 함수가 반복 호출된다.
 * 이는 타이머가 취소될 때 까지 계속된다. 즉, setInterval 함수의 콜백함수는 두 번째 인수로 전달 받은 시간이 경과할 떄마다 반복 실행되도록 호출 스케줄링 된다. setInterval 함수에 전달할 인수는 setTimeout 함수와 동일하다.
 */

// const timerId = setInterval(func|code[, delay, param1, param2]);

/**
 * setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다. setInterval 함수가 반환한 타이머 id는 브라우저 환경인 경우 숫자이며 Node.js 환경인 경우 객체이다.
 * setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여 타이머를 취소할 수 있다. 즉, clearInterval 함수는 호출 스케줄링을 취소한다. 
 */

let count = 1;
//1초 (1000ms)후 타이머가 만료될 때마다 콜백 함수가 호출된다.
//setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
const timeoutId = setInterval(()=>{
	console.log(count)

	//count가 5이면 setInterval 함수가 반환한 타이머 id를 clearInterval 함수의 인수로 전달하여 
	//타이머를 취소한다. 타이머가 취소되면 setInterval 함수의 콜백 함수가 실행되지 않는다. 
	if(count++===5)clearInterval(timeoutId)
}, 1000)