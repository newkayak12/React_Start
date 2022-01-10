//프로미스 체이닝
/**
 * 콜백 헬에서 살펴 보았듯 비동기 처리를 위한 콜백 패턴은 콜백 헬이 발생하는 문제가 있다. 프로미스는 then, catch, finally 후속 처리를 통해 콜백 헬을 해결한다.
 */
const url = 'https://jsonplaceholder.typicode.com'

const promisedGet=( url ) => {
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


promiseGet(`${url}/posts/1`)
.then(({userId}) => promiseGet((`${url}/users/${userId}`)))
.then(userInfo => console.log(userInfo))
.catch(err => console.error(err));

/**
 * 위 예제에서 then -> then -> catch 순서로 후속 처리 메소드를 호출 했다.
 * then, catch, finally 후속 처리 메소드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다. 이를 프로미스 체이팅이라고 한다.
 *
 * 후속 러리 메소드의 콜백함수는 프로미스의 비동기 처리 상태가 변경되면 선택적으로 호출된다. 위 예제에서 후속 처리 메소드의 콜백함수는 다음과 같이 인수를 전달 받으면서 호출된다.
 *
 *
 * ----------------------------------------------------------------------------
 * 후속처리 메소드              콜백 함수의 인수               후속 처리 메소드의 반환값
 * ----------------------------------------------------------------------------
 * then             promiseGet 함수가 반환한 프로미스가     콜백 함수가 반환한 프로미스
 *                  resolve한 값
 *
 * then             첫 번쨰 then 메소드가 반환한 프로미스가    콜백 함수가 반환한 값을 re
 *                  resolve 한 값                       solve한 프로미스
 *
 * catch            promiseGet 함수 또는 앞선 후속 처리     콜백 함수가 반환한 값을
 *                  메소드가 반환한 프로미스가 reject한 값      resolve한 프로미스
 * ---------------------------------------------------------------------------
 *
 *  이처럼 then, catch, finally 후속 처리 메소드는 콜백함수가 반환한 프로미스를 반환한다.
 * 만약 후속 처리 메소드를 콜백 함수가 프로미스가 아닌 값을 반환하더라도 그 값을 암묵적으로 resolve 또는 reject 하여 프로미스를 생성해 반환한다.
 *
 *  프로미스는 프로미스 체이닝을 통해 비동기 처리를 결과 받아 후속 처리르 하므로 비동기 처리를 위한 콜백 패턴에서 발생하던 콜백 헬이 발생하지 않는다. 다만 프로미스도 콜백 패턴을 사용하므로 콜백 함수를 사용하지 않는 것은 아니다.
 *
 *  콜백 패턴은 가독성이 좋지 않다. 이 문제는 ES8에서 도입된  async/await를 통해 해결할 수 있다. async/await을 사용하면 프로미스의 후속 처리 메소드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.
 */

const urlValue = 'https://jsonplaceholder.typicode.com';

(async () => {
    const {userId} = await promiseGet(`${urlValue}/posts/1`)
    const userInfo = await promisedGet(`${urlValue}/users/${userId}`)
    console.log(userInfo)
})()
//프로미스 정적 메소드
//promise는 주로 생성자 함수로 사용되지만 함수도 객체이므로 메소드를 가질 수 있다.
/**
 * Promise.resolve/ Promise.reject
 * Promise.resolve 와 Promise.reject 메소드는 이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.
 * Promise.resolve 메소드는 인수로 전달받는 값을 resolve하는 프로미스를 생성한다.
 *
 * // 배열을 resolve 하는 프로미스를 생성
 */

const resolvedPromise = Promise.resolve([1,2,3])
resolvedPromise.then(console.log)

const resolvedPromise2 = new Promise(resolve => resolve([1,2,3]));
resolvedPromise2.then(console.log)
/**
 * Promise.reject 메소드는 인수로 전달받은 값을 reject하는 프로미스를 생성한다.
 */
//에러 객체를 reject 하는 프로미스 생성
const rejectedPromise = Promise.reject(new Error('Errror!'))
rejectedPromise.catch(console.log); //Error:Error
//위 예제는 다음 예제와 동일하게 동작한다.
const rejectedPromise = new Promise((_,reject)=>reject(new Error('Error!')));
rejectedPromise.catch(console.log)

// Promise.all
//Promise.all 메소드는 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.
const requestData1 = () => new Promise(resolve => setTimeout(()=>resolve(1), 3000))
const requestData2 = () => new Promise(resolve => setTimeout(()=> resolve(2), 2000))
const requestData3 = () => new Promise(resolve => setTimeout(()=>resolve(3), 1000))

const res = [];
requestData1().then(data => {
    res.push(data);
    return requestData2()
}).then(data=>{
    res.push(data)
    return requestData3()
}).then(data => {
    res.push(data)
    console.log(res)
}).catch(console.error)

/**
 * 위 예제는 세 개의 비동기 처리를 순차적으로 처리한다. 즉, 앞선 비동기 처리가 완료하면 다음 비동기 처리를 수행한다. 따라서 첫 번째 비동기 처리에 3초, 두 번쨰 비동기 처리에 2초, 세 번쨰 비동기 처리에 1초가 소요되어 6초 이상이 소요된다.
 * 위 예제의 경우 세 개의 비동기 처리는 서로 의존하지 않고 개별적으로 수행된다. 즉, 앞선 비동기 처리 결과를 다음 비동기 처리가 사용하지 않는다. 따라서 위 예제의 경우 세 개의 비동기 처리를 순차적으로 처리할 필요가 없다.
 * Promise.all 메소드는 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다고 했다. Promise.all 메소드를 사용해서 세 개의 비동기 처리를 병렬로 처리할 수 있다.
 */

Promise.all([requestData1(), requestData2(), requestData3()])
/**
 * promise.all 메소드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 그리고 전달받은 모든 프로미스가 모두 fulfilled 상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
 * 위 예제의 경우 Promise.all 메소드는 3개의 프로미스를 요소로 갖는 배열을 전달받았다. 각 프로미스는 다음과 같이 동작한다.
 *
 *  1. 첫 번쨰 프로미스는 3초 후에 1을 resolve
 *  2. 두 번쨰 프로미스는 2초 후에 2를 resolve
 *  3. 세 번쨰 프로미스는 1초 후에 3을 resolve
 *
 *  Promise.all 메소드는 인수로 전달받은 배열의 모든 프로미스가 모두 fulfilled 상태가 되면 종료한다. 따라서 Promise.all 메소드가 종료하는데 걸리는 시간은 가장 늦게 fulfilled 상태가 되는 프로미스의 처리 시간보다 조금 더 길다.
 *  위 예제의 경우 첫 번쨰 프로미스의 처리 시간인 3초보다 조금 더 소요된다.
 *
 *  모든 프로미스가 fufilled 상태가 되면 resolve된 처리 결과를 모두 배열에 저장해 새로운 프로미스를 반환한다. 이 떄 첫 번쨰 프로미스가 가장 나중에 fulfilled 상태가 되어도 Promise.all 메소드는 첫 번째 프로미스가 resolve한 처리 결과부터 차례대로 배열에 저장해
 *  그 배열을 resolve 하는 새로운 프로미스를 반환한다. 즉, 처리 순서가 보장된다
 *
 *  Promise.all 메소드는 인수로 전달받은 배열의 프로미스가 하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다.
 */

Promise.all([
    new Promise((_,reject) => setTimeout(()=>reject(new Error('Error1')), 3000)),
    new Promise((_,reject) => setTimeout(()=>reject(new Error('Error2')), 2000)),
    new Promise((_,reject) => setTimeout(()=>reject(new Error('Error3')), 1000))
])
    .then(console.log)
    .catch(console.error)

/**
 * 위 예제의 경우 세 번쨰 프로미스가 가장 먼저 rejected 상태가 되므로 세 번쨰 프로미스가 reject 한 에러가 catch 메소드로 전달된다.
 * Promise.all 메소드는 인수로 전달받은 이터러블의 요소가 프로미스가 아닌 경우 Promise.resolve 메소드를 통해 프로미스로 래핑한다.
 */

Promise.all([
    1, // Promise.resolve(1)
    2, // Promise.resolve(2)
    3  // Promise.resolve(3)
])
.then(console.log)
.catch(console.log)

/**
 * 아래는 깃허브 아이디로 깃허브 사용자 이름을 취득하는 3개의 비동기 처리를 모두 병렬로 처리하는 예제이다.
 */
const promiseGet = url =>{
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send()
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.response))
            } else {
                reject(new Error(xhr.status))
            }
        }
    })
}

