

try{
    setTimeout(() => { throw new Error('ERROR!')}, 1000)
} catch (e) {
    //에러를 캐치하지 못한다.
    console.log('캐치한 에러', e)
}
/**
 * try...catch...finally 문은 에러 처리를 구현하는 방법이다. try...catch...finally 문을 실행하면 먼저 try 코드 블록이 실행된다.
 * 이때 try 코드 블록에 포함된 문 중에서 에러가 발생하면 해당 에러는 catch 문의 err 변수에 전달되고 catch 코드 블록이 실행된다.
 * finally 코드 블록은 에러 발생과 상관 없이 반드시 한 번 실행된다. try...catch...finally 문으로 에러를 처리하면 프로그램이 강제 종료되지 않는다.
 */
//
/**
 *   try 블록 내에서 호출한 setTimeout 함수는 1초 후에 콜백 함수가 실행되도록 타이머를 설정하고, 이후 콜백 함수는 에러를 발생시킨다. 하지만 이 에러는
 * catch 코드 블록에서 캐치되지 않는다.
 *
 *   비동기 함수인 setTimeout이 호출되면 setTimeout 함수의 실행 컨텍스트가 생성되어 콜 스택에 푸시되어 실행된다. setTimeout은 비동기 함수이므로 콜백 함수가
 * 호출되는 것을 기다리지 않고 즉시 종료되어 콜스택에서 제거된다. 이후 타이머가 만료되면 setTimeout 함수의 콜백 함수는 태스크 큐로 푸시되고 콜 스택이 비어졌을 때
 * 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다.
 *
 *   setTimeout 함수의 콜백 함수가 실행될 때 setTImeout 함수는 이미 콜 스택에서 제거된 상태이다. 이것은 setTimeout 함수의 콜백 함수를 호출한 것이 setTimeout 함수가
 * 아니라는 것을 의미한다. setTimeout 함수의 콜백 함수의 호출자가 setTimeout 함수라면 콜 스택의 현재 실행 중인 실행 컨텍스트가 콜백 함수의 실행 컨텍스트일 때 현재 실행 중인
 * 실행 컨텍스트의 하위 실행 컨텍스트가 setTimeout 함수여야 한다.
 *
 *   에러는 호출자 방향으로 전파된다. 즉, 콜 스택의 아래 방향(실행 중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨텍스트 방향)으로 전파된다.
 * 하지만 앞에서 살펴본 바와 같이 setTimeout 함수의 콜백 함수를 호출한 것은 setTimeout 함수가 아니다. 따라서 setTimeout 함수의 콜백 함수가 발생시킨 에러는 catch 블록에서
 * 캐치되지 앟는다.
 *
 *   지금까지 살펴본 비동기 처리를 위한 콜백 패턴은 콜백 헬이나 에러 처리가 곤란하다는 문제가 있다. 이를 극복하기 위해서 ES6에서 프로미스가 도입되었다.
 */


//프로미스의 생성
/**
 * Promise 생성자 함수를 new 연산자와 함께 호출하면 프로미스(Promise 객체)를 생성한다. ES6에서 도입된 Promise 호스트 객체가 아닌 ECMAScript 사양에 정의된 표준 빌트인 객체다.
 * Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달받는다.
 */
//프로미스 생성
const promise = new Promise(((resolve, reject) => {
    // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
    if(/* 비동기 처리 성공 */ 1===1){
        resolve('result')
    } else { /* 비동기 처리 실패  */
        reject('failure reaseon')
    }
}))
/**
 * Promise 생서앚 함수가 인수로 전달받은 콜백 함수 내부에서 비동기 처리를 수행한다. 이때 비동기 처리가 성공하면 콜백 함수의 인수로 전달받은 resolve 함수를 호출하고,
 * 비동기 처리가 실패하면 reject 함수를 호출한다.
 */
//get 요청을 위한 비동기 함수
const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr =  new XMLHttpRequest();
        xhr.open("GET", url)
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.response))
            } else {
                reject(new Error(xhr.status))
            }
        }
    })
}
promiseGet('https://jsonplaceholder.typicode.com/posts/1')
/**
 * 비동기 함수인 promiseGet은 함수 내부에서 프로미스를 생성하고 반환한다. 비동기 처리는 promise 생성자 함수가 인수로 전달받은
 * 콜백 함수 내부에서 수행한다. 만약 비동기 처리가 성공하면 비동기 처리 결과를 resolve 함수에 인수로 전달하면서 호출하고, 비동기 처리가 실패하면
 * 에러를 reject 함수에 인수로 전달하면서 호출한다. 프로미스는 아래와 같이 현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태 정보를 갖는다.
 */