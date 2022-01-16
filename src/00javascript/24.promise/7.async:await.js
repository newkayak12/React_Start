//async/await
/**
 *  제너레이터를 사용해서 비동기 처리를 동기 처리처럼 동작하도록 구현했지만 코드가 무척이나 장황해지고 가독성도 떨어진다. ES8에서는 제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 async/await이 도입되었다.
 * async/await는 프로미스를 기반으로 동작한다. async/await를 사용하면 프로미스의 then/catch/finally 후속 처리 메소드에 콜백 함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이 마치 동기 처리처럼 프로미스를 사용할 수 있다.
 * 다시 말해, 프로미스의 후속 처리 메소드 없이 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.
 */
const fetch = require('node-fetch')
async function fetchTodo(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const response = await fetch(url)
    const todo = await response.json()
    console.log(todo)
}
fetchTodo()


//async 함수
/**
 * await 키워드는 반드시 async 함수 내부에서 사용해야 한다.
 * async 함수는 async 키워드를 사용해 정의하며 언제나 프로미스를 반환한다.
 * async 함수가 명시적으로 프로미스를 반환하지 않더라도 async 함수는 암묵적으로 반환값을 resolve 하는 프로미스를 반환한다.
 */

//async 함수 선언문
async function foo(n) { return n; }
foo(1).then( v => console.log(v) );

//async 함수 표현식
const bar = async function (n) { return n; }
bar(2).then(v=>console.log(v))

//async 화살표 함수
const baz = async n => n;
baz(3).then( v => console.log(v) );

const obj = {
//async 메소드
    async foo(n) { return n }
}
obj.foo(4).then( v => console.log(v) );

//async 클래스 메소드
class Myclass {
    async constructor() {}
    async bar(n) { return n; }
}
const myClass = new Myclass();
myClass.bar(5).then( v => console.log(v) )

// 클래스의 constructor 메소드는 async 메소드가 될 수 없다. 클래스의 constructor 메소드는 인스턴스를 반환해야 하지만 async 함수는 언제나 프로미스를 반환해야 한다.


//await 키워드
/**
 * await 키워듣 프로미스가 settled 상태(비동기 처리가 수행된 상태)가 될 때까지 대기하다 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다.
 * await 키워드 반드시 프로미스 앞에서 사용해야 한다.
 */

const fetch = require('node-fetch')
const getGithubUserName = async id => {
    const res = await fetch(`https://api.github.com/users/${id}`) //1
    const { name } = await res.json(); //2
    console.log(name)
}
getGithubUserName('ungmo2')

/**
 *  await 키워드는 프로미스가 settled 상태가 될 때까지 대기한다고 했다. 따라서 (1)의 fetch 함수가 수행한 HTTP 요청에 대한 서버의 응답이 도착해서 fetch 함수가 반환한 프로미스가 settled 상태가 될 때까지
 * (1)은 대기하게 된다. 이후 프로미스가 settled 상태가 되면 프로미스가 resolve한 처리 결과가 res변수에 할당된다. 이처럼 await 키워드는 다음 실행을 일시 중지시켰다가 프로미스가 settled 상태가 되면 다시 재개한다.
 */
async function foo(){
    const a = await new Promise(resolve => setTimeout(()=>resolve(1), 3000))
    const b = await new Promise(resolve => setTimeout(()=>resolve(2), 2000))
    const c = await new Promise(resolve => setTimeout(()=>resolve(3), 1000))
    console.log([a,b,c])
}
foo();
A
/**
 * 모든 프로미스에 await 키워드를 사용하는 것은 주의해야 한다. 위 예제 foo()는 종료될 떄까지 약 6초가 소요된다.
 * 그런데 foo함수가 수행하는 3개의 비동기 처리는 서로 연관이 없이 개별적으로 수행되는 비동기 처리이므로 앞선 비동기 처리가 끝날떄까지 순차적으로 대기할 필요가 없다. 따라서 foo()함수는 아래와 같이 처리하는게 좋다.
 */

async function zoo(){
    const res = await Promise.all([
    await new Promise(resolve => setTimeout(()=>resolve(1), 3000)),
    await new Promise(resolve => setTimeout(()=>resolve(2), 2000)),
    await new Promise(resolve => setTimeout(()=>resolve(3), 1000))
])
    console.log(res)
}
zoo();

// 다음의 zar는 앞선 비동기 처리의 결과를 가지고 다음 비동기 처리를 수행해야한다. 따라서 비동기 처리의 순서가 보장되어야하므로 모든 프로미스에 await을 써서 순차적으로 처리할 수 밖에 없다.
async function zar(n){
    const a = await new Promise(resolve => setTimeout(()=>resolve(n), 3000))
    const b = await new Promise(resolve => setTimeout(()=>resolve(a + 1), 2000))
    const c = await new Promise(resolve => setTimeout(()=>resolve(b + 1), 1000))
    console.log([a,b,c])
}
zar(1);


//에러 처리
/**
 * 비동기 처리를 위한 콜백 패턴의 단점 중 가장 심각한 것은 에러 처리가 곤란하다는 것이다.
 */
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