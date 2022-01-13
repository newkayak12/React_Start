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