const githubIds = ['newkayak12', 'lzyjin', 'Wooooo0o']
Promise.all(githubIds.map(id=>promiseGet(`https://api.github.com/users/${id}`)))
.then(users => users.map(user=>user.name))
.then(console.log)
.catch(console.error)

/**
 *
 * 위 예제의 Promise.all 메소드는 promiseGet 함수가 반환한 3개의 프로미스로 이루어진 배열을 인수로 전달받고 이 프로미스들이 모두 fulfilled 상태가 되면 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
 * 이때 Promise.all 메소드가 반환한 프로미스는 세 개의 사용자 객체로 이루어진 배열을 담고 있다. 이 배열은 첫 번쨰 then 메소드에 인수로 전달된다.
 */

//Promise.race
/**
 * Promise.race 메소드는 Promise.all 메소드와 동일하게 프로미스를 요소로 갖는 배열 드으이 이터러블을 인수로 받는다. Promise.race 메소드는 Promise.all 메소드처럼 모든 프로미스가 fulfilled 상태가 되는 것을 기다리는 것이 아니라 가장 먼저 fulfilled 상태가 된 프로미스의 처리
 * 결과를 resolve 하는 새로운 프로미스를 반환한다.
 *
 */

Promise.race([
    new Promise(resolve => setTimeout(()=>resolve(1), 3000)),
    new Promise(resolve => setTimeout(()=>resolve(2), 2000)),
    new Promise(resolve => setTimeout(()=>resolve(3), 1000)),
])
.then(console.log) //3
.catch(console.log)

