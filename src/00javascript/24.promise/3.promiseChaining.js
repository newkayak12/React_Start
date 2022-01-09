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