/**
 * 프로미스가 rejected 상태가 되면 Promise.all 메소드와 동일하게 처리된다. 즉, Promise.race 메소드에 전달된 프로미스가 하나라도 rejected 상태가 되면 에러를 reject 하는 새로운 프로미스를 즉시 반환한다.
 */
Promise.race([
    new Promise((_,reject)=>setTimeout(()=>reject(new Error('Error 1')), 3000)),
    new Promise((_,reject)=>setTimeout(()=>reject(new Error('Error 2')), 2000)),
    new Promise((_,reject)=>setTimeout(()=>reject(new Error('Error 3')), 1000)),
])
    .then(console.log)
    .catch(console.log) //Error 3

//Promise.allSettled
/**
 * Promise.allSetteld 메소드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 그리고 전달받은 프로미스가 모드 settled 상태(비동기 처리가 수행된 상태, 즉 fulfilled 또는 rejected 상태)가 되면
 * 처리 결과를 배열로 반환한다. ES11에 도입된 Promise.allSetted 메소드는 IE를 제외한 대부분의 모던 브라우저에서 지원한다.
 */
Promise.allSettled([
    new Promise(resolve => setTimeout(()=>resolve(1), 2000)),
    new Promise((_,reject) => setTimeout(()=>reject(new Error('Error!')), 1000)),
])
.then(console.log)
/**
 * Promise.allSettled메소드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상관없이 Promise.allSettled 메소드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다. 프로미스의 처리 결과를 나타내는 객체는 아래와 같다.
 *
 *  1. 프로미스가 fulfilled 상태인 경우 비동기 처리 상태를 나타내는 status 프로퍼티와 처리 결과를 나타내는 value 프로퍼티를 갖는다.
 *  2. 프로미스가 rejected 상태인 경우 비동기 처리 상태를 나타내는 status 프로퍼티와 에러를 나타내는 reason 프로퍼티를 갖는다.
 *
 *  [
 *      //프로미스가 fulfilled 상태인 경우
 *      {status : "fulfilled", value :1},
 *      //프로미스가 rejected 상태인 경우
 *      {status : "rejected", reason : Error : Error! at <anonymous>:3:60}
 *  ]
